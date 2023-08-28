#!/bin/bash

trap "echo; exit" INT
trap "echo; exit" HUP

auth() {
  printf "\n*** $1 detected."
  printf "\n*** Installation of missing binaries."
  printf "\n*** Press the SPACE key to continue the installation or Ctrl+C to exit..."
  while true; do
    read -n1 -r
    [[ $REPLY == ' ' ]] && break
  done
  printf "\n*** Continuing..."
}

unknown_dist () {
  printf "\n*** This OS is not supported with this script at present."
  printf "\n*** Please try to manually install the 'realpath' binary and run the script again."

  exit 1;
}

if ! which realpath >/dev/null 2>&1 ||
  ! which wget >/dev/null 2>&1 ||
  ! which jq >/dev/null 2>&1; then
  printf "\n*** Detected that binaries required by this script are not available"
  # install `realpath` on macOS from Homebrew `coreutils`
  # reference: https://unix.stackexchange.com/a/336138/269147
  if [[ "$OSTYPE" == "darwin"* ]]; then
    set -e
    auth "macOS"

    if ! which brew >/dev/null 2>&1; then
      printf "\n*** Installing Homebrew..."
      /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"
    fi

    printf "\n*** Updating Homebrew..."
    # cannot run this as sudo user
    brew update
    printf "\n*** Installing coreutils, wget, and jq..."
    brew install coreutils wget jq
  # credits: https://getsubstrate.io/
  elif [[ "$OSTYPE" == "linux-gnu" ]]; then
    set -e
    auth "Linux"

    if [[ $(whoami) == "root" ]]; then
      MAKE_ME_ROOT=
    else
      MAKE_ME_ROOT=sudo
    fi

    if [ -f /etc/debian_version ]; then
      echo "Ubuntu/Debian Linux detected."
      $MAKE_ME_ROOT apt update
      printf "\n*** Installing wget, and jq..."
      $MAKE_ME_ROOT apt install -y realpath wget jq
    else
      printf "\n*** Unknown Linux distribution."
      unknown_dist
    fi
  else
    printf "\n*** Unknown distribution."
    unknown_dist
  fi
fi

PARENT_DIR=$( echo $(dirname "$(dirname "$(realpath "${BASH_SOURCE[0]}")")") )

setup_env () {
  # generate .env file from .env.example if it does not exist
  # https://stackoverflow.com/a/47677632/3208553
  if [ -e "$1".env ]
  then
    echo ".env file exists"
  else
    echo "generating .env file from .env.example since it does not exist";
    touch "$1".env && cp "$1".env.example "$1".env;
  fi

  # assign fallback values for environment variables from .env.example incase
  # not declared in .env file. alternative approach is `echo ${X:=$X_FALLBACK}`
  source "$1".env.example
  source "$1".env
}

PATH_UI=$PARENT_DIR/packages/ui/
PATH_SQUID=$PARENT_DIR/squid/
setup_env $PATH_UI
setup_env $PATH_SQUID

# try to fetch public IP address if value not set in .env
PUBLIC_IP_ADDRESS_FALLBACK=$(wget http://ipecho.net/plain -O - -q ; echo)
echo ${PUBLIC_IP_ADDRESS:=$PUBLIC_IP_ADDRESS_FALLBACK}
if [ "$NODE_ENV" != "development" ]; then
    printf "\nError: NODE_ENV should be set to development in .env\n";
    kill "$PPID"; exit 1;
fi
export PUBLIC_IP_ADDRESS NODE_ENV
NAME_UI_FALLBACK=multix-ui
NAME_SQUID_FALLBACK=multix-squid

export NAME_UI=$(jq '.name' $PWD/packages/ui/package.json | sed 's/\"//g')
export NAME_SQUID=$(jq '.name' $PWD/squid/package.json | sed 's/\"//g' | sed 's/.*\///g')

# package ui environment variables
export DB_HOST VITE_NETWORK_NAME VITE_WS_PROVIDER VITE_GRAPHQL_WS_PROVIDER \
  VITE_GRAPHQL_HTTP_PROVIDER GQL_PORT VITE_PORT GRAPHQL_ARCHIVE_PORT PROCESSOR_PROMETHEUS_PORT

# squid environment variables
export DB_HOST DB_PORT BLOCK_START PREFIX RPC_WS ARCHIVE_NAME ARCHIVE_URL CHAIN_ID GENESIS

echo ${NAME_UI:=$NAME_UI_FALLBACK}
echo ${NAME_SQUID:=$NAME_SQUID_FALLBACK}
printf "\n*** Started building Docker container."
printf "\n*** Please wait... \n***"
DOCKER_BUILDKIT=0 docker compose -f docker-compose-dev.yml up --build -d
if [ $? -ne 0 ]; then
    kill "$PPID"; exit 1;
fi
printf "\n*** Finished building Docker container.\n"
if [ "$PUBLIC_IP_ADDRESS" != "" ]; then
    printf "\n*** Public IP address: ${PUBLIC_IP_ADDRESS}\n***\n";
fi
