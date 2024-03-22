import { useEffect, useState } from "react"

function PokemonList() {



    useEffect(() => {
        console.log("effect called");
    }, [])

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);



    return (
        <>
        <div>
            X : {x} <button onClick={() => setX(x+1)}>INC</button>
        </div>
        <div>
            Y : {y} <button onClick={() => setX(y+1)}>INC</button>
        </div>
        </>
    )
}

export default PokemonList
