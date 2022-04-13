import React from 'react';

export default function Portfolio() {
    return (
        <div className='flex-evenly'>
            <a className='nav-link vw43' href="https://mysterious-eyrie-75602.herokuapp.com/" id="puppy-love">
                <h3>Puppy-Love</h3>
                <h5>Express JS, MySql2, Cloudinary, Sequelize</h5>
                <img className="vw43" src="assets/images/puppylove.jpg" alt="Puppy Love Webpage cover"></img>
                <a className='nav-link' href='https://github.com/Zsvoboda87/Puppy-Love'>Github</a>
            </a>
            <a className='nav-link vw43' href="https://zsvoboda87.github.io/Bored-AF/">
                <h3>Bored-AF</h3>
                <h5>HTML, CSS, JavaScript, Third Party Apis</h5>
                <img className="vw43" src="assets/images/Bored-AF.png" alt="Bored A F Webpage cover"></img>
                <a className='nav-link' href='https://github.com/Zsvoboda87/Bored-AF'>Github</a>
            </a>
            <a className='nav-link vw43' href="https://watch.screencastify.com/v/2JGX16nUDU8GSKy7FYw2">
                <h3>SQl Employee Tracker</h3>
                <h5>MySql, Node JS, inquierer</h5>
                <img className="vw43" src="assets/images/SQL-employeeTracker.jpg" alt="mySql Employee Tracker"></img>
                <a className='nav-link' href='https://github.com/Zsvoboda87/SQL-Employee-Tracker'>Github</a>
            </a>
            <a className='nav-link vw43' href="https://young-temple-73421.herokuapp.com/">
                <h3>The Nerd Spot</h3>
                <h5>MySql, HandleBars, Express</h5>
                <img className="vw43" src="assets/images/The-Nerd-Spot.png" alt="The nerd Spot Cover"></img>
                <a className='nav-link' href='https://github.com/Zsvoboda87/The-Nerd-Spot'>Github</a>
            </a>

        </div>
    );
}
