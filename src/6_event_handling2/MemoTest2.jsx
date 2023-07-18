import   React,  { useState,  useCallback,  useMemo} from "react";

function MemoTest2() {
    const [ex, setEx] = useState(0);
    const [why, setWhy] = useState(0);

    // useMemo 사용하기
    useMemo(() => {     console.log(ex);    }, [ex]);

    //  함수를 실행하는 것이 아니라,  ( ) => {console.log(why)} 라는 함수자체를 반환한다.
    console.log(  useCallback( ( ) => {     console.log(why);     } , [why])     );

     return (
        <div>
            <button onClick={ ( ) => setEx((curr) => curr + 1) }> X </button>  { ex }
            <button onClick={ ( ) => setWhy((curr2) => curr2 + 1) }> Y </button>   { why }
        </div>  );
}

export default MemoTest2;
