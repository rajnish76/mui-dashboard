import { MoreVertOutlined, Favorite as FavoriteIcon, Share as ShareIcon, FavoriteBorder } from '@mui/icons-material';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material';
import React from 'react';

function Feed() {
	return (
		<Box flex={4} p={2}>
			<Card>
				<CardHeader
					avatar={
						<Avatar sx={{ bgcolor: 'red' }} aria-label='recipe'>
							R
						</Avatar>
					}
					action={
						<IconButton aria-label='settings'>
							<MoreVertOutlined />
						</IconButton>
					}
					title='Shrimp and Chorizo Paella'
					subheader='September 14, 2016'
				/>
				<CardMedia
					component='img'
					height='20%'
					image='https://www.hollywoodreporter.com/wp-content/uploads/2019/03/avatar-publicity_still-h_2019.jpg?w=681&h=383&crop=1'
					alt='Paella dish'
				/>
				<CardContent>
					<Typography variant='body2' color='text.secondary'>
						This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen
						peas along with the mussels, if you like.
					</Typography>
				</CardContent>
				<CardActions disableSpacing>
					<IconButton aria-label='add to favorites'>
						<Checkbox icon={<FavoriteBorder />} checkedIcon={<FavoriteIcon sx={{ color: 'red' }} />} />
					</IconButton>
					<IconButton aria-label='share'>
						<ShareIcon />
					</IconButton>
				</CardActions>
			</Card>
		</Box>
	);
}

export default Feed;
