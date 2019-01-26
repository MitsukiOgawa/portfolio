import React, { Component } from 'react';
import { Col, Card, CardBody, CardText, CardTitle } from 'reactstrap';

export default class Hobby extends Component {
    render() {
        return (
            <Col className="">
                <h1>Hobby PAGE</h1>
                
                <Card>
                    <CardBody>
                        <CardTitle>趣味のタイトル</CardTitle>
                        <CardText>趣味の内容</CardText>
                    </CardBody>
                </Card>

                <Card>
                    <CardBody>
                        <CardTitle>趣味のタイトル</CardTitle>
                        <CardText>趣味の内容</CardText>
                    </CardBody>
                </Card>
                
            </Col>
        );
    }
}