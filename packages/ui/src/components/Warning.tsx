import { Alert } from "@mui/material";
import styled from "styled-components";

interface Props {
    className?: string
    text: string
}

const Warning = ({ className, text }: Props) => {

  return <Alert className={className} severity="warning">
    {text}
  </Alert>
}


export default styled(Warning)(({ theme }) => `

  `)