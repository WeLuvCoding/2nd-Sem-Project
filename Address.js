import React, { Component } from 'react';
import { Container } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './mystyle.css';
import ConfirmationPage from './ConfirmationPage';


export default class Address extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            address:'',
            hun:'',
            postalcode: '',
            contactnumber: ''
        };
        // this.updateGreeting = this.updateGreeting.bind(this);
        this.updateName = this.updateName.bind(this);
        this.updateAddress = this.updateAddress.bind(this);
        this.updateHun = this.updateHun.bind(this);
        this.updatePostalcode = this.updatePostalcode.bind(this);
        this.updateContactnumber = this.updateContactnumber.bind(this);
    }


    updateName(event) {
        this.setState({
            name: event.target.value
        });
    }

    updateAddress(event) {
        this.setState({
            address: event.target.value
        });
    }

    updateHun(event) {
        this.setState({
            hun: event.target.value
        });
    }

    updatePostalcode(event) {
        this.setState({
            postalcode: event.target.value
        });
    }

    updateContactnumber(event) {
        this.setState({
            contactnumber: event.target.value
        });
    }


    myChangeHandler = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "postalcode") {
            if (!Number(val)) {
                alert("Your Postal code must be a number");
            }
        }
        this.setState({ [nam]: val });
    }

    myContactNumber = (event) => {
        let nam = event.target.name;
        let val = event.target.value;
        if (nam === "contactnumber") {
            if (!Number(val)) {
                alert("Your contact number must be a number");
            }
        }
        this.setState({ [nam]: val });
    }



    render() {
        return (
            <Container>
                <div class="container">
                    <div class="col-12">
                        <h2 class="text-center text-sm-center text-md-center"><strong>Delivery Address</strong></h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 text-center"></div>
                        <div class="col-lg-6 text-center">
                            <form>

                                <h4> Hi {this.state.name}, nice to see you</h4>
                                <p>Enter your name:</p>
                                <input type='text' name='name' onChange={this.updateName}
                                    size="50" />
                                <p>Address:</p>
                                <input type='text' name='address' onChange={this.updateAddress} 
                                width="100" maxlength="30" size="50" /><br></br><br></br>
                                <p>House OR Unit Number</p>
                                <input type='text' name='hun' onChange={this.updateHun} width="100"
                                     size="50" /><br></br><br></br>
                                <p>Enter your Postal code:</p>
                                <input type='text' name='postalcode' onChange={this.updatePostalcode}
                                onKeyUp={this.myChangeHandler} maxlength="6" placeholder="6 digit only" />
                                <p>Contact Number</p>
                                <input type='text' name='contactnumber' onChange={this.updateContactnumber}
                                onKeyUp={this.myContactNumber} />
                                <br></br><br></br>                        
                                <Link to={{ pathname: './ConfirmationPage', 
                                state: { id: this.state.name, id2: this.state.address, id3: this.state.hun,
                                    id4: this.state.postalcode, id5: this.state.contactnumber} }} ><button class="btn bg-success text-white" >Confirmation button</button></Link>
                            </form>

                        </div>
                    </div>
                </div>
                <br></br>
                <footer>
                    SaladExpress &#9840; 86 Dawson Road #01-01, Queenstown, Singapore 141086 &#9840; phone: +65 6765 4321
                </footer>

            </Container>
        )
    }
}
