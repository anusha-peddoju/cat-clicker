import React, { Component } from 'react';
import cats from '../models/cats';
import '../index.css';

class CatView extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: this.props.name,
            src: this.props.src,
            clicks: this.props.clicks,
            admin: false,
            nameInput: this.props.name,
            srcInput: this.props.src,
            clicksInput: this.props.clicks,
            age:this.props.age

        };

        this.incrementClickCount = this.incrementClickCount.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleSrcChange = this.handleSrcChange.bind(this);
        this.handleClicksChange = this.handleClicksChange.bind(this);
      
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.name !== nextProps.name) {
            this.setState({
                name: nextProps.name,
                src: nextProps.src,
                clicks: nextProps.clicks,
                nameInput: nextProps.name,
                srcInput: nextProps.src,
                clicksInput: nextProps.clicks
            });
        }
    }

    incrementClickCount = () => {
        this.setState({
            clicks: this.state.clicks + 1,
            clicksInput: this.state.clicks + 1
        });
        cats[this.props.index].clicks = this.state.clicks + 1;
        cats[this.props.index].age=(this.state.clicksInput>3)?'middleaged':'infant'
    }

    handleNameChange = (event) => {
        this.setState({
            nameInput: event.target.value
        });
    }

    

    handleSrcChange = (event) => {
        this.setState({
            srcInput: event.target.value
        });
    }

    handleClicksChange = (event) => {
        this.setState({
            clicksInput: event.target.value
        });
    }

    openAdmin = () => {
        this.setState({
            admin: true
        });
    }

    saveAdmin = () => {
        this.setState({
            name: this.state.nameInput,
            src: this.state.srcInput,
            clicks: Number(this.state.clicksInput),
            
            admin: false
        });
    }

    closeAdmin = () => {
        this.setState({
            admin: false
        });
    }

    render() {
        if (this.state.admin) {
            return (
                
                <div className="display">
                    <h3>Click the cats below</h3>
                    <div className='total'>
                    <div className="cat">
                        <p id="cat-name">{this.state.name}</p>
                        <img src={this.state.src} width="360px" id="cat-img" alt="Cat" onClick={this.incrementClickCount} />
                        <p id="cat-clicks">Clicks: {this.state.clicks}</p>
                    </div>
                    <div className='form'>
                    <button id="admin-btn" onClick={this.openAdmin}>Update</button>
                    <div id="admin-form">
                        <div className="form-unit">
                            <p className="form-label">Name: </p>
                            <input type="text" id="admin-name" onChange={this.handleNameChange} value={this.state.nameInput} />
                        </div>
                        <div className="form-unit">
                            <p className="form-label">Image URL: </p>
                            <input type="text" id="admin-imgUrl" onChange={this.handleSrcChange} value={this.state.srcInput} />
                        </div>
                        <div className="form-unit">
                            <p className="form-label">Number of Clicks: </p>
                            <input type="number" id="admin-clicks" onChange={this.handleClicksChange} value={this.state.clicksInput} />
                        </div>
                        <div className="form-unit">
                            <button className="form-btn" id="admin-save" onClick={this.saveAdmin}>Save</button>
                            <button className="form-btn" id="admin-cancel" onClick={this.closeAdmin}>Cancel</button>
                        </div>
                    </div>
                    </div>
                    </div>

                    
                </div>
                
            );
        } else {
            return (
                <div className="display">
                    <h3>Click the cats below</h3>
                    <div className="cat">
                        <p id="cat-name">{this.state.name}</p>
                        <img src={this.state.src} width="360px" id="cat-img" alt="Cat" onClick={this.incrementClickCount} />
                        <p id="cat-clicks">Clicks: {this.state.clicks}</p>
                        <p id="cat-clicks">Age: {this.state.age}</p>
                    </div>
                    <button id="admin-btn" onClick={this.openAdmin}>Update</button>
                    
                    
                </div>
            );
        }
    }
}

export default CatView;