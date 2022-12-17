import React from 'react';
import './Password.css';

const Password = () => {
  return (
    <div className="password">
      <h4 className="title">Введите 4х значный пароль  (Верный ↠ 1337)</h4>
      <div className="top">
        <div className="screen"></div>
      </div>

      <div className="keys">
        <span>7</span>
        <span>8</span>
        <span>9</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span className="clear">←</span>
        <span>0</span>
        <span>E</span>
      </div>
    </div>
  );
};

export default Password;