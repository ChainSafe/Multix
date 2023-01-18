import { Box, Collapse } from "@mui/material";
import { ReactNode, useState } from "react";
import styled from "styled-components";
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';

interface Props {
  className?: string;
  title: string
  content: ReactNode
}

const Expander = ({ className = '', title, content }: Props) => {
  const [open, setOpen] = useState(false);

  return (
    <Box
      className={className}
      onClick={() => setOpen(!open)}
    >
      <div className="titleWrapper">
        <KeyboardArrowRightIcon className={`${open ? "rotated" : ""} icon`} />
        {title}
      </div>
      <Collapse in={open}>
        {content}
      </Collapse>
    </Box >
  );
}

export default styled(Expander)(({ theme }) => `
cursor: pointer;
display: flex;
flex-direction: column;

.titleWrapper {
  display: flex;
}

.icon {
  transition: transform 0.2s ease-in-out;
    &.rotated {
      transform: rotate(90deg)
    }
  }
`)