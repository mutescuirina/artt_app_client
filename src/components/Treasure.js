
import React, { Component } from 'react';
import { Col, Card, CardTitle, Row, MediaBox } from 'react-materialize';
import '../App.css';

class Treasure extends Component {
    render() {
        return (
            <div>
                
                    
                    <Col m={4} s={12} >
                        <Card id="past-card"  
                            title={this.props.past.title}>
                                <MediaBox className="treasure-img" caption={this.props.past.description}>
                                <img className="treasure-img" src={this.props.past.img} />
                                </MediaBox>
                                <a class="btn-floating btn-small waves-effect waves-light grey"
                             onClick={() => this.props.deleteTreasure(this.props.past.id)}><i class="material-icons">delete</i></a>
                        </Card>
                    </Col>
               
            </div>


        );

    }

}

export default Treasure;