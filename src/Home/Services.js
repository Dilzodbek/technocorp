import React from 'react';
import icon1 from '../img/code 6.png';
import icon2 from '../img/call.png';
import icon3 from '../img/design.png';
import icon4 from '../img/archive.png';
import icon5 from '../img/stats.png';
import icon6 from '../img/contract.png';
import icon7 from '../img/info.png';
import icon8 from '../img/fam.png';
const Services = () => {
    return (
        <div className="services">
            
            <div className="container">
                <h5 className="xizmat">Xizmatlar</h5>
                <div className="row">
                    <div className="col-md-3">
                        <div className="card card1 bg-light">
                            <img className="icon1" src={icon1}/>
                            <h4 className="text1">
                                Web dasturlash <br /> xizmati
                            </h4>
                        </div>
                    </div>
                        <div className="col-md-3">
                            <div className="card card1 bg-light">
                                <img className="icon2" src={icon2} />
                                <h4 className="text2">
                                    Mobil ilovalarni  <br /> ishlab chiqish <br/> xizmati
                                </h4>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="card card1 bg-light">
                                <img className="icon1" src={icon3} />
                                <h4 className="text1">
                                    Dizayn <br /> xizmati
                                </h4>
                            </div>

                        </div>

                        <div className="col-md-3">
                            <div className="card card1 bg-light">
                                <img className="icon1" src={icon4} />
                                <h4 className="text1">
                                    Audit <br /> xizmati
                                </h4>
                            </div>
                        </div>      

                    <div className="col-md-3">
                        <div className="card card1 bg-light">
                            <img className="icon1" src={icon5} />
                            <h4 className="text1">
                                BPR <br /> xizmati
                            </h4>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card card1 bg-light">
                            <img className="icon1" src={icon6} />
                            <h4 className="text1">
                                Texnik xujjat ishlab chiqarish 
                            </h4>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card card1 bg-light">
                            <img className="icon1" src={icon7} />
                            <h4 className="text1">
                                Infografika <br />tayyorlash xizmati
                            </h4>
                        </div>
                    </div>

                    <div className="col-md-3">
                        <div className="card card2 bg-light">
                            <img className="icon3" src={icon8} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default Services;