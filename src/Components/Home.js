import React from 'react';
import Nav from './Nav';
import '../Css/home.css';

function Home() {
  return (
    <div>
        <div className="banner">
            <Nav/>
            <div className="banner__content">
                <img src="assets/images/Group2.png" alt=""/>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod</p>
                <h1>Lorem ipsum dolor sit amet, consectetur</h1>
                <p className="content1">Lorem ipsum now</p>
                <p className="content2">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt 
                ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                <button>Lorem ipsum now</button>
            </div>
        </div>
        <div className="services">
            <h1>Lorem ipsum now?</h1>
            <div className="services__container">
                <div className="box">
                    <div className="image_part"></div>
                    <h5>Lorem ipsum</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut</p>
                </div>
                <div className="box">
                    <div className="image_part"></div>
                    <h5>Lorem ipsum</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut</p>
                </div>
                <div className="box">
                    <div className="image_part"></div>
                    <h5>Lorem ipsum</h5>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt
                    ut</p>
                </div>
            </div>
        </div>
        <div className="issues_section">
            <div className="issue">
                <h1>Problem</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
            </div>
            <div className="issue">
                <h1>Solution</h1>
                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
                    Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                    labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
                    et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet</p>
            </div>
            <button>Lorem ipsum now</button>
        </div>
        <div className="FAQ_section">
            <h2>Frequently asked quetsions</h2>
            <div className="question">
                <h5>Lorem ipsum now?</h5>
                <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
            </div>
            <div className="question">
                <h5>Lorem ipsum now?</h5>
                <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
            </div>
            <div className="question">
                <h5>Lorem ipsum now?</h5>
                <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
            </div>
            <div className="question">
                <h5>Lorem ipsum now?</h5>
                <p>lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut 
                labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo</p>
            </div>
        </div>
    </div>
  );
}

export default Home;
