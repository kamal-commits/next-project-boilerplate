import React from 'react'
import {
	Paper,
	Table,
	TableCell,
	TableContainer,
	TableHead,
	TableRow
} from '@mui/material'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => ({
	root: {
		borderRadius: '20px',
		width: '100%',
		'& th': {
			backgroundColor: '#Ffffff',
			// color: 'white',
			fontSize: '14px',
			textAlign: 'center',
			fontWeight: 600,
			padding: '6px',
			textTransform: 'uppercase'
		},
		'& td': {
			fontSize: '14px',
			padding: '10px',
			textAlign: 'center'
		}
	},

	paddingCell: {
		borderRadius: '20px',
		width: '100%',
		'& th': {
			backgroundColor: '#F5F8FF',
			// color: 'white',
			fontSize: '14px',
			textAlign: 'center',
			fontWeight: 600,
			padding: '6px',
			textTransform: 'uppercase'
		},
		'& td': {
			fontSize: '14px',
			padding: '20px',
			textAlign: 'center'
		}
	},
	root2: {
		margin: '22px 34px',
		padding: '5px',
		borderRadius: '10px'
	}
}))

export default function CustomTable({
	children,
	padding,
	className,
	tableId,
	heading = []
}) {
	const classes = useStyles()
	const renderClass = className
		? `${className} ${classes.root}`
		: padding
		? `${className} ${classes.paddingCell}`
		: classes.root
	return (
		<TableContainer>
			<Paper className={classes.root2}>
				<Table id={tableId} className={renderClass} stickyHeader>
					<TableHead>
						<TableRow>
							{heading.map((val) => {
								return (
									<>
										<TableCell> {val} </TableCell>
									</>
								)
							})}
						</TableRow>
					</TableHead>
					{children}
				</Table>
			</Paper>
		</TableContainer>
	)
}
