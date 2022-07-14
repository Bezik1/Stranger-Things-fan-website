import { useLoader, useFrame } from "@react-three/fiber"
import { MeshPhongMaterial, Color,  } from "three"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import gsap from "gsap"

import { MODELS_URLS } from "../../constans/constans"
import { DemoProps } from "../../interfaces/interfaces"

const Object = ({ pos, clicked, click } : DemoProps) =>{
    const { urlDemo } = MODELS_URLS
    const obj = useLoader(OBJLoader, urlDemo)

  useFrame(() =>{ 
    gsap.to(obj.rotation, {
      x: (pos[1] - 200) / 2000,
      y: (pos[0] - 1200) / 2000,
      duration: 1
    })
    //obj.rotation.x = (pos[1] - 200) / 1000
    //obj.rotation.y = (pos[0] - 1000) / 2000
  })
  

    obj.children.forEach((mesh : any) => 
        mesh.material = new MeshPhongMaterial({color: new Color('#000')}) )

    return <primitive onClick={() => click(!clicked)} object={obj} />
}

export default Object