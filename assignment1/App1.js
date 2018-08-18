import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

const name = "Hello World";
const obj = {name: "Hello World Object"}
const data = ['We', 'are', 'United'] //Show these in seperate tags
const list = [{name: "Hello World 1"}, {name: "Hello World 2"}, {name: "Hello World 3"}] //Show these in seperate tags
const complex = [{company: 'XYZ', jobs: ['Javascript', 'React']}, {company: 'ABC', jobs: ['AngularJs', 'Ionic']}]

class App extends Component {
    render() {
        return (
            <div className="App">
            <h1 className="center">Task # 1</h1>
            <br/><br/>
            <ol>
                <li>{name}</li>
                <li>{obj.name}</li>
                <li> <ul> {data.map(value => <li> {value} </li>) } </ul> </li>
                <li> <ul> { list.map( value => <li> {value.name} </li>) } </ul> </li>
                <li> 
                <ol> {
                    complex.map( value => {
                        return (<li> Company : {value.company} <br/>
                                jobs : <ul> { value.jobs.map( job => <li> { job } </li> ) } </ul>
                                </li>);
                    })
                } </ol>
                </li>
            </ol>
            </div>
        );
    }
}

export default App;