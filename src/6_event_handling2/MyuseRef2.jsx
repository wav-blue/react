import React, {useEffect, useRef} from "react";

function MyuseRef2() {
    const inputRef = useRef();     // Ref변수(DOM객체접근용)

    useEffect(() => {              // mount 될 때 한번 이펙트함수 실행
        console.log(inputRef);     // input 엘리먼트객체 확인
        inputRef.current.focus();  // input 엘리먼트 입력활성화 제어
    }, []);  

    const login = () => {
        alert(`로그인ID: ${inputRef.current.value} `);  // ref변수로 입력값추출
        console.log(`입력: ${inputRef.current.value}`); // ref변수로 입력값추출
        inputRef.current.focus();                       // 입력필드 포커스 효과!
    };

    return (
        <div>
            <input ref={inputRef} type="text" placeholder="자동으로 포커스되죠?"/>
            <button onClick={login}> Login </button>
        </div>
    );
}

export default MyuseRef2;
