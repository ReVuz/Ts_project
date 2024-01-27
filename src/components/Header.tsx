import React from 'react'
import { AppBar, Toolbar, Typography, Tabs, Tab, Button, useTheme, useMediaQuery } from '@mui/material'
import { NavbarWrapper } from '../styles/Styles.modules'
import DrawerContainer from './DrawerContainer'
import { NavLink } from 'react-router-dom'

export const menuItems = [
    { name: "Home", link: '/' },
    { name: "Popular", link: '/Popular' },
    { name: "Movies", link: '/Movies' },
    { name: "Tv Shows", link: '/TvShows' },
]

const Header = () => {
    const theme = useTheme();
    const isMatching = useMediaQuery(theme.breakpoints.down("md"));
    return (
        <NavbarWrapper>
            <AppBar sx={{ padding: "10px", backgroundColor: "#063970" }}>
                <Toolbar>
                    <Typography className='logo' >MovieClub</Typography>
                    {isMatching ? (
                        <DrawerContainer />
                    ) : (
                        <>
                            <div className='navLinks'>
                                {menuItems.map((nav, index) => (
                                    <NavLink to={nav.link} key={index}>
                                        <Tab className='links' label={nav.name} key={index} />
                                    </NavLink>
                                ))}
                            </div>
                            <Button className='loginBtn' variant="contained" color="info">Login</Button>
                        </>
                    )}

                </Toolbar>
            </AppBar>
        </NavbarWrapper>
    );
};

export default Header
