import React from 'react'
import Head from 'next/head'

export default function CustomHead({ page }) {
	return (
		<Head>
			<title> MYDA-DASHBOARD | {page} </title>
		</Head>
	)
}
