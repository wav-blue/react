import   { useEffect }  from "react";
import   { useState }  from "react";

const Timer = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCount(count + 1);
        }, 1000);
    
        return () => clearInterval(timer);
    }, []);
}

export default Timer;