export const wikiLinkReservedFunds =
  'https://github.com/ChainSafe/Multix/wiki/Why-are-funds-reserved%3F'

export const getErrorMessageReservedFunds = (
  identifier: string,
  requiredBalanceString?: string,
  reservedString?: string
) => {
  if (!requiredBalanceString) return ''

  return (
    <span>
      The {identifier} doesn&apos;t have the required {requiredBalanceString} to submit this
      transaction. <ReservedMessage reservedAmount={reservedString} />
    </span>
  )
}

const ReservedMessage = ({ reservedAmount }: { reservedAmount?: string }) => {
  if (!reservedAmount) return null

  return (
    <span>
      Note that it includes {reservedAmount} that will be reserved.{' '}
      <a
        href={wikiLinkReservedFunds}
        target="_blank"
        rel="noreferrer"
      >
        More info.
      </a>
    </span>
  )
}
