import React from 'react'
import Treasure from './Treasure'

class AllTreasure extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            pasts: []
        }
    }
    componentDidMount() {
        this.getPasts()
    }
    getPasts () {
        fetch('/pasts')
        .then(response => response.json())
        .then(json => this.setState({pasts: json}))
        .catch(error => console.error(error))
    }
    render () {
        return (
            <div>
                <h1>This is the Treasure Page</h1>
                {this.state.pasts.map((past) =>
                <Treasure past={past} key={past.title} />
)}
               
            </div>
        )
    }
}

export default AllTreasure