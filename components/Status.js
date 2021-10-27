import { makeStyles } from '@mui/styles'
import React from 'react'
const useStyles = makeStyles((theme) => ({
	low: {
		color: 'green'
		// background: 'green',
		// opacity: 0.3
	},
	medium: {
		color: theme.palette.info.main
	},
	high: {
		color: 'red'
	},
	open: {
		color: 'grey'
	},
	progress: {
		color: 'purple'
	},
	resolved: {
		color: 'green'
	}
}))
export default function Status({ value }) {
	const classes = useStyles()

	const statusSwitch = (text) => {
		switch (text) {
			case 'LOW':
				return classes.low
			case 'MEDIUM':
				return classes.medium
			case 'HIGH':
				return classes.high
			case 'OPEN':
				return classes.open
			case 'IN PROGRESS':
				return classes.progress
			case 'RESOLVED':
				return classes.resolved

			default:
				break
		}
	}
	return (
		<div
			className={statusSwitch(value)}
			style={{
				borderRadius: '5px',
				padding: '5px',
				// color: 'white',
				fontWeight: 'bold'
			}}
		>
			{value}
		</div>
	)
}
