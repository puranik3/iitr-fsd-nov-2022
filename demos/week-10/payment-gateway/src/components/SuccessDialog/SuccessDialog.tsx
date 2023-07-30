import Dialog from "../Dialog/Dialog";
import PaymentOptions from "../../models/PaymentOptions";

type Props = {
    paymentOption: PaymentOptions,
    onYes: () => void
}

const SuccessDialog = (props : Props) => {
    return (
        <div>
            <Dialog
                title="Proceed with transaction?" 
                body="xyz"
            >
                <h2 style={{
                    textAlign: 'center'
                }}>
                    Success
                </h2>
                <p style={{
                    textAlign: 'center'
                }}>
                    <strong>Details of transaction</strong>
                    <p>
                        Payment option used : {props.paymentOption}
                        <button className="btn btn-confirm" onClick={props.onYes}>Yes</button>
                    </p>
                </p>
            </Dialog>
        </div>
    );
}
 
export default SuccessDialog;