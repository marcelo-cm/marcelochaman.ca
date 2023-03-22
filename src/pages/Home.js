import React from 'react'
import stylesheets from '../stylesheets/Home.module.css'
import { useState } from 'react'
import peruhero from '../images/peruhero.jpg'
import TypingText from '../assets/Typewriter'

function Home() {
    const [page, setPage] = useState('work');
    const [period, setPeriod] = useState('present');

    return (
        <div class={stylesheets.index}>
            {/* <!-- This is the header of the website – AKA, the banner. --> */}
            <div class={stylesheets.header}>
                <div>
                    <p>marcelo chaman mallqui</p>
                </div>
                <nav>
                    <button class={ `${page==="work" ? stylesheets.menubuttonleftactive : stylesheets.menubuttonleftinactive}`} onClick={ () => setPage("work")}>work</button>
                    <button class={ `${page==="art" ? stylesheets.menubuttonrightactive : stylesheets.menubuttonrightinactive }`} onClick={ () => setPage("art")}>art</button>
                </nav>
            </div>

            {/* This is where the main body content lies! */}
            <div class={stylesheets.mainbodycontent}>
                {/* This is the photo, and contact options */}
                <div class={stylesheets.constantbanner}>
                    <div class={stylesheets.hero}>
                        <img src={peruhero} alt="My favourite picture!"/>
                    </div>
                    <div class={stylesheets.connect}>
                        <p>Let's Connect!</p>
                        <hr width="100"></hr>
                        <div class={stylesheets.contactOptions}>
                            <button onClick={() => window.open("https://www.linkedin.com/in/marc-cham/")}>LinkedIn</button>
                            <button onClick={() => window.open("https://drive.google.com/file/d/16Dt8b7X1FEbIG1ICFzinTBnfj-PjaXLk/view?usp=share_link")}>Resume</button>
                            <button  onClick={() => window.open("https://github.com/marcelo-cm")}>GitHub</button>
                        </div>
                    </div>
                </div>

                {/* This is the content that changes depending on page state */}
                <div class={stylesheets.bottomContent}>
                    {page==="work" ? (
                        // This is the work content
                        <div class={stylesheets.workContent}>
                            <div class={stylesheets.sectionContainer}>
                                <div class={stylesheets.sectionHeader}>
                                    who am i?
                                </div>
                                <div class={stylesheets.sectionHeadline}>
                                    I am
                                    <span class={stylesheets.TypingText} ><TypingText texts={["a Product Manager", "an Entrepreneur", "an Artist", "an Aspiring Web Developer"]} /></span>
                                </div>
                                <div class={stylesheets.workSectionContent}>
                                    content here
                                </div>
                            </div>
                            <div class={stylesheets.sectionContainer}>
                                <div class={stylesheets.sectionHeader}>
                                what are my skills
                                </div>
                                <div class={stylesheets.sectionHeadline}>
                                    i am
                                    <span class={stylesheets.TypingText} ><TypingText texts={["a lifelong learner", "a self-taught programmer"]} /></span>
                                </div>
                                <div class={stylesheets.workSectionContent}>
                                    content here
                                </div>
                            </div>
                            <div class={stylesheets.sectionContainer}>
                                <div class={stylesheets.galleryHeader}>
                                    <div class={stylesheets.sectionHeader}>
                                    what do i do?
                                    </div>
                                    <nav>
                                    <button class={ `${period==="past" ? stylesheets.menubuttonleftactive : stylesheets.menubuttonleftinactive}`} onClick={ () => setPeriod("past")}>past</button>
                                    <button class={ `${period==="present" ? stylesheets.menubuttonrightactive : stylesheets.menubuttonrightinactive }`} onClick={ () => setPeriod("present")}>present</button>
                                    <button class={ `${period==="future" ? stylesheets.menubuttonrightactive : stylesheets.menubuttonrightinactive }`} onClick={ () => setPeriod("future")}>future</button>
                                    </nav>
                                </div>
                                {period==="past" ? (
                                    <div class={stylesheets.workGallery}>
                                        <div class={stylesheets.workGalleryRow}>
                                            <div class={stylesheets.galleryCard}>

                                            </div>
                                            <div class={stylesheets.galleryCard}>

                                            </div>
                                            <div class={stylesheets.galleryCard}>

                                            </div>
                                        </div>
                                        <div class={stylesheets.workGalleryRow}>
                                            <div class={stylesheets.galleryCard}>

                                            </div>
                                            <div class={stylesheets.galleryCard}>

                                            </div>
                                        </div>
                                    </div>
                                ) 
                                
                                : period==="present" ? (
                                    <div class={stylesheets.workGallery}>
                                        <div class={stylesheets.galleryCard}>

                                        </div>
                                        <div class={stylesheets.galleryCard}>

                                        </div>
                                        <div class={stylesheets.galleryCard}>

                                        </div>
                                    </div>
                                )

                                : period==="future" ? (
                                    <div class={stylesheets.workGallery}>
                                        <div class={stylesheets.galleryCard}>

                                        </div>
                                        <div class={stylesheets.galleryCard}>

                                        </div>
                                        <div class={stylesheets.galleryCard}>

                                        </div>
                                    </div>
                                )

                                : (
                                    <div>you broke my website</div>
                                )
                                }
                            </div>
                        </div>
                        
                    ) 

                    : page==="art" ? (
                        <div>art</div>
                    ) 

                    : (
                        <div> you broke my website </div>
                    )}
                </div>
                <div class={stylesheets.footer}>
                <div>
                    <p>marcelo chaman mallqui</p>
                </div>
                <div class={stylesheets.footerText}>
                    <p>built with</p>
                    <li>figma</li>
                    <li>react.js</li>
                    <li>github</li>
                    <li>my brain</li>
                    <li>a lot of time</li>
                </div>
            </div>
            </div>
        </div>
    )
  }
  
  export default Home