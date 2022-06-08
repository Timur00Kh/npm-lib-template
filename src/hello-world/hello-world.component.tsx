import React, {useEffect, useState} from 'react';

import './hello-world.styles.css'

const HelloWorld = () => {

    const [infiniteRerender, setIR] = useState(0)

    useEffect(() => {
        setIR(i => i + 1)
    }, [infiniteRerender])

    // @ts-ignore
    return <h1 className="hello" onClick={setIR(i => i + 1)}>Hello World {infiniteRerender}</h1>;
}

export default HelloWorld;