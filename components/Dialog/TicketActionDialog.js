import { Grid, Paper, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import CustomImage from '../CustomImage'
import CustomDialog from './CustomDialog'
import Image from 'next/image'
import { Images } from '../../constants/Images'
import CustomLabel from '../Layout/CustomLabel'
import { Box } from '@mui/system'
import { makeStyles } from '@mui/styles'
import CancelSubmitButton from '../CancelSubmitButton'
import { CustomButton, CustomInput, CustomSelect } from '../Form/CustomForm'
import { useTickets } from '../../hooks/Tickets/useTickets'
import { AiFillCheckCircle } from 'react-icons/ai'
import { FiRefreshCcw } from 'react-icons/fi'
import { formatDate, formatTime } from '../../utils/constants'
import UserDetailGrid from './UserDetailGrid'

const useStyles = makeStyles((theme) => ({
	root: {
		margin: '7px 0px'
	},
	content: {
		margin: '20px 0px',
		alignItems: 'center'
	},
	heading: {
		fontWeight: 'bold',
		fontSize: '16px'
	}
}))
export default function TicketActionDialog({ open, handleClose, heading, ticket }) {
	const classes = useStyles()
	const userId = ticket && ticket.userId
	const { updateTicket } = useTickets()
	const [form, setForm] = useState({
		status: '',
		remark: ''
	})

	const [updated, setUpdated] = useState(false)
	useEffect(() => {
		if (ticket) {
			setForm({
				status: ticket.status,
				remark: ticket.remark
			})
		}
	}, [ticket])
	const userDetails = [
		{ heading: 'Name', label: userId && ticket.userId.userName },
		{ heading: 'Registered Email', label: userId && ticket.userId.email },
		{ heading: 'Phone Number', label: userId && ticket.userId.phoneNumber },
		// { heading: 'Location', label: 'Delhi' },
		{ heading: 'Subscription', label: userId && ticket.userId.subscription }
	]

	const ticketDetails = [
		{
			heading: 'Subject',
			label: ticket && ticket.subject
		},
		{ heading: 'Priority', label: ticket && ticket.priority },
		{
			heading: 'Description',
			label: ticket && ticket.description
		}
	]

	const formData = [
		{
			heading: 'Status',
			input: (
				<CustomSelect
					options={['IN PROGRESS', 'RESOLVED', 'OPEN']}
					noValidate
					value={form.status}
					name='status'
					setForm={setForm}
					form={form}
				/>
			)
		},
		{
			heading: 'Remark',
			input: (
				<CustomInput
					noValidate
					value={form.remark}
					name='remark'
					setForm={setForm}
					form={form}
				/>
			)
		}
	]
	const handleUpdateTicket = () => {
		console.log('Updating')
		updateTicket({
			ticketId: ticket && ticket._id,
			...ticket,
			...form
		})
		// handleClose()
		setUpdated(true)
	}

	const SubmitSuccesfull = () => {
		return (
			<Box textAlign='center' padding='50px 0px'>
				<AiFillCheckCircle style={{ fontSize: '140px' }} />
				<Typography
					className={classes.heading}
					style={{ textAlign: 'center', marginBottom: '10px', fontSize: '30px' }}
				>
					Ticket has been updated!!
				</Typography>
				<Typography
					className={classes.heading}
					style={{ textAlign: 'center', marginBottom: '10px', fontSize: '30px' }}
				>
					A notification has been sent to the user!
				</Typography>
				<div style={{ margin: '20px' }}>
					<CustomButton
						text='Go Back'
						startIcon={<FiRefreshCcw />}
						handleSubmit={() => {
							setUpdated(false)
							handleClose()
						}}
					/>
				</div>
			</Box>
		)
	}
	return (
		<CustomDialog open={open} handleClose={handleClose} heading={heading}>
			{updated ? (
				<SubmitSuccesfull />
			) : (
				<div>
					<Typography
						className={classes.heading}
						style={{ textAlign: 'center', margin: '20px 0px', fontSize: '20px' }}
					>
						Raised Ticket - {ticket && formatDate(ticket.createdAt)} ,
						{formatTime(ticket.createdAt)}
					</Typography>

					<UserDetailGrid userDetails={userDetails} />

					{ticketDetails.map((val, index) => (
						<Grid container key={index} className={classes.content}>
							<Grid item lg={1} />
							<Grid item lg={2}>
								{/* <Typo label={val.heading} /> */}
								<Typography className={classes.heading}>{val.heading} </Typography>
							</Grid>
							<Grid item lg={8}>
								<Box
									style={{ boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.06)' }}
									padding='15px'
									borderRadius='20px'
								>
									<CustomLabel label={val.label} />
								</Box>
							</Grid>
						</Grid>
					))}

					{formData.map((val, index) => (
						<Grid container key={index} className={classes.content}>
							<Grid item lg={1} />
							<Grid item lg={2}>
								{/* <Typo label={val.heading} /> */}
								<Typography className={classes.heading}>{val.heading} </Typography>
							</Grid>
							<Grid item lg={8}>
								<Box
									style={{ boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.06)' }}
									padding='15px'
									borderRadius='20px'
								>
									{val.input}
								</Box>
							</Grid>
						</Grid>
					))}
					{/* FORM */}

					<CancelSubmitButton cancel={handleClose} submit={handleUpdateTicket} />
				</div>
			)}
		</CustomDialog>
	)
}
