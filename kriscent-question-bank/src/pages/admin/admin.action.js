import axios from "axios";

export const actionTypes = {
  FETCH_DATA_LOADING: "FETCH_DATA_LOADING",
  FETCH_DATA_SUCCESS: "FETCH_DATA_SUCCESS",
  FETCH_DATA_FAILURE: "FETCH_DATA_FAILURE",

  Login: "Login",

  ADD_HOTEL_LOADING: "ADD_HOTEL_LOADING",
  ADD_HOTEL_SUCSESS: "ADD_HOTEL_SUCSESS",
  ADD_HOTEL_FAILURE: "ADD_HOTEL_FAILURE",
};

export const adminLoggedIn = (payload) => {
  return {
    type: actionTypes.Login,
    email: payload,
  };
};
const addHotelLoading = () => {
  return {
    type: actionTypes.ADD_HOTEL_LOADING,
  };
};

const addHotelsuccess = (payload) => {
  console.log(payload);
  return {
    type: actionTypes.ADD_HOTEL_SUCSESS,
    payload: payload,
  };
};

const addHotelfail = () => {
  return {
    type: actionTypes.ADD_HOTEL_FAILURE,
  };
};
export const filterData = (e) => (dispatch) => {
  axios
    .get(`http://localhost:3001/question?category=${e}`)
    .then((res) => {
      dispatch(addHotelsuccess(res.data));
      console.log(res.data);
    })
    .catch((err) => console.log(err));
};
export const getHotels = () => (dispatch) => {
  axios
    .get(`http://localhost:3001/question`)
    .then((res) => dispatch(addHotelsuccess(res.data)))
    .catch((err) => dispatch(addHotelfail(err)));
};
