import { Component } from 'react';

class NetBanking extends Component {
    render() {
        return (
            <form>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                <label htmlFor="bankName">Bank Name</label>
                            </td>
                            <td>
                                <select id="bankName"></select>
                            </td>
                        </tr>

                    </tbody>
                </table>
            </form>
        )    
    }
}

export default NetBanking;