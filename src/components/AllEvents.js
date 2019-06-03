import React from 'react'
import Event from './Event'

class AllEvents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            futures: []
        }
    }
    componentDidMount() {
        this.getFutures()
    }
    getFutures(){
        fetch('/futures')
        .then(response => response.json())
        .then(json => this.setState({futures: json}))
        .catch(error => console.error(error))

    }
    render () {
        return (
            <div>
                <h1>This is the Event Page</h1>
                {this.state.futures.map((future) =>
                <Event future={future} key={future.title} />
)}
               
            </div>
        )
    }
}

export default AllEvents