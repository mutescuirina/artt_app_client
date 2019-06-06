import React, { Component } from 'react';

class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
            hide: true,
            currentPresent: null
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
    show(event){
        console.log(this.props.currentPresent)
        console.log(event.currentTarget.id)
        if(this.props.currentPresent === event.currentTarget.id){
            // this.props.present.id = this.state.hide 
            this.state.hide = false
        }
        else {
            // this.props.present.id = this.state.show
            this.state.hide = true
        }
        
    }
    render() {
        // console.log(this.props.setCurrent)
        return (
            <div id={this.props.id} onMouseLeave={() => this.setState({hide: true})} onMouseEnter={() => this.setState({hide: false})} className="row">
                <div className="col m6">
                {/* <button onClick={this.toggleNews}>Show/Hide</button> */}
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