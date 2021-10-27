import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React from 'react'
import { CustomButton } from './Form/CustomForm'
const useStyles = makeStyles((theme) => ({
	button: {
		padding: '10px 40px',
		borderRadius: '50px',
		margin: '20px 10px'
	}
}))
export default function CancelSubmitButton({ cancel, submit }) {
	const classes = useStyles()
	return (
		<Box display='flex' justifyContent='center'>
			<CustomButton
				text='Cancel'
				outlined
				className={classes.button}
				handleSubmit={cancel}
			/>
			<CustomButton text='Submit' className={classes.button} handleSubmit={submit} />
		</Box>
	)
}
