import toast from 'react-hot-toast'

export const toastMessage = (message, type) => {
	//console.log('message : ', message)
	//console.log('type : ', type)
	toast(message, {
		hideProgressBar: true,
		type: type,
		position: 'bottom-center',
		pauseOnHover: false
	})
}
