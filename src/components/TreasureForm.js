import React from 'react'


class TreasureForm extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            title: '',
            description: '',
            date: ''

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange(event) {
        this.setState ({[event.currentTarget.id]:
        event.currentTarget.value})
    }
    handleSubmit(event) {
        event.preventDefault()
        fetch('/pasts', {
            method:'POST', 
                body:JSON.stringify({ title: this.state.title,  description:this.state.description, date:this.state.date, img:this.state.img}),
                headers: {
                    'Content-Type': 'application/json'
                }
            
            
        }).then(res => res.json())
            .then(resJSON => {
                this.props.handleAddTreasure(resJSON)
                this.setState({title: '',description: '',date: '', img: ''})
            })
    }
    render () {
        return (
            <form onSubmit={this.handleSubmit}>
            <label htmlFor="title">Title</label>
            <input
            type="text"
            id="title"
            onChange={this.handleChange}
            value={this.state.title}
            />

            <label htmlFor="description">Description</label>
            <input
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
            />


            <label htmlFor="date">Date</label>
            <input
            type="text"
            id="date"
            onChange={this.handleChange}
            value={this.state.date}
            />
            <label htmlFor="img">Img</label>
            <input
            type="text"
            id="img"
            onChange={this.handleChange}
            value={this.state.img}
            />
            <input 
            type="submit"
            value="Add a Treasure"
            />


            </form>

        )
    }
    
}

export default TreasureForm