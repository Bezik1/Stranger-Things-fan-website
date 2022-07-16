import { useLoader, useFrame } from "@react-three/fiber"
import { MeshPhongMaterial, Color,  } from "three"
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader"
import gsap from "gsap"

import { MODELS_URLS } from "../../constans/constans"
import { DemoProps } from "../../interfaces/interfaces"

const defaultProps  = {
  pos: [10, 10],
  clicked: false
}

const Object = (props : DemoProps & typeof defaultProps) =>{
    props = {...defaultProps, ...props}
    const { urlDemo } = MODELS_URLS
    const obj = useLoader(OBJLoader, urlDemo)

    const { pos, clicked, click } = props

  useFrame(() =>{ 
    gsap.to(obj.rotation, {
      y: (pos[0] - 1400) / 2000 || 0,
      x: (pos[1] - 200) / 2000 || 0,
      duration: 1
    })
  })
  

    obj.children && obj.children.forEach((mesh : any) => 
        mesh.material = new MeshPhongMaterial({color: new Color('#000')}) )

    return <primitive onClick={() => click(!clicked)} object={obj} />
}

Object.defaultProps = defaultProps

export default Object