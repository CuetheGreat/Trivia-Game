import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../services/trivia/questionSlice'

const store = configureStore({
  reducer: {
    question: questionReducer
  }
})

export default store