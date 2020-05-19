import React, { Component } from 'react';

import Aux from '../../../hoc/Auxiliary';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component{

    //This could be functional component   
    render(){
        const ingridientSummary = Object.keys(this.props.ingridients)
        .map(igKey => {
            return (
                <li key={igKey}>
                    <span style={{textTransform: 'capitalize '}}>{igKey}</span>: {this.props.ingridients[igKey]}
                </li>
            )
        });

        return ( 
            <Aux>
                <h3>Your Order</h3>
                <p>A delicious burger with the following ingridients:</p>
                <ul>
                    {ingridientSummary}   
                </ul>
                <p><strong>Total: {this.props.price}</strong></p>
                <p>Contunue to checkout?</p>
                <Button btnType='Danger' clicked={this.props.purchaseCanceled}>CANCEl</Button>
                <Button btnType='Success' clicked={this.props.purchaseContinued}>CONTINUE</Button>
            </Aux>
        );
    };
}

export default OrderSummary;    