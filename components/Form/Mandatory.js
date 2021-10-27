import React from 'react'

export default function Mandatory({ noValidate }) {
	return <> {noValidate ? <span style={{ color: 'red' }}>*</span> : <></>}</>
}
