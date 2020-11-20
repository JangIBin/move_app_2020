import React from 'react';
import './About.css';

function About(props) {
    console.log(props);
    return (
        <div className="about__container">
            <span>
                "- 멋대로 기대하지 말고 멋대로 실망하지 말자."
            </span>
            <span>- Jang IBin, 2000</span>
        </div>
    );
}

export default About;