import React, {Component} from 'react';

class TBT extends Component {
    render() {
        return (
            <div className="card">
                <p>{this.props.past.title}</p>
                <p>{this.props.past.description}</p>
                <p>{this.props.past.date}</p>
            </div>
        );
    }
}

export default TBT;