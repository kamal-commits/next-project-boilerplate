import { Grid, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React from 'react'
import { Images } from '../../constants/Images'
import CustomImage from '../CustomImage'
import CustomLabel from '../Layout/CustomLabel'
const useStyles = makeStyles((theme) => ({
	root: {
		margin: '7px 0px'
	},
	content: {
		margin: '20px 0px',
		alignItems: 'center'
	},
	heading: {
		fontWeight: 'bold',
		fontSize: '16px'
	}
}))
export default function UserDetailGrid({ userDetails = [] }) {
	const classes = useStyles()
	return (
		<Grid container alignItems='center'>
			<Grid item lg={1} />
			<Grid item lg={2}>
				{/* <CustomI */}
				<CustomImage image={Images.User} />
			</Grid>

			<Grid item lg={8}>
				<Box
					style={{ boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.06)' }}
					padding='15px'
					borderRadius='20px'
				>
					{userDetails.map((val, index) => (
						<Box key={index} display='flex' className={classes.root}>
							<Typography
								className={classes.heading}
								style={{ marginRight: '20px' }}
							>
								{val.heading}
							</Typography>
							<CustomLabel label={`    : ${val.label}`} />
						</Box>
					))}
				</Box>
			</Grid>
		</Grid>
	)
}
