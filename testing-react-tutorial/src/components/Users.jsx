import React from "react";

export default class Users extends React.Component{
    constructor(props) {
        super(props);
        this.state = { data: []};
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => {
                return response.json();
            })
            .then(json => {
                this.setState(() => {
                    return { data: json };
                });
            });
    }
    render() {
        return (
            <ul>
                {this.state.data.map(user => (
                    <li key={user.name}>{user.name}</li>
                ))}
            </ul>
        );
    }
}