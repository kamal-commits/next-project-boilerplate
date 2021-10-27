import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React from 'react'
import CustomDialog from './CustomDialog'
import UserDetailGrid from './UserDetailGrid'
import { SocialIcon } from 'react-social-icons'
import { Box } from '@mui/system'
import { CustomButton } from '../Form/CustomForm'
const useStyles = makeStyles((theme) => ({
	root: {
		padding: '40px 0px',
	},
	content: {
		alignItems: 'center',
	},
	heading: {
		fontWeight: 'bold',
		fontSize: '16px',
	},
}))
export default function UserDetailDialog({ open, handleClose, user }) {
	const classes = useStyles()
	const userDetails = [
		{ heading: 'Name', label: user && user.userName },
		{ heading: 'Registered Email', label: user && user.email },
		{ heading: 'Phone Number', label: user && user.phoneNumber },
		// { heading: 'Location', label: 'Delhi' },
		{ heading: 'Subscription', label: user && user.subscription },
	]

	const products = user && user.profileUrl

	const userSocial = user && user.accounts && user.accounts[0].socialLinks
	return (
		<CustomDialog open={open} handleClose={handleClose}>
			<div className={classes.root}>
				<UserDetailGrid userDetails={userDetails} />
				{userSocial && (
					<Typography
						className={classes.heading}
						style={{
							marginLeft: '30px',
							marginTop: '40px',
							textDecoration: 'underline',
						}}
					>
						Social Media Profile :-
					</Typography>
				)}
				<Grid container alignItems='center'>
					{userSocial &&
						userSocial.map((val, index) => (
							<Grid item lg={2} key={index}>
								<Box
									boxShadow={3}
									padding='10px'
									borderRadius='20px'
									textAlign='center'
									margin='30px 0px 0px 30px'
								>
									<SocialIcon url={val.link[0]} network={val.name.toLowerCase()} />
									<Typography
										className={classes.heading}
										style={{ margin: '10px 0px 5px 0px' }}
									>
										{val.name}
									</Typography>
								</Box>
							</Grid>
						))}
				</Grid>

				<Box display='flex' flexDirection='column' margin='30px 0px 0px 30px'>
					<Typography
						className={classes.heading}
						style={{ margin: '10px 0px 5px 0px', textDecoration: 'underline' }}
					>
						MyDA Products
					</Typography>
					{products &&
						products.map((val, index) => (
							<Typography
								className={classes.heading}
								style={{ margin: '10px 0px 5px 35px' }}
								key={index}
							>
								{'->'} {val && val.product && val.product.name}
							</Typography>
						))}
				</Box>
			</div>

			<Box textAlign='center' marginBottom='30px'>
				<CustomButton text='Close' handleSubmit={handleClose} />
			</Box>
		</CustomDialog>
	)
}
