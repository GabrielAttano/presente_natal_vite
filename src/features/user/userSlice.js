import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoggedIn: false,
  isRobot: true,
  accountCreated: false,
  username: '',
  firstname: '',
  lastname: '',
  email: '',
  password: '',
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },
    logout: (state) => {
      state.isLoggedIn = false
    },
    setAccountCreated: (state, action) => {
      state.accountCreated = action.payload
    },
    setIsRobot: (state, action) => {
      state.isRobot = action.payload
    },
    setUsername: (state, action) => {
      state.username = action.payload
    },
    setFirstname: (state, action) => {
      state.firstname = action.payload
    },
    setLastname: (state, action) => {
      state.lastname = action.payload
    },
    setEmail: (state, action) => {
      state.email = action.payload
    },
    setPassword: (state, action) => {
      state.password = action.payload
    }

  }
})

export default userSlice.reducer
export const { login, logout, setIsRobot, setUsername, setPassword, setEmail, setFirstname, setLastname, setAccountCreated } = userSlice.actions