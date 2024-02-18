import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  BooksData : [],
  searchquery : "filter=free-ebooks",
  isUserLoggedIn : false,
  openLoginComponent : false
};

const mySlice = createSlice({
  name: 'myReducer',
  initialState,
  reducers: {
    setBooks : (state ,action) => {
     state.BooksData = action.payload;
    },
    setSearchQuery : (state, action) => {
      state.searchquery = action.payload
    },
    setIsUserLoggedIn : (state , action) => {
      state.isUserLoggedIn  = action.payload
    },
    setloginComponent : (state , action) => {
      state.openLoginComponent = action.payload
    }
  }, 
});

export const {setBooks, setSearchQuery, setIsUserLoggedIn, setloginComponent} = mySlice.actions;
export default mySlice.reducer;




