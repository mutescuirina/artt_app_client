import React from 'react'
import Event from './Event'
import EventForm from './EventForm'

class AllEvents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            futures: []
        }
        this.handleAddEvent = this.handleAddEvent.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)

    }
    componentDidMount() {
        this.getFutures()
    }
    deleteEvent(id) {
        fetch('/futures' + id, {
            method: 'DELETE'
        })
            .then(response => {
                const findIndex = this.state.futures.findIndex
                    (event => event.id === id)
                const copyEvents = [... this.state.futures]
                copyEvents.splice(findIndex, 1)
                this.setState({ futures: copyEvents })
                
            })
    }
    getFutures() {
        fetch('/futures')
            .then(response => response.json())
            .then(json => this.setState({ futures: json }))
            .catch(error => console.error(error))

    }
    handleAddEvent(event) {
        const copyEvents = [...this.state.futures]
        copyEvents.unshift(event)
        this.setState({
            futures: copyEvents
        })

    }
    render() {
        return (
            <div>
                <h1>This is the Event Page</h1>
                <EventForm handleAddEvent={this.handleAddEvent} />
                {this.state.futures.map((future) =>
                <div>
                    <Event future={future} key={future.title} />
                    <p onClick={() => this.deleteEvent(future.id)}>X</p>
                    
                </div>
)}

            </div>
        )
    }
}

export default AllEvents