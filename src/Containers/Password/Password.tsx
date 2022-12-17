import React from 'react';
import './Password.css';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../app/store";
import {clearMessage, deleteNumber, enter, number} from "./passwordSlice";

const Password = () => {
  const dispatch = useDispatch();
  const {value, isGranted} = useSelector((state: RootState) => state.password);
  const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3];


  const onClick = (num: number)=> {
    return () => {
      dispatch(clearMessage());
      dispatch(number(String(num)));
    };
  };

  return (
    <div className="password">
      <h4 className="title">Введите 4х значный пароль  (Верный ↠ 1337)</h4>
      <div className="top">
        <div className={`screen ${isGranted}`}>{value.replace(/[\s\S]/g, "*") || isGranted.split('_').join(' ')}</div>
      </div>

      <div className="keys">
        {numbers.map((num: number) => <button onClick={onClick(num)}>{num}</button>)}
        <button className="clear" onClick={() => dispatch(deleteNumber())}>←</button>
        <button onClick={() => dispatch(number('0'))}>0</button>
        <button onClick={() => dispatch(enter())}>E</button>
      </div>
    </div>
  );
};

export default Password;