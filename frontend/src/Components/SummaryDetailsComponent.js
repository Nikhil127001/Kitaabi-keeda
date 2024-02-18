import AddressAddButton from './AddressAddButton'
import './ComponentStyles/SummaryDetailsComponent.css'
import {Link} from 'react-router-dom';
const SummaryDetailsComponent = () => {

    const navigateToPayment = () => {
    }
    return (
        <div className="summaryOuter">
            <div className="summaryInner">
                <hr />
                <h5>Amount Details {'('}2 items{')'}</h5>
                <hr />
                <div className='priceDetails'>
                    <div ><text>Total MRP (Inc. of Taxes)</text></div>
                    <div><text>₹4360</text>
                    </div>
                </div>
                <div className='priceDetails'>
                    <div ><text>Beyoung Discount</text></div>
                    <div><text>- ₹2062</text>
                    </div>
                </div>
                <div className='priceDetails'>
                    <div ><text>Cart Total</text></div>
                    <div><text>₹2298</text>
                    </div>
                </div>
                <div className='priceDetails'>
                    <div ><text>Shipping</text></div>
                    <div><text>₹49 Free</text>
                    </div>
                </div>
                <div className='priceDetails'>
                    <div ><text>Coupon Applied(BEYOUNG100)
                    </text></div>
                    <div><text>- ₹100</text>
                    </div>
                </div>
                <hr/>
                <div className='priceDetails'>
                    <div ><text>TOTAL AMOUNT
                    </text></div>
                    <div><text>₹2198</text>
                    </div>
                </div>
                <div style={{fontWeight: 'bold', color : 'green'}}>
                Wow!! You Saved ₹2162 on this order
                </div>

                <Link to={'/checkout/payment'}>
                <AddressAddButton BtnName={'CHECKOUT SECURELY'} onpress={navigateToPayment} styles={{width : '100%', color : 'white', fontSize : '18px',left : 0, backgroundColor : '#621CEA' }}/>
                </Link>
                
            </div>
        </div>
    )
}
export default SummaryDetailsComponent