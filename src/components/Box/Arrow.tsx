import gsap from "gsap"
import { Arrows } from '../../constans/enums'
import { Ref, Uniform } from '../../interfaces/interfaces'

import urlArrow from '../../assets/arrow.png'

const Arrow = ({ meshRefs, side } : { meshRefs: Ref<Uniform>[], side: Arrows }) =>{
    const whichSide = () => side === Arrows.right ? true : false 
  
  
    const onClick = () => {
      gsap.to(meshRefs[2].current.position, {
        x: whichSide() ? '-= 40' : '+=40'
      })
      gsap.to(meshRefs[0].current.position, {
        x: whichSide() ? '-= 40' : '+=40'
      })
      gsap.to(meshRefs[1].current.position, {
        x: whichSide() ? '-= 40' : '+=40'
      })
    }
  
  
    return <button onClick={onClick} className={`arrow-${side}`}> 
    {/*{whichSide() ? '=>' : '<='} */}
      {whichSide() ? <img src={urlArrow} alt='arrow-right' width="100px" />
       : <img src={urlArrow} alt='arrow-left' style={{transform: "rotateZ(180deg)"}} width="100px" />}
    </button>
}

export default Arrow