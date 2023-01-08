import { Autocomplete, Box, InputAdornment, TextField } from "@mui/material";
import Identicon from "@polkadot/react-identicon";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { useAccountList } from "../contexts/AccountsContext";
import { InjectedAccountWithMeta } from "@polkadot/extension-inject/types"
import { createFilterOptions } from '@mui/material/Autocomplete';

interface Props {
    className?: string;
}

const filterOptions = createFilterOptions({
    ignoreCase: true,
    stringify: (option: InjectedAccountWithMeta) => option.address + option.meta.name,
});

const getOptionLabel = (option: string | InjectedAccountWithMeta | null) => {
    if (!option) return ""

    return typeof option === "string"
        ? option
        : option.address
}
const SignatorySelection = ({ className }: Props) => {
    const { accountList = [] } = useAccountList()
    const [selected, setSelected] = useState("")

    const onChangeAutocomplete = useCallback((_: React.SyntheticEvent<Element, Event>, val: string | InjectedAccountWithMeta | null) => {
        const value = getOptionLabel(val)
        setSelected(value)
    }, [])

    return (
        <div className={className}>
            <Autocomplete
                freeSolo
                id="free-solo-2-demo"
                // selectOnFocus
                // clearOnBlur
                // handleHomeEndKeys
                filterOptions={filterOptions}
                options={accountList}
                renderOption={(props, option) => (
                    <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
                        <Identicon
                            className="renderOptionIdenticon"
                            value={option.address}
                            theme="polkadot"
                            size={30}
                        />
                        {option.address} - {option.meta.name}
                    </Box>
                )}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Account"
                        InputProps={{
                            ...params.InputProps,
                            type: 'search',
                            startAdornment: (
                                <InputAdornment position="start">
                                    <Identicon
                                        value={selected}
                                        theme="polkadot"
                                        size={30}
                                    />
                                </InputAdornment>
                            ),
                        }}
                    />
                )}
                getOptionLabel={getOptionLabel}
                onInputChange={onChangeAutocomplete}
                value={selected}
            />
        </div>
    )
}

export default styled(SignatorySelection)(({ theme }) => `
.renderOptionIdenticon {
    margin-right: .5rem;
}
`)