import { Autocomplete, Box, Button, Modal, TextField, Typography } from "@mui/material";
import { useCallback, useState } from "react";
import styled from "styled-components";
import { useAccountList } from "../../contexts/AccountsContext";
import { useApi } from "../../contexts/ApiContext";

interface Props {
    onClose: () => void
    className?: string
}

const NewTx = ({ onClose, className }: Props) => {
    const [token0, setToken0] = useState<string | undefined>()
    const [token1, setToken1] = useState<string | undefined>()
    const { api } = useApi()
    const { selectedSigner, selectedAddress } = useAccountList()
    const [isSubmitting, setIsSubmitting] = useState(false)


    const onChangeToken0 = useCallback((_: any, v: string | null) => {
        v && setToken0(v)
    }, [])

    const onChangeToken1 = useCallback((_: any, v: string | null) => {
        v && setToken1(v)
    }, [])

    const onCreateTx = useCallback(() => {

        // if (!token0 || token0.id < 0 || !token1 || token1.id < 0 || !selectedAddress || !selectedSigner) return

        setIsSubmitting(true)
    }, [])

    return <Modal
        open={true}
        onClose={onClose}
        aria-labelledby="modal-modal-title"
    >
        <Box className={className}>
            <Typography id="modal-modal-title" variant="h6" component="h2">
                New Tx
            </Typography>
            <Autocomplete
                disablePortal
                options={[]}
                className="combobox"
                renderInput={(params) => <TextField {...params} label="Some" />}
                onChange={onChangeToken0}
            />
            <Autocomplete
                disablePortal
                options={[]}
                className="combobox"
                renderInput={(params) => <TextField {...params} label="Other" />}
                onChange={onChangeToken1}
            />
            <Button
                className="createButton"
                onClick={onCreateTx}
                disabled={isSubmitting}
            >
                {
                    isSubmitting
                        ? "Creating..."
                        : "Create"
                }
            </Button>
        </Box>
    </Modal>
}

export default styled(NewTx)(({ theme }) => `
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 400;
    background-color: white;
    border: 2px solid #000;
    box-shadow: 24;
    padding: 4rem;

    .combobox {
        width: 300px;
        margin-top: 1rem;
    }

    .createButton {
        margin-top: 1rem;
    }
`)