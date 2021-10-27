// import { responsiveFontSizes } from '@mui/material'
// import { createTheme } from '@mui/material/styles'

// let Theme = createTheme({
// 	palette: {
// 		primary: {
// 			main: '#2E2E2E'
// 		},
// 		secondary: {
// 			main: '#2E2E2E'
// 		}
// 	},
// 	breakpoints: {
// 		values: {
// 			xs: 0,
// 			sm: 320,
// 			md: 750,
// 			lg: 1025,
// 			xl: 1920
// 		}
// 	},
// 	typography: {
// 		// fontFamily: 'Open Sans'
// 		fontFamily: 'Poppins'
// 	}
// })
// const theme = responsiveFontSizes(Theme)

// export default theme

import { createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

// Create a theme instance.
const theme = createTheme({
	palette: {
		primary: {
			main: '#2E2E2E'
		},
		secondary: {
			main: '#19857b'
		},
		error: {
			main: red.A400
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 320,
			md: 750,
			lg: 1025,
			xl: 1920
		}
	},
	typography: {
		// fontFamily: 'Open Sans'
		fontFamily: 'Poppins'
	}
})

export default theme
