import React, { Component } from 'react'
import { 
    SHIPPING_STEP, 
    BILLING_STEP,
    DETAILS_STEP
} from "SourceRoute/Checkout/Checkout.config";
import Step from './Step';
export default class ProgressBar extends Component {


    render() {
        const checkoutSteps={
            [SHIPPING_STEP]:{displayText:"Shipping",n:1,visible:true},
            [BILLING_STEP]:{displayText:"Review & Payments",n:2,visible:true},
            [DETAILS_STEP]:{displayText:"Order Details",n:3,visible:false}
        }
        const stepList=Object.keys(checkoutSteps)
        const progressPerStep=100/stepList.length
        return (
            <Step key={this.props.step} stepList={stepList} progressPerStep={progressPerStep} steps={checkoutSteps} currStep={this.props.step}/>

        )
    }
}

