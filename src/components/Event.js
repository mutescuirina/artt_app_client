import React from 'react';
import { Col, Card, CardTitle, Checkbox} from 'react-materialize';
import  '../App.css';


class Event extends React.Component {
    render() {
        return (
            <Col m={4} s={12}>
                <div>

                    <Card classname="event-card"header={<CardTitle />}
                     title={this.props.future.title}
                         reveal={this.props.future.description}
                         > 
                             <div className="card-content">
                             <img src={this.props.future.img}/>
                            <span onClick={() => this.props.deleteEvent(this.props.future.id)}>X</span>
                            

                            
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


export default Event;
