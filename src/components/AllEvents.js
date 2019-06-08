import React from 'react'
import Event from './Event'
import EventForm from './EventForm'
import { Modal, Button } from 'react-materialize';

let baseURL = process.env.REACT_APP_BASEURL

//alternate baseURL = 'https://fathomless-sierra-68956.herokuapp.com'

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
} else {
    baseURL = 'https://artt-app-api-final.herokuapp.com'
}

console.log('current base URL:', baseURL)

class AllEvents extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            futures: []
        }
        this.handleAddEvent = this.handleAddEvent.bind(this)
        this.deleteEvent = this.deleteEvent.bind(this)
        this.getFutures = this.getFutures.bind(this)


    }
    componentDidMount() {
        this.getFutures()
    }
    deleteEvent(id) {
        fetch(baseURL + '/futures/' + id, {
            method: 'DELETE'
        })
            .then(response => {
                const findIndex = this.state.futures.findIndex(event => event.id === id)
                const copyEvents = [... this.state.futures]
                copyEvents.splice(findIndex, 1)
                this.setState({ futures: copyEvents })

            })
    }
    getFutures() {
        fetch(baseURL + '/futures')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ futures: json })
            })
        // .catch(error => console.error(error))

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
            <div className="container">
                <div className="row">
                
                    
                    <Modal header="Add a new Event" bottomSheet trigger={<Button
                        floating
                        className="waves-effect waves-light btn-floating right button"
                        waves="light"
                        icon="add"
                    />}>
                       
                        <EventForm handleAddEvent={this.handleAddEvent} />
                       
                    </Modal>
                    
                </div>
                <h4 className="titles">Events</h4>
                <div className="row">

                    {this.state.futures.map((future) =>
                        <div>
                            <Event deleteEvent={this.deleteEvent} future={future} key={future.title} />




                        </div>
                    )}

                </div>
            </div>
        )
    }
}

export default AllEvents