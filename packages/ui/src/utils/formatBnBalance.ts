import BN from 'bn.js';

interface Options {
  numberAfterComma?: number;
  withThousandDelimitor?: boolean;
  tokenSymbol?: string;
}

function removeTrailingZeros(value: string) {
  return value.replace(/0+$/, '');
}

export const formatBnBalance = (
  value: BN | string,
  tokenDecimals = 0,
  { numberAfterComma, withThousandDelimitor = true, tokenSymbol }: Options
): string => {
  const valueString = value.toString();

  let suffix = '';
  let prefix = '';

  if (valueString.length > tokenDecimals) {
    suffix = valueString.slice(-tokenDecimals);
    prefix = valueString.slice(0, valueString.length - tokenDecimals);
  } else {
    prefix = '0';
    suffix = valueString.padStart(tokenDecimals, '0');
  }

  suffix = removeTrailingZeros(suffix);
  let comma = '.';
  const numberAfterCommaLtZero = numberAfterComma && numberAfterComma < 0;

  if (numberAfterCommaLtZero || numberAfterComma === 0 || suffix === '') {
    comma = '';
    suffix = '';
  } else if (numberAfterComma && numberAfterComma > 0) {
    suffix = suffix.slice(0, numberAfterComma);
  }

  if (withThousandDelimitor) {
    prefix = prefix.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
  }

  const unit = tokenSymbol ? ` ${tokenSymbol}` : '';

  return `${prefix}${comma}${suffix}${unit}`;
};
