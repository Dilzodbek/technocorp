import React from 'react';
import about from '../img/about.png'

const About = () => {
    return (
        <div className="about">
            <div className="container">
                <h5 className="xizmat">Biz haqimizda</h5>
                <div className="row">
                    <div className="col-md-6">
                        <div className="card aCard">
                            <img className="aboutImg" src={about}/>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card aCard1">
                            <p className="lorem">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat nulla fuga enim,
                                quibusdam voluptatibus porro quas perferendis possimus animi quaerat at. Provident quos distinctio
                                pariatur asperiores voluptas impedit labore modi magnam? Facilis impedit fuga ipsam unde amet sunt
                                quos aspernatur odio, corporis architecto quisquam dolore corrupti nihil.

                                <button className="btn btn-success aBtn">Batafsil</button>
                            </p>
                            
                        </div>
                    </div>                    
                    <div className="buttom">
                        <h5 className="text-success box">+85</h5>
                        <p className="text-secondary">Ishchilar soni</p>
                    </div>
                    <div>
                        <h5 className="text-success box">+195</h5>
                        <p className="text-secondary">Xursand <br/> mijozlarimiz</p>
                    </div>
                    <div className="buttom2">
                        <h5 className="text-success box">+500</h5>
                        <p className="text-secondary">Muvofaqqiyatli loyhalar</p>
                    </div>
                    <div className="buttom3">
                        <h5 className="text-success box">+195</h5>
                        <p className="text-secondary">Xursand <br /> mijozlarimiz</p>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default About;