import React, {useRef, useEffect} from "react";
import Styles from "./Home-page.module.scss";
import Rellax from "rellax";
import { Link } from "react-router-dom";

//IMAGES
import BackgroundOverlay from "../../Assets/background-overlaly.svg";
import BackgroundOverlay2 from "../../Assets/background-overlaly2.svg";
import made4Learing from "../../Assets/Top Blogs/made4Learing.png";
import helpingHand from "../../Assets/Top Blogs/helpinghand.png";
import Coffee from "../../Assets/Top Blogs/coffee.png";
import human from "../../Assets/a.png";

const Homepage = () =>{
    
    let section2 = useRef(null)
    
    
    useEffect(() => {
        const section2Parallax = new Rellax(section2)
    }, []);
    
    return(
        <div className="page">
            <section className={Styles.section1} ref={el=> section2 = el}  data-rellax-speed="-9">
                <img src={human} alt="" className={Styles.human} />
                <img src={BackgroundOverlay} alt="" className={Styles.overlay} />
                
                <div className={Styles.textContainer}>
                    <p className={Styles.subHeader}>A PEEK INSIDE A DEVELOPER'S</p>
                    <h2 className={Styles.mainHeader}>THOUGHTS</h2>
                    <p className={Styles.nameHeader}>Andrew Piñon</p>
                </div>
            </section>
            
            <section className={`center ${Styles.section2}`}  >
                <img src={BackgroundOverlay2} alt="" className={Styles.overlay2} />
                <div className={Styles.Section2HeaderContainer}>
                    <h3 className={Styles.section2Header}>Top Picks</h3>
                    <p className={Styles.section2SubHeader}>The latest and best articles that I personally chose</p>
                </div>
                
                <div className={`inner ${Styles.section2Inner}`}>
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridLong} ${Styles.article1}`}>
                        <span className={Styles.blogLabel}>Personal</span>
                        <h2 className={Styles.blogTitle}>My Thoughts  <br/> On Made 4 Learners.</h2>
                        <img src={made4Learing} alt="made 4 learning" className={Styles.blog1Img}/>
                        <Link to="/blogs/made4LearnersExperience">
                            <button className={Styles.readBlogBtn}>Read More</button>
                        </Link>
                    </div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridTall} ${Styles.article2}`}>
                        <span className={Styles.blogLabel}>Personal</span>
                        <img src={Coffee} alt="Coffee mug" className={Styles.blog2Img}/>
                        <h2 className={Styles.blogTitleContainer2}>How I made my Blog.</h2>
                        <button className={Styles.readBlogBtn}>Read More</button>
                    </div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridTall} ${Styles.article3}`}></div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridTall} ${Styles.article4}`}></div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridTall} ${Styles.article5}`}></div>
                    
                    {/* BLOG */}
                    <div className={`${Styles.container} ${Styles.gridLong} ${Styles.article6}`}>
                        <span className={Styles.blogLabel}>Personal</span>
                        <img src={helpingHand} alt="Giving my highschool a helping hand" className={Styles.blog6Img}/>
                        <h2 className={Styles.blogTitle}>Lending A Helping Hand To<br/>  My High School With Programming.</h2>
                        <button className={Styles.readBlogBtn}>Read More</button>
                    </div>
                </div>
            </section>
            
            {/* <section className={Styles.section1}></section> */}
        </div>
    )
}

export default Homepage;