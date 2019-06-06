import React, {Component} from 'react';
import { Col, Card, CardTitle} from 'react-materialize';
import  '../App.css';

class TBT extends Component {
    render() {
        return (
            <Col m={2} s={12}>
                <div>

                    <Card classname="card-small"header={<CardTitle />}
                     title={this.props.past.title}
                         reveal={this.props.past.description}> 
                             <div className="card-content">
                             <img src={this.props.past.img}/>
                            <span onClick={() => this.props.deleteEvent(this.props.past.id)}>X</span>
                            
                             </div>
                             
                        {/* <p>{this.props.future.title}</p>
                        <p>{this.props.future.description}</p>
                        <img src={this.props.future.img}/>
                        <p>{this.props.future.comment}</p>
                        <p>{this.props.future.date}</p> */}
                    </Card>
                </div>
            </Col>


        );

    }

}


export default TBT;