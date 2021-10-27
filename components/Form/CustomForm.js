import {
	FormControl,
	FormHelperText,
	MenuItem,
	Select,
	Typography,
	TextField
} from '@mui/material'
import DateFnsUtils from '@date-io/date-fns'
// import {
// 	MuiPickersUtilsProvider,
// 	KeyboardDatePicker,
// 	KeyboardTimePicker
// } from '@material-ui/pickers'
import React from 'react'
import useValidation from '../../hooks/Validation/useValidation'
import { Button } from '@mui/material'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
	formControl: {
		width: '100%',
		[theme.breakpoints.up('md')]: {
			width: '100%',
			marginTop: '22px',
			fontSize: '16px'
		}
	},
	input: {
		width: '90%',
		fontSize: '16px'
		// marginTop: '16px',
	}
}))

const ShowImportant = ({ noValidate }) => {
	if (noValidate) return <></>
	return <span style={{ color: 'red' }}>*</span>
}

export function CustomSelect({
	handleChange,
	value,
	label,
	className,
	options,
	placeholder,
	setForm,
	form,
	name,
	disabled,
	errorMessage,
	onKeyDown,
	fieldName,
	fieldName2 = null,
	fieldValue,
	conditions = [],
	handleValidation = () => {},
	noValidate = false
}) {
	const classes = useStyles()

	if (noValidate) handleValidation = () => {}

	const handleOnChange = (event) => {
		handleChange(event.target.value)
		handleValidation(event, conditions)
	}

	const handleChangeNew = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value })
		handleValidation(event, conditions)
	}

	return (
		<div>
			<FormControl
				className={className ? `${className} ${classes.input}` : classes.input}
				style={{ marginTop: '22px', minWidth: '100%' }}
			>
				<Typography style={{ fontWeight: 600, fontSize: '14px' }}>
					{label}
					<ShowImportant noValidate={noValidate} />
				</Typography>
				<Select
					name={name}
					onChange={handleChange ? handleOnChange : handleChangeNew}
					value={value}
					// className={className ? `${className} ${classes.input}` : classes.input}
					disabled={disabled}
					InputLabelProps={{ shrink: false }}
					onBlur={(event) => handleValidation(event, conditions)}
					error={errorMessage ? true : false}
					variant='standard'
					style={{ minWidth: '100%' }}
				>
					<MenuItem value='' disabled>
						{' '}
						<em>{placeholder ? placeholder : label}</em>{' '}
					</MenuItem>
					{options &&
						options.map((item, index) => (
							<MenuItem value={fieldValue ? item[fieldValue] : item} key={index}>
								{fieldName
									? `${item[fieldName]} ${fieldName2 ? '/' + item[fieldName2] : ''}`
									: item}
							</MenuItem>
						))}
				</Select>
				<FormHelperText style={{ color: 'red' }}>{errorMessage}</FormHelperText>
			</FormControl>
		</div>
	)
}

// export function CustomDate({
// 	handleChange,
// 	value,
// 	label,
// 	className,
// 	setForm,
// 	form,
// 	name,
// 	disabled,
// 	shrink,
// 	errorMessage,
// 	maxDate,
// 	minDate,
// 	conditions = [],
// 	handleValidation = () => {},
// 	noValidate = false
// }) {
// 	const classes = useStyles()
// 	if (noValidate) handleValidation = () => {}

// 	const handleOnChange = (event) => {
// 		let changedDate = new Date(event).toISOString().slice(0, 10)
// 		handleChange(changedDate)
// 		handleValidation({ target: { name, value: changedDate } }, conditions)
// 	}

// 	const handleChangeNew = (event) => {
// 		let changedDate = new Date(event).toISOString().slice(0, 10)
// 		setForm({ ...form, [name]: changedDate })
// 		handleValidation({ target: { name, value: changedDate } }, conditions)
// 	}

// 	return (
// 		<div>
// 			<FormControl
// 				className={className ? `${className} ${classes.input}` : classes.input}
// 				style={{ marginTop: '22px' }}
// 			>
// 				<Typography style={{ fontWeight: 600, fontSize: '14px' }}>
// 					{label}
// 					<ShowImportant noValidate={noValidate} />
// 				</Typography>
// 				<MuiPickersUtilsProvider utils={DateFnsUtils}>
// 					<KeyboardDatePicker
// 						disableToolbar
// 						variant='inline'
// 						format='dd/MM/yyyy'
// 						margin='normal'
// 						name={name}
// 						onChange={handleChange ? handleOnChange : handleChangeNew}
// 						value={value}
// 						// className={className ? `${className} ${classes.input}` : classes.input}
// 						disabled={disabled}
// 						maxDate={maxDate}
// 						minDate={minDate}
// 						autoOk={true}
// 						KeyboardButtonProps={{
// 							'aria-label': 'change date'
// 						}}
// 						onBlur={(event) =>
// 							handleValidation({ target: { name, value: event } }, conditions)
// 						}
// 						style={{ width: '90%', marginTop: '0px' }}
// 					/>
// 				</MuiPickersUtilsProvider>
// 				<FormHelperText style={{ color: 'red' }}>{errorMessage}</FormHelperText>
// 			</FormControl>
// 		</div>
// 	)
// }

// export function CustomTime({
// 	handleChange,
// 	value,
// 	label,
// 	className,
// 	setForm,
// 	form,
// 	name,
// 	errorMessage,
// 	conditions = [],
// 	handleValidation = () => {},
// 	noValidate = false
// }) {
// 	const classes = useStyles()
// 	if (noValidate) handleValidation = () => {}

// 	const handleOnChange = (event) => {
// 		let changedDate = new Date(event).toISOString()
// 		handleChange(changedDate)
// 		handleValidation({ target: { name, value: changedDate } }, conditions)
// 	}

// 	const handleChangeNew = (event) => {
// 		//console.log('EVENT : ', event)
// 		let changedDate = new Date(event).toISOString()
// 		setForm({ ...form, [name]: changedDate })
// 		handleValidation({ target: { name, value: changedDate } }, conditions)
// 	}

// 	return (
// 		<div>
// 			<FormControl
// 				className={className ? `${className} ${classes.input}` : classes.input}
// 				style={{ marginTop: '22px' }}
// 			>
// 				<Typography style={{ fontWeight: 600, fontSize: '14px' }}>
// 					{label}
// 					<ShowImportant noValidate={noValidate} />
// 				</Typography>
// 				<MuiPickersUtilsProvider utils={DateFnsUtils}>
// 					{/* <KeyboardTimePicker
//             // disableToolbar
//             variant="inline"
//             margin="normal"
//             name={name}
//             onChange={handleChange ? handleOnChange : handleChangeNew}
//             value={value}
//             // className={className ? `${className} ${classes.input}` : classes.input}
//             autoOk={true}
//             KeyboardButtonProps={{
//               'aria-label': 'change date',
//             }}
//             onBlur={(event) => handleValidation({ target: { name, value: event } }, conditions)}
//             style={{ width: '90%', marginTop: '0px' }}
//           /> */}

// 					<KeyboardTimePicker
// 						margin='normal'
// 						id='time-picker'
// 						value={value}
// 						onChange={handleChange ? handleOnChange : handleChangeNew}
// 						KeyboardButtonProps={{
// 							'aria-label': 'change time'
// 						}}
// 					/>
// 				</MuiPickersUtilsProvider>
// 				<FormHelperText style={{ color: 'red' }}>{errorMessage}</FormHelperText>
// 			</FormControl>
// 		</div>
// 	)
// }

export function CustomInput({
	handleChange,
	value,
	label,
	className,
	setForm,
	form,
	name,
	disabled,
	errorMessage,
	type = 'text',
	conditions = [],
	handleValidation = () => {},
	noValidate = false
}) {
	const classes = useStyles()
	if (noValidate) handleValidation = () => {}

	const handleCustomChange = (event) => {
		handleChange(event.target.value)
		handleValidation(event, conditions)
	}

	const handleFieldChange = (event) => {
		setForm({ ...form, [event.target.name]: event.target.value })
		handleValidation(event, conditions)
	}

	return (
		<div>
			<FormControl
				className={className ? `${className} ${classes.input}` : classes.input}
				style={{ marginTop: '22px', width: '100%' }}
			>
				<Typography style={{ fontWeight: 600, fontSize: '14px' }}>
					{label}
					<ShowImportant noValidate={noValidate} />
				</Typography>
				<TextField
					variant='standard'
					value={value}
					name={name}
					onChange={handleChange ? handleCustomChange : handleFieldChange}
					onBlur={(e) => handleValidation(e, conditions)}
					disabled={disabled}
					type={type ? type : 'text'}
					error={errorMessage ? true : false}
					inputProps={type === 'NUMBER' && { pattern: '[-+]?[0-9]*[.,]?[0-9]+' }}
					// style={{ marginTop: '16px' }}
				/>
				<FormHelperText style={{ color: 'red' }}>{errorMessage}</FormHelperText>
			</FormControl>
		</div>
	)
}

// export function CustomMultiSelect({
// 	handleChange,
// 	value,
// 	label,
// 	className,
// 	options,
// 	placeholder,
// 	setForm,
// 	form,
// 	name,
// 	disabled,
// 	errorMessage,
// 	onKeyDown,
// 	fieldName,
// 	fieldName2 = null,
// 	fieldValue,
// 	conditions = [],
// 	handleValidation = () => {},
// 	noValidate = false
// }) {
// 	const [selectedAll, setSelectedAll] = useState(false)

// 	const isExist = (item) => {
// 		return value.indexOf(fieldValue ? item[fieldValue] : item) !== -1
// 	}

// 	let formValue = options.filter((item) => item && isExist(item))

// 	const classes = useStyles()
// 	if (noValidate) handleValidation = () => {}

// 	if (options && options.length && value.length !== options.length)
// 		options = fieldName
// 			? [{ [fieldName]: 'Select All' }, ...options]
// 			: ['Select All', ...options]

// 	const handleSelectChange = (e, values) => {
// 		// all options is selected or not
// 		let isAll = !values.every((item) =>
// 			fieldValue
// 				? item[fieldValue] && item[fieldName] !== 'Select All'
// 				: item !== 'Select All'
// 		)

// 		isAll = isAll || values.length === options.length - 1
// 		let temp = [...options]
// 		// if all option is selected than remove first option as it is select all option
// 		temp = isAll ? temp.splice(1) : values

// 		sortByName(temp, fieldName)

// 		// for setting actual value, array of ids, fieldvalue
// 		let actualSelectedOptions = fieldValue
// 			? temp.map((item) => item[fieldValue])
// 			: temp
// 		handleChange
// 			? handleChange(actualSelectedOptions)
// 			: setForm(actualSelectedOptions)

// 		setSelectedAll(isAll)
// 		handleValidation({ target: { value: actualSelectedOptions, name } }, conditions)
// 	}

// 	return (
// 		<FormControl
// 			className={className ? `${className} ${classes.input}` : classes.input}
// 			style={{ marginTop: '22px', width: '97%' }}
// 		>
// 			<Typography style={{ fontWeight: 600, fontSize: '14px' }}>
// 				{label}
// 				<ShowImportant noValidate={noValidate} />
// 			</Typography>
// 			<Autocomplete
// 				multiple
// 				diabled={disabled}
// 				options={
// 					selectedAll
// 						? options.slice(1).filter((item) => item && !isExist(item))
// 						: options.filter((item) => item && !isExist(item))
// 				}
// 				getOptionLabel={(option) =>
// 					fieldName
// 						? `${option[fieldName]}${
// 								fieldName2 && option[fieldName] !== 'Select All'
// 									? '/' + option[fieldName2]
// 									: ''
// 						  }`
// 						: option
// 				}
// 				disableCloseOnSelect
// 				onChange={handleSelectChange}
// 				getOptionDisabled={(option) => option && isExist(option)}
// 				value={formValue}
// 				renderInput={(params) => (
// 					<TextField
// 						{...params}
// 						variant='standard'
// 						placeholder={placeholder}
// 						fullWidth={true}
// 					/>
// 				)}
// 				//renderOption={(option)=><span disabled="true" >{option.name}</span>}
// 			/>
// 			<FormHelperText style={{ color: 'red' }}>{errorMessage}</FormHelperText>
// 		</FormControl>
// 	)
// }

export function CustomButton({
	text,
	startIcon,
	endIcon,
	handleSubmit,
	disabled,
	className,
	outlined
}) {
	return (
		<Button
			variant={outlined ? 'outlined' : 'contained'}
			color='primary'
			onClick={handleSubmit}
			endIcon={endIcon}
			startIcon={startIcon}
			style={{ textTransform: 'capitalize' }}
			disabled={disabled}
			className={className}
		>
			{text}
		</Button>
	)
}
