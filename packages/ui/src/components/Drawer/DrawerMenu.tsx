import IconButton from "@mui/material/IconButton";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import { Link } from "react-router-dom";
import ListItemText from "@mui/material/ListItemText";
import { useAccounts } from "../../contexts/AccountsContext";
import { ROUTES } from "../../constants";
import { useMultiProxy } from "../../contexts/MultiProxyContext";
import { styled } from "@mui/material/styles";
// import NetworkSelection from "../NetworkSelection";
import MultiProxySelection from "../MultiProxySelection";



interface DrawerMenuProps {
  handleDrawerClose: () => void
}

function DrawerMenu({ handleDrawerClose }: DrawerMenuProps) {
  const { accountList } = useAccounts()
  const { multiProxyList } = useMultiProxy()

  return (
    <>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          <ChevronRightIcon />
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        <ListItem>
          <MultiProxySelection />
        </ListItem>
        {/* <ListItem>
          <NetworkSelection />
        </ListItem> */}
        {!!accountList?.length && (
          ROUTES.map(({ url, name, isDisplayWhenNoMultiProxy }) => (
            multiProxyList.length > 0 || isDisplayWhenNoMultiProxy
              ? (
                <ListItem key={name} disablePadding>
                  <ListItemButton onClick={handleDrawerClose} component={Link} to={url}>
                    <ListItemText primary={name} />
                  </ListItemButton>
                </ListItem>
              )
              : null
          )))}
      </List>
    </>
  )
}

const DrawerHeader = styled('div')(({ theme }) => `
    display: flex;
    align-items: center;
    padding: 0 8px;
    justify-content: flex-start;
`);

export default DrawerMenu;