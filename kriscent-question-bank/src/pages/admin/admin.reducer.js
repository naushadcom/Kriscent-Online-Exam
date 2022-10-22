import { actionTypes } from "./admin.action.js";

const initState = {
	
	login: false,
	email:"",
	hotelData: [],
};

export const adminDataReducer = (state = initState, { type, payload }) => {
	switch (type) {
		case actionTypes.FETCH_DATA_LOADING: {
			return {
				...state,
			};
		}
		case actionTypes.FETCH_DATA_SUCCESS: {
			return {
				...state,
			};
		}
		case actionTypes.FETCH_DATA_FAILURE: {
			return {
				...state,
			};
		}
		case actionTypes.Login: {
			return {
				...state,
				login: true,
				email: payload,
			};
		}
		case actionTypes.ADD_HOTEL_SUCSESS: {
			// console.log(state.hotelData)
			return {
				...state,
				hotelData: payload,
			};
		}
		default:
			return state;
	}
};
