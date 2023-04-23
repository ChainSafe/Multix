import React from "react"
import Tooltip from "@material-ui/core/Tooltip";
import Identicon from "@polkadot/react-identicon";
import { AccountSelect } from "./AccountSelect";


export default function MultixIdenticon({value,theme,size,className}) {
  return (
    <>
      <Tooltip
        title="dsfjepopoweg oeghpweghw seogjeopghew"
        placement="bottom-end"
        arrow
      >
      <Identicon
               value={value}
               theme={theme}
               size={size}
               className={className}
            ></Identicon>
      </Tooltip>
    </>
  );
}