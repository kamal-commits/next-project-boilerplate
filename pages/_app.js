/* eslint-disable @next/next/no-page-custom-font */
import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { CacheProvider } from '@emotion/react'
import Router, { useRouter } from 'next/router'

import createEmotionCache from '../utils/createEmotionCache'

import { Toaster } from 'react-hot-toast'

import axios from 'axios'
import NProgress from 'nprogress'
import { ThemeProvider } from '@mui/material/styles'
import theme from '../theme/theme'

import '../styles/globals.css'

const clientSideEmotionCache = createEmotionCache()

export default function MyApp(props) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props
	//console.log({ props })
	const router = useRouter()
	Router.events.on('routeChangeStart', () => NProgress.start())
	Router.events.on('routeChangeComplete', () => NProgress.done())
	Router.events.on('routeChangeError', () => NProgress.done())

	// useEffect(() => {
	// 	if (localStorage.getItem('token')) {
	// 		router.push(ROUTES.DASHBOARD)
	// 	} else {
	// 		router.push(ROUTES.LOGIN)
	// 	}
	// }, [])

	// axios.interceptors.request.use(async (config) => {
	// 	if (localStorage.user) {
	// 		let user = JSON.parse(localStorage.getItem('token'))
	// 		config.headers = {
	// 			...config.headers,
	// 			Authorization: user.token
	// 		}
	// 	}
	// 	return config
	// })

	axios.interceptors.response.use(
		(response) => response,
		(error) => {
			//console.log(error)
			const { status } = error.response
			if (status === 401) {
				localStorage.clear()
				window.location.replace('/Login')
			}
			return Promise.reject(error)
		}
	)

	//console.log({ emotionCache })
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta charSet='utf-8' />

				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta charSet='utf-8' />
				<meta name='viewport' content='width=device-width, initial-scale=1' />
				<meta name='theme-color' content='#000000' />

				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' />
				<link
					href='https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500&display=swap'
					rel='stylesheet'
				/>

				<title> TITLE </title>
			</Head>
			<Toaster />
			<ThemeProvider theme={theme}>
				{/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
				<CssBaseline />

				<Component {...pageProps} />
			</ThemeProvider>
		</CacheProvider>
	)
}

MyApp.propTypes = {
	Component: PropTypes.elementType.isRequired,
	emotionCache: PropTypes.object,
	pageProps: PropTypes.object.isRequired,
}
