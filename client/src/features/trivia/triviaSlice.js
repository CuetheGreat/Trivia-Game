import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchTriviaQuestions = createAsyncThunk('trivia/fetchTriviaQuestions', async () => {
  try {
    const response = await fetch('http://localhost:3000/api/trivia/questions');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (e) {
    return Promise.reject(e.message);
  }
});

export const fetchRandomQuestion = createAsyncThunk('trivia/fetchRandomQuestion', async () => {
  try {
    const response = await fetch('http://localhost:3000/api/trivia/question');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (e) {
    return Promise.reject(e.message);
  }
})

const initialState = {
  questions: [],
  randomQuestion: null,
  status: 'idle',
  error: null,
};

const questionSlice = createSlice({
  name: 'question',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // All Questions
      .addCase(fetchTriviaQuestions.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTriviaQuestions.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.questions = payload;
      })
      .addCase(fetchTriviaQuestions.rejected, (state, { error }) => {
        state.status = 'failure';
        state.error = error.message;
      })
      // Random Question
      .addCase(fetchRandomQuestion.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchRandomQuestion.fulfilled, (state, { payload }) => {
        state.status = 'success';
        state.randomQuestion = payload;
      })
      .addCase(fetchRandomQuestion.rejected, (state, { error }) => {
        state.status = 'failure';
        state.error = error.message;
      });
  },
});

export default questionSlice.reducer;