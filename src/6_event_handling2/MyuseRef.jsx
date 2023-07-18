import  React, {useState, useRef} from "react";

function   MyuseRef() {
    const [renderer, setRenderer] = useState(0);   // State변수
    const countRef = useRef(0);                    // Ref변수
    let countVar = 0;                              // 변수

    const doRendering = () => {
        setRenderer(renderer + 1);
        console.log("state변수: ", renderer);
    };
    const increaseRef = () => {
        countRef.current = countRef.current + 1;
        console.log("ref변수: ", countRef.current);
    };
    const increaseVar = () => {
        countVar = countVar + 1;
        console.log("변수: ", countVar);
    };
    return (
        <div>
            <button onClick={doRendering}> state변수+ (렌더링) </button> {renderer}  <br />
            <button onClick={increaseRef}> Ref변수+ </button> {countRef.current}  <br />
            <button onClick={increaseVar}> 변수+ </button> {countVar}
        </div>
    );
}

export default  MyuseRef;