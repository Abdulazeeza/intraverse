import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import '../Css/signin.css';
import axios from 'axios';

class Verify extends Component{
    
    constructor(props){
        super(props)

        this.state = {
            verification_code: '',
            email: this.props.location.state.detail
        }
    }

    changeHandler = e =>{
        this.setState({[e.target.name]: e.target.value})
    }
    submitHandler = e =>{
        e.preventDefault();

        const data ={
            email: this.state.email,
            verification_code: this.state.verification_code
        };
        console.log(data);

        axios.post('https://staging.odio.com.ng/v1/verify', data)
        .then(response =>{
            console.log(response);
            if(response.message == 'Successful'){
                this.setState({ redirect: true });
                alert("Your Account has been sucessfully verified");
                this.props.history.push({ 
                    pathname: '/login',
                    state: this.state.email
                });
            }
        })
        .catch(error =>{
            console.log(error);
            alert(`invalid pls try again`);
        });
    }

    render() {
        const {verification_code} = this.state;
        return (
            <div className="signin_body">
                <div className="signin_container">
                    <div className="customer">Customer</div>
                    <div className="form_section">
                        <h3>Lorem ipsum</h3>
                        <form >
                            <div className="form_input"><label>Code</label><input type="number" placeholder="" name="verification_code" onChange={this.changeHandler} value={verification_code}/></div>
                            <button type="submit">Verify</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default Verify;
