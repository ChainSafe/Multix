import React from "react"
import Tooltip from "@mui/material/Tooltip";
import Identicon from "@polkadot/react-identicon";
import { IconButton } from "@mui/material";


interface Props {
  value?: string,
  theme?: any,
  size: number,
  className?: string,
}
const MultixIdenticon = ({value,theme,size,className} : Props) => {
  const [open, setOpen] = React.useState(false);
  
  const handleTooltipClose = () => {
    setOpen(false);
  };

  const handleTooltipOpen = () => {
    setOpen(true);
  };
  return (
    <Tooltip 
      PopperProps={{
        disablePortal: true,
      }}
      onClose={handleTooltipClose}
      open={open}
      title="Copied"
      placement="top"
      arrow
    >
      <IconButton sx={{ p: 0 }} onClick={handleTooltipOpen} >
           
        <Identicon
          value={value}
          theme={theme}
          size={size}
          className={className}
        ></Identicon>
      </IconButton>
    </Tooltip>
  );
}

export default MultixIdenticon