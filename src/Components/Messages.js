import {React, Component} from 'react'


class Messages extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            // <div className="mainApp-inner-activePage-messages">
                <div className="messages messages-outer">
                    <div className="messages-inner">
                        <div className="messages-inner-top">
                            <div className="messages-inner-top-left">
                                <ul className="messages-inner-top-left-wrapper">
                                    <li className="messages-inner-top-left-wrapper-student">
                                        სტუდენტი
                                    </li>

                                    <li className="messages-inner-top-left-wrapper-professor">
                                        პროფესორი
                                    </li>

                                    <li className="messages-inner-top-left-wrapper-administration">
                                        ადმინისტრაცია
                                    </li>
                                </ul>
                            </div>

                            <div className="messages-inner-top-right">
                                <div className="messages-inner-top-right-newMsg">
                                    <button className="messages-inner-top-right-newMsg-btn">
                                        + ახალი შეტყობინება
                                    s</button>
                                </div>
                            </div>
                        </div>

                        
                    </div>
                </div>
            // </div>
        )
    }
}

export default Messages;
