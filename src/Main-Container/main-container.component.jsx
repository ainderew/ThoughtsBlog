import React from "react";
import "../SCSS/global.style.scss";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

//COMPONENTS
import Header from "../Components/header/header.component";

//PAGES
import HomePage from "../Pages/Home-page/Home-page.component";

//BLOGS
import Made4LearnersBlog from "../Pages/Blogs/Made4Learners/blog-made4learners.component";

const MainContainer = () =>{
    return(
        <Router>
            <div className="page">
                <Header />
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/blogs/made4LearnersExperience"  component={Made4LearnersBlog} />
                </Switch>
            </div>
        
        </Router>
    )
}

export default MainContainer;