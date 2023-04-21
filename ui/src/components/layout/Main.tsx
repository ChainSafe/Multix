import React from "react";
import {Box} from "@mui/material";
import Header from "../Header";
import Container from "@mui/material/Container";
import {UserSpace} from "../UserSpace";
import {Route, Routes} from "react-router-dom";
import {About, Creation, Home} from "../../pages";
import {styled, useTheme} from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import DrawerComponent from "../Drawer/Drawer";
import Help from "../../pages/Help";

const DRAWER_WIDTH = 240;

function MainLayout() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Container maxWidth="lg">
      <BoxStyled>
        <Header drawerWidth={DRAWER_WIDTH} open={open} handleDrawerOpen={() => setOpen(true)}/>
        <Main open={open}>
          <DrawerHeader>
            <IconButton onClick={() => setOpen(false)}>
              {theme.direction === 'rtl' ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
            </IconButton>
          </DrawerHeader>
          <ContainerStyled fixed>
            <UserSpace>
              <Routes>
                <Route
                  path="/"
                  element={<Home/>}
                />
                <Route
                  path="/create"
                  element={<Creation/>}
                />
                <Route
                  path="/about"
                  element={<About/>}
                />
                <Route
                  path="/help"
                  element={<Help/>}
                />
              </Routes>
            </UserSpace>
          </ContainerStyled>
        </Main>
        <DrawerComponent drawerWidth={DRAWER_WIDTH} open={open} handleDrawerClose={() => setOpen(false)}/>
      </BoxStyled>
    </Container>
  );
}

interface MainProps {
  open?: boolean;
}

const Main = styled('main', {shouldForwardProp: (prop) => prop !== 'open'})<MainProps>(({theme, open}) => ({
  flexGrow: 1,
  padding: '24px',
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginRight: -DRAWER_WIDTH,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  }),
}));

const DrawerHeader = styled('div')(({theme}) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-start',
}));

const BoxStyled = styled(Box)({
  display: 'flex',
});

const ContainerStyled = styled(Container)({
  paddingTop: '6rem',
})

export default MainLayout;