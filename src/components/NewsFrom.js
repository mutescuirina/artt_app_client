import React from 'react'


class NewsForm extends React.Component {
    constructor (props) {
        super (props)
        this.state = {
            title: '',
            img: '',
            description: '',
            comment: ''

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
        fetch('/presents', {
            method:'POST', 
                body:JSON.stringify({ title: this.state.title, img: this.state.img, description:this.state.description, comment: this.state.comment, date:this.state.date}),
                headers: {
                    'Content-Type': 'application/json'
                }
            
            
        }).then(res => res.json())
            .then(resJSON => {
                this.props.handleAddNews(resJSON)
                this.setState({title: '', img: '', description: '', comment: ''})
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

            <label htmlFor="img">Image</label>
            <input
            type="text"
            id="img"
            onChange={this.handleChange}
            value={this.state.img}
            />

            <label htmlFor="description">Description</label>
            <input
            type="text"
            id="description"
            onChange={this.handleChange}
            value={this.state.description}
            />


            <input 
            type="submit"
            value="Add"
            />


            </form>

        )
    }
    
}

export default NewsForm