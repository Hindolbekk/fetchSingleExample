import React, { Component } from 'react'
import "./Users.scss"
export default class  extends Component {
    state={
        users:[]
    }
    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response)=>response.json())
        .then(
            data=>{
                console.log(data);
                this.setState({
                    users:data
                })
            }
        )
    }
    
  render() {
    return (
        <div class="card">
          { 
            this.state.users.map((user)=>{
                return(
                <React.Fragment>
                <h1>{user.id} {user.name}</h1>
                <ul class="list-group list-group-flush">
                <li class="list-group-item">{user.username}</li>
                <li class="list-group-item">{user.email}</li>
                </ul>
                </React.Fragment>
                )
            }
            )
          }
      </div>
    )
  }
}
