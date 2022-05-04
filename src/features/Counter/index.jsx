import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase } from "./counterSlice";

function CounterFeature(props) {
  const dispatch = useDispatch();
  // muốn lấy counter thì dùng useSelector
  const counter = useSelector((state) => state.counter);

  //tạo hàm handleIncreaseClick
  const handleIncreaseClick = () => {
    const action = increase(); // action creator
    console.log(action); // chỉ trả về 1 object action
    dispatch(action); // lúc này nó sẽ gửi lên dispatch lên redux
  };

  const handleDecreaseClick = () => {
    const action = decrease();
    console.log(action);
    dispatch(action);
  };
  return (
    <div>
      Counter: {counter}
      <div>
        <button onClick={handleIncreaseClick}>Increase</button>
        <button onClick={handleDecreaseClick}>Decrease</button>
      </div>
    </div>
  );
}

export default CounterFeature;
