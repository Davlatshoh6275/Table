import { Component } from "react";
import Table from "./Compnent/new/Table";

export default class App extends Component {

    state = {
        users: [
            {
                name: "Davlatshoh",
                lastName: "Pardaqulov",
                age: 22,
                isMarried: "Singe",
                work: "developper"
            },
            {
                name: "Dilshod",
                lastName: "Murtazoyev",
                age: 21,
                isMarried: "Singe",
                work: "developper"
            },
            {
                name: "Daler",
                lastName: "Sharifqulov",
                age: 20,
                isMarried: "Singe",
                work: "developper"
            },
            {
                name: "John",
                lastName: "Pardaqulov",
                age: 22,
                isMarried: "married",
                work: "developper"
            },
            {
                name: "Sitora",
                lastName: "Abrorova",
                age: 18,
                isMarried: "married",
                work: "developper"
            },
            {
                name: "Davlatshoh",
                lastName: "Pardaqulov",
                age: 22,
                isMarried: "Singe",
                work: "developper"
            },
        ],

        obj: {
            name: "",
            lastName: "",
            age: "",
            isMarried: "",
            work: "",
        },

        bool: false,
    }

    delete = (index) => {
        const {users} = this.state

        users.splice(index, 1)

        this.setState({
            users
        })
    }

    addUserBtn = () => {
        const {bool} = this.state;

        this.setState({
            bool: !bool,
        });
    };

    addName = (event) => {
        const {obj} = this.state

        let name = event.target.value 
        
        obj.name = name

        this.setState({
            obj
        })
    }

    addLastName = (event) => {
        const {obj} = this.state

        let lastName = event.target.value

        obj.lastName = lastName

        this.setState({
            obj
        })
    }

    addAge = (event) => {
        const {obj} = this.state

        let age = event.target.value

        obj.age = age

        this.setState({
            obj
        })
    }

    isMarried = (event) => {
        const {obj} = this.state 

        let married = event.target.value

        obj.isMarried = married

        this.setState({
            obj
        })
    }

    work = (event) => {
        const {obj} = this.state

        let work = event.target.value

        obj.work = work

        this.setState({
            obj
        })
    }

    addedUser = () => {
        const {users, obj, bool} = this.state

        users.push(obj)

        this.setState({
            users,
            bool: !bool,
            obj: {
                name: "",
                lastName: "",
                age: "",
                isMarried: "",
                work: "",
            },

        })
    }
    

    render() {

        return (
            <div>

                <Table  users={this.state.users} Delete={this.delete} obj={this.state.obj} bool={this.state.bool} changedForm={this.changedForm} addUserBtn={this.addUserBtn} addName={this.addName} addLastName={this.addLastName}  age={this.addAge} isMarried={this.isMarried} addedUser={this.addedUser} work={this.work}/>
            </div>
        )
    }
};

