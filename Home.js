import React, { Component } from 'react';
import Vege from './Images/Vege.png';
import CashewNuts from './Images/CashewNuts.png';
import Apple from './Images/Apple.png';
import Chicken from './Images/Chicken.png';
import Beans from './Images/Beans.png';
import Cheese from './Images/Cheese.png';
import Tomato from './Images/Tomato.png';
import Mushroom from './Images/Mushroom.png';
import { Container } from "react-bootstrap";
import {Redirect} from 'react-router-dom';
import {Link} from 'react-router-dom';
import './mystyle.css';


export default class Home extends Component {
        constructor() {
            super();
            this.state = {
                Vege: '',
                Cheese: '',
                Apple: '',
                Chicken: '',
                Beans: '',
                CashewNuts: '',
                Tomato: '',
                Mushroom: '',
                redirect:false,
                output1: ''
            };
        }
    
    formula = () => {
        this.setState({
            output1 :  1* this.state.Vege + 2*this.state.Cheese +
                       1.5*this.state.Apple + 2*this.state.Chicken +
                       1.5*this.state.Beans + 2*this.state.CashewNuts +
                       1*this.state.Tomato + 1.5*this.state.Mushroom
        })
    }
    
    
    updateVege(event) {
        this.setState({
            Vege: event.target.value
        }) 
    }
    
    updateCheese(event) {
        this.setState({
            Cheese: event.target.value
        }) 
    }
    
    updateApple(event) {
        this.setState({
            Apple: event.target.value
        })
    }
    
    updateChicken(event) {
        this.setState({
            Chicken: event.target.value
        })
    }
    
    updateBeans(event) {
        this.setState({
            Beans: event.target.value
        }) 
    }
    
    updateCashewNuts(event) {
        this.setState({
            CashewNuts: event.target.value
        }) 
    }
    
    updateTomato(event) {
        this.setState({
            Tomato: event.target.value
        }) 
    }
    
    updateMushroom(event) {
        this.setState({
            Mushroom: event.target.value
        }) 
    }

    validate = () => {
        if (this.state.output1 =="" )
        {
            alert( "No Food item has been selected" )
        } else {
            if(this.state.output1 < 7.9 )
            alert( "A minimum of $8 for delivery" )
            if(this.state.output1 > 7.9 )
            this.setState({
                redirect: true
            })    
        
        }

}
    render() {
            if (this.state.redirect) {
              return <Redirect to={'/Address'} />
            }
        return  (
            <Container>

                <h1 class="mt-4 text-dark ml-4"> 7.7 Salad Sale </h1>
                <h5 class="text-dark ml-4">
                    To celebrate our Country 56th National Day , Salad Express is proud to present you from now till
                    7.7 a discounted price of 5.6%
                </h5>

                <div class="container">
                    <div class="row">
                        <div class="col-16 col-lg-6 col-xl-3 mt-3">
                            <img src={Vege} className="img-fluid" width="150" height="130" />
                            <h5>Vege</h5>
                            <p>
                                <h6>Nutrition Facts:</h6>
                                <p> Richness in dietary fiber, folate, vitamin A, and vitamin C.</p>
                                Price: $1.00 per 100g<br></br>
                                <input type="text" value={this.state.Vege} onChange={this.updateVege.bind(this)}
                                 onKeyUp={this.formula} id="" size="5" maxlength="2" placeholder="Qty"></input>
                            </p>
                        </div>

                        <div class="col-16 col-lg-6 col-xl-3 mt-3">
                            <img src={Cheese} className="img-fluid" width="150" height="130" />
                            <h5>Cheese</h5>
                            <p>
                                <h6>Nutrition Facts:</h6>
                                <p> Contains high amounts of vitamins A and B-12</p>
                                Price: $2.00 per 100g<br></br>
                                <input type="text" value={this.state.Cheese} onChange={this.updateCheese.bind(this)}
                                onKeyUp={this.formula} id="" size="5" maxlength="2" placeholder="Qty"></input>
                            </p>
                        </div>

                        <div class="col-16 col-lg-6 col-xl-3 mt-3">
                            <img src={Apple} className="img-fluid" width="150" height="110" />
                            <h5>Apple</h5>
                            <p>
                                <h6>Nutrition Facts:</h6>
                                <p> Good for Weight Loss and Your Heart !</p>
                                Price: $1.50 per 100g<br></br>
                                <input type="text" value={this.state.Apple} onChange={this.updateApple.bind(this)}
                                onKeyUp={this.formula} id="" size="5" maxlength="2" placeholder="Qty"></input>
                            </p>
                        </div>

                        <div class="col-12 col-lg-6 col-xl-3 mt-3">
                            <img src={Chicken} className="img-fluid" width="150" height="130" />
                            <h5>Chicken Slice</h5>
                            <p>
                                <h6>Nutrition Facts:</h6>
                                <p> It plays a very important role in sustaining our muscles</p>
                                Price: $2.00 per 100g<br></br>
                                <input type="text" value={this.state.Chicken} onChange={this.updateChicken.bind(this)}
                                onKeyUp={this.formula} id="" size="5" maxlength="2" placeholder="Qty"></input>
                            </p>
                        </div>

                        <div class="col-12 col-lg-6 col-xl-3 mt-3">
                            <img src={Beans} className="img-fluid" width="150" height="130" />
                            <h5>Beans</h5>
                            <p><br></br>
                                <h6>Nutrition Facts:</h6>
                                <p> Beans are both high in protein and fiber</p>
                                Price: $1.50 per 100g<br></br>
                                <input type="text" value={this.state.Beans} onChange={this.updateBeans.bind(this)}
                                onKeyUp={this.formula} id="" size="5" maxlength="2" placeholder="Qty"></input>
                            </p>
                        </div>

                        <div class="col-12 col-lg-6 col-xl-3 mt-3">
                            <img src={CashewNuts} className="img-fluid" width="150" height="130" />
                            <h5>CashewNuts</h5>
                            <p>
                                <h6>Nutrition Facts:</h6>
                                <p>Cashews are low in sugar and rich in fiber.</p><br></br>
                                Price: $2.00 per 100g<br></br>
                                <input type="text" value={this.state.CashewNuts} onChange={this.updateCashewNuts.bind(this)}
                                onKeyUp={this.formula} id="" size="5" maxlength="2" placeholder="Qty"></input>
                            </p>
                        </div>

                        <div class="col-12 col-lg-6 col-xl-3 mt-3">
                            <img src={Tomato} className="img-fluid" width="150" height="130" />
                            <h5>Tomato</h5>
                            <p>
                                <h6>Nutrition Facts:</h6>
                                <p> Tomato  can help protect your cells from damage</p><br></br>
                                Price: $1.00 per 100g<br></br>
                                <input type="text" value={this.state.Tomato} onChange={this.updateTomato.bind(this)}
                                onKeyUp={this.formula} id="" size="5" maxlength="2" placeholder="Qty"></input>
                            </p>
                        </div>

                        <div class="col-12 col-lg-6 col-xl-3 mt-3">
                            <img src={Mushroom} className="img-fluid" width="150" height="130" />
                            <h5>Mushroom</h5>
                            <p>
                                <h6>Nutrition Facts:</h6>
                                <p> Mushroom are a rich, low calorie source of fiber, protein</p><br></br>
                                Price: $1.50 per 100g<br></br>
                                <input type="text" value={this.state.Mushroom} onChange={this.updateMushroom.bind(this)}
                                onKeyUp={this.formula} id="" size="5" maxlength="2" placeholder="Qty"></input>
                            </p>
                        </div>

                        <div class="col-12 col-lg-6 col-xl-6 mt-3">                        
                            <h3 > Total Amount: ${this.state.output1} </h3>
                            <br></br>
                            {/* <Link to={'/Address'}> <button class="btn bg-success text-white">Input Address</button></Link> */}
                            <h6> **Pls not that a minimum of $8 needs to be fulfilled for Delivery</h6>
                            <button onClick={this.validate}  class="btn bg-success text-white">Input Address</button>
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

