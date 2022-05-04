const { createSlice } = require("@reduxjs/toolkit");

// createSlide giúp tạo ra reducer, action
const counterSlice = createSlice({
  // truyền 1 cái object
  name: "counter",
  // giá trị khởi tạo
  initialState: 0,
  // object
  reducers: {
    increase(state, action) {
      return state + 1;
    },
    decrease(state, action) {
      return state - 1;
    },
  },
});

// dùng object destructoring lấy thông tin từ counter
const { actions, reducer } = counterSlice;

//export dạng name
export const { increase, decrease } = actions;

//export default
export default reducer;
