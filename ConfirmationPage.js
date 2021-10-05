import React, { Component } from 'react';
import { Container } from "react-bootstrap";

export default class ConfirmationPage extends Component {

    render() {
        return (
            <Container>
                <div class="container">
                    <div class="col-12">
                        <h2 class="text-center text-sm-center text-md-center"><strong>Confirmation Page</strong></h2>
                    </div>
                    <div class="row">
                        <div class="col-lg-3 text-center"></div>
                        <div class="col-lg-6 text-center">
                        <h3>Hi {this.props.location.state.id}, </h3>
                        <h3>your address is as follows :</h3>
                        <h3> {this.props.location.state.id2},</h3>
                        <h3> {this.props.location.state.id3}</h3>
                        <h3> Postal Code {this.props.location.state.id4}</h3>
                        <h3> and your contact number is {this.props.location.state.id5}. </h3>
                        <h3>Payment to me made upon Delivery</h3>
                        <h3>Thank you for patronising with </h3>
                        <h3> Salad Express !</h3>
                        <h3>Have A Nice Day :)</h3>
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