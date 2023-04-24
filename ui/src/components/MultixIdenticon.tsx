import React from "react"
import Tooltip from "@material-ui/core/Tooltip";
import Identicon from "@polkadot/react-identicon";

interface Props {
  value?: string,
  theme?: any,
  size: number,
  className?: string;
}
const MultixIdenticon = ({value,theme,size,className} : Props) => {
  
  return (
    <div>
      <Tooltip
        title="Copied"
        placement="top"
        arrow
      >
      <Identicon
               value={value}
               theme={theme}
               size={size}
               className={className}
            ></Identicon>
      </Tooltip>
    </div>
  );
}

export default MultixIdenticon