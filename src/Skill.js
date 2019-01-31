import React, { Component } from 'react';
import { Col, Card, CardBody } from 'reactstrap';

export default class Skill extends Component {
    render() {
        return (
            <Col className="">
                <h1><i class="fas fa-book"></i> Skill PAGE</h1><p><span class="sm-none">社内にエンジニアがいないため</span>フロントエンド、バックエンドを担当</p>

                <Card>
                    <CardBody>
                            <div class="skill-desc">
                                <table class="table table-borderless">
                                  <tbody>
                                    <tr>
                                      <th scope="row">HTML</th>
                                      <td>3ヶ月</td>
                                      <td><span class="rating"><p class="rate rate3"></p></span></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">CSS</th>
                                      <td>3ヶ月</td>
                                      <td><span class="rating"><p class="rate rate2"></p></span></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">JS</th>
                                      <td>3ヶ月</td>
                                      <td><span class="rating"><p class="rate rate3"></p></span></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Vue</th>
                                      <td>1ヶ月</td>
                                      <td><span class="rating"><p class="rate rate4"></p></span></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">PHP</th>
                                      <td>5ヶ月</td>
                                      <td><span class="rating"><p class="rate rate4"></p></span></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Laravel</th>
                                      <td>1ヶ月</td>
                                      <td><span class="rating"><p class="rate rate3"></p></span></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Python</th>
                                      <td>1ヶ月</td>
                                      <td><span class="rating"><p class="rate rate2"></p></span></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">docker</th>
                                      <td>1ヶ月</td>
                                      <td><span class="rating"><p class="rate rate1"></p></span></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">Mysql</th>
                                      <td>5ヶ月</td>
                                      <td><span class="rating"><p class="rate rate5"></p></span></td>
                                    </tr>
                                    <tr>
                                      <th scope="row">git</th>
                                      <td>2ヶ月</td>
                                      <td><span class="rating"><p class="rate rate3"></p></span></td>
                                    </tr>
                                  </tbody>
                                </table>
                              </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}
