import React, { Component } from 'react';
import { connect } from 'react-redux';
import { set_data } from '../store/action';


class Home extends Component {
    state = {  }
    render() { 
        let user = {name:'Ahmed',email:'ahmed@gmail.com'}
        return (
            <div>
            <h1>Redux</h1>
            <button onClick={()=>{this.props.set_data(user)}}>Set Data</button>

            <h2>Render Users List</h2>
            <div>
                {this.props.users.map((v,i)=>{
                    return <h3 key={i}>{v.name}</h3>
                })}
            </div>
            </div>
          );
    }
}
const mapStateToProps = (state) =>({
users:state.users
})

const mapDispatchToProp = (dispatch) =>({
    set_data:(data) => dispatch(set_data(data))
})

export default connect(mapStateToProps,mapDispatchToProp)(Home);