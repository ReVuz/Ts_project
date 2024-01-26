import React from 'react'
import {
	Drawer,
	IconButton,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { menuItems } from './Header';

const DrawerContainer = () => {
	const [openDrawer, setOpenDrawer] = React.useState(false);
	const drawerBtn = () => {
		setOpenDrawer(!openDrawer);
	};
	return (
		<>
			<Drawer open={openDrawer} onClose={drawerBtn} anchor="left">
				<List>
					{menuItems.map((nav, index) => (
						<ListItemButton onClick={() => setOpenDrawer(false)} key={index}>
							<ListItemIcon>
								<ListItemText>
									{nav.name}
								</ListItemText>
							</ListItemIcon>
						</ListItemButton>
					))}
				</List>
			</Drawer>
			<IconButton sx={{marginLeft: "auto", color:"whitesmoke"}}
				onClick={drawerBtn}>
				<MenuIcon />
			</IconButton>
		</>
	)
};

export default DrawerContainer;
