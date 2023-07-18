import React, {useState} from "react";
import "./LoginComponent.css";
import LoginForm from "./LoginForm";

function LoginComponent(props){
    
    //state 변수 선언
    console.log("//state 변수 선언");
    const [mode, setMode] = useState("login");
    //로그인 상태에 따른 state 변수 변경
    const toggleMode = () => {
        console.log("//로그인 상태에 따른 state 변수 변경");
        setMode(mode === "login"? "signup":"login");
    };

    //2개의 파라미터를 넘겨받아 호출될 이벤트핸들러
    const onSubmit = (myid, mypass)=>{
        console.log("Click Login button");
        alert(myid + "\n" + mypass);
    };

    return(
        <div>
            <div className={`form-block-wrapper form-block-wrapper--is-${mode}`}></div>
            <section className={`form-block form-block--is-${mode}`}>
                <header className="form-block__header">
                    <h1>{mode === "login"?"로그인":"회원가입"}</h1>
                    <div className="form-block__toggle-block">
                        <span>
                            {mode === "login"
                            ?"계정이 없으면 ..."
                            :"계정이 있다면..."}
                            이곳을 클릭하세요!
                        </span>
                        <input
                            id="form-toggler"
                            type="checkbox"
                            onClick={toggleMode}
                        /> 
                        <label htmlFor="form-toggler"></label>                  
                    </div>
                </header>
                <LoginForm mode={mode} onSubmit={onSubmit}/>
            </section>
        </div>
    );
}

export default LoginComponent;