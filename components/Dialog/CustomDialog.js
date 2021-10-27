import { Dialog, IconButton, Box } from '@mui/material'
import React from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import CustomLabel from '../Layout/CustomLabel'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	content: {
		padding: '30px'

		// [theme.breakpoints.up('md')]: {
		//   padding: '40px 20px 30px 40px',
		// },
	},

	rounded: {
		borderRadius: '10px',
		[theme.breakpoints.up('md')]: {
			minWidth: '705px'
		},
		[theme.breakpoints.up('lg')]: {
			minWidth: '900px'
			// paddingRight: '40px'
		}
	},
	scrollBar: {
		overflowY: 'scroll',
		'&::-webkit-scrollbar': {
			width: '2px'
		},

		/* Track */
		'&::-webkit-scrollbar-track': {
			boxShadow: 'inset 0 0 5px #d4d4d4',
			borderRadius: '10px'
		},

		/* Handle */
		'&::-webkit-scrollbar-thumb': {
			background: '#717171',
			borderRadius: '10px',
			'&:hover': {
				background: '#ddd'
			}
		}
	}
}))

export default function CustomDialog({ children, heading, open, handleClose }) {
	const classes = useStyles()
	return (
		<Dialog
			open={open}
			onClose={handleClose}
			classes={{ paper: `${classes.rounded} ${classes.scrollBar}` }}
		>
			{heading && (
				<Box display='flex' justifyContent='space-between'>
					<CustomLabel label={heading} />
					<IconButton onClick={handleClose}>
						<AiOutlineClose />
					</IconButton>
				</Box>
			)}
			<div>{children}</div>
		</Dialog>
	)
}
