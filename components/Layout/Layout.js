import { Grid } from '@mui/material'
import React from 'react'
import CustomHead from '../CustomHead'
import Header from './Header'
import Sidebar from './Sidebar/Sidebar'

export default function Layout({ page, children, auth = false }) {
	//
	return (
		<>
			<CustomHead page={page} />
			{!auth && (
				<Grid container>
					<Grid item lg={2}>
						<Sidebar />
					</Grid>

					<Grid item lg={10}>
						<Header />
						<div
							style={{
								paddingLeft: '10px',
								backgroundColor: '#E5E5E5'
								// height: '86vh'
							}}
						>
							{' '}
							{children}
						</div>
					</Grid>
				</Grid>
			)}
			{auth && children}
		</>
	)
}
