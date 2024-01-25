import React from 'react'
import {
    Drawer,
    IconButton,
    List,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    colors
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { menuItems } from './Header'

const DrawerContainer = () => {
    const [openDrawer, setOpenDrawer] = React.useState(false)
    const drawerBtn = () => {
        setOpenDrawer(!openDrawer)
    }
    return (
        <>
            <Drawer
                anchor='left'
                open={openDrawer}
                onClose={drawerBtn}
            >
                <List>
                    {menuItems.map((nav, index) => (
                        <ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
                            <ListItemIcon>
                                <ListItemText sx={{ color: "#blue" }} >{nav.name}</ListItemText>
                            </ListItemIcon>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>
            <IconButton sx = {{marginLeft: "auto", color:"whitesmoke"}} 
            onClick={drawerBtn}>
                <MenuIcon />
            </IconButton>

        </>
    )
}

export default DrawerContainer
