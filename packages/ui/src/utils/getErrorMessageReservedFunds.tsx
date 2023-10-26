export const wikiLinkReservedFunds =
  'https://github.com/ChainSafe/Multix/wiki/Why-are-funds-reserved%3F'

export const getErrorMessageReservedFunds = (
  identifier: string,
  requiredBalanceString?: string,
  reservedString?: string
) => {
  if (!requiredBalanceString) return ''

  const reservedMessage = reservedString ? (
    <span>
      Note that it includes ${reservedString} that will be reserved.{' '}
      <a
        href={wikiLinkReservedFunds}
        about="_blank"
      >
        More info.
      </a>
    </span>
  ) : (
    ''
  )
  return (
    <span>
      The {identifier} doesn't have the required {requiredBalanceString} to submit this transaction.{' '}
      {reservedMessage}
    </span>
  )
}
