import React from 'react';

const ThankYou = () => {
    return (
        <div className="container p-0">
            <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                <div className="thanks-page">
                    {/* <div className="sign-ys">
                        <i className="fa fa-check" aria-hidden="true" style={{ marginTop: '20px' }}></i>
                    </div> */}
                    <div className="thnu">
                        <h1 style={{ fontWeight: 600 }}>Thank you!</h1>
                        <p style={{ lineHeight: '30px' }}>
                            Thank you for submitting your details.
                            <br />
                            Our professional shall get in touch with you within two working hours. Stay with us.
                        </p>
                    </div>
                    <a className='backBtn' href="http://valuehomzrealtors.com/">
                        {/* <span className="aros"> */}
                        back to home
                        {/* </span> */}
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ThankYou;
