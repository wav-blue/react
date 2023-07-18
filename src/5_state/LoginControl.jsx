import React, { useState, useEffect } from "react";
import Greeting from "./Greeting"; // 인사말텍스트 컴포넌트
import LoginButton from "./LoginButton"; // 로그인버튼 컴포넌트
import LogoutButton from "./LogoutButton"; // 로그아웃버튼 컴포넌트
import "./LoginControl.css";
import IdView from "./IdView" //ID 입력 현황 컴포넌트

//log를 출력하는 함수
function log_print(count, bool){
    console.log(count + "번 클릭");
    console.log("isLoggedIn State: "+ bool);
}

function LoginControl( ) {
    const [count, setCount] = useState(1); //버튼 클릭 횟수
    const [ isLoggedIn, setIsLoggedIn ] = useState(false); // 로그인상태 state변수

    const handleLoginClick = ( ) => { 
        setIsLoggedIn( true ); setCount(count + 1)
        log_print(count, isLoggedIn)}; // 로그인클릭

    const handleLogoutClick = ( ) => {
        setIsLoggedIn( false );  setCount(count + 1)
        log_print(count, isLoggedIn)}; // 로그아웃클릭
    
    let button;

   //실시간 출력
    const onChange=(e)=>{
        setText((myText)=>document.getElementById("myInputText").value);
    };
    const [myText, setText]=useState("");


    if (isLoggedIn) { button = <LogoutButton onClick={ handleLogoutClick } />;
    } else { button = <LoginButton onClick={ handleLoginClick } />; }

    //로그인 화면에서만 아이디 입력 컴포넌트가 나타나도록 if문
    //아이디를 입력하고 그 값을 전달받아 아이디를 출력하는 IdView 컴포넌트를 가져옴
    if(!isLoggedIn) return ( 
        <div>
            <div className="login"> 
            <Greeting isLoggedIn= { isLoggedIn } /> { button }
            <p>ID입력</p> <input onChange={onChange} value={myText} id="myInputText"/>{" "}
            </div>
            <IdView  myText={myText} />
        </div>

    ); else return(
        <div>
            <div className="login"> 
            <Greeting isLoggedIn= { isLoggedIn } /> { button }
            </div>
        </div>
    ); }
export default LoginControl