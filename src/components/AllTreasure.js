import React from 'react'
import Treasure from './Treasure'
import TreasureForm from './TreasureForm'
import { Modal, Button } from 'react-materialize';

let baseURL = process.env.REACT_APP_BASEURL


if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
  } else {
    baseURL = 'https://artt-app-api-final.herokuapp.com'
  }
  
  console.log('current base URL:', baseURL)

class AllTreasure extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            pasts: []
        }
        this.handleAddTreasure = this.handleAddTreasure.bind(this)
        this.deleteTreasure = this.deleteTreasure.bind(this)
        this.getPasts = this.getPasts.bind(this)
    }
    componentDidMount() {
        this.getPasts()
    }
    getPasts() {
        fetch(baseURL + '/pasts/')
            .then(response => response.json())
            .then(json => this.setState({ pasts: json }))
            .catch(error => console.error(error))
    }
    handleAddTreasure(event) {
        const copyTreasures = [...this.state.pasts]
        copyTreasures.unshift(event)
        this.setState({
            pasts: copyTreasures
        })

    }
    deleteTreasure(id) {
        fetch( baseURL + '/futures/' + id, {
            method: 'DELETE'
        })
            .then(response => {
                const findIndex = this.state.pasts.findIndex(event => event.id === id)
                const copyTreasures = [... this.state.pasts]
                copyTreasures.splice(findIndex, 1)
                this.setState({ pasts: copyTreasures })

            })
    }
    render() {
        return (
            
            <div className="container">
                <div className="row">
                
                    
                    <Modal header="Share the past" bottomSheet trigger={<Button
                        floating
                        className="waves-effect waves-light btn-floating right button"
                        waves="light"
                        icon="add"
                    />}>
                       
                        <TreasureForm handleAddTreasure={this.handleAddTreasure} />
                       
                    </Modal>
                    
                </div>
                <h4 className="titles">Treasures</h4>
                <div className="row">

                    {this.state.pasts.map((past) =>
                        <div>
                            <Treasure deleteTreasure={this.deleteTreasure} past={past} key={past.title} />




                        </div>
                    )}

                </div>
            </div>
        )
    }
}
export default AllTreasure