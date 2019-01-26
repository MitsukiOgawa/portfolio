import React, { Component } from 'react';
import { Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';

export default class Skill extends Component {
    render() {
        return (
            <Col className="">
                <h1>Skill PAGE</h1>
                
                <Card>
                    <CardBody>
                        <CardTitle>Skill set</CardTitle>
                        <CardText>skill の内容</CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                    <CardTitle>Skill set</CardTitle>
                        <CardText>skill の内容</CardText>
                    </CardBody>
                </Card>
                
            </Col>
        );
    }
}