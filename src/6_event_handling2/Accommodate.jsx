import   React,   { useState, useEffect }   from  "react";
import  useCounter   from   "./useCounter";

const MAX_CAPACITY = 10; //  정원 10명

function   Accommodate(props) {

    const   [isFull, setIsFull] = useState(false); 
    const   [isEmpty, setIsEmpty] = useState(false);
    
    const   [count, increaseCount, decreaseCount]  =  useCounter(0);

    useEffect( ( ) => {    console.log(`=== 1. useEffect(f): (정원초과? ${ isFull }`);    });
    useEffect( ( ) => {    console.log(`=== 1. useEffect(f): (인원이 있는가? ${ isEmpty }`);});
    useEffect( ( ) => {    console.log("=== 2. useEffect(f,[ ])  mount 호출됨");   
                                     return ( )  =>  {  console.log("=== 4. useEffect(f,[ ])  unmount 호출됨");   };  },  [  ] );

    useEffect( ( ) => {    setIsFull(count >= MAX_CAPACITY);    
                                    console.log(`=== 3. useEffect(f, [count]) : 입장인원 ${count}`);  },  [count] );
    useEffect( ( ) => {    setIsEmpty(count == 0);    
                                    console.log(`=== 3. useEffect(f, [count]) : 입장인원 ${count}`);  },  [count] );
    return (
        <div style={{ padding: 16 }}>
             <p>{`정원10명중 총 ${count}명 수용했습니다.`}</p>
             <button  onClick={ increaseCount } disabled={ isFull }> 입장 </button>
             <button  onClick={ decreaseCount } disabled={ isEmpty}> 퇴장 </button>
             { isEmpty && <p style={{color: "red"}}>퇴장할 인원이 없습니다.</p>}
             { isFull && <p style={{ color: "red" }}>정원이 가득찼습니다.</p>}
        </div>
    );
}

export default  Accommodate;
