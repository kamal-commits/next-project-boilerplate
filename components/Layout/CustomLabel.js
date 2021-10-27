/* eslint-disable import/no-anonymous-default-export */
import React from 'react'
import { Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => ({
	label: {
		// color: 'white',

		[theme.breakpoints.up('md')]: {
			//
		},
		[theme.breakpoints.up('lg')]: {
			fontSize: '16px',
			lineHeight: '24px',
			fontWeight: 400
		}
	}
}))

export default function CustomLabel({ className, label, style, onClick }) {
	const classes = useStyles()
	const renderClass = className ? `${className} ${classes.label}` : classes.label

	return (
		<Typography className={renderClass} style={style} onClick={onClick}>
			{label}
		</Typography>
	)
}
