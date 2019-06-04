import React from 'react'
import New from './New'
import NewsForm from './NewsFrom'
class AllNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            presents:[
            ]
        }
        this.handleAddNews = this.handleAddNews.bind(this)
        this.deleteNews = this.deleteNews.bind(this)
    }
    componentDidMount () {
        this.getPresents()
    }
    deleteNews(id) {
        fetch('/presents' + id, {
            method: 'DELETE'
        })
            .then(response => {
                const findIndex = this.state.presents.findIndex
                    (news => news.id === id)
                const copyNews = [... this.state.presents]
                copyNews.splice(findIndex, 1)
                this.setState({ presents: copyNews })
                
            })
    }
    getPresents () {
        fetch('/presents')
        .then(response => response.json())
        .then(json => this.setState({presents: json}))
        .catch(error => console.error(error))
    }
    handleAddNews(news) {
        const copyNews = [...this.state.presents]
        copyNews.unshift(news)
        this.setState({
            presents: copyNews
        })

    }
    render () {
        return (
            <div>
                <h1>This is the News Page</h1>
                <NewsForm handleAddNews={this.handleAddNews} />
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