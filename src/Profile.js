import React, { Component } from 'react';
import { Col } from 'reactstrap';

export default class Profile extends Component {
   render(){

       const myBirthday = {
           year: 1996,
           month: 2,
           date: 10
       };

       const birthDate = new Date(myBirthday.year, myBirthday.month - 1, myBirthday.date);

       const today = new Date();
       const day1 = today.getFullYear().toString().padStart(4, '0') + (today.getMonth() + 1).toString().padStart(2, '0') + today.getDate().toString().padStart(2, '0');
       const day2 = birthDate.getFullYear().toString().padStart(4, '0') + (birthDate.getMonth() + 1).toString().padStart(2, '0') + birthDate.getDate().toString().padStart(2, '0');

       const age = Math.floor((Number(day1) - Number(day2)) / 10000);

       return(
           <Col className="">
               <h1>Profile</h1>
               <div className="">
                   <p>名前</p>
                   <p>{"Age : "+age}</p>
                   <p>大学</p>
               </div>
           </Col>
       );
   }
}