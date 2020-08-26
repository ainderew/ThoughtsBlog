import React, {useEffect, useState} from "react";
import Styles from "./header.module.scss";
import * as _ from "underscore"


let lastScrollTop = window.pageYOffset;
const Header = () =>{
    
    const [headerClass, setHeaderClass] = useState(true)
    
    const onScroll = () =>{
        let st = window.pageYOffset;
           
        if (st > lastScrollTop){
            setHeaderClass(false)
           console.log("downScroll")
        }else{
            setHeaderClass(true)
            console.log("upScroll")
        }
        
        if(st <= 0 ){
            lastScrollTop = 0;
            console.log("first statement ran")
        } else{
            lastScrollTop = st;
            console.log("second statement ran")
        } 
       
        console.log("st: "+st + " Last: " + lastScrollTop)
        console.log(headerClass)
    }
    
    useEffect(() => {
        const throttledScroll = _.throttle(onScroll, 300)
        
         window.onscroll = throttledScroll;
         
    }, [])
    
    return(
        <div className={headerClass ? Styles.header : `${Styles.header} ${Styles.headerHide}`}>
            <div className={Styles.row1}>
                <h2 className={Styles.Logo}>Andrew's Blog <span className={Styles.logoSpan}>.</span></h2>
            </div>
            <div className={Styles.row2}>
                <ul className={Styles.ul}>
                    <li className={Styles.li}>Home</li>
                    <li className={Styles.li}>Good Reads</li>
                    <li className={Styles.li}>Free Courses</li>
                </ul>
            </div>
            
            <div className={Styles.row3}>
                <button className={Styles.button}>Get in touch</button>
            </div>
        </div>
    )
}

export default Header;