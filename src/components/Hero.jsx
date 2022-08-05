import React from 'react'
import { BsGithub, BsTwitter, BsLinkedin, BsInstagram } from "react-icons/bs"
import Test from './Test'


const Hero = () => {
  return (
    <div class="scroll_snap_align ">
      <div class="container-fluid bg-light text-center text-white jumbotron-bg ">
        <div className="pb-5 ">
          <div className="pt-3 pb-5">
            <Test />
            {/* <h1 class="pt-5 display-1"> Shobande James </h1> */}
            <p class="pb-5 text-center container w-50">I would have called myself <i>  SUPERMAN ,</i> but obviously  <i> CLARK KENT </i> <code class="text-white fs-5"> code</code></p>
            <BsGithub size="70px" className='pe-3' />
            <BsLinkedin size="70px" className='pe-3' />
            <BsTwitter size="70px" className='pe-3' />
            <BsInstagram size="70px" className='pe-3' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero