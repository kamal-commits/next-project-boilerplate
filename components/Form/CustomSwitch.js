import { Switch } from '@mui/material'
import React from 'react'

export default function CustomSwitch({ checked, handleChange }) {
	return (
		<div>
			<Switch
				checked={checked}
				onChange={handleChange}
				name='switch'
				color='primary'
			/>
		</div>
	)
}
