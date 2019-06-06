
import React, { Component } from 'react';
import { Col, Card, CardTitle, Row, Parallax } from 'react-materialize';
import '../App.css';

class Treasure extends Component {
    render() {
        return (
            <div>
                <Col m={4} s={12}>
                    <div>
                        <Row>
                            <Col m={6} s={12}>
                                <Card header={<CardTitle />} actions={[<a />]}
                                    title={this.props.past.title}
                                >
                                    <div className="card-content">
                                        <div className="card-image">
                                            <img src={this.props.past.img} />
                                        </div>
                                        <button>see more</button>
                                    </div>
                                </Card>
                            </Col>
                        </Row>
                        <Card classname="treasure-card" header={<CardTitle />}
                            title={this.props.past.title}
                            reveal={this.props.past.description}>
                            <div className="card-content">
                                <img src={this.props.past.img} />
                                <span onClick={() => this.props.deleteTreasure(this.props.past.id)}>X</span>

                            </div>

                            {/* <p>{this.props.future.title}</p>
                        <p>{this.props.future.description}</p>
                        <img src={this.props.future.img}/>
                        <p>{this.props.future.comment}</p>
                        <p>{this.props.future.date}</p> */}
                        </Card>
                    </div>
                </Col>
            </div>


        );

    }

}

export default Treasure;