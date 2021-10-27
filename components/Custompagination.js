import React, { useEffect } from 'react'

import { Pagination, Box } from '@mui/material'
import { makeStyles } from '@mui/styles'
const useStyles = makeStyles((theme) => ({
	pagination: {
		'&:hover': {
			backgroundColor: theme.palette.primary.main
		}
	}
}))

export default function CustomPagination({
	page,
	setPage,
	noOfPages,
	handleChange
}) {
	// //console.log('DATA LENGHT', data && data.length)
	const classes = useStyles()

	const handlePrevious = () => {
		if (page === 1) {
			setPage(page)
		} else {
			setPage(page - 1)
		}
	}

	const handleNext = () => {
		// if (data && data.length === 0) {
		// setPage(page - 1)
		// } else {
		setPage(page + 1)
		// }
	}

	return (
		<Box
			marginTop='30px'
			paddingBottom='15px'
			display='flex'
			justifyContent='center'
		>
			<Pagination
				count={noOfPages}
				// variant='outlined'
				// shape='rounded'
				page={page}
				onChange={handleChange}
				color='primary'
				size='large'
				showFirstButton
				showLastButton
				// className={classes.pagination}
			/>

			{/* <div> {page} </div>
      <div onClick={() => setPage(page + 1)}> next </div> */}

			{/* <ul class="pagination">
        <li class={`page-item ${page === 1 && 'disabled'}`} style={{ cursor: 'pointer' }} onClick={handlePrevious}>
          <span class="page-link"> Previous</span>
        </li>

        <li class="page-item">
          <span class="page-link"> {page}</span>
        </li>

        <li class="page-item" style={{ cursor: 'pointer' }} onClick={handleNext}>
          <span class="page-link"> {'Next'}</span>
        </li>
      </ul> */}
		</Box>
	)
}
