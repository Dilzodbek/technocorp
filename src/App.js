import React from 'react';
import Nav from './Home/Nav';
import Services from './Home/Services';
import Portfolio from './Home/Portfolio';
import About from './Home/About';
import { BrowserRouter,Route,Switch } from 'react-router-dom';
import pic from './img/pic.png';
const App = () => {
    return (
        
        <BrowserRouter>
            <div className="App">
                <Nav />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/services" component={Services} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/about" component={About} />
                </Switch>
            </div>
         </BrowserRouter>
    );
};

const Home = () => {
    return(
        <div className="home">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 left-coll">
                        <h3>
                            Biz biznesingizni internet <br/>  
                            orqali rivojlantirishga  <br/>
                            yordam beramiz
                        </h3>
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/>
                            Assumenda impedit architecto similique!
                        </p>
                        <div className="search">
                            <input className="input" type="number" placeholder="+998(_)-_-_-_-"/>
                            <button className="btn btn-outline-danger">Call me</button>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div>
                            <img className="image" src={pic}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
};



export default App;
