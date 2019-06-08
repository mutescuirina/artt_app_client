import React, { Component } from 'react';

class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: true,
           
        }
        this.toggleNews = this.toggleNews.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    toggleNews () {
        this.setState({
            hide: !this.state.hide
        })

    }
    handleClick(e){
        e.preventDefault()
        this.props.setCurrent(e)
        this.toggleNews()
    }

    //check if ids match, only "show" img if they do
    
    render() {
        console.log(this.props.setActiveNews)
        // console.log(this.props.setCurrent)
        return (
            <div id={this.props.id} onMouseLeave={() => this.setState({hide: true})} onMouseEnter={() => this.setState({hide: false})} className="row">
                <div className="col m6">
                    <p>{this.props.present.title}</p>
                    <p>{this.props.present.date}</p>
                </div>
                {
                    <div className={`col m6 ${this.state.hide ? 'hide' : 'show'}`} >
                        <img src={this.props.present.img} />
                        <p>{this.props.present.description}</p>
                        
                    </div>

                }
            </div>

        );
    }
}

export default New;