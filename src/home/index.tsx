// import "./style.css"

// function Home(){
//     return(
//         <>
//     <nav className="navbar is-transparent" role="navigation" aria-label="main navigation">
//       <div className="container">
//         <div className="navbar-brand"><a className="navbar-item" href="/"><svg className="svg-inline--fa fa-mf-logo has-text-primary fa-4x" aria-hidden="true" focusable="false" data-prefix="fak" data-icon="mf-logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="width: 1.25em;"><path fill="currentColor" d="M458.566 321.7c-19.552 0-37.558-10.598-46.947-27.745l-28.553-52.116-24.007 44.217c-12.003 23.505-45.69 26.588-57.886 3.179l-25.168-48.263-37.945 69.938-45.495.289 54.4-102.691c11.52-21.771 42.592-22.157 54.789-.77l27.104 47.78 26.33-47.684c11.807-21.386 42.783-21.483 54.591-.097l36.883 66.277c6.679 12.042 24.973 7.322 24.973-6.358l.096-88.144c0-32.753-26.813-59.437-59.725-59.437h-183.82c-32.911 0-59.724 26.684-59.724 59.437v152.782c0 32.756 26.813 59.44 59.725 59.44h246.642V432H228.187C172.915 432 128 387.302 128 332.294v-152.59C128 124.602 172.818 80 228.187 80h183.627C467.181 80 512 124.602 512 179.704v88.82c0 29.38-23.91 53.175-53.434 53.175z"></path></svg><!-- <i className="fak fa-mf-logo has-text-primary fa-4x"></i> --></a><a className="navbar-burger" role="button" aria-label="menu" aria-expanded="false" data-target="#navMenu"><span aria-hidden="true"></span><span aria-hidden="true"></span><span aria-hidden="true"></span></a></div>
//         <div className="navbar-menu is-shadowless" id="navMenu">
//           <div className="navbar-start"></div>
//           <div className="navbar-end"><a className="navbar-item has-text-weight-normal" href="/mentorship">Mentorship</a>
//             <div className="navbar-item"><a className="button is-primary is-outlined is-rounded has-text-weight-normal" href="/contact">Say Hello </a></div>
//           </div>
//         </div>
//       </div>
//     </nav>
//     <section className="hero is-white has-text-centered">
//       <div className="hero-body">
//         <div className="container">
//           <div className="columns is-centered">
//             <div className="column">
//               <h1 className="title is-spaced is-size-1-desktop is-size-2-tablet is-size-3-mobile">Designer, Frontend Developer &amp; Mentor</h1>
//               <h2 className="subtitle is-size-4-tablet">I design and code beautifully simple things, and I love what I do.</h2><img className="avatar" src="../img/mf-avatar.svg">
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="hero-foot">
//         <div className="container"><img className="is-bottom" src="../img/hero-devices.svg"></div>
//       </div>
//     </section>
//     <section className="section is-medium is-primary has-text-centered is-long">
//       <div className="container">
//         <div className="columns is-centered">
//           <div className="column is-three-fifths">
//             <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Hi, I’m Matt. Nice to meet you.</h1>
//             <h2 className="subtitle is-size-5-desktop has-text-weight-normal">Since beginning my journey as a freelance designer 12 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops.</h2>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="section skills has-text-centered">
//       <div className="container is-narrow">
//         <div className="box">
//           <div className="content">
//             <div className="columns is-centered">
//               <div className="column"><span className="fa-stack fa-2x"><svg className="svg-inline--fa fa-circle fa-stack-2x has-text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg><!-- <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i> --><svg className="svg-inline--fa fa-layer-plus fa-stack-1x has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="layer-plus" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M480 24c0-8.8-7.2-16-16-16s-16 7.2-16 16V64H408c-8.8 0-16 7.2-16 16s7.2 16 16 16h40v40c0 8.8 7.2 16 16 16s16-7.2 16-16V96h40c8.8 0 16-7.2 16-16s-7.2-16-16-16H480V24zM288 128c-7.5 0-15 1.6-21.8 4.7L48.8 230.1C38.6 234.7 32 244.8 32 256s6.6 21.3 16.8 25.9l217.4 97.5c6.9 3.1 14.3 4.7 21.8 4.7s15-1.6 21.8-4.7l217.4-97.5c10.2-4.6 16.8-14.7 16.8-25.9s-6.6-21.3-16.8-25.9L309.8 132.7c-6.9-3.1-14.3-4.7-21.8-4.7zm-8.8 33.9c2.8-1.2 5.7-1.9 8.8-1.9s6 .6 8.8 1.9l210 94.1-210 94.1c-2.8 1.2-5.7 1.9-8.8 1.9s-6-.6-8.8-1.9L69.3 256l210-94.1zM94.7 337.5L48.8 358.1C38.6 362.7 32 372.8 32 384s6.6 21.3 16.8 25.9l217.4 97.5c6.9 3.1 14.3 4.7 21.8 4.7s15-1.6 21.8-4.7l217.4-97.5c10.2-4.6 16.8-14.7 16.8-25.9s-6.6-21.3-16.8-25.9l-45.9-20.6-39.1 17.5L506.7 384l-210 94.1c-2.8 1.2-5.7 1.9-8.8 1.9s-6-.6-8.8-1.9L69.3 384l64.5-28.9L94.7 337.5z"></path></svg><!-- <i className="fa-light fa-layer-plus fa-stack-1x has-text-dark"></i> --></span>
//                 <h1 className="title is-size-4 is-spaced">Designer</h1>
//                 <p>I value simple content structure, clean design patterns, and thoughtful interactions.</p>
//                 <p className="list-title has-text-primary has-text-weight-normal">Things I enjoy designing:</p>
//                 <p>UX, UI, Web, Apps, Logos</p>
//                 <p className="list-title has-text-primary has-text-weight-normal">Design Tools:</p>
//                 <ul>
//                   <li>Affinity Designer</li>
//                   <li>Figma</li>
//                   <li>Pen &amp; Paper</li>
//                   <li>Sketch</li>
//                   <li>Webflow</li>
//                 </ul>
//               </div>
//               <div className="column"><span className="fa-stack fa-2x"><svg className="svg-inline--fa fa-circle fa-stack-2x has-text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg><!-- <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i> --><svg className="svg-inline--fa fa-square-terminal fa-stack-1x has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="square-terminal" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M384 64c17.7 0 32 14.3 32 32V416c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H384zM64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM83.9 149.6c-5.8 6.7-5 16.8 1.7 22.6L183.4 256 85.6 339.9c-6.7 5.8-7.5 15.8-1.7 22.6s15.9 7.5 22.6 1.7l112-96c3.5-3 5.6-7.5 5.6-12.1s-2-9.1-5.6-12.1l-112-96c-6.7-5.8-16.8-5-22.6 1.7zM208 352c-8.8 0-16 7.2-16 16s7.2 16 16 16H368c8.8 0 16-7.2 16-16s-7.2-16-16-16H208z"></path></svg><!-- <i className="fa-light fa-square-terminal fa-stack-1x has-text-dark"></i> --></span>
//                 <h1 className="title is-size-4 is-spaced">Frontend Developer</h1>
//                 <p>I like to code things from scratch, and enjoy bringing ideas to life in the browser.</p>
//                 <p className="list-title has-text-primary has-text-weight-normal">Languages I speak:</p>
//                 <p>HTML, Pug, Slim, CSS, Sass, Git</p>
//                 <p className="list-title has-text-primary has-text-weight-normal">Dev Tools:</p>
//                 <ul>
//                   <li>Bitbucket</li>
//                   <li>Bootstrap</li>
//                   <li>Bulma</li>
//                   <li>Codekit</li>
//                   <li>Git</li>
//                   <li>Github</li>
//                   <li>Netlify</li>
//                   <li>VSCode</li>
//                 </ul>
//               </div>
//               <div className="column"><span className="fa-stack fa-2x"><svg className="svg-inline--fa fa-circle fa-stack-2x has-text-success" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z"></path></svg><!-- <i className="fa-solid fa-circle fa-stack-2x has-text-success"></i> --><svg className="svg-inline--fa fa-book fa-stack-1x has-text-dark" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="book" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M64 0C28.7 0 0 28.7 0 64L0 448l0 0c0 35.3 28.7 64 64 64H432c8.8 0 16-7.2 16-16s-7.2-16-16-16H416V413.3c18.6-6.6 32-24.4 32-45.3V48c0-26.5-21.5-48-48-48H64zM384 416v64H64c-17.7 0-32-14.3-32-32s14.3-32 32-32H384zM64 384c-11.7 0-22.6 3.1-32 8.6L32 64c0-17.7 14.3-32 32-32H96V384H64zm64 0V32H400c8.8 0 16 7.2 16 16V368c0 8.8-7.2 16-16 16H128zm48-240c0 8.8 7.2 16 16 16H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16zm0 96c0 8.8 7.2 16 16 16H352c8.8 0 16-7.2 16-16s-7.2-16-16-16H192c-8.8 0-16 7.2-16 16z"></path></svg><!-- <i className="fa-light fa-book fa-stack-1x has-text-dark"></i> --></span>
//                 <h1 className="title is-size-4 is-spaced">Mentor</h1>
//                 <p>I genuinely care about people, and enjoy helping them work on their craft.</p>
//                 <p className="list-title has-text-primary has-text-weight-normal">Experiences I draw from:</p>
//                 <p>UX/UI, Product design, Freelancing</p>
//                 <p className="list-title has-text-primary has-text-weight-normal">Mentor Stats:</p>
//                 <ul>
//                   <li>8+ years experience</li>
//                   <li>30+ short courses</li>
//                   <li>65+ bootcamps</li>
//                   <li>200+ students</li>
//                   <li>2,500+ mentor sessions</li>
//                   <li>60+ group critiques</li>
//                   <li>17,500+ comments</li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="section projects is-medium is-white has-text-centered">
//       <div className="container is-narrow">
//         <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Recent Work</h1>
//         <h2 className="subtitle is-size-5-desktop">Here are a few past design projects I've worked on. Want to see more? <a className="has-text-weight-normal" href="mailto:matt@pendeavor.com">Email me</a>.</h2>
//         <div className="project-grid">  
//           <div className="columns is-multiline is-mobile">
//             <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
//               <figure className="image is-3by2"><img className="project-thumb" src="../img/projects/wfdesignbuild.png">
//                 <figcaption>
//                   <h1 className="title is-size-5 is-size-4-widescreen">High-end, custom residential renovaters serving Fraser Valley homeowners.</h1><a className="button is-primary is-outlined is-rounded" href="https://wfdesignbuild.com" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg><!-- <i className="fas fa-angle-right"></i> --></span></a>
//                 </figcaption>
//                 <div className="overlay"></div>
//               </figure>
//             </div>
//             <div className="column is-12-mobile is-half-tablet is-one-third-desktop"> 
//               <figure className="image is-3by2"><img className="project-thumb" src="../img/projects/burkettandco.png">
//                 <figcaption>
//                   <h1 className="title is-size-5 is-size-4-widescreen">Accounting and tax services characterized by quality, reliability and trust.</h1><a className="button is-primary is-outlined is-rounded" href="https://www.burkettandco.ca/" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg><!-- <i className="fas fa-angle-right"></i> --></span></a>
//                 </figcaption>
//                 <div className="overlay"></div>
//               </figure>
//             </div>
//             <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
//               <figure className="image is-3by2"><img className="project-thumb" src="../img/projects/chronicled.png">
//                 <figcaption>
//                   <h1 className="title is-size-5 is-size-4-widescreen">Blockchain pioneers bringing transparency, trust, and security to supply.</h1><a className="button is-primary is-outlined is-rounded" href="https://www.chronicled.com/" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg><!-- <i className="fas fa-angle-right"></i> --></span></a>
//                 </figcaption>
//                 <div className="overlay"></div>
//               </figure>
//             </div>
//             <div className="column is-12-mobile is-half-tablet is-one-third-desktop">
//               <figure className="image is-3by2"><img className="project-thumb" src="../img/projects/glcsolutions.png">
//                 <figcaption>
//                   <h1 className="title is-size-5 is-size-4-widescreen">Business savvy tech experts helping forward thinking companies get things done.</h1><a className="button is-primary is-outlined is-rounded" href="http://glcsolutions.ca" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg><!-- <i className="fas fa-angle-right"></i> --></span></a>
//                 </figcaption>
//                 <div className="overlay"></div>
//               </figure>
//             </div>
//             <div className="column is-12-mobile is-half-tablet is-one-third-desktop"> 
//               <figure className="image is-3by2"><img className="project-thumb" src="../img/projects/coupal.png">
//                 <figcaption>
//                   <h1 className="title is-size-5 is-size-4-widescreen">Vancouver's tower crane rental service and support leader since 1974.</h1><a className="button is-primary is-outlined is-rounded" href="http://coupalcranes.com/" target="_blank"><span>Visit Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg><!-- <i className="fas fa-angle-right"></i> --></span></a>
//                 </figcaption>
//                 <div className="overlay"></div>
//               </figure>
//             </div>
//             <div className="column is-12-mobile is-half-tablet is-one-third-desktop"> 
//               <figure className="image is-3by2"><img className="project-thumb" src="../img/projects/wedlerengineering.png">
//                 <figcaption>
//                   <h1 className="title is-size-5 is-size-4-widescreen">Results-oriented, responsive and flexible full service civil engineering firm.</h1><a className="button is-primary is-outlined is-rounded" href="http://wedler.com" target="_blank"><span>View Website</span><span className="icon"><svg className="svg-inline--fa fa-angle-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" data-fa-i2svg=""><path fill="currentColor" d="M278.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-160 160c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L210.7 256 73.4 118.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l160 160z"></path></svg><!-- <i className="fas fa-angle-right"></i> --></span></a>
//                 </figcaption>
//                 <div className="overlay"></div>
//               </figure>
//             </div>
//           </div>
//         </div>
//         <div className="columns is-centered">
//           <div className="column"><a className="button is-primary is-outlined is-rounded is-medium has-text-weight-normal" href="https://dribbble.com/mattfarley"><span className="icon"><svg className="svg-inline--fa fa-dribbble" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="dribbble" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg><!-- <i className="fab fa-dribbble"></i> --></span><span>See more on Dribbble</span></a></div>
//         </div>
//       </div>
//     </section>
//     <section className="section clients is-medium is-white has-text-centered has-border-top">
//       <div className="container is-narrow">
//         <div className="columns is-centered">
//           <div className="column is-half">
//             <h1 className="title is-size-3-desktop is-size-4-tablet is-size-5-mobile">I'm proud to have collaborated with some awesome companies:</h1>
//           </div>
//         </div>
//         <div className="client-grid">
//           <div className="columns is-multiline is-mobile">
//             <div className="column is-half-mobile is-one-quarter-tablet">
//               <figure className="image is-2x1"><img className="client-logo" src="../img/logos/briteweb.svg"></figure>
//             </div>
//             <div className="column is-half-mobile is-one-quarter-tablet">
//               <figure className="image is-2x1"><img className="client-logo" src="../img/logos/goodkind.svg"></figure>
//             </div>
//             <div className="column is-half-mobile is-one-quarter-tablet">
//               <figure className="image is-2x1"><img className="client-logo" src="../img/logos/redstamp.svg"></figure>
//             </div>
//             <div className="column is-half-mobile is-one-quarter-tablet">
//               <figure className="image is-2x1"><img className="client-logo" src="../img/logos/domain7.svg"></figure>
//             </div>
//             <div className="column is-half-mobile is-one-quarter-tablet">
//               <figure className="image is-2x1"><img className="client-logo" src="../img/logos/designlab.png"></figure>
//             </div>
//             <div className="column is-half-mobile is-one-quarter-tablet">
//               <figure className="image is-2x1"><img className="client-logo" src="../img/logos/chronicled.svg"></figure>
//             </div>
//             <div className="column is-half-mobile is-one-quarter-tablet">
//               <figure className="image is-2x1"><img className="client-logo" src="../img/logos/bldrs.png"></figure>
//             </div>
//             <div className="column is-half-mobile is-one-quarter-tablet">
//               <figure className="image is-2x1"><img className="client-logo" src="../img/logos/serpmetrics.svg"></figure>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="section is-medium is-primary has-text-centered is-long-ish">
//       <div className="container">
//         <div className="columns is-centered">
//           <div className="column is-three-fifths">
//             <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">My Startup Projects</h1>
//             <h2 className="subtitle is-size-5-desktop has-text-weight-normal">I'm a bit of a digital product junky. Over the years I've used hundreds of web and mobile apps in different industries and verticals. Eventually, I decided that it would be a fun challenge to design and build my own.</h2>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="section startups has-text-centered">
//       <div className="container is-narrow">
//         <div className="startup-grid">
//           <div className="columns is-multiline level">
//             <div className="column is-12-touch is-half-desktop is-one-third-widescreen level-item">
//               <div className="box"><img className="logo mb-5" src="../img/logos/baselair.svg">
//                 <p>Community platform for miniature painters to learn, connect, and showcase work.</p><a className="link" href="https://thebaselair.com" target="_blank"><span className="tag is-link is-light is-medium"><svg className="svg-inline--fa fa-arrow-up-right-from-square mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H457.4L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H336zM64 32C28.7 32 0 60.7 0 96V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H64z"></path></svg><!-- <i className="fal fa-arrow-up-right-from-square mr-2"></i> -->thebaselair.com</span></a>
//               </div>
//             </div>
//             <div className="column is-12-touch is-half-desktop is-one-third-widescreen level-item">
//               <div className="box"><img className="logo mb-5" src="../img/logos/bootstraplogos.svg">
//                 <p>Affordable, human-crafted logos for startups and indie projects.</p><a className="link" href="https://bootstraplogos.com" target="_blank"><span className="tag is-link is-light is-medium"><svg className="svg-inline--fa fa-arrow-up-right-from-square mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H457.4L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H336zM64 32C28.7 32 0 60.7 0 96V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H64z"></path></svg><!-- <i className="fal fa-arrow-up-right-from-square mr-2"></i> -->bootstraplogos.com</span></a>
//               </div>
//             </div>
//             <div className="column is-12-touch is-half-desktop is-one-third-widescreen level-item">
//               <div className="box"><img className="logo mb-5" src="../img/logos/automalog.svg">
//                 <p>AI-driven changelog that turns git commits into release notes, instantly.</p><a className="link" href="https://automalog.com" target="_blank"><span className="tag is-link is-light is-medium"><svg className="svg-inline--fa fa-arrow-up-right-from-square mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H457.4L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H336zM64 32C28.7 32 0 60.7 0 96V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H64z"></path></svg><!-- <i className="fal fa-arrow-up-right-from-square mr-2"></i> -->automalog.com</span></a>
//               </div>
//             </div>
//             <div className="column is-12-touch is-half-desktop is-one-third-widescreen level-item">
//               <div className="box"><img className="logo mb-5" src="../img/logos/basin.svg">
//                 <p>A powerful, easy-to-configure form backend for designers and developers.</p><a className="link" href="https://usebasin.com" target="_blank"><span className="tag is-link is-light is-medium"><svg className="svg-inline--fa fa-arrow-up-right-from-square mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H457.4L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H336zM64 32C28.7 32 0 60.7 0 96V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H64z"></path></svg><!-- <i className="fal fa-arrow-up-right-from-square mr-2"></i> -->usebasin.com</span></a>
//               </div>
//             </div>
//             <div className="column is-12-touch is-half-desktop is-one-third-widescreen level-item">     
//               <div className="box"><img className="logo mb-5" src="../img/logos/shipable.svg">
//                 <p>Short, focused design and growth collabs for startup tech founders.</p><a className="link" href="https://shipable.io" target="_blank"><span className="tag is-link is-light is-medium"><svg className="svg-inline--fa fa-arrow-up-right-from-square mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="arrow-up-right-from-square" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M336 0c-8.8 0-16 7.2-16 16s7.2 16 16 16H457.4L212.7 276.7c-6.2 6.2-6.2 16.4 0 22.6s16.4 6.2 22.6 0L480 54.6V176c0 8.8 7.2 16 16 16s16-7.2 16-16V16c0-8.8-7.2-16-16-16H336zM64 32C28.7 32 0 60.7 0 96V448c0 35.3 28.7 64 64 64H416c35.3 0 64-28.7 64-64V304c0-8.8-7.2-16-16-16s-16 7.2-16 16V448c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V96c0-17.7 14.3-32 32-32H208c8.8 0 16-7.2 16-16s-7.2-16-16-16H64z"></path></svg><!-- <i className="fal fa-arrow-up-right-from-square mr-2"></i> -->shipable.io</span></a>
//               </div>
//             </div>
//             <div className="column is-12-touch is-half-desktop is-one-third-widescreen level-item">
//               <div className="box"><img className="logo mb-5" src="../img/logos/houston.svg">
//                 <p>Simple feedback and engagement tools that help teams ship winning products.</p><span className="tag is-light is-medium"><svg className="svg-inline--fa fa-code-branch mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="code-branch" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M80 128a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm80-48c0 38.7-27.5 71-64 78.4V273.6c20.3-20.7 48.7-33.6 80-33.6h96c44.2 0 80-35.8 80-80v-1.6c-36.5-7.4-64-39.7-64-78.4c0-44.2 35.8-80 80-80s80 35.8 80 80c0 38.7-27.5 71-64 78.4V160c0 61.9-50.1 112-112 112H176c-44.2 0-80 35.8-80 80v1.6c36.5 7.4 64 39.7 64 78.4c0 44.2-35.8 80-80 80s-80-35.8-80-80c0-38.7 27.5-71 64-78.4V352 158.4C27.5 151 0 118.7 0 80C0 35.8 35.8 0 80 0s80 35.8 80 80zm208 48a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM80 480a48 48 0 1 0 0-96 48 48 0 1 0 0 96z"></path></svg><!-- <i className="fal fa-code-branch mr-2"></i> -->in development</span>
//               </div>
//             </div>
//             <div className="column is-12-touch is-half-desktop is-one-third-widescreen level-item">
//               <div className="box"><img className="logo mb-5" src="../img/logos/kybercore.svg">
//                 <p>Next level plug and play chassis systems for custom DIY lightsaber builds.</p><span className="tag is-light is-medium"><svg className="svg-inline--fa fa-lightbulb-on mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="lightbulb-on" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M55.2 1.7c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5l64 32c7.9 4 17.5 .7 21.5-7.2s.7-17.5-7.2-21.5l-64-32zm544 28.6c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-64 32c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l64-32zM16 160c-8.8 0-16 7.2-16 16s7.2 16 16 16H80c8.8 0 16-7.2 16-16s-7.2-16-16-16H16zm544 0c-8.8 0-16 7.2-16 16s7.2 16 16 16h64c8.8 0 16-7.2 16-16s-7.2-16-16-16H560zM119.2 318.3c7.9-4 11.1-13.6 7.2-21.5s-13.6-11.1-21.5-7.2l-64 32c-7.9 4-11.1 13.6-7.2 21.5s13.6 11.1 21.5 7.2l64-32zm416-28.6c-7.9-4-17.5-.7-21.5 7.2s-.7 17.5 7.2 21.5l64 32c7.9 4 17.5 .7 21.5-7.2s.7-17.5-7.2-21.5l-64-32zM464 176c0 30.6-9.5 58.8-25.7 82.1c-4.1 5.9-8.7 12.3-13.6 19c-12.7 17.5-27.1 37.2-38 57.1c-8.9 16.2-13.7 33.3-16.2 49.9H403c2.2-12 5.9-23.7 11.8-34.5c9.9-18 22.2-34.9 34.5-51.8l0 0 0 0 0 0c5.2-7.1 10.4-14.2 15.4-21.4c19.8-28.5 31.4-63 31.4-100.3C496 78.8 417.2 0 320 0S144 78.8 144 176c0 37.3 11.6 71.9 31.4 100.3c5 7.2 10.2 14.3 15.4 21.4l0 0 0 0 0 0c12.3 16.8 24.6 33.7 34.5 51.8c5.9 10.8 9.6 22.5 11.8 34.5h32.4c-2.5-16.6-7.3-33.7-16.2-49.9c-10.9-20-25.3-39.7-38-57.1l0 0c-4.9-6.7-9.5-13-13.6-19C185.5 234.8 176 206.6 176 176c0-79.5 64.5-144 144-144s144 64.5 144 144zm-224 0c0-44.2 35.8-80 80-80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-61.9 0-112 50.1-112 112c0 8.8 7.2 16 16 16s16-7.2 16-16zm80 304c-20.9 0-38.7-13.4-45.3-32h90.5c-6.6 18.6-24.4 32-45.3 32zm-80-53.3V432c0 44.2 35.8 80 80 80s80-35.8 80-80v-5.3c0-5.9-4.8-10.7-10.7-10.7H250.7c-5.9 0-10.7 4.8-10.7 10.7z"></path></svg><!-- <i className="fal fa-lightbulb-on mr-2"></i> -->validating idea</span>
//               </div>
//             </div>
//             <div className="column is-12-touch is-half-desktop is-one-third-widescreen level-item">
//               <div className="box"><img className="logo mb-5" src="../img/logos/dovetail.svg">
//                 <p>A space and member management solution for coworking communities.</p><span className="tag is-success is-light is-medium"><svg className="svg-inline--fa fa-handshake mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="handshake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M263.9 64c-33.9 0-66.7 12-92.6 33.7L144 120.7v39.1c2.7-.5 5.3-1.7 7.4-3.5l40.5-34c13.3-11.2 28.9-19 45.5-23.1L272.6 64h-8.7zM112 352.3c8.9 1 17.2 5 23.6 11.4l28.6 28.6 15.4 15.4 .1 .1 24.3 24.3c25.1 25.1 65.4 26.2 91.8 2.6c.8-.7 1.6-1.4 2.3-2.2c26.3 21.3 65.3 18.6 88.4-7.3c6-6.7 10.3-14.4 13-22.5c19.2 4 40-.8 55.7-14.8c11.3-10.1 18.2-23.2 20.6-37H528V368c0 26.5 21.5 48 48 48h16c26.5 0 48-21.5 48-48V160c0-17.7-14.3-32-32-32H560 528v32V318.8H473.1c-3.1-8.7-8.1-17-15.1-24l-85.6-85.6 8.1-7.5c6.5-6 6.9-16.1 .9-22.6s-16.1-6.9-22.6-.9l-76.1 70.2c-13.2 12.2-33.6 12.4-47 .4c-15.4-13.7-15.7-37.5-.8-51.6l79.4-75C332.2 105.4 355.8 96 380.4 96c22.7 0 44.6 8 61.9 22.6l44.8 37.7c2.5 2.1 5.6 3.4 8.8 3.7V121.8L462.9 94.1C439.8 74.6 410.6 64 380.4 64c-32.8 0-64.3 12.5-88.1 35l-79.4 75c-28.6 27-27.9 72.7 1.5 98.8c25.8 22.9 64.7 22.5 90-.8l44.5-41 86.5 86.5c13 13 12.4 34.3-1.4 46.5c-10.9 9.7-26.7 10.6-38.6 3c-5-3.3-11.4-3.4-16.6-.5s-8.3 8.6-8 14.6c.4 8.1-2.3 16.3-8.1 22.9c-12.3 13.9-33.8 14.5-46.9 1.4l-8.1-8.1c-3.6-3.6-8.7-5.3-13.7-4.5s-9.4 3.9-11.8 8.4c-1.9 3.6-4.4 6.9-7.6 9.8c-13.8 12.3-34.8 11.7-47.8-1.3l-39.9-39.8-28.6-28.6c-12.4-12.4-28.9-19.8-46.3-20.9V160 128H80 32c-17.7 0-32 14.3-32 32V368c0 26.5 21.5 48 48 48H64c26.5 0 48-21.5 48-48V352.3zM80 160V368c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160H80zm528 0V368c0 8.8-7.2 16-16 16H576c-8.8 0-16-7.2-16-16V160h48z"></path></svg><!-- <i className="fal fa-handshake mr-2"></i> -->acquired in 2017</span>
//               </div>
//             </div>
//             <div className="column is-12-touch is-half-desktop is-one-third-widescreen level-item">
//               <div className="box"><img className="logo mb-5" src="../img/logos/userforge.svg">
//                 <p>A collaborative tool for creating simple, effective user personas.</p><span className="tag is-success is-light is-medium"><svg className="svg-inline--fa fa-handshake mr-2" aria-hidden="true" focusable="false" data-prefix="fal" data-icon="handshake" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M263.9 64c-33.9 0-66.7 12-92.6 33.7L144 120.7v39.1c2.7-.5 5.3-1.7 7.4-3.5l40.5-34c13.3-11.2 28.9-19 45.5-23.1L272.6 64h-8.7zM112 352.3c8.9 1 17.2 5 23.6 11.4l28.6 28.6 15.4 15.4 .1 .1 24.3 24.3c25.1 25.1 65.4 26.2 91.8 2.6c.8-.7 1.6-1.4 2.3-2.2c26.3 21.3 65.3 18.6 88.4-7.3c6-6.7 10.3-14.4 13-22.5c19.2 4 40-.8 55.7-14.8c11.3-10.1 18.2-23.2 20.6-37H528V368c0 26.5 21.5 48 48 48h16c26.5 0 48-21.5 48-48V160c0-17.7-14.3-32-32-32H560 528v32V318.8H473.1c-3.1-8.7-8.1-17-15.1-24l-85.6-85.6 8.1-7.5c6.5-6 6.9-16.1 .9-22.6s-16.1-6.9-22.6-.9l-76.1 70.2c-13.2 12.2-33.6 12.4-47 .4c-15.4-13.7-15.7-37.5-.8-51.6l79.4-75C332.2 105.4 355.8 96 380.4 96c22.7 0 44.6 8 61.9 22.6l44.8 37.7c2.5 2.1 5.6 3.4 8.8 3.7V121.8L462.9 94.1C439.8 74.6 410.6 64 380.4 64c-32.8 0-64.3 12.5-88.1 35l-79.4 75c-28.6 27-27.9 72.7 1.5 98.8c25.8 22.9 64.7 22.5 90-.8l44.5-41 86.5 86.5c13 13 12.4 34.3-1.4 46.5c-10.9 9.7-26.7 10.6-38.6 3c-5-3.3-11.4-3.4-16.6-.5s-8.3 8.6-8 14.6c.4 8.1-2.3 16.3-8.1 22.9c-12.3 13.9-33.8 14.5-46.9 1.4l-8.1-8.1c-3.6-3.6-8.7-5.3-13.7-4.5s-9.4 3.9-11.8 8.4c-1.9 3.6-4.4 6.9-7.6 9.8c-13.8 12.3-34.8 11.7-47.8-1.3l-39.9-39.8-28.6-28.6c-12.4-12.4-28.9-19.8-46.3-20.9V160 128H80 32c-17.7 0-32 14.3-32 32V368c0 26.5 21.5 48 48 48H64c26.5 0 48-21.5 48-48V352.3zM80 160V368c0 8.8-7.2 16-16 16H48c-8.8 0-16-7.2-16-16V160H80zm528 0V368c0 8.8-7.2 16-16 16H576c-8.8 0-16-7.2-16-16V160h48z"></path></svg><!-- <i className="fal fa-handshake mr-2"></i> -->acquired in 2016</span>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="callout">
//           <div className="columns is-centered">
//             <div className="column">
//               <h1 className="title is-spaced has-text-weight-bold">Interested in collaborating with me?</h1>
//               <h2 className="subtitle is-size-5-desktop">I’m always open to discussing product design work or partnership opportunities.</h2><a className="button is-primary is-outlined is-rounded is-medium has-text-weight-normal" href="/startup-inquiry"><span className="icon"><svg className="svg-inline--fa fa-message-lines" aria-hidden="true" focusable="false" data-prefix="far" data-icon="message-lines" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M208 416c0-26.5-21.5-48-48-48H64c-8.8 0-16-7.2-16-16V64c0-8.8 7.2-16 16-16H448c8.8 0 16 7.2 16 16V352c0 8.8-7.2 16-16 16H309.3c-10.4 0-20.5 3.4-28.8 9.6L208 432V416zm-.2 76.2l.2-.2 101.3-76H448c35.3 0 64-28.7 64-64V64c0-35.3-28.7-64-64-64H64C28.7 0 0 28.7 0 64V352c0 35.3 28.7 64 64 64h48 48v48 4 .3 6.4V496c0 6.1 3.4 11.6 8.8 14.3s11.9 2.1 16.8-1.5L202.7 496l5.1-3.8zM152 144c-13.3 0-24 10.7-24 24s10.7 24 24 24H360c13.3 0 24-10.7 24-24s-10.7-24-24-24H152zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24H264c13.3 0 24-10.7 24-24s-10.7-24-24-24H152z"></path></svg><!-- <i className="fa-regular fa-message-lines"></i> --></span><span>Start a conversation</span></a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="section testimonials is-medium is-white has-text-centered has-border-top">
//       <div className="container is-narrow">
//         <h1 className="title is-spaced is-size-3-desktop is-size-4-mobile">Testimonials</h1>
//         <h2 className="subtitle is-size-5-desktop">People I've worked with have said some nice things...</h2>
//         <div className="columns is-centered">
//           <div className="column is-two-thirds">
//             <div className="testimonials-slider">                     
//               <input id="carousel-1" type="radio" name="carousel"/>
//               <input id="carousel-2" type="radio" name="carousel"/>
//               <input id="carousel-3" type="radio" name="carousel"/>
//               <div className="carousel-slides">
//                 <div className="carousel-inner">
//                   <div className="carousel-item">
//                     <div className="testimonial-block"><img className="avatar" src="../img/avatars/pascal.png"/>
//                       <p className="quote">“Matt was a real pleasure to work with and we look forward to working with him again. He’s definitely the kind of designer you can trust with a project from start to finish.”</p>
//                       <h1 className="title is-size-5">Pascal Tremblay</h1>
//                       <h2 className="subtitle is-size-6">Creative Lead, Good Kind</h2>
//                     </div>
//                   </div>
//                   <div className="carousel-item">
//                     <div className="testimonial-block"><img className="avatar" src="../img/avatars/alvin.png"/>
//                       <p className="quote">“Matt's a clear communicator with the tenacity and confidence to really dig in to tricky design scenarios and the collaborative friction that's needed to produce excellent work.”</p>
//                       <h1 className="title is-size-5">Alvin Engler</h1>
//                       <h2 className="subtitle is-size-6">CEO, West Third Enterprises, Inc.</h2>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className="carousel-nav">
//                 {/* <label for="carousel-1"></label>
//                 <label for="carousel-2"></label> */}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <section className="section call-to-action is-primary has-text-centered">
//       <div className="container is-narrow">
//         <div className="box">
//           <div className="columns level">
//             <div className="column level-item">
//               <h1 className="title">Start a project</h1>
//             </div>
//             <div className="column level-item">
//               <p>Interested in working together? We should queue up a time to chat. I’ll buy the coffee.</p>
//             </div>
//             <div className="column level-item"><a className="button is-success is-outlined is-rounded is-medium has-text-weight-normal" href="/project-planner"><span className="icon"><svg className="svg-inline--fa fa-hand-horns" aria-hidden="true" focusable="false" data-prefix="far" data-icon="hand-horns" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg=""><path fill="currentColor" d="M80 48c8.8 0 16 7.2 16 16V208v32H80c-5.5 0-10.8 .6-16 1.6V64c0-8.8 7.2-16 16-16zM16 64V272C6 285.4 0 302 0 320c0 0 0 0 0 0v24c0 92.8 75.2 168 168 168h48c92.8 0 168-75.2 168-168V288 256 128c0-35.3-28.7-64-64-64s-64 28.7-64 64v50c-5.1-1.3-10.5-2-16-2c-7.9 0-15.4 1.4-22.4 4c-10.4-21.3-32.3-36-57.6-36c-5.5 0-10.9 .7-16 2V64c0-35.3-28.7-64-64-64S16 28.7 16 64zM336 256v32 56c0 66.3-53.7 120-120 120H168c-66.3 0-120-53.7-120-120V320s0 0 0 0c0-17.7 14.3-32 32-32h40 40c8.8 0 16 7.2 16 16s-7.2 16-16 16H120c-13.3 0-24 10.7-24 24s10.7 24 24 24h40c15.1 0 29-5.3 40-14c11 8.8 24.9 14 40 14c35.3 0 64-28.7 64-64V256 240 128c0-8.8 7.2-16 16-16s16 7.2 16 16V256zM160 240H144V208c0-8.8 7.2-16 16-16s16 7.2 16 16v32 2c-5.1-1.3-10.5-2-16-2zm96 16v48c0 8.8-7.2 16-16 16s-16-7.2-16-16V264 240c0-8.8 7.2-16 16-16s16 7.2 16 16v16z"></path></svg><!-- <i className="fa-regular fa-hand-horns"></i> --></span><span>Let's do this</span></a></div>
//           </div>
//         </div>
//       </div>
//     </section>
//     <footer className="section is-primary is-small has-text-centered">
//       <div className="container is-narrow"><a className="logo has-text-white" href="/"><svg className="svg-inline--fa fa-mf-logo fa-4x" aria-hidden="true" focusable="false" data-prefix="fak" data-icon="mf-logo" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg="" style="width: 1.25em;"><path fill="currentColor" d="M458.566 321.7c-19.552 0-37.558-10.598-46.947-27.745l-28.553-52.116-24.007 44.217c-12.003 23.505-45.69 26.588-57.886 3.179l-25.168-48.263-37.945 69.938-45.495.289 54.4-102.691c11.52-21.771 42.592-22.157 54.789-.77l27.104 47.78 26.33-47.684c11.807-21.386 42.783-21.483 54.591-.097l36.883 66.277c6.679 12.042 24.973 7.322 24.973-6.358l.096-88.144c0-32.753-26.813-59.437-59.725-59.437h-183.82c-32.911 0-59.724 26.684-59.724 59.437v152.782c0 32.756 26.813 59.44 59.725 59.44h246.642V432H228.187C172.915 432 128 387.302 128 332.294v-152.59C128 124.602 172.818 80 228.187 80h183.627C467.181 80 512 124.602 512 179.704v88.82c0 29.38-23.91 53.175-53.434 53.175z"></path></svg><!-- <i className="fak fa-mf-logo fa-4x"></i> --></a>
//         <div className="columns is-centered"> 
//           <div className="column is-one-third">
//             <h1 className="title is-size-4-touch has-text-weight-normal">Living, learning, &amp; leveling up one day at a time.</h1>
//           </div>
//         </div>
//         <div className="social-icons">
//           <p className="field"><a className="button is-medium" href="https://twitter.com/farleymatters" target="_blank"><span className="icon is-small"><svg className="svg-inline--fa fa-twitter fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"></path></svg><!-- <i className="fab fa-twitter fa-fw"></i> --></span></a><a className="button is-medium" href="https://dribbble.com/mattfarley" target="_blank"><span className="icon is-small"><svg className="svg-inline--fa fa-dribbble fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="dribbble" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 8C119.252 8 8 119.252 8 256s111.252 248 248 248 248-111.252 248-248S392.748 8 256 8zm163.97 114.366c29.503 36.046 47.369 81.957 47.835 131.955-6.984-1.477-77.018-15.682-147.502-6.818-5.752-14.041-11.181-26.393-18.617-41.614 78.321-31.977 113.818-77.482 118.284-83.523zM396.421 97.87c-3.81 5.427-35.697 48.286-111.021 76.519-34.712-63.776-73.185-116.168-79.04-124.008 67.176-16.193 137.966 1.27 190.061 47.489zm-230.48-33.25c5.585 7.659 43.438 60.116 78.537 122.509-99.087 26.313-186.36 25.934-195.834 25.809C62.38 147.205 106.678 92.573 165.941 64.62zM44.17 256.323c0-2.166.043-4.322.108-6.473 9.268.19 111.92 1.513 217.706-30.146 6.064 11.868 11.857 23.915 17.174 35.949-76.599 21.575-146.194 83.527-180.531 142.306C64.794 360.405 44.17 310.73 44.17 256.323zm81.807 167.113c22.127-45.233 82.178-103.622 167.579-132.756 29.74 77.283 42.039 142.053 45.189 160.638-68.112 29.013-150.015 21.053-212.768-27.882zm248.38 8.489c-2.171-12.886-13.446-74.897-41.152-151.033 66.38-10.626 124.7 6.768 131.947 9.055-9.442 58.941-43.273 109.844-90.795 141.978z"></path></svg><!-- <i className="fab fa-dribbble fa-fw"></i> --></span></a><a className="button is-medium" href="https://linkedin.com/in/matthew-farley-32526014/" target="_blank"><span className="icon is-small"><svg className="svg-inline--fa fa-linkedin-in fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="linkedin-in" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path></svg><!-- <i className="fab fa-linkedin-in fa-fw"></i> --></span></a><a className="button is-medium" href="https://indiehackers.com/mattfarley" target="_blank"><span className="icon is-small"><svg className="svg-inline--fa fa-indie-hackers fa-fw" aria-hidden="true" focusable="false" data-prefix="fak" data-icon="indie-hackers" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512" data-fa-i2svg=""><path fill="currentColor" d="M180 80H96V416H180V80zM348 80H264V416H348V290H460V416H544V80H460V206H348V80z"></path></svg><!-- <i className="fak fa-indie-hackers fa-fw"></i> --></span></a><a className="button is-medium" href="https://producthunt.com/@farleymatters" target="_blank"><span className="icon is-small"><svg className="svg-inline--fa fa-product-hunt fa-fw" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="product-hunt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M326.3 218.8c0 20.5-16.7 37.2-37.2 37.2h-70.3v-74.4h70.3c20.5 0 37.2 16.7 37.2 37.2zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-128.1-37.2c0-47.9-38.9-86.8-86.8-86.8H169.2v248h49.6v-74.4h70.3c47.9 0 86.8-38.9 86.8-86.8z"></path></svg><!-- <i className="fab fa-product-hunt fa-fw"></i> --></span></a><a className="button is-medium" href="mailto:mattfarley@hey.com"><span className="icon is-small"><svg className="svg-inline--fa fa-envelope fa-fw" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"></path></svg><!-- <i className="far fa-envelope fa-fw"></i> --></span></a></p>
//         </div>
//         <div className="copyright">Handcrafted by me<span className="icon has-white-text" style="vertical-align:middle;"><svg className="svg-inline--fa fa-copyright" aria-hidden="true" focusable="false" data-prefix="far" data-icon="copyright" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M256 48a208 208 0 1 1 0 416 208 208 0 1 1 0-416zm0 464A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM199.4 312.6c-31.2-31.2-31.2-81.9 0-113.1s81.9-31.2 113.1 0c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9c-50-50-131-50-181 0s-50 131 0 181s131 50 181 0c9.4-9.4 9.4-24.6 0-33.9s-24.6-9.4-33.9 0c-31.2 31.2-81.9 31.2-113.1 0z"></path></svg><!-- <i className="far fa-copyright"></i> --></span>twentytwentyfour</div>
//         <div className="made-by-bulma"><a href="https://bulma.io"><img src="https://bulma.io/images/made-with-bulma--white.png" alt="Made with Bulma" width="163" height="31"></a></div>
//       </div>
//     </footer>  
//         </>
//     );
// }