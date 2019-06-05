import React from 'react'
import New from './New'
import NewsForm from './NewsFrom'
import { Modal, Button } from 'react-materialize';


class AllNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            presents: [
            ]
        }
        this.handleAddNews = this.handleAddNews.bind(this)
        this.deleteNews = this.deleteNews.bind(this)
    }
    componentDidMount() {
        this.getPresents()
    }
    deleteNews(id) {
        fetch('/presents' + id, {
            method: 'DELETE'
        })
            .then(response => {
                const findIndex = this.state.presents.findIndex(news => news.id === id)
                const copyNews = [... this.state.presents]
                copyNews.splice(findIndex, 1)
                this.setState({ presents: copyNews })
            })
    }
    getPresents() {
        fetch('/presents')
            .then(response => response.json())
            .then(json => this.setState({ presents: json }))
            .catch(error => console.error(error))
    }
    handleAddNews(news) {
        const copyNews = [...this.state.presents]
        copyNews.unshift(news)
        this.setState({
            presents: copyNews
        })

    }

    render() {
        return (
            <div className="container">
                <h1>This is the News Page</h1>
                <Modal header="Modal Header" bottomSheet trigger={<Button
                    floating
                    large
                    className="button"
                    waves="light"
                    icon="add"
                />}>
                    <NewsForm handleAddNews={this.handleAddNews} />
                </Modal>


                {this.state.presents.map((present) =>
                    <div>
                        <New present={present} key={present.title} />
                        <p onClick={() => this.deleteNews(present.id)}>X</p>
                        
                    </div>
                )}

            </div>

        )
    }
}

export default AllNews