import './Dialog.css';

const Dialog = (props : any) => {
    console.log( 'props = ', props );
    return (
        <div className="dialog-overlay">
            <div className="dialog">
                {props.children}
            </div>
        </div>
    );
}
 
export default Dialog;