import React from "react";
import {BsInfoCircleFill} from 'react-icons/bs'
import { Animate } from "react-simple-animate";

import PageHeaderContent from "../../components/pageHeaderContent"
import "./styles.scss"
import {DiApple,DiAndroid} from 'react-icons/di'
import {FaDev, FaDatabase} from 'react-icons/fa'


const jobSummary= "As a Full Stack Developer, I possess a diverse set of skills and expertise to create end-to-end web applications. I am proficient in both front-end and back-end technologies, including HTML, CSS, JavaScript, React, Node.js, and MongoDB. My experience in developing user-friendly interfaces, implementing database designs, and managing server-side processes enables me to deliver high-quality, scalable applications that meet clients' needs. I continuously keep up with the latest trends in web development to ensure that my skills are up-to-date. My passion for technology and problem-solving drives me to provide innovative solutions that exceed expectations."
const personalDetails = [
    {
      label: "Name",
      value: "Kennedy Icika",
    },
    {
      label: "Age",
      value: "24",
    },
    {
      label: "Address",
      value: "Nairobi",
    },
    {
      label: "Email",
      value: "icikakennedy@gmail.com",
    },
    {
      label: "Contact No",
      value: "0793020496",
    },
  ];
const About = () => {
    return ( 
        <section id="about" className="about">
            <PageHeaderContent
            headerText = "About Me"
            icon = {<BsInfoCircleFill size={40}/>}
            />
            <div className="about__content"> 
            <div className="about__content__personalWrapper">
            <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(-900px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
            <h3>Full Stack Developer</h3>
            <p>{jobSummary}</p>
            </Animate>
            
            
         <Animate
        play
        duration={1.5}
        delay={1}
        start={{
          transform: "translateX(500px)",
        }}
        end={{
          transform: "translatex(0px)",
        }}
      >
            <h3 className="personalInfoHeader">Personal information</h3>
            <ul>
            {
                personalDetails.map((item, i)=>(
                    <li key={i}>
                        <span className="title">{item.label}</span>
                        <span className="value">{item.value}</span>

                    </li>
                ))
            }
            </ul>
            </Animate>
            </div>
            <div className="about__content__servicesWrapper">
                <div className="about__content__servicesWrapper__innerContent">
                <div>
            <FaDev size={60} color="var(--yellow-theme-main-color)"/>
          </div>
          <div>
          <FaDatabase size={60} color="var(--yellow-theme-main-color)"/>

          </div>
          <div>
          <DiAndroid size={60} color="var(--yellow-theme-main-color)"/>

          </div>
          <div>
          <DiApple size={60} color="var(--yellow-theme-main-color)"/>

          </div>
                </div>
        
          </div>



            </div>
           

        </section>
     );
}
 
export default About;

