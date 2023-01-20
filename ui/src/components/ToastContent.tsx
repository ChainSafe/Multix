import { Box, CircularProgress } from "@mui/material"
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import styled from "styled-components";

export type ToastType = "success" | "error" | "loading"

export interface Toast {
    id: number
    type: ToastType
    title: string
    testId?: string
}

export interface ToastContentProps {
    className?: string
    toast: Toast
}

const ToastContent = ({ toast, className }: ToastContentProps) => {
    const { type, title } = toast
    return (
        <div
            className={className}
            data-testid={`toast-${toast.testId}`}
        >

            <div className='iconContainer'>
                {type === "success"
                    ? <CheckCircleOutlineIcon className="toastIcon" />
                    : type === "loading"
                        ? <CircularProgress className="toastIcon" />
                        : <ErrorOutlineIcon className="toastIcon" />
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

`)