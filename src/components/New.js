import React, {Component} from 'react';

class New extends Component {
    render() {
        return (
            <div className="card">
                <p>{this.props.present.title}</p>
                <p>{this.props.present.description}</p>
                <p>{this.props.present.date}</p>
            </div>
        );
    }
}

export default New;