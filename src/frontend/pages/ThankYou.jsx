import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ThankYou = () => {
    
    return (
        <div className="thanks-page">
            <Container>
                <div className="thnu">
                    <h1 style={{ fontWeight: 600 }}>Thank you!</h1>
                    <p style={{ lineHeight: '30px' }}>
                        Thank you for submitting your details.
                        <br />
                        Our professional shall get in touch with you within two working hours. Stay with us.
                    </p>
                </div>
                <Link className='backBtn' to="/">
                back to home
                </Link>
            </Container>
            
        </div>
    );
};

export default ThankYou;
