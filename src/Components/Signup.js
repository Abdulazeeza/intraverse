import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import '../Css/signup.css';
import axios from 'axios';


class Signup extends Component{

    constructor(props){
        super(props)

        this.state = {
            first_name: '',
            last_name:'',
            email:'',
            password:'',
            redirect: false
        }
    }

    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();

        const data ={
            first_name: this.state.first_name,
            last_name: this.state.last_name,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.password,
            type:'customer'
        };
        console.log(data);

        axios.post('https://staging.odio.com.ng/v1/register', data)
        .then(response =>{
            console.log(response);
            if(response.message == 'Created'){
                this.setState({ redirect: true });
                alert("You sucessfully registered, a code have been sent to your email for verification");
                this.props.history.push({ 
                    pathname: '/verify',
                    state: this.state.email
                });
            }
        })
        .catch(error =>{
            console.log(error);
            alert(`invalid details, Passwords will contain at least 1 upper case letter 2.
             Passwords will contain at least 1 lower case letter 3. Passwords will contain at least 1 number or 
             special character 4. Passwords will contain at least 8 characters in length 5`);
        });
    }

    render(){
        const {first_name, last_name, email, password} = this.state;
       
        if (this.state.redirect == true) {
            return( 
                <Redirect to="/login" />
                );
        }else{
            return (
                <div className="signup_body">
                    <div className="signup_container">
                        <div className="image_container">
                            <img src="assets/images/lady.png" alt=""/>
                        </div>
                        <div className="signup_form">
                            <div className="header">
                                <h3>Lorem ipsum dolor sit amet</h3>
                                <p>Lorem ipsum dolor sit amet</p>
                            </div>
                            <form onSubmit={this.submitHandler}>
                                <input type="name" name="first_name" placeholder="First Name*" onChange={this.changeHandler} value={first_name}/>
                                <input type="name" name="last_name" placeholder="Last Name*" onChange={this.changeHandler} value={last_name}/>
                                <input type="email" name="email" placeholder="Email*" onChange={this.changeHandler} value={email}/>
                                <input type="password" name="password" placeholder="Password*" onChange={this.changeHandler} value={password}/>
                                <button type="submit">Sign Up</button>
                            </form>
                            <div className="extra">
                                <p>Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum 
                                dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    }
}
export default Signup;
