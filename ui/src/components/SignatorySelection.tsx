import styled from "styled-components";
import { useAccountList } from "../contexts/AccountsContext";
import AccountSelection from "./AccountSelection";

interface Props {
    className?: string;
    signatories: string[]
    setSignatories: React.Dispatch<React.SetStateAction<string[]>>
}

const SignatorySelection = ({ className, signatories, setSignatories }: Props) => {

    return (
        <div className={className}>
            <>
                {
                    signatories.map((address) => (
                        <div key={address}>
                            <AccountSelection />
                        </div>
                    ))
                }
                <AccountSelection />
            </>

        </div>
    )
}

export default styled(SignatorySelection)(({ theme }) => `
//
`)