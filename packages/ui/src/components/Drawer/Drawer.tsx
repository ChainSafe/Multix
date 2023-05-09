import Drawer from '@mui/material/Drawer';
import DrawerMenu from './DrawerMenu';
import { styled } from '@mui/material/styles';

const DRAWER_WIDTH = 240;

interface DrawerComponentProps {
  open: boolean;
  handleDrawerClose: () => void;
}

function DrawerComponent({ open, handleDrawerClose }: DrawerComponentProps) {
  return (
    <DrawerStyledMobile
      variant="temporary"
      anchor="right"
      open={open}
      onClose={handleDrawerClose}
      ModalProps={{
        keepMounted: true,
      }}
    >
      <DrawerMenu handleDrawerClose={handleDrawerClose} />
    </DrawerStyledMobile>
  );
}

const DrawerStyledMobile = styled(Drawer)(
  () => `
    width: ${DRAWER_WIDTH}px;
    flex-shrink: 0;
    & .MuiDrawer-paper {
        width: ${DRAWER_WIDTH}px;
    }
`
);

export default DrawerComponent;
