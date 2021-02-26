import React, {Component} from 'react';
import './App.css';
import {Button, Input, Typography} from "antd";
import Title from "antd/es/typography/Title";
import Person from './Components/Person'

class App extends Component{
    render() {
        function login() {
            return function (p1: React.MouseEvent<HTMLElement>) {
                let testComp = document.getElementById('TestComp')
                let isEmpty = true;

                if(testComp !== null) {
                    isEmpty ? testComp.innerText = '' : testComp.innerHTML = 'Hey'

                }
            };
        }

        let submit = 'Submit';
        return (
            <div className="App">
                <h1 style={{fontSize: "40px"}}>HardCoders</h1>
                <header className="App-header">
                    <Title level={1} style={{color: "white"}}>Login</Title>
                    <Typography.Text style={{color: "white"}}>Username</Typography.Text>
                    <Input id={"username"} style={{width: "200px"}} placeholder="input username"/>
                    <Typography.Text style={{color: "white"}}>Password</Typography.Text>
                    <Input.Password id={"password"} style={{width: "200px"}} placeholder="input password"/>
                    <br/>
                    <Button onClick={login()} size={"large"} type={"primary"}>{submit}</Button>
                    <Person
                     name={'Ognen'}
                     age={20}
                     id={183174}/>
                </header>
            </div>
        );
    }


}

export default App;
