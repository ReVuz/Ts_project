import React from 'react'
import { AppBar, Toolbar, Typography, Tab, Button, useTheme, useMediaQuery } from '@mui/material'
import { NavbarWrapper } from '../styles/Styles.modules'
import DrawerContainer from './DrawerContainer';

export const menuItems = [
    { name: "Home" },
    { name: "Now Playing" },
    { name: "Popular" },
    { name: "TV Shows" },
]

const Header = () => {
    const theme = useTheme();
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    return <>
        <NavbarWrapper>
            <AppBar sx={{ padding: "10px", backgroundColor: "#063970" }}>
                <Toolbar>
                    <Typography className='logo'>MoviesClub</Typography>
                    {isMatch ? (<DrawerContainer />) : (
                        <>
                            <div className='navLinks'>
                                {menuItems.map((nav, index) => (
                                    <Tab className='links' label={nav.name} key={index} />
                                ))}
                            </div>
                            <Button className='loginBtn' variant="contained" color='info'>Login</Button>
                        </>
                    )}
                </Toolbar>
            </AppBar>
        </NavbarWrapper>
    </>
};

export default Header;
