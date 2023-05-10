import React from "react";
import { Box } from "@mui/material";
import Header from "../Header";
import Container from "@mui/material/Container";
import { UserSpace } from "../UserSpace";
import { Outlet } from 'react-router-dom';
import DrawerComponent from "../Drawer/Drawer";
import { styled } from "@mui/material/styles"

function MainLayout() {
  const [open, setOpen] = React.useState(false);

  return (
    <Container maxWidth="lg">
      <BoxStyled>
        <Header handleDrawerOpen={() => setOpen(true)} />
        <>
          <ContainerStyled fixed>
            <UserSpace>
              <Outlet />
            </UserSpace>
          </ContainerStyled>
        </>
        <DrawerComponent open={open} handleDrawerClose={() => setOpen(false)} />
      </BoxStyled>
    </Container>
  );
}

const BoxStyled = styled(Box)`
  display: flex;
`

const ContainerStyled = styled(Container)`
  padding-top: 6rem;
`

export default MainLayout;