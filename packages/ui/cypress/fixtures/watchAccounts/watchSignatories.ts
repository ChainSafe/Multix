export const watchSignatories = [
  // signatories of multisig-with-pure
  {
    address: '5GGjPYsz8B8mxAzNScFNDPkZ1g97VWFCPCMexPSkPnibPBez',
    name: 'Pure Signatory 1',
    type: 'sr25519',
    mnemonic: 'citizen heavy warrior cattle enter chef label split differ seek turtle gorilla',
    publickey: '0xba1d098e50bdca49f03b9f0c702a65762a04dfc5868ae1c3788a2bc1939dbf4b'
  },
  {
    address: '5E9XHcUfeDCL2HEvH8c8rcfroNDSzbLwhV5A1fq7J7RUwAkd',
    name: 'Pure Signatory 2',
    type: 'sr25519',
    mnemonic: 'script spoon elder spawn kite burst theme property hip fatal flight amount'
  },

  // signatories of multisig-without-pure
  {
    address: '5HfzjVSWj6mxBnqgJhPfUTpkAJKro9BKToxXB3nozbu2MTpV',
    name: 'No Pure Signatory 1',
    type: 'sr25519',
    mnemonic: 'spring banana desert horse ecology resist tag matrix burden heart stereo fix'
  },
  {
    address: '5Df1JyC6KSbjSp3pQEn85PCnvTtknGiN7JyE7bSZ9zqNL76E',
    name: 'No Pure Signatory 2',
    type: 'sr25519',
    mnemonic: 'mutual pluck punch boy gym key brush dune master aunt track dynamic'
  }
]

// signatory that is a member of 3 multisigs. 2 multisig with a pure, 1 multisig without a pure
export const signatoryOfMultipleMultisigs = {
  address: '5CUZNrH9eMCvyz3wL5n8V9oJuaaNPKWCGCZZj7UfUV4otHMN',
  name: 'Signatory of Multiple Multisigs',
  type: 'sr25519',
  mnemonic: 'cement risk mutual large fluid run witness vintage civil pipe cost weasel',
  multisigWithPure1: {
    address: '5EKfTP24LJvTDLf3GP3vvJASv1jXmcZumFWGcSzVQ66epXZe'
  },
  multisigWithPure2: {
    address: '5ENJzVn5CcVrzSi9dfmysrFWQ6Ce5iX3L22sa1bnZN8KvGBT'
  },
  multisigWithoutPure: {
    address: '5HoPXnwfDpqhgNYGMSZTzhdvc3TDSvd41XDaVMg7yUo8W5un'
  }
}
