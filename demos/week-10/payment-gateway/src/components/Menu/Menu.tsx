// useState is a "hook" - can be used only in function components
import { useState, MouseEvent } from 'react';
import CreditDebitCard from '../CreditDebitCard/CreditDebitCard';
import NetBanking from '../NetBanking/NetBanking';
import UPI from '../UPI/UPI';
import PaymentOptions from '../../models/PaymentOptions';

import './Menu.css';

const paymentOptions = [
    PaymentOptions.CARD,
    PaymentOptions.NET_BANKING,
    PaymentOptions.UPI
];

const Menu = () => {
    // React maintains the state option, and provides a setter function to update the value
    const [ option, setOption ] = useState(PaymentOptions.CARD);

    // create n array of button react element
    // const buttons = paymentOptions.map(po => <button>{po}</button>);
    // console.log( buttons );

    const onOptionButtonClick = (event : MouseEvent, selectedOption : PaymentOptions) => {
        setOption(selectedOption);
    }

    return (
        <div className="menu">
            <div className="payment-options">
                {
                    paymentOptions.map(po => (
                        <button
                            key={po}
                            className={"payment-option " + (option === po ? 'payment-option-selected' : '')}
                            onClick={(event) => onOptionButtonClick(event, po)}
                        >
                            {po}
                        </button>
                    ))
                }
            </div>
            <div className="payment-details">
                {option === PaymentOptions.CARD && <CreditDebitCard />}
                {option === PaymentOptions.NET_BANKING && <NetBanking />}
                {option === PaymentOptions.UPI && <UPI />}
            </div>
        </div>
    )
};

export default Menu;