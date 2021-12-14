import React from 'react';

import Team from '../Media/Images/AFCteamphoto.jpeg'

class LandingPage extends React.Component {
    render() {
        return(
            <div>
                <h1>
                 Welcome to the dog track.
                </h1>
                <img src={Team} alt='team of people'/>
            </div>
        );
    }
}

export default LandingPage;