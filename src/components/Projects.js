import React from 'react'
import ImmunifyPicture from '../ImmunifyPicture.png'
import BookrList from '../BookrList.jpeg'
import BookrBook from '../BookrBook.JPG'
import Marvel1 from '../Marvel1.png'
import ReactIcon from '../ReactIcon.svg'
import airbnb from '../airbnb4.png'
import node from '../node.png'

import Fade from 'react-reveal/Fade';
import makeCarousel from 'react-reveal/makeCarousel'
import Slide from 'react-reveal/Slide'

function Project() {

     const CarouselUI = ({ children }) => <div>
          {children}
     </div>;
     const Carousel = makeCarousel(CarouselUI);


     return (

          <div className="project-container" id="projects">

               {/* * Header */}
               <div className="project-header">
                    <h2 className="project-title">Projects</h2>
                    <h4>Here are a couple projects I've been working on. </h4>
                    <h4>If you'd like to see more, click <a href="https://github.com/kevinnguyen805">here</a> </h4>
               </div>

              

               {/* Immunify */}
               <div className="individual-project bookr">
                    <Fade left>
                    <div className="immunify-picture">
                         <img src={ImmunifyPicture} />
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="content">
                         <h3 className="project-headline">Immunify</h3>
                         <h4 className="project-subheadline">Lambda Build Week</h4>
                         <p>Immunify is an immunization tracking app, allowing users to keep track of your family's immunization records through your phone. This app also allows medical professionals to upload immunization records to your personal or family account. </p>
                         <p>Tech stack: HTML5, CSS3 </p>
                         <a href="https://immunify-app.netlify.com/"><button className="project-button">View</button></a>
                         <a href="https://github.com/BWimmunizationtracker/frontEnd"><button className="project-code-button">Code</button></a>
                    </div>
                    </Fade>
               </div>

               {/* Airbnb */}
               <div className="individual-project">
                    <Fade left>
                    <div className="content">
                         <h3 className="project-headline">AirBnB Price Optimizer</h3>
                         <h4 className="project-subheadline" id="airbnb-subheadline">Lambda Build Week</h4>
                         <p>AirBnB Price Optimizer utilizes past AirBnB datasets to determine the optimal pricing of an AirBnB unit based upon features such as geographic location, size, bedrooms, etc. </p>
                         <div className="tech-stack" id="node-stack">
                              <img className="code-icon" src={node} id="node" />
                              <p>Tech stack: Node.Js, Express, SQL, Knex.Js, React, Machine Learning</p>
                         </div>
                         <a href="https://airbnb-optimizedpricing.now.sh/"><button className="project-button">View</button></a>
                         <a href="https://github.com/AirBnB-Optimal-Price-1-LS/Back-End"><button className="project-code-button">Code</button></a>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="immunify-picture" id="airbnb">
                         <img src={airbnb} />
                    </div>
                    </Fade>
               </div>

               {/* Bookr */}
               <div className="individual-project bookr">
                    <Fade>
                    <div className='immunify-picture'>
                         <div className="carousel-container">
                              <Carousel defaultWait={3000}>
                                   <Slide right>
                                        <div className="bookr-project">
                                             <img src={BookrBook} />
                                        </div>
                                   </Slide>
                                   <Slide right>
                                        <div className="bookr-project">
                                             <img src={BookrList} />
                                        </div>
                                   </Slide>
                              </Carousel>
                         </div>
                    </div>
                    </Fade>
                    <Fade right>
                    <div className="content">
                         <h3 className="project-headline">Bookr</h3>
                         <h4 className="project-subheadline">Lambda Build Week </h4>
                         <p>Bookr is a web application that allows its users to review and search through thousands of books. If the book is in stock, you can be transferred to the Google books store to buy it. Clicking the book will take you to a page with information about the specific book.</p>
                         <div className="tech-stack">
                              <img className="code-icon" src={ReactIcon} />
                              <p>Tech stack: React, React Hooks, Axios, Material UI, Google Books API</p>
                         </div>


                         <a href="https://bookr.now.sh/book-list"><button className="project-button">View</button></a>
                         <a href="https://github.com/BW-BookR-2019/FE"><button className="project-code-button">Code</button></a>
                    </div>
                    </Fade>
               </div>


               <div className="individual-project">
                    <Fade left>
                    <div className="content">
                         <h3 className="project-headline">Marvel Movie Marathon</h3>
                         <h4 className="project-subheadline">Personal Project</h4>
                         <p>Understanding Marvel Cinematic Univerise can be intimidating when faced with 23 films over the last decade.</p>
                         <p>This web application allows fans to view the entire collection of MCU films ordered by release date or story timeline so they can keep track of where they are in the MCU. </p>
                         <div className="tech-stack">
                              <img className="code-icon" src={ReactIcon} />
                              <p>Tech stack: React, React Hooks, Axios, The Movie DB</p>
                         </div>
                         <a href="https://marvel-marathon-guide.netlify.com/"><button className="project-button">View</button></a>
                         <a href="https://github.com/kevinnguyen805/marvel-marathon-guide"><button className="project-code-button">Code</button></a>
                    </div>
                     </Fade>

                    <Fade right>
                    <div className="immunify-picture">
                         <img src={Marvel1} />
                    </div>
                    </Fade>
               </div>


          </div>
     )
}

export default Project