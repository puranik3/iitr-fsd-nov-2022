import { Component } from 'react';

class UPI extends Component {
    render() {
        return (
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="upiID">UPI Id</label>
                            </td>
                            <td>
                                <input
                                    type="text"
                                    id="upiID"
                                />
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>
        )    
    }
}

export default UPI;