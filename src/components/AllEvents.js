import React from 'react'
import Event from './Event'
import EventForm from './EventForm'
import { Modal, Button} from 'react-materialize';

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
        fetch('/futures/' + id, {
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
        fetch('/futures')
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
                <h1>This is the Event Page</h1>
            <div className="row">
            <Modal header="Modal Header" bottomSheet trigger={<Button
  floating
  large
  className="button"
  waves="light"
  icon="add"
/>}>
            <EventForm handleAddEvent={this.handleAddEvent} />
</Modal>
                
                {this.state.futures.map((future) =>
                    <div>
                        <Event deleteEvent={this.deleteEvent} future={future} key={future.title} />
                        
                        {/* <span onClick={() => this.deleteEvent(future.id)}>X</span> */}
                        
                        

                    </div>
                )}

</div>
            </div>
        )
    }
}

export default AllEvents