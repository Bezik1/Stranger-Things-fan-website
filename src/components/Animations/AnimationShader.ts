import { useFrame } from "@react-three/fiber"
import gsap from "gsap"

import { Ref, Uniform } from '../../interfaces/interfaces'

const AnimationShader = ({ meshRefs } : { meshRefs: Ref<Uniform>[] }) => 
  useFrame(
    ({ clock }) => {
      meshRefs[0].current.material.uniforms.u_time.value = clock.getElapsedTime() 
      meshRefs[1].current.material.uniforms.u_time.value = clock.getElapsedTime() + 1
      meshRefs[2].current.material.uniforms.u_time.value = clock.getElapsedTime() + 2

      //meshRefs[0].current.rotation.y = pos[0]

      ifPosition(meshRefs, 0)
      ifPosition(meshRefs, 1)
      ifPosition(meshRefs, 2)
    }
  )

  const ifPosition = ( meshRefs: Ref<Uniform>[], i: number ) =>{
  
    switch(true){
      // @ts-ignore: Unreachable code error
      case meshRefs[i].current.position.x > 40:
        gsap.to(meshRefs[i].current.position, {
          x: -40,
        })
        break
      case meshRefs[i].current.position.x < -40:
        gsap.to(meshRefs[i].current.position, {
          x: 40,
        })
        break
      case meshRefs[i].current.position.x === 0:
        meshRefs[i].current.material.uniforms.u_active.value = true
        gsap.to(meshRefs[i].current.position, {
          z: -25,
        }) 
        break
      case meshRefs[i].current.position.x !== 0:
        meshRefs[i].current.material.uniforms.u_active.value = false
        gsap.to(meshRefs[i].current.position, {
          z: -35,
        }) 
        
    }
}

export default AnimationShader