import { Box, InputAdornment, TextField } from "@mui/material";
import styled from "styled-components";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import GenericAccountSelection, { AccountBaseInfo } from "../GenericAccountSelection";
import { useCallback, useEffect, useMemo, useState } from "react";
import { useAccountBaseFromAccountList } from "../../hooks/useAccountBaseFromAccountList";
import { useApi } from "../../contexts/ApiContext";
import { useCheckBalance } from "../../hooks/useCheckBalance";
import BN from "bn.js"
import { getGlobalMaxValue, inputToBn } from "../../utils";

interface Props {
    className?: string
    from: string
    onSetExtrinsic: (ext: SubmittableExtrinsic<"promise", ISubmittableResult>) => void
    onSetErrorMessage: React.Dispatch<React.SetStateAction<string>>
}

const BalancesTransfer = ({ className, onSetExtrinsic, onSetErrorMessage, from }: Props) => {
    const acountBase = useAccountBaseFromAccountList()
    const [selected, setSelected] = useState<AccountBaseInfo | undefined>(acountBase[0])
    const [toAddress, setToAddress] = useState(acountBase[0].address)
    const { api, isApiReady, chainInfo } = useApi()
    const [amountString, setAmountString] = useState("")
    const [amount, setAmount] = useState(new BN(0))
    const [amountError, setAmountError] = useState("")
    const { hasEnoughFreeBalance } = useCheckBalance({ min: amount, address: from })
    const maxValue = useMemo(() => getGlobalMaxValue(128), [])

    useEffect(() => {

        onSetErrorMessage("")

        if (!hasEnoughFreeBalance) {
            onSetErrorMessage('"From" address balance too low')
        }
    }, [hasEnoughFreeBalance, onSetErrorMessage])

    useEffect(() => {
        if (!isApiReady) {
            return
        }

        if (!toAddress) {
            return
        }

        if (!amount) {
            return
        }

        onSetExtrinsic(api.tx.balances.transfer(toAddress, amount.toString()))
    }, [amount, api, chainInfo, isApiReady, onSetExtrinsic, toAddress])

    const onAddressDestChange = useCallback((account?: AccountBaseInfo | string) => {
        if (!account) {
            return
        }

        if (typeof account === "string") {
            setToAddress(account)
            setSelected({
                address: account
            })
        } else {
            setToAddress(account.address)
            setSelected(account)
        }

    }, [])

    const onAmountChange = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
        const decimals = chainInfo?.tokenDecimals

        if (!decimals) {
            onSetErrorMessage("Invalid network decimals")
            setAmount(new BN(0))
            return
        }


        setAmountError("")

        const stringInput = event.target.value
        setAmountString(stringInput)

        if (stringInput.includes(",")) {
            setAmountError("Commas detected, use a point as decimal separator")
            onSetErrorMessage("Invalid amount")
            setAmount(new BN(0))
            return
        }

        const bnResult = inputToBn(decimals, stringInput)

        if (bnResult.gte(maxValue)) {
            setAmountError("Amount too large")
            onSetErrorMessage("Amount too large")
            return
        }

        setAmount(bnResult)
    }, [chainInfo, maxValue, onSetErrorMessage])

    if (!selected) return null

    return (
        <Box className={className}>
            <GenericAccountSelection
                className="to"
                accountList={acountBase}
                onChange={onAddressDestChange}
                value={selected}
                label="to"
                allowAnyAddressInput={true}
            />
            <TextField
                className="amount"
                label={`Amount`}
                onChange={onAmountChange}
                value={amountString}
                helperText={amountError}
                error={!!amountError}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">{chainInfo?.tokenSymbol || ""}</InputAdornment>
                    ),
                }}
            />
        </Box>
    )
}


export default styled(BalancesTransfer)(({ theme }) => `
  .to {
    margin-bottom: 1rem;
  }
`)