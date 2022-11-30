// 1. 리덕스 스토어 생성 및 리덕스 DevTools extension 구성
import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
