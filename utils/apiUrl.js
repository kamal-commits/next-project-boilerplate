import { convertArrayToObject } from './constants'

export const API_URL = {
	TICKET: convertArrayToObject([
		'GET_ALL_TICKET',
		'ADD_TICKET',
		'EDIT_TICKET',
		'GET_TICKET',
		'DELETE_MANY_TICKET',
	]),

	USER: convertArrayToObject([
		'GET_ALL_USER',
		'ADD_USER',
		'EDIT_USER',
		'GET_USER',
		'DELETE_MANY_USER',
	]),

	CATEGORY: convertArrayToObject([
		'GET_ALL_CATEGORY',
		'ADD_CATEGORY',
		'EDIT_CATEGORY',
		'GET_CATEGORY',
		'DELETE_MANY_CATEGORY',
	]),

	PRODUCT: convertArrayToObject([
		'GET_ALL_PRODUCT',
		'ADD_PRODUCT',
		'EDIT_PRODUCT',
		'GET_PRODUCT',
		'DELETE_MANY_PRODUCT',
	]),
	STOCK: convertArrayToObject([
		'GET_ALL_STOCK',
		'ADD_STOCK',
		'EDIT_STOCK',
		'GET_STOCK',
		'DELETE_MANY_STOCK',
	]),
}
