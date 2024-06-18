import { configureStore } from '@reduxjs/toolkit';
import questionReducer from '../features/trivia/questionSlice'

const store = configureStore({
  reducer: {
    question: questionReducer
  }
})

export default store