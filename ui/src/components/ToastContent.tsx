import { Box, CircularProgress } from "@mui/material"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from "styled-components";

export type ToastType = "success" | "error" | "loading"

export interface Toast {
    id: number
    type: ToastType
    title: string
}

export interface ToastContentProps {
    className?: string
    type: ToastType
    title: string
}

const ToastContent = ({ type, title, className }: ToastContentProps) => {
    return (
        <div
            className={className}
        >

            <div className='iconContainer'>
                {type === "success"
                    ? <CheckCircleOutlineIcon className="toastIcon" />
                    : type === "loading"
                        ? <CircularProgress className="toastIcon" />
                        : <ErrorOutlineIcon className="toastIcon errorIcon" />
                }
            </div>
            <Box
                component="p"
                className="titleContainer"
            >
                {title}
            </Box>
        </div >
    )
}

export default styled(ToastContent)(({ theme }) => `
    display: flex;
    flex-direction: row;
    align-items: center;

    .iconContainer {
        margin-right: 1rem;
    }

    .toastIcon {
        font-size: 2.5rem;
    }

    .errorIcon {
        color: ${theme.custom.text.errorColor}
    }

`)