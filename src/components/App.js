// create your App component here
import {useEffect, useState} from "react";

export default function App() {
    const [dog, setDog] = useState("")
    useEffect(async () => {
        const data = await fetch("https://dog.ceo/api/breeds/image/random").then(data=> data.json())
        setDog(data.message)
    }, [])

    return (
        <div>
            {dog.length===0 ? <p>Loading...</p> : <img src={dog} alt="A Random Dog"/>}
        </div>
    )
}