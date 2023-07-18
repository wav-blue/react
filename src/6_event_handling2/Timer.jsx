import   { useEffect }  from "react";

const  Timer = ( ) => {
    useEffect(  ( ) => {
         const  timerID = setInterval( ( ) => {   
                              console.log("타이머 진행중....");   
                               }, 1000);

          // clean-up (콤퍼넌트 제거직전 사전처리필요)
          return ( ) =>  {    clearInterval(timerID);     };   }, [  ] );
    return (  <div>   <span>타이머 시작.</span>    </div>  );
};
export default   Timer;
