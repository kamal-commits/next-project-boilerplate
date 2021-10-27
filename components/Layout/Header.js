import {
	AppBar,
	Divider,
	IconButton,
	Input,
	InputAdornment,
	Toolbar
} from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import { AiOutlineArrowRight, AiOutlineSearch } from 'react-icons/ai'
import { ROUTES, success } from '../../utils/constants'
import { toastMessage } from '../../utils/toastMessage'
import { CustomButton } from '../Form/CustomForm'
const useStyles = makeStyles((theme) => ({
	root: {
		backgroundColor: 'white',
		padding: '22.5px 0px',
		// height: '100vh',
		// paddingTop: theme.spacing(13)
		boxShadow: 'none'
	}
}))

export default function Header() {
	const classes = useStyles()
	const router = useRouter()
	const logoutUser = () => {
		localStorage.clear()
		toastMessage('Logout Successfully', success)
		return router.push(ROUTES.LOGIN)
	}
	return (
		<>
			<AppBar position='static' className={classes.root}>
				<Toolbar
					variant='dense'
					style={{
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
						alignContent: 'center'
					}}
				>
					{/* <Box display='flex' justifyContent='space-between'> */}
					<Input
						id='input-with-icon-adornment'
						startAdornment={
							<InputAdornment position='start'>
								<AiOutlineSearch fontSize='30px' />
							</InputAdornment>
						}
						placeholder='Search.....'
						style={{ width: '50%' }}
					/>
					<CustomButton
						text='Logout'
						endIcon={<AiOutlineArrowRight />}
						handleSubmit={logoutUser}
					/>
					{/* </Box> */}
				</Toolbar>
			</AppBar>
			<Divider />
		</>
	)
}
