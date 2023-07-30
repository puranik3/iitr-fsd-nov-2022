import { Component, ChangeEvent, FormEvent } from 'react';

import ConfirmationDialog from '../ConfirmationDialog/ConfirmationDialog';
import PaymentOptions from '../../models/PaymentOptions';

type Props = {};

type State = {
    cardNumber: string,
    name: string,
    month: string,
    year: string,
    cvv: string,
    showConfirmation: boolean
};

// Extension - React Food Truck (Burke Holland)
// ccc -> class
// sfc -> function
class CreditDebitCard extends Component<Props, State> {
    state = {
        cardNumber : '',
        name: '',
        month: '',
        year: '',
        cvv: '',
        showConfirmation: false
    };

    updateValue = ( event : ChangeEvent<HTMLInputElement | HTMLSelectElement> ) => {
        const { name, value } = event.target;
        console.log(name, value);

        // convince TS that the name will be holding one of the keys from State type
        this.setState({
            [name]: value
        } as unknown as Pick<State, keyof State>);
    };

    onSubmit = ( event : FormEvent<HTMLFormElement> ) => {
        // this pevents the submission of the form by the browser
        event.preventDefault();

        this.setState({
            showConfirmation: true
        } as Pick<State, keyof State>);
    }

    hideConfirmationDialog = () => {
        this.setState({
            showConfirmation: false
        });
    }

    clearInputs = () => {
        this.setState({
            cardNumber : '',
            name: '',
            month: '',
            year: '',
            cvv: '',
            showConfirmation: false
        });
    }

    render() {
        const { cardNumber, name, month, year, cvv, showConfirmation } = this.state;

        // return {}{}
        return (
            <>
                <form onSubmit={this.onSubmit}>
                    <table>
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="cardNumber">Card Number</label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="cardNumber"
                                        name="cardNumber"
                                        value={cardNumber}
                                        onChange={this.updateValue}
                                        min="000000000000"
                                        max="999999999999"
                                        placeholder="123456781234"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="name">Name</label>
                                </td>
                                <td>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={name}
                                        onChange={this.updateValue}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label>Expiry date</label>
                                </td>
                                <td>
                                    <select
                                        required
                                        value={month}
                                        name="month"
                                        onChange={this.updateValue}
                                    >
                                        <option value="">mm</option>
                                        {
                                            Array(12).fill(1).map((item, idx) => (
                                                <option value={idx + 1} key={idx}>{idx + 1}</option>
                                            ))
                                        }
                                    </select>
                                    <select
                                        required
                                        value={year}
                                        name="year"
                                        onChange={this.updateValue}
                                    >
                                        <option value="">yyyy</option>
                                        {
                                            Array(11).fill((new Date()).getFullYear()).map((item, idx) => (
                                                <option value={item + idx} key={idx}>{item + idx}</option>
                                            ))
                                        }
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <label htmlFor="cvv">CVV</label>
                                </td>
                                <td>
                                    <input
                                        type="number"
                                        id="cvv"
                                        name="cvv"
                                        value={cvv}
                                        onChange={this.updateValue}
                                        required
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <button className="btn btn-pay">Pay</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
                {showConfirmation && (
                    <ConfirmationDialog
                        onNo={this.hideConfirmationDialog}
                        onYes={this.clearInputs}
                        paymentOption={PaymentOptions.CARD}
                    />
                )}
            </>
        ); 

        
    }
}

export default CreditDebitCard;