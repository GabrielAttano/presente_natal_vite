import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  password: ''
}

const registerSlice = createSlice({
  name: 'register',
  initialState,
  reducers: {
    saveUsername: (state, action) => {
      state.username = action.payload
    },
    saveFirstname: (state, action) => {
      state.firstname = action.payload
    },
    saveLastname: (state, action) => {
      state.lastname = action.payload
    },
    saveEmail: (state, action) => {
      state.email = action.payload
    },
    savePassword: (state, action) => {
      state.password = action.payload
    }
  }
})

export default registerSlice.reducer
export const { saveUsername, saveFirstname, saveLastname, saveEmail, savePassword } = registerSlice.actions