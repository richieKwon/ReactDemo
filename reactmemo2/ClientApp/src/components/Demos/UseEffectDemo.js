import React, {useState, useEffect} from "react";

function useEffectDemo() {
    const [agree, setAgree] = useState(false);
    useEffect(
        ()=>{console.log("Page is being loaded")}
    );
    return (
        <>
            <h1>Useeffect!</h1>
            <input type="checkbox" value={agree}
                   onChange={() => setAgree(agree => !agree)}/>
            {agree ? "Agreed!" : "Not agreed"}
        </>
    )
}

export default useEffectDemo;  