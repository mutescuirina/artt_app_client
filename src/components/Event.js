import React from 'react';
import { Col, Card, CardTitle, Checkbox} from 'react-materialize';
import  '../App.css';


class Event extends React.Component {
    render() {
        return ( <div>
            <Col m={4} s={12}>
               
                    
                    <Card classname="card" 
                     title={this.props.future.title}
                     
                         reveal={
                         <div className="card-content">
                         <h3>{this.props.future.date}</h3>
                         <p>{this.props.future.description}</p>
                         </div>
                        }
                         > 
                             
                            <div className="card-image">
                             <img className="card-img" src={this.props.future.img}/>
                             </div>
                             <div className="button-box">
                             <a class="btn-floating btn-small waves-effect waves-light grey"
                             onClick={() => this.props.deleteEvent(this.props.future.id)}><i class="material-icons">delete</i></a>
                             
                             </div>
                             
                             
                             
                        {/* <p>{this.props.future.title}</p>
                        <p>{this.props.future.description}</p>
                        <img src={this.props.future.img}/>
                        <p>{this.props.future.comment}</p>
                        <p>{this.props.future.date}</p> */}
                    </Card>
                
            </Col>
            </div>


        );

    }

}


export default Event;
