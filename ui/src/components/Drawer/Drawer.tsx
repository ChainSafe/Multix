import * as React from 'react';
import Drawer, {DrawerProps} from '@mui/material/Drawer';
import DrawerMenu from "./DrawerMenu";
import {styled} from "@mui/material/styles";

interface DrawerComponentProps {
    open: boolean,
    drawerWidth: number,
    handleDrawerClose: () => void
}

function DrawerComponent({open, handleDrawerClose, drawerWidth}: DrawerComponentProps) {
  return (
    <DrawerStyledMobile
      drawerWidth={drawerWidth}
      variant="temporary"
      anchor="right"
      open={open}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true
      }}
    >
      <DrawerMenu handleDrawerClose={handleDrawerClose} />
    </DrawerStyledMobile>
  );
}

interface DrawerStyledProps extends DrawerProps {
    drawerWidth: number
}

const DrawerStyledMobile = styled(Drawer)<DrawerStyledProps>(({drawerWidth}) => ({
  width: drawerWidth,
  flexShrink: 0,
  '& .MuiDrawer-paper': {
    width: drawerWidth,
  }
}));


export default DrawerComponent;


