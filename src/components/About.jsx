import React from 'react'

const About = () => {
  return (
    <div class="scroll_snap_align bg-dark text-white">
            <div className="container w-55 d-flex justify-content-around align-items-center">
                <div className="w-50">
                    <img src="assets/james.png" alt="" width="300px" class="rounded-circle"/>
                </div>
                <div className="w-50">
                    <h3 class="display-4"> About Me </h3>
                    <p> Hi <span> &#128512;</span>, I'm a Frontend Developer with a track record of working well with other devs and investing additional time in mentoring. 
                      I'm really passionate about designing dynamic effects with a clear user interface.</p> 
                      <p>
                      A  well organised individual, problem solver with high attention to detail. Fan of Sci-fi TV series and football. 
                      </p>
                      <p>
                      I'm enthusiastic about all aspects of front-end web programming, collaborating with others, and creating ambitious projects.
                      </p>
                </div>
            </div>
    </div>
  )
}

export default About