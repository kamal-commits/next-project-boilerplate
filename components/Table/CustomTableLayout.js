import {
	TableCell,
	TableRow,
	TableBody,
	IconButton,
	Avatar,
	Dialog,
} from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React, { useState } from 'react'
import { AiOutlineInfoCircle } from 'react-icons/ai'
import CustomPagination from '../Custompagination'
import { CustomButton } from '../Form/CustomForm'
import CustomSwitch from '../Form/CustomSwitch'
import Loader from '../Loader'
import Status from '../Status'
import CustomTable from './CustomTable'
import { NoDataFound } from './NoDataFound'

export default function CustomTableLayout({
	loading = false,
	tableData = [],
	heading,
	paginate = {},
	handlePageChange = () => {},
	handleSwitchChange = () => {},
}) {
	const [image, setImage] = useState(false)
	return (
		<>
			<Dialog open={image} onClose={() => setImage(false)}>
				<img src={image} alt='alt' />
			</Dialog>

			<CustomTable heading={heading}>
				<TableBody>
					{!loading &&
						tableData.map((val, inbdex) => {
							return (
								<TableRow key={inbdex}>
									{val.map((item, index2) => {
										let value = item.value
										return (
											<TableCell
												key={index2}
												style={item.style}
												onClick={item.onClick}
											>
												{item.type === 'STATUS' && (
													<CustomSwitch
														checked={item.active}
														handleChange={() => handleSwitchChange(item)}
													/>
												)}
												{item.type === 'BUTTON' && (
													<CustomButton
														text={item.text}
														handleSubmit={item.onClick}
													/>
												)}
												{item.type === 'IMAGE' && (
													<img
														src={item.image}
														style={{ margin: 'auto', cursor: 'pointer' }}
														onClick={() => setImage(item.image)}
													/>
												)}
												{item.type === 'INFO' && (
													<IconButton onClick={item.onClick}>
														<AiOutlineInfoCircle />
													</IconButton>
												)}
												{item.type === 'STATUS_ENUM' && (
													<Status value={item.status} />
												)}
												{!item.type && !value ? '--' : value}
											</TableCell>
										)
									})}
								</TableRow>
							)
						})}
				</TableBody>
			</CustomTable>
			{!loading && tableData.length > 0 && (
				<CustomPagination
					noOfPages={paginate.totalPage}
					page={paginate.page}
					handleChange={handlePageChange}
				/>
			)}
			{loading && <Loader />}

			{!loading && tableData.length === 0 && <NoDataFound />}
		</>
	)
}
