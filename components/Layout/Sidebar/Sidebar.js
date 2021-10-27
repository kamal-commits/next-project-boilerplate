import React, { useContext, useState } from 'react'
import Link from 'next/link'
import Drawer from '@mui/material/Drawer'
// import IconButton from '@material-ui/core/IconButton'
// import CloseIcon from '@material-ui/icons/Close'

import { useRouter } from 'next/router'
import { AiFillDashboard } from 'react-icons/ai'
import { IoTicket } from 'react-icons/io5'
import { FaUsers } from 'react-icons/fa'
import { SiGoogleanalytics } from 'react-icons/si'
import {
	List,
	ListItem,
	ListItemIcon,
	ListItemText,
	CssBaseline,
	Divider,
	Box,
	Avatar,
	Typography,
} from '@mui/material'
import Image from 'next/image'
import { Images } from '../../../constants/Images'
import CustomLabel from '../CustomLabel'
import { getSideItems, ROUTES } from '../../../utils/constants'
import { makeStyles } from '@mui/styles'
import { UserContext } from '../../../context_api/UserContext'

// const useStyles = makeStyles((theme) => ({
// 	root: {
// 		backgroundColor: theme.palette.primary.main,
// 		height: '100vh',
// 		paddingTop: theme.spacing(13)
// 	},
// 	paper: {
// 		display: 'flex',
// 		flexDirection: 'column',
// 		alignItems: 'center',
// 		padding: '25px',
// 		borderRadius: '20px',
// 		backgroundColor: theme.palette.common.white
// 	},
// 	icon: {
// 		width: '25px',
// 		height: '25px'
// 	},
// 	// activeClass:{
// 	//   color:"black"
// 	// }
// 	drawer: {
// 		paddingRight: '200px'
// 	}
// }))
const drawerWidth = 247
const useStyles = makeStyles((theme) => ({
	root: {
		display: 'flex',
		// boxShadow: '10px solid white'
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
	},
	appBarShift: {
		marginLeft: drawerWidth,
		width: `calc(100% - ${drawerWidth}px)`,
		transition: theme.transitions.create(['width', 'margin'], {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	menuButton: {
		marginRight: 36,
	},
	hide: {
		display: 'none',
	},
	drawer: {
		minWidth: drawerWidth,
		flexShrink: 0,
		whiteSpace: 'nowrap',
		background: '#ffffff',
		'& ::-webkit-scrollbar': {
			width: '0',
		},
	},
	drawerOpen: {
		width: drawerWidth,
		background: '#ffffff',
		// ,
		'& ::-webkit-scrollbar': {
			width: '0',
		},
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.enteringScreen,
		}),
	},
	drawerClose: {
		background: '#F6F8FE',
		width: '73px',
		transition: theme.transitions.create('width', {
			easing: theme.transitions.easing.sharp,
			duration: theme.transitions.duration.leavingScreen,
		}),
		'& ::-webkit-scrollbar': {
			width: '0',
		},
		overflowX: 'hidden',
		// width: theme.spacing(7) + 1,
		[theme.breakpoints.up('sm')]: {
			width: theme.spacing(9) + 1,
		},
	},

	content: {
		flexGrow: 1,
		padding: theme.spacing(3),
		background: 'lightblue',
	},

	selected: {
		background: 'white',
		color: '#33499F',
		'&:hover': {
			textDecoration: 'none',
		},
	},
	hovering: {
		'&:hover': {
			textDecoration: 'none',
			color: 'black',
			background: 'white',
		},
	},

	'@global': {
		'.MuiPaper-root': {
			borderRight: 'none !important',
		},
	},

	icon: {
		width: '25px',
		height: '25px',
	},
	active: {
		background: theme.palette.primary.main,
		color: 'white',
		borderRadius: '10px',
		'&:hover': {
			background: theme.palette.primary.main,
			color: 'white',
		},
	},
}))

const Sidebar = () => {
	const router = useRouter()
	const classes = useStyles()
	// const [open, setOpen] = useState(true)

	const user = useContext(UserContext)
	const userType = user && user.user && user.user.userType
	const userName = user && user.user && user.user.name
	const email = user && user.user && user.user.email
	const navItems = getSideItems(userType)

	return (
		<Box boxShadow={4} className={classes.root}>
			<CssBaseline />

			<Drawer
				variant='permanent'
				className={classes.drawer}
				classes={{
					paper: classes.drawer,
				}}
			>
				<Box
					display='flex'
					justifyContent='space-evenly'
					alignItems='center'
					paddingTop='20px'
					paddingBottom='20px'
				>
					<Image src={Images.Logo} />
					<CustomLabel
						label={userType}
						style={{ fontWeight: 'bold', fontSize: '20px' }}
					/>
				</Box>

				<Divider />
				<br />
				<div>
					<Box display='flex' justifyContent='space-evenly' alignItems='center'>
						<Avatar>K</Avatar>

						<Box>
							<CustomLabel
								label={userName || `Kamal`}
								style={{ fontWeight: '600', fontSize: '14px' }}
							/>
							<CustomLabel
								label={email || 'kamal@applore.in'}
								style={{ fontSize: '14px' }}
							/>
						</Box>
					</Box>
					{/* <Divider /> */}

					{/* {open && <img src={user && user.company && user.company.profilePicture} className={classes.logo} />} */}
					{/* <Avatar style={{ width: '90px', height: '90px' }} /> */}
					{/* <br /> */}
				</div>
				{/* <br /> */}
				{/* {open && (
        <div className={classes.heading}>
          <h5> {user && user.company ? user.company.name || user.company.firstName : user.user.name}</h5>
        </div>
      )} */}
				{/* {open && (
        <div className={classes.heading}>
          <p> Last Login : {moment(user && user.user.loginTime).format('h:mm a')}</p>
        </div>
      )} */}
				<br />
				<br />
				<List>
					{navItems.map((val, index) => (
						<React.Fragment key={index}>
							{/* <Link href={val.url} passHref> */}
							<ListItem
								button
								key={val.label}
								className={router.pathname === val.url ? classes.active : ''}
								onClick={() => router.push(val.url)}
							>
								<ListItemIcon
									color='inherit'
									className={router.pathname === val.url ? classes.active : ''}
								>
									{val.icon && <val.icon className={classes.icon} />}
								</ListItemIcon>
								<ListItemText primary={val.label} />
							</ListItem>
							{/* </Link> */}
							<br />
						</React.Fragment>
					))}
				</List>

				{/* {icons.map((icon, index) =>
        //   icon.text === 'Employee' ? (
        //     <div>
        //       <ListItem button key={icon.text} onClick={icon.text === 'Employee' ? () => handleDropDown(icon.text) : history.push(icon.url)}>
        //         <ListItemAvatar>
        //           <icon.icon />
        //         </ListItemAvatar>
        //         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        //           <div style={{ width: '90%' }}>
        //             <Typography style={{ lineHeight: '20px', fontSize: '14px' }}>{icon.text}</Typography>
        //           </div>
        //           {Empdown ? (
        //             <IoIosArrowUp
        //               onClick={() => {
        //                 setEmpdown(false)
        //               }}
        //             />
        //           ) : (
        //             <IoIosArrowDown
        //               onClick={() => {
        //                 setEmpdown(true)
        //               }}
        //             />
        //           )}
        //         </div>
        //       </ListItem>

        //       <CustomCollapse open={Empdown} collapseData={employee} classes={classes} />
        //     </div>
        //   ) : icon.text === 'Product Management' ? (
        //     <div>
        //       <ListItem button key={icon.text} onClick={icon.text === 'Product Management' ? () => handleDropDown(icon.text) : history.push(icon.url)}>
        //         <ListItemAvatar>
        //           <icon.icon />
        //         </ListItemAvatar>
        //         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        //           <div style={{ width: '80%' }}>
        //             <Typography style={{ lineHeight: '20px', fontSize: '14px' }}>{icon.text}</Typography>
        //           </div>
        //           {Productdown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        //         </div>
        //       </ListItem>
        //       <CustomCollapse open={Productdown} collapseData={productManagement} classes={classes} />
        //     </div>
        //   ) : icon.text === 'Sales Management' ? (
        //     <div>
        //       <ListItem button key={icon.text} onClick={icon.text === 'Sales Management' ? () => handleDropDown(icon.text) : history.push(icon.url)}>
        //         <ListItemAvatar>
        //           <icon.icon size="1.4rem" />
        //         </ListItemAvatar>
        //         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        //           <div style={{ width: '100%' }}>
        //             <Typography style={{ lineHeight: '20px', fontSize: '14px' }}>{icon.text}</Typography>
        //           </div>
        //           {salesDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        //         </div>
        //       </ListItem>
        //       <CustomCollapse open={salesDown} collapseData={sales} classes={classes} />
        //     </div>
        //   ) : icon.text === 'Lead Management' ? (
        //     <div>
        //       <ListItem button key={icon.text} onClick={icon.text === 'Lead Management' ? () => handleDropDown(icon.text) : history.push(icon.url)}>
        //         <ListItemAvatar>
        //           <icon.icon />
        //         </ListItemAvatar>
        //         <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        //           <div style={{ width: '100%' }}>
        //             <Typography style={{ lineHeight: '20px', fontSize: '14px' }}>{icon.text}</Typography>
        //           </div>
        //           {leadDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
        //         </div>
        //       </ListItem>
        //       <CustomCollapse open={leadDown} collapseData={leadManagement} classes={classes} />
        //     </div>
        //   ) : (
        //     <ListItem button className={classes.hovering} key={icon.text} component={NavLink} to={icon.url} activeClassName={classes.selected} exact>
        //       <ListItemAvatar>
        //         <icon.icon style={{ fontSize: '1.5em' }} />
        //       </ListItemAvatar>
        //       <Typography style={{ lineHeight: '20px', fontSize: '14px' }}>{icon.text}</Typography>
        //     </ListItem>
        //   )
        // )} */}
				{/* <div className={classes.toolbar}>
        {open && (
          <div className={classes.image}>
            <svg width={130} height={49} viewBox="0 0 130 49" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
              <g style={{ mixBlendMode: 'darken' }}>
                <rect width={130} height={49} fill="url(#pattern0)" />
              </g>
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width={1} height={1}>
                  <use xlinkHref="#image0" transform="translate(-0.00119844) scale(0.00273133 0.00724638)" />
                </pattern>
                <image
                  id="image0"
                  width={367}
                  height={138}
                  xlinkHref="data:image/png;base64,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"
                />
              </defs>
            </svg>
          </div>
        )}
       
      </div> */}
			</Drawer>
		</Box>
	)
}
export default Sidebar
