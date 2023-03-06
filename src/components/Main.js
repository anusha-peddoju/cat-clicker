import React, { Component } from 'react';
import cats from '../models/cats';
import CatView from '../components/CatView';

import '../index.css';

class Main extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: cats[0].id,
            name: cats[0].name,
            src: cats[0].src,
            clicks: cats[0].clicks,
            catIndex: 0,
            age:'infant'
        };
    }

    setCat = (catIndex) => {
        this.setState({
            id: cats[catIndex].id,
            name: cats[catIndex].name,
            src: cats[catIndex].src,
            clicks: cats[catIndex].clicks,
            catIndex: catIndex,
           
        });
    }

    render() {
        return (
            <div>
            <div className="main">
                <div className="navbar">
                    <p>Select a Cat</p>
                    <ul className="cat-names">
                    { cats.map((cat, index) => <li key={cat.id}><button id={cat.id} onClick={this.setCat.bind(this, index)}>{cat.name}&emsp;{cat.clicks}</button></li>) }
                    </ul>
                </div>
                <CatView name={this.state.name} src={this.state.src} clicks={this.state.clicks} index={this.state.catIndex} age={this.state.age} />
                
            </div>
            <div>
                    <h2>Image Gallery</h2>
                    { cats.map((item,index) => 
                        <div className="card-list1">
                        <div className="card">
                            <img src={`${item.src}`} className="card-image" alt="cat" onClick={this.setCat.bind(this, index)} />
                            
                            <p className="card-name" >{item.name}</p>
                            <p className="card-clicks">clicks: {item.clicks}</p>
                            
                        </div>
                        </div>
                    ) }
            </div>
            </div>
        );
    }
}

export default Main;