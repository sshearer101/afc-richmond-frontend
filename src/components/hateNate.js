
import React from 'react';
import Evil from '../Media/Images/EvilNate1.jpg'

class HateNate extends React.Component {
    render() {
        return(
            <div>
                <h1>
                    We all are here to hate on Nate!
                </h1>
                <img src={Evil} alt="evil Nate being mean to players"/>
            </div>
        );
    }
}

export default HateNate;