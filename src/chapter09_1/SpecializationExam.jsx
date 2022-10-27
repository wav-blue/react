import React from "react";
import { useState } from "react";
import Diagram from "./Diagram";
import './SpecializationExam.css';

//경고 다이얼로그
function WarningDiagram(props){
    return(
        <Diagram title="warning" 
        backgroundColor="#B22222" 
        textColor="#FFFFFF"
        btn='true'
        imgType='warning'>
        </Diagram>
        
    )
}
//인사말 다이얼로그
function SignUpDiagram(props){
    //이름을 입력받기 위한 useState함수
    const [userName, setUserName] = useState('');
    //input의 입력값을 받아온다
    const handleChange = (event) =>{
        setUserName(event.target.value);
    }
    //버튼 클릭 시 이벤트 처리
    const handleSignUp = () =>{
        alert(`${userName}님 환영합니다!`);
    }
    return(
        <Diagram
        title="SignUp"
        backgroundColor="#FAFAD2"
        textColor="#8B4513"
        icon='AiOutlineInfoCircle'
        btn='false'
        imgType="info">
            <input value={userName} onChange={handleChange}/>
            <button onClick={handleSignUp}>입력 완료</button>
        </Diagram>
    )
}
//오류 다이얼로그
function ErrorDiagram(props){
    return(
        <Diagram title="오류가 발생했습니다" 
        message="에러 내용: xxx"
        backgroundColor="grey" 
        textColor="#FFFFFF"
        btn='true'
        imgType='error'>
        </Diagram>
        
    )
}
//공지사항 다이얼로그
function NoticeDiagram(props){
    return(
        <Diagram title="공지사항" 
        message="공지사항입니다."
        backgroundColor="#FFD700" 
        textColor="black"
        btn='true'
        imgType='notification'>
        </Diagram>
    )
}

function SpecializationExam(props) {
return (
<div>
    <WarningDiagram/>
    <SignUpDiagram/>
    <ErrorDiagram/>
    <NoticeDiagram/>
</div>
);
}
export default SpecializationExam;