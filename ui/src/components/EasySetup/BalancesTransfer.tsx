import { Box, InputAdornment, TextField } from "@mui/material";
import styled from "styled-components";
import { SubmittableExtrinsic } from "@polkadot/api/types";
import { ISubmittableResult } from "@polkadot/types/types";
import GenericAccountSelection, { AccountBaseInfo } from "../GenericAccountSelection";
import { useCallback, useEffect, useState } from "react";
import { useAccountBaseFromAccountList } from "../../hooks/useAccountBaseFromAccountList";
import { useApi } from "../../contexts/ApiContext";

interface Props {
    className?: string
    onSetExtrinsic: (ext: SubmittableExtrinsic<"promise", ISubmittableResult>) => void
}

const BalancesTransfer = ({ className, onSetExtrinsic }: Props) => {
    const acountBase = useAccountBaseFromAccountList()
    const [selected, setSelected] = useState<AccountBaseInfo | undefined>(acountBase[0])
    const [toAddress, setToAddress] = useState(acountBase[0].address)
    const { api, isApiReady, chainInfo } = useApi()
    const [amount, setAmount] = useState("")
    const [amountError, setAmountError] = useState("")

    useEffect(() => {
        if (!isApiReady) {
            return
        }

        if (!toAddress) {
            return
        }

        if (!amount || !Number(amount) || Number.isNaN(Number(amount))) {
            return
        }

        const decimals = chainInfo?.tokenDecimals || 0

        if (!decimals) {
            setAmountError("Invalid network decimals")
        }

        const value = Number(amount) * Math.pow(10, decimals)

        onSetExtrinsic(api.tx.balances.transfer(toAddress, value))
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
        setAmount(event.target.value)
    }, [])

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
                value={amount.toString()}
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