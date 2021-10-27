import { IoNotificationsOffCircle } from 'react-icons/io5'

export const NoDataFound = ({ text }) => {
	return (
		<div style={{ margin: '80px 0px', textAlign: 'center', opacity: '0.3' }}>
			<IoNotificationsOffCircle style={{ fontSize: '100px' }} />
			{/* <CustomHeading heading={text ? text : 'No Data Found'} error /> */}
		</div>
	)
}
