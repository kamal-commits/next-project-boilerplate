import { CircularProgress } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export default function NoDataLoader() {
	return (
		<Box display='flex' justifyContent='center' alignItems='center' paddingTop='16%'>
			<CircularProgress style={{ width: '80px', height: '80px' }} />
		</Box>
	)
}
