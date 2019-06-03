import React from 'react'
import New from './New'
class AllNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            presents:[
            ]
        }
    }
    componentDidMount () {
        this.getPresents()
    }
    getPresents () {
        fetch('/presents')
        .then(response => response.json())
        .then(json => this.setState({presents: json}))
        .catch(error => console.error(error))
    }
    render () {
        return (
            <div>
                <h1>This is the News Page</h1>
                {this.state.presents.map((present) =>
                <New present={present} key={present.title} />
)}
               
            </div>
            
        )
    }
}

export default AllNews