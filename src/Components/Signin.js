import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import '../Css/signin.css';
import axios from 'axios';

class Signin extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            email:'',
            password:'',
        }
    }
    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();

        const data ={
            email: this.state.email,
            password: this.state.password,
        };
        console.log(data);

        axios.post('https://staging.odio.com.ng/v1/login', data)
        .then(response =>{
            console.log(response);
            this.props.history.push({ 
                pathname: '/home',
                state: this.state.email
            });
            if(response.message == 'Successful'){
               
            }
        })
        .catch(error =>{
            console.log(error);
            alert(`invalid details`);
        });
    }

    render() {
        const {email, password} = this.state;
        return (
            <div className="signin_body">
                <div className="signin_container">
                    <div className="customer">Customer</div>
                    <div className="form_section">
                        <h3>Lorem ipsum</h3>
                        <form onSubmit={this.submitHandler}>
                            <div className="form_input"><label>Email</label><input type="email" placeholder="" onChange={this.changeHandler} value={email} name="email"/></div>
                            <div className="form_input"><label>Password</label><input type="password" placeholder="" onChange={this.changeHandler} value={password} name="password"/></div>
                            <button type="submit">Log In</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Signin;
