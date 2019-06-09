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
   
    
    handleAddNews(news) {
        const copyNews = [...this.state.presents]
        copyNews.unshift(news)
        this.setState({
            presents: copyNews
        })

    }

    render() {
        return (
            <div>
                <div className="divider"></div>
           
            <div className="container" id="news-container">
                <div className="row">
                    <Modal header="Share the news" bottomSheet trigger={<Button
                        floating
                        className="waves-effect waves-light btn-floating right button"
                        waves="light"
                        icon="add"
                    />}>
                       
                        <NewsForm handleAddNews={this.handleAddNews} />
                       
                    </Modal>
                    
                </div>
                <h4 className="titles">News</h4>
                <div className="row">

                    {this.state.presents.map((present) =>
                        <div>
                            <New deleteNews={this.deleteNews} present={present} key={present.title} />




                        </div>
                    )}

                </div>
            </div>
            </div>
        )
    }
}

export default AllNews