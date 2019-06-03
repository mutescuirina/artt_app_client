import React, {Component} from 'react';

class Event extends Component {
    render() {
        return (
            <div className="card">
                <p>{this.props.future.title}</p>
                <p>{this.props.future.description}</p>
            </div>
        );
    }
}

export default Event;