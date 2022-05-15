import { Mail, Notifications, Pets } from '@mui/icons-material';
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React from 'react';

const StyledToolbar = styled(Toolbar)({
	display: 'flex',
	justifyContent: 'space-between',
});

const Search = styled('div')(({ theme }) => ({
	backgroundColor: 'white',
	padding: '0 10px',
	borderRadius: theme.shape.borderRadius,
	width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
	display: 'none',
	gap: '20px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'flex',
	},
}));

export const UserBox = styled(Box)(({ theme }) => ({
	display: 'flex',
	gap: '10px',
	alignItems: 'center',
	[theme.breakpoints.up('sm')]: {
		display: 'none',
	},
}));

function Navbar() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => setAnchorEl(event.currentTarget);
	const handleClose = () => setAnchorEl(null);

	return (
		<AppBar position='sticky'>
			<StyledToolbar>
				<Typography variant='h6' sx={{ display: { xs: 'none', sm: 'block' } }}>
					Dashboard
				</Typography>
				<Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
				<Search>
					<InputBase placeholder='Search...' />
				</Search>
				<Icons>
					<Badge badgeContent={4} color='error'>
						<Mail />
					</Badge>
					<Badge badgeContent={4} color='error'>
						<Notifications />
					</Badge>
					<Avatar
                        onClick={handleClick}
						sx={{ width: 30, height: 30 }}
						alt='Remy Sharp'
						src='https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1'
					/>
				</Icons>
				<UserBox>
					<Avatar
                        onClick={handleClick}
						sx={{ width: 30, height: 30 }}
						alt='Remy Sharp'
						src='https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1'
					/>
					<Typography variant='span'>John</Typography>
				</UserBox>
				<Menu
					id='demo-positioned-menu'
					aria-labelledby='demo-positioned-button'
					anchorEl={anchorEl}
					open={Boolean(anchorEl)}
					onClose={handleClose}
					anchorOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}
					transformOrigin={{
						vertical: 'top',
						horizontal: 'right',
					}}>
					<MenuItem onClick={handleClose}>Profile</MenuItem>
					<MenuItem onClick={handleClose}>My account</MenuItem>
					<MenuItem onClick={handleClose}>Logout</MenuItem>
				</Menu>
			</StyledToolbar>
		</AppBar>
	);
}

export default Navbar;
