import React from 'react';
import { Box } from '@mui/material';
import Header from '../Header';
import Container from '@mui/material/Container';
import { UserSpace } from '../UserSpace';
import { Route, Routes } from 'react-router-dom';
import { About, Creation, Home } from '../../pages';
import DrawerComponent from '../Drawer/Drawer';
import Help from '../../pages/Help';
import { styled } from '@mui/material/styles';

function MainLayout() {
  const [open, setOpen] = React.useState(false);

  return (
    <Container maxWidth="lg">
      <BoxStyled>
        <Header handleDrawerOpen={() => setOpen(true)} />
        <>
          <ContainerStyled fixed>
            <UserSpace>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/create" element={<Creation />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<Help />} />
              </Routes>
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
`;

const ContainerStyled = styled(Container)`
  padding-top: 6rem;
`;

export default MainLayout;
