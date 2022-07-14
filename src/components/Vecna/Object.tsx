import { useState, useRef } from 'react';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader'
import { useLoader, useThree, useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { MODELS_URLS } from '../../constans/constans';

const Object = () =>{
    const [clicked, click] = useState(false)
    const vecnaRef = useRef<Mesh>(null!)

    const { urlVecna } = MODELS_URLS
    const obj = useLoader(OBJLoader, urlVecna)
    const { camera } = useThree()

    camera.position.x = 15
    camera.position.z = 5
    camera.position.y = 17
    
    useFrame(() => {
        if(clicked){
            vecnaRef.current.rotation.y += 0.01 
        } else {
            vecnaRef.current.rotation.y += 0.00
        }
    })

    return <primitive onClick={() => click(!clicked)} ref={vecnaRef} object={obj} />
    
}

export default Object