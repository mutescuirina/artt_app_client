import React, {Component} from 'react';

class New extends Component {
    constructor(props) {
        super(props)
        this.state = {
           hide: true
        }
        this.toggleNews = this.toggleNews.bind(this)
    }
      toggleNews () {
          this.setState ({
              hide: ! this.state.hide
          })

      }  
    
    render() {
        return (
            <div className="row">
<div className="col m6">
                <p>{this.props.present.title}</p>
                
                <p>{this.props.present.date}</p>
                <button onClick ={this.toggleNews}>Show/Hide</button>
            </div>
            {
                <div className={`col m6 ${this.state.hide ? 'hide' : 'show'}`} >
                    <img src={this.props.present.img}/>
                    <p>{this.props.present.description}</p>
                    
                </div>

            }
            </div>
            
        );
    }
}

export default New;