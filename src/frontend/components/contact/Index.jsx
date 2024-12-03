import { Container } from "react-bootstrap"
import SecTitle from "../../../common/SecTitle/Index";

import supportIcon from '../../assets/images/icons/contact/support.png';
import * as CONFIG from '../../../config/config'

const ContactPage = ()=>{
    return(
        <section className="section contact-us-section ">
            <Container>
           

                <SecTitle className="text-center color style1 mb_30 page-header-main-heading">
                <img src={supportIcon} alt="mvn-support-icon" className="img-fluid supportIcon" />
                    <h4 className="title">Call or Visit us at One of our locations</h4>
                </SecTitle>

                <p className="detail_title">Write <span>T</span>o us</p>
                <ul className="contact_details">
                    <li>
                        <span className="icon">
                            <img src={CONFIG.IMAGE_URL + 'icons/mail.png'} alt="mvn envelope icon" className="img-fluid" />
                        </span>
                        <a href="">info@mvngroup.in</a>
                    </li>
                    <li>
                        <span className="icon">
                            <img src={CONFIG.IMAGE_URL + 'icons/call.png'} alt="mvn envelope icon" className="img-fluid" />
                        </span>
                        <a href="">(+91) 88267 93148</a>
                    </li>
                    <li>
                        <span className="icon">
                            <img src={CONFIG.IMAGE_URL + 'icons/location.png'} alt="mvn envelope icon" className="img-fluid" />
                        </span>
                        MVN AeroOne Dwarka Expressway, 22Km Milestone, Sector-37D, <br /> Gurugram, Pin-122103 | CIN:ACA-4678 | PAN:ABWFM8415E
                    </li>
                </ul>
            </Container>
        </section>
    )
}

export default ContactPage