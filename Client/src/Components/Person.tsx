import React, { Component } from 'react';
import {Button, Input, Typography} from "antd";
import Title from "antd/es/typography/Title";

interface props {
    name : string
    age : number
    id : number
}

const person : React.FC<props> = (props) => {
    return <p>I'm {props.name}, i am {props.age} years old and my id is {props.id}</p>;
}

export default person;
