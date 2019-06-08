import React from 'react'
import New from './New'
import NewsForm from './NewsFrom'
import { Modal, Button } from 'react-materialize';

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === 'development') {
    baseURL = 'http://localhost:3000'
  } else {
    baseURL = 'https://artt-app-api-final.herokuapp.com'
  }
  
  console.log('current base URL:', baseURL)

class AllNews extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            presents: [],
            activeNews: {}
        }
        this.handleAddNews = this.handleAddNews.bind(this)
        this.deleteNews = this.deleteNews.bind(this)
        this.setActiveNews = this.setActiveNews.bind(this)
    }
    componentDidMount() {
        this.getPresents()
    }
    deleteNews(id) {
        fetch( baseURL + '/presents' + id, {
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
        fetch( baseURL + '/presents')
            .then(response => response.json())
            .then(json => {
                console.log(json)
                this.setState({ presents: json })
            })
            .catch(error => console.error(error))
    }
   
    setActiveNews(event) {
        // console.log("HELP ME")
        this.setState({
            activeNews: event.currentTarget
        })
        // console.log(event.currentTarget.id)

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
                        <New present={present} setCurrent={this.setCurrent} key={present.id} activeNews={this.state.activeNews} id={present.id} />
                        <p onClick={() => this.deleteNews(present.id)}>X</p>
                        
                        
                    </div>
                )}

            </div>

        )
    }
}

export default AllNews