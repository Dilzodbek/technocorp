import React from 'react';
import port1 from '../img/port1.jpg';
import port2 from '../img/port2.png';
import port3 from '../img/port3.png';
import port4 from '../img/port4.png';
import port5 from '../img/port5.png';
import port6 from '../img/port6.png';


const Portfolio = () => {
    return (
        <div className="portfolio">
            <div className="container">
                <h5 className="xizmat">Loyihalar</h5>
            
                <div className="row">
                    <div className="col-md-4">
                        <div className="card pCard">
                            <img className="port" src={port1}/>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="card pCard">
                            <img className="port" src={port2} />
                        </div>
                    </div>
                        <div className="col-md-4">
                            <div className="card pCard">
                                <img className="port" src={port3} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card pCard">
                                <img className="port" src={port4} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card pCard">
                                <img className="port" src={port5} />
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="card pCard">
                                <img className="port" src={port6} />
                            </div>
                        </div>                    
                </div>
                <button className="btn btn-outline-success pBtn">Barchasi</button>
            </div>
        </div>
    );
};



export default Portfolio;