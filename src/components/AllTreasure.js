import React from 'react'
import Treasure from './Treasure'
import TreasureForm from './NewsFrom'
import { Modal, Button } from 'react-materialize';

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
    getPasts() {
        fetch('/pasts/')
            .then(response => response.json())
            .then(json => this.setState({ pasts: json }))
            .catch(error => console.error(error))
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <Modal header="Modal Header" bottomSheet trigger={<Button
                        floating
                        large
                        className="button"
                        waves="light"
                        icon="add"
                    />}>
                        <TreasureForm handleAddEvent={this.handleAddEvent} />
                    </Modal>

                    {this.state.pasts.map((past) =>
                        <div>
                            <Treasure deleteTreasure={this.deleteTreasure} past={past} key={past.title} />

                            {/* <span onClick={() => this.deleteEvent(future.id)}>X</span> */}



                        </div>
                    )}

                </div>
            </div>
        )
    }
}
export default AllTreasure