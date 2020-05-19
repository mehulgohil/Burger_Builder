import React, {Component} from 'react';

import Aux from '../../hoc/Auxiliary';
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal';
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary';

const INGRIDIENT_PRICES = {
    salad: 30,
    meat: 50,
    cheese: 40,
    bacon: 60
};

class BurgerBuilder extends Component{

    state = {
        ingridients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalprice: 40,
        purchasable: false,
        purchasing: false
    }

    updatePurchaseState(ingridients){
        const sum = Object.keys(ingridients)
            .map(igKey => {
                return ingridients[igKey];
            })
            .reduce((sum, el)=>{
                return sum+el;
            }, 0);
        this.setState({purchasable: sum>0});
    }

    addIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount+1;
        const updatedIngridient = {
            ...this.state.ingridients
        };
        updatedIngridient[type]=updatedCount;

        const oldPrice = this.state.totalprice;
        const priceAddition = INGRIDIENT_PRICES[type];
        const newPrice = oldPrice+priceAddition;

        this.setState({ingridients: updatedIngridient, totalprice:newPrice});
        this.updatePurchaseState(updatedIngridient);
    }   

    removeIngridientHandler = (type) => {
        const oldCount = this.state.ingridients[type];
        const updatedCount = oldCount-1;
        const updatedIngridient = {
            ...this.state.ingridients
        };
        updatedIngridient[type]=updatedCount;

        const oldPrice = this.state.totalprice;
        const priceSubtraction = INGRIDIENT_PRICES[type];
        const newPrice = oldPrice-priceSubtraction;

        this.setState({ingridients: updatedIngridient, totalprice:newPrice});
        this.updatePurchaseState(updatedIngridient);
    }

    purchaseHandler = () => {
        this.setState({purchasing:true});
    }

    purchaseCancelHandler = () => {
        this.setState({purchasing:false});
    }

    purchaseContinueHandler = () => {
        alert('sgsff');
    }

    render(){
        const disabledInfo={
            ...this.state.ingridients
        };
        for(let key in disabledInfo){
            disabledInfo[key]=disabledInfo[key]<=0;
        }
        return (
            <Aux>
                <Modal show={this.state.purchasing} modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                        ingridients={this.state.ingridients}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                        price={this.state.totalprice} 
                    />
                </Modal>
                <Burger ingridients={this.state.ingridients} />
                <BuildControls 
                    ingridientAdded={this.addIngridientHandler}
                    ingridientSubtracted={this.removeIngridientHandler}
                    disabled={disabledInfo}
                    price={this.state.totalprice}
                    purchasable={this.state.purchasable}
                    ordered={this.purchaseHandler}
                />
             </Aux>
        );
    }
};

export default BurgerBuilder;