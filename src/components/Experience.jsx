import React from 'react'

const Experience = () => {
    return (
        <div class="scroll_snap_align bg-dark text-white">
            <section class="container w-50 p-5">
                <h2 class="text-center display-4"> EXPERIENCE </h2>
                <div class="accordion accordion-flush py-3" id="accordionFlushExample">
                    <div class="accordion-item bg-dark text-white">
                        <h2 class="accordion-header" id="flush-headingOne">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                Frontend Developer - <i> RideApp</i>
                            </button>
                        </h2>
                        <div id="flush-collapseOne" class="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li>Developed new user features using ReactJS</li>
                                    <li>Developed and implemented highly responsive user interface components using React concepts</li>
                                    <li>Collaborated with senior developers to optimize features to work seamlessly across different browsers and devices </li>
                                    <li>Fetched data from APIs and tested endpoints</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-dark text-white">
                        <h2 class="accordion-header" id="flush-headingTwo">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                                Frontend Developer - <i> Freelance </i>
                            </button>
                        </h2>
                        <div id="flush-collapseTwo" class="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li>Developing SPAs and PWAs for clients</li>
                                    <li>Collaborate with team of developers on Open Source Projects</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item bg-dark text-white">
                        <h2 class="accordion-header" id="flush-headingThree">
                            <button class="accordion-button collapsed bg-dark text-white" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                                Frontend Developer Intern -  <i>Proteux Technologies</i>
                            </button>
                        </h2>
                        <div id="flush-collapseThree" class="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                            <div class="accordion-body">
                                <ul>
                                    <li>Hands-on development of websites, which includes development of HTML/CSS and web pages based on wireframes and visual designs,
                                        and implementation of commercial and open source web technologies</li>
                                    <li>Development of dynamic and engaging web functionality and eCommerce using JavaScript and scripting languages</li>
                                    <li>Ensure the technical feasibility of UI/UX designs</li>
                                    <li>Work closely with design team as technology advisor to help guide project scope</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Experience