import React, {useEffect, useRef} from "react";
import Styles from "./blog-made4learners.module.scss";
import { Link } from "react-router-dom";

import Ripped from "../../../Assets/ripped.svg";

const Made4Learners = () => {
    let screen = useRef(null)
    useEffect(() =>{
        screen.current.scrollIntoView({block: "start"})
    },[])
    
  return (
    <div ref={screen} className="">
      <div className={Styles.hero}>
        <img src={Ripped} alt="" className={Styles.ripped} />
      </div>
      <div className={Styles.titleHero}>
        <h1 className={Styles.title}>
          {" "}
          AN INSIGHT TO MY <br />{" "}
          <span className={Styles.madeSpan}>MADE 4</span>{" "}
          <span className={Styles.middleSpan}>LEARNERS</span><br/>
          <span className={Styles.endSpan}>EXPERIENCE</span>{" "}
        </h1>
      </div>
      <section className={`page center ${Styles.section1}`}>
        <div className={`blogInner ${Styles.section1Inner}`}>
            <ul className={`ulAuthor`}>
                <li className={`liAuthor`}>August 26, 2020</li>
                <li className={`liAuthor`}>•</li>
                <li className={`liAuthor`}>Author</li>
                <li className={`liAuthor`}>•</li>
                <li className={`liAuthor`}>Andrew Piñon</li>
            </ul>
            
            <p className="blog-p">
                We take the internet for granted these days, but there was a time that it was looked at more of a privilege as to a necessity, but now here in our covid filled world we can safetly say we barely function as a society without the internet. It has become a necessity. Schools, work places even our daily lives are reallying more than ever on theh internet to function, and I've taken my perspective on how CIT
                has managed to utilize the internet to make the university function again. (Which they call Made4Learners).
            </p>
            
            <h3 className="blog-h3">There was no calm before the storm</h3>
            <p className="blog-p">
                As I'm writing about my experiences during the first week of my MADE 4 learners semester I remember my not so smooth experience when enrolling.
                this is not in any way discrediting the amount of brain power and hours that went into planning the online enrollment for the thousands of students CIT-U has. I'm no sherlock but I know it was not an easy task. Back to what I was saying, in my opinion it could have gone a lot better and faster if not for the countless of rows of subjects I had to go over and list down for enrollment only on end up
                back to the excel file and changing my schedules due to some of my classes being merged? Im not sure.
                <br/><br/>
                A quick update though, my moodle (another learning platform CIT uses) is still empty despite teachers telling me my name is already enrolled. huh...
            </p>
             
            <h3 className="blog-h3">The Positives</h3>
            <p className="blog-p">
                Well enough of the negativity I'm already sounding like an old man complaining about my lawn and yes while there were some hiccups I can proudly say there were a lot more positives that out weighed them.
               "CIT's faculty are nice" is an understatement to say the least, I don't know how a person can manage to have a kind demeanor after the countless
               complaints and hiccups that are thrown at them by numerous students. As far as my experience goes every teacher from multiple departments have been patient and kind when I seeked assistance and clarifications from them.
               
                
            </p>
            
            <h3 className="blog-h3">Final Thoughts</h3>
            <p className="blog-p">
                 I really think a lot of automation could have been done in managing the class schedule and sections to lessen the burden on both the students and faculty. While on that topic I feel so lucky and blessed to have had the great
                 opportunity to develop an online enrollment system for my high school alma mater, be it in a much smaller student count. which conviniently I also plan to write my experiences in developing and what tech stach I used in my  
                  <Link className="text-link" to="/blogs/helping-my-highschool"> Helping my highschool</Link> blog post.
                <br/><br/>
                With everything that is going on I feel blessed first and for most because my family and I are healthy and secondly for being a student at CIT-U. I feel very well supported in my endeavour as a student as CIT comes up withh
                more ways for me to go to school and not stagnate while this horrible pandemic runs its course. Overall I've had fun in my classes learning along the way and laughing when my teacher is on the moon (a zoom background).
             </p>
        </div>
      </section>
    </div>
  );
};

export default Made4Learners;
