import { CircularProgress } from '@mui/material'
import axios from 'axios'

export const getNewToken = (cancelToken, setCancelToken) => {
	if (cancelToken != undefined) {
		cancelToken.cancel()
	}
	let tempCancelToken = axios.CancelToken.source()
	setCancelToken(tempCancelToken)
	return tempCancelToken.token
}

export const loadingAndText = (loading, text) => {
	return loading ? <CircularProgress size='25px' color='inherit' /> : text
}
export const convertArrayToObject = (array = ['k', 'kka']) => {
	let obj = {}
	array.forEach((val) => {
		obj[val] = val
	})

	return obj
}

export const success = 'success'
export const error = 'error'
import moment from 'moment'
import { AiFillDashboard, AiOutlineSafetyCertificate } from 'react-icons/ai'
import { FaUsers } from 'react-icons/fa'
import { IoTicket } from 'react-icons/io5'
import { SiGoogleanalytics } from 'react-icons/si'
import { Images } from '../constants/Images'
export const ROUTES = {
	DASHBOARD: '/Dashboard',
	LOGIN: '/Login',
	TICKETS: '/Tickets',
	USERS: '/Users',
	ANALYTICS: '/Analytics',
	CATEGORY: '/category/Category',
	PRODUCT: '/product/Product',
	STOCKS: '/product/Stocks',
}

export const formTokenHeader = (token) => {
	console.log('TOKEN RECEIVED : ', token)
	return { headers: { Authorization: token } }
}
export const formatTime = (date) => {
	return moment(date).format('h:mm a')
}

export const formatDate = (date) => {
	return moment(date).format('Do MMMM YYYY')
}

export const getSideItems = (userType) => {
	const CMSADMIN = [
		{ label: 'Dashboard', icon: AiFillDashboard, url: ROUTES.DASHBOARD },
		{ label: 'Category', icon: AiOutlineSafetyCertificate, url: ROUTES.CATEGORY },
		{ label: 'Product', icon: AiOutlineSafetyCertificate, url: ROUTES.PRODUCT },
		{ label: 'Stocks', icon: AiOutlineSafetyCertificate, url: ROUTES.STOCKS },
	]
	//console.log('userType : ', userType)
	const ADMIN = [
		[
			{ label: 'Dashboard', icon: AiFillDashboard, url: ROUTES.DASHBOARD },
			{ label: 'Tickets', icon: IoTicket, url: ROUTES.TICKETS },
			{ label: 'Users', icon: FaUsers, url: ROUTES.USERS },
			{ label: 'Analytics', icon: SiGoogleanalytics, url: ROUTES.ANALYTICS },
		],
	]

	return userType === 'CMSADMIN' ? CMSADMIN : ADMIN
}

export const upperCaseValue = (value) => {
	return value && value.toUpperCase()
}

// export const renderSocialMedia = (string)=>{
// switch (string) {
//   case upperCaseValue("LinkedIn") :

//     return Images.;

//   default:
//     break;
// }
// }

export const chartOptions = {
	plugins: {
		legend: {
			display: false,
		},
		tooltip: {
			enabled: true,
		},
	},
	// maintainAspectRatio: false
}
