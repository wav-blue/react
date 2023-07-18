import React, { useState, useEffect } from "react";
import './SignUp.css'
function PasswordValid(props) {
const [passwd, setPasswd] = useState(""); // 비밀번호 입력저장용
const [passwdErr, setPasswdErr] = useState(""); // 오류메시지 저장용
const [displayErr, setDisplayErr] = useState(false); // 오류메시지 출력제어용

const handleChangePasswd = (event) => {
setPasswd(event.target.value);
};

const validationPassword = () => { // 비밀번호 유효성 검증함수
    if (passwd.length < 4) {
        console.log("비밀번호 문자수가 부족합니다. : ", passwd.length);
        setPasswdErr(`비밀번호 문자수가 부족합니다. (카운트: ${passwd.length})`);
        setDisplayErr(true); 
    }
    else {
        console.log("비밀번호 문자수가 정상입니다 : ", passwd.length);
        setPasswdErr(``);
        setDisplayErr(false);
    }
}
useEffect(validationPassword, [passwd] ); // state변수가 변경될때마다 검증함수 호출

const handleSubmit = (event) => {
    alert(`비밀번호: ${passwd}`); 
    event.preventDefault(); // submit 이벤트를 발생시키는 기본동작을 막음
    };
    return (
        <form onSubmit={ handleSubmit }>
            <label>
            비밀번호(최소4자 이상조건):
            <input type="password" value={passwd} onChange={handleChangePasswd} /> 
            </label>
            <br />
            { displayErr ? ( <p style={ { color : "red" } }> {passwdErr} </p> ) : ( <> </>) }
            <button type="submit">제출</button>
        </form>
    );
}
export default PasswordValid;
