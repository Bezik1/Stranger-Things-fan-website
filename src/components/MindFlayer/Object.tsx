import { useLoader, useThree } from "@react-three/fiber"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import { Vector3, Color, MeshPhongMaterial } from "three"


import { MODELS_URLS } from "../../constans/constans"

const Object = ({ click, clicked } : {  click: React.Dispatch<React.SetStateAction<boolean>>, clicked: boolean }) =>{
    const { camera } = useThree()
    camera.lookAt(new Vector3(0, -20, -20))

    const { urlMF } = MODELS_URLS
    const obj = useLoader(OBJLoader, urlMF)
    obj.children.forEach((mesh : any) => {
        mesh.material = new MeshPhongMaterial({color: new Color('#000')}) 
    })

    return <primitive onClick={() => click(!clicked)} object={obj} rotation={[-0.65 , Math.PI - 0.47, 0]} position={[0, -20, 0]} scale={[0.75, 0.75, 0.75]}/>
}

export default Object