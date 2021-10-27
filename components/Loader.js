import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function Loader() {
	return (
		<Box
			display='flex'
			justifyContent='center'
			alignContent='center'
			alignItems='center'
			margin='20px auto'
		>
			<CircularProgress color='primary' />
		</Box>
	)
}
