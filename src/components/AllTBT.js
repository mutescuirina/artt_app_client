import React from 'react'
import TBT from './TBT'
import TBTForm from './NewsFrom'
import { Modal, Button } from 'react-materialize';

let baseURL = process.env.REACT_APP_BASEURL


if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
  } else {
    baseURL = 'https://artt-app-api-final.herokuapp.com'
  }
  
  console.log('current base URL:', baseURL)

class AllTBT extends React.Component {
    constructor(props) {
        super(props) 
        this.state = {
            pasts: []
        }
        this.handleAddTBT = this.handleAddTBT.bind(this)
        this.deleteTBT = this.deleteTBT.bind(this)
        this.getPasts = this.getPasts.bind(this)
    }
    componentDidMount() {
        this.getPasts()
    }
    getPasts () {
        fetch( baseURL + '/pasts')
        .then(response => response.json())
        .then(json => this.setState({pasts: json}))
        .catch(error => console.error(error))
    }
    deleteTBT(id) {
        fetch( baseURL + '/futures/' + id, {
            method: 'DELETE'
        })
            .then(response => {
                const findIndex = this.state.pasts.findIndex(event => event.id === id)
                const copyTBT = [... this.state.pasts]
                copyTBT.splice(findIndex, 1)
                this.setState({ pasts: copyTBT })

            })

    }
    handleAddTBT(event) {
        const copyTBT = [...this.state.pasts]
        copyTBT.unshift(event)
        this.setState({
            pasts: copyTBT
        })

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
            <TBTForm handleAddTBT={this.handleAddTBT} />
</Modal>
                
                {this.state.pasts.map((past) =>
                    <div>
                        <TBT deleteTBT={this.deleteTBT} past={past} key={past.title} />
                        
                        {/* <span onClick={() => this.deleteEvent(future.id)}>X</span> */}
                        
                        

                    </div>
                )}

</div>
            </div>
        )
    }
}

export default AllTBT