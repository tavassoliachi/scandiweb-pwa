import ContentWrapper from "Component/ContentWrapper";
import {
    Checkout as CheckoutMain
} from "SourceRoute/Checkout/Checkout.component";
import ProgressBar from "Component/ProgressBar";
import styles from "./styles.module.css"
export default class Checkout extends CheckoutMain {
    generateProgressBar(){
        const { checkoutStep } = this.props;
        return <ProgressBar step={checkoutStep}/>
    }
    render() {
        const {checkoutStep} = this.props
        console.log(checkoutStep,"-",window.location)
        return (
            <main block="Checkout" className={styles.cont}>
                {this.generateProgressBar()}
                <ContentWrapper
                  wrapperMix={ { block: 'Checkout', elem: 'Wrapper' } }
                  label={ __('Checkout page') }
                >
                    { this.renderSummary(true) }
                    <div block="Checkout" elem="Step">
                        { this.renderTitle() }
                        { this.renderGuestForm() }
                        { this.renderStep() }
                        { this.renderLoader() }
                    </div>
                    <div>
                        { this.renderSummary() }
                        { this.renderPromo() }
                        { this.renderCoupon() }
                    </div>
                </ContentWrapper>
            </main>
        )
    }
}
    