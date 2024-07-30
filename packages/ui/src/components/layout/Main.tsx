import React, { useLayoutEffect } from 'react'
import { Box } from '@mui/material'
import Header from '../Header/Header'
import Container from '@mui/material/Container'
import { Outlet } from 'react-router-dom'
import DrawerComponent from '../Drawer/Drawer'
import { styled } from '@mui/material/styles'

function MainLayout() {
  const [open, setOpen] = React.useState(false)

  useLayoutEffect(() => {
    const host = document.querySelector('body > onboard-v2')
    const sheet = new CSSStyleSheet()
    sheet.replaceSync(`.sidebar {
      width: 0;
      height: 0;
      visibility: hidden;
    } `)
    host?.shadowRoot?.adoptedStyleSheets.push(sheet)
  }, [])
  return (
    <BoxStyled>
      <Header handleDrawerOpen={() => setOpen(true)} />
      <Container
        fixed
        maxWidth="lg"
      >
        <Outlet />
      </Container>
      <DrawerComponent
        open={open}
        handleDrawerClose={() => setOpen(false)}
      />
    </BoxStyled>
  )
}

const BoxStyled = styled(Box)`
  display: flex;
  flex-direction: column;
`

export default MainLayout
