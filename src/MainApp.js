import './style/scss/MainApp.scss';
import {React, Component} from 'react'
import Messages from './Components/Messages'


class MainApp extends Component {
    constructor(props) {
        super(props)

        this.state = {
            active: 'messages'
        }
    }


    render() {
        return(
            <div className="mainApp mainApp-outer">
                <div className="mainApp-inner">
                    <nav className="mainApp-inner-nav">
                        <ul className="mainApp-inner-nav-wrapper">
                            <li className="mainApp-inner-nav-wrapper-messages">
                                შეტყობინებები
                            </li>

                            <li className="mainApp-inner-nav-wrapper-userPage">
                                პირადი მონაცემები
                            </li>

                            <li className="mainApp-inner-nav-wrapper-marks">
                                სასწავლო ბარათი
                            </li>

                            <li className="mainApp-inner-nav-wrapper-subjects">
                                საგ. პროგრამა
                            </li>

                            <li className="mainApp-inner-nav-wrapper-acadReg">
                                აკადემიური რეგისტრაცია
                            </li>

                            <li className="mainApp-inner-nav-wrapper-lectures">
                                სასწავლო ცხრილი
                            </li>

                            <li className="mainApp-inner-nav-wrapper-marksListGe">
                                ნიშნების ფურცელი
                            </li>

                            <li className="mainApp-inner-nav-wrapper-marksListEng">
                                ნიშნების ფურცელი(ENG)
                            </li>

                            <li className="mainApp-inner-nav-wrapper-exercises">
                                დავალებები
                            </li>

                            <li className="mainApp-inner-nav-wrapper-finances">
                                ფინანსები
                            </li>

                            <li className="mainApp-inner-nav-wrapper-library">
                                ბიბლიოთეკა
                            </li>

                            <li className="mainApp-inner-nav-wrapper-statements">
                                განცხადებები
                            </li>

                            <li className="mainApp-inner-nav-wrapper-exit">
                                გასვლა
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        )
    }
}

export default MainApp;
