import { AccountBox, Group, Home, ModeNight, Pages, Person, Settings, Storefront } from '@mui/icons-material';
import { Box, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import React from 'react';

const sideList = [
	{
		id: '1',
		title: 'Homepage',
		icon: Home,
	},
	{
		id: '2',
		title: 'Pages',
		icon: Pages,
	},
	{
		id: '3',
		title: 'Group',
		icon: Group,
	},
	{
		id: '4',
		title: 'Marketplace',
		icon: Storefront,
	},
	{
		id: '5',
		title: 'Friends',
		icon: Person,
	},
	{
		id: '6',
		title: 'Settings',
		icon: Settings,
	},
	{
		id: '7',
		title: 'Profile',
		icon: AccountBox,
	},
	{
		id: '8',
		icon: ModeNight,
		switch: true,
	},
];

function Sidebar({ mode, setMode }) {
	return (
		<Box flex={1} p={2} sx={{ display: { xs: 'none', sm: 'block' } }}>
			<List sx={{ position: 'fixed' }}>
				{sideList.map((item) => {
					const ListIcons = item.icon;
					return (
						<ListItem disablePadding key={item.id}>
							<ListItemButton component='a' href='#home'>
								<ListItemIcon>
									<ListIcons />
								</ListItemIcon>
								{item.title && <ListItemText primary={item.title} />}
								{item.switch && <Switch onChange={(e) => setMode(mode === 'light' ? 'dark' : 'light')} />}
							</ListItemButton>
						</ListItem>
					);
				})}
			</List>
		</Box>
	);
}

export default Sidebar;
