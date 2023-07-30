import { useState } from 'react';
import Dialog from "../Dialog/Dialog";
import PaymentOptions from "../../models/PaymentOptions";
import SuccessDialog from '../SuccessDialog/SuccessDialog';

type Props = {
    onNo: () => void,
    onYes: () => void,
    paymentOption: PaymentOptions
}

const ConfirmationDialog = (props : Props) => {
    const [showSuccess, setShowSuccess] = useState( false );

    const showSuccessDialog = () => {
        setShowSuccess( true );
    };

    return (
        <div>
            {
                showSuccess === true ? (
                    <SuccessDialog
                        paymentOption={props.paymentOption}
                        onYes={props.onYes}
                    />
                ) : (
                    <Dialog
                        title="Proceed with transaction?" 
                        body="xyz"
                    >
                        <h2 style={{
                            textAlign: 'center'
                        }}>
                            Proceed to complete the payment?
                        </h2>
                        <p style={{
                            textAlign: 'center'
                        }}>
                            <button
                                className="btn btn-confirm"
                                onClick={props.onNo}
                            >
                                No
                            </button>
                            <button
                                className="btn btn-cancel"
                                onClick={showSuccessDialog}
                            >
                                Yes
                            </button>
                        </p>
                    </Dialog>
                )
            }
        </div>
    );
}
 
export default ConfirmationDialog;