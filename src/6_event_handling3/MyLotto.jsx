import React, { useRef, useEffect } from "react";

function MyLotto(){
    //렌더링될 때 콘솔창 출력
    console.log(`>>> 렌더링되었습니다. !!!`);

    //함수형 컴포넌트여서 componentDidMount() 등을 사용할 수 없기 때문에
    //useEffect를 이용해 마운트,언마운트 시에 로그를 출력한다.
    useEffect(()=> {
        //컴포넌트가 마운트 된 이후 실행된다
        console.log('>>> 마운트되었습니다 !!!');
        return () => {
            //컴포넌트가 마운트 해제되기 전에 실행된다
            console.log('>>> 언마운트되었습니다 !!!');
        };
    })

    const numOfLotto = useRef(1);
    
    const handler = (str, event) => {
        console.log(numOfLotto.current.toString() + "회차 " + str + event.target.value);
        //alert창에 같은 메시지를 출력한다.
        alert(numOfLotto.current.toString() + "회차 " + str + event.target.value);
        
        numOfLotto.current = numOfLotto.current + 1;
    };


    return (
        <button 
            value="홍길동" 
            onClick={ (event) => handler("당첨자: ", event) }>
            당첨자확인
        </button>
    );
}

export default MyLotto;
