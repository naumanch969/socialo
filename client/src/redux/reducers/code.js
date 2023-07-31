import { createSlice } from '@reduxjs/toolkit'
import { codePosts } from '../../App/pages/Code/data';
import Cookie from 'js-cookie'

const codeSlice = createSlice({
  name: 'code',
  initialState: {
    codes: codePosts,
    filteredCodes: [...codePosts],
    isFetching: false,
    error: '',
    currentCode: {}
  },
  reducers: {
    start: (state) => { state.isFetching = true; state.error = '' },
    end: (state) => { state.isFetching = false; state.error = '' },
    error: (state, action) => { state.isFetching = false; state.error = (action.payload || 'Something went wrong!') },

    like: (state, action) => {
      const codeId = action.payload
      const user = JSON.parse(Cookie.get('profile'))
      state.filteredCodes = state.filteredCodes.map(code => code = code._id == codeId ? { ...code, likes: [...code.likes, user._id] } : code)
      console.log(state.filteredCodes)
    },

    filter: (state, action) => {
      const filter = action.payload
      switch (filter) {
        case 'all':
          state.filteredCodes = state.codes
          break
        case 'recommended':
          state.filteredCodes = state.codes
          break
        case 'latest': {
          const sortedArray = state.filteredCodes.slice().sort((a, b) => a.createdAt - b.createdAt)
          state.filteredCodes = sortedArray
          break
        }
        case 'related':
          state.filteredCodes = state.codes
          break
        case 'famous':
          const sortedArray = state.filteredCodes.slice().sort((a, b) => b.likes.length - a.likes.length)
          state.filteredCodes = sortedArray
          break
      }
    },





    ALike: (state, action) => {
      const codePost = action.payload
      state.codes = state.codes.map(code => code = code._id == codePost._id ? action.payload : code)
    }
  }
})

export default codeSlice.reducer
export const { start, end, error, like, filter, ALike } = codeSlice.actions