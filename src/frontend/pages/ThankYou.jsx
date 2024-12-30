import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { Helmet } from "react-helmet";
import InitialLoading from '../skeleton/Initial/Index';
import Layout from '../components/Layout';

const ThankYou = () => {
    window.scrollTo(0, 0);
    const [newLoadingCount, setNewLoadingCount] = useState(Number(localStorage.getItem('count')));

    useEffect(() => {
        setNewLoadingCount(Number(localStorage.getItem('count')));
    }, [localStorage.getItem('count')]);

    if (newLoadingCount < 99) {
        return <InitialLoading loadingCount={newLoadingCount} setLoadingCount={setNewLoadingCount} fast="true" />;
    }
    
    return (
        <>
        <Helmet>
            <script>
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '562105226581202');
                    fbq('track', 'PageView');
                `}    
            </script>
            <noscript>
                {`
                    <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=562105226581202&ev=PageView&noscript=1"/>
                `}
            </noscript>

            {/* conversion */}

            <script async src="https://www.googletagmanager.com/gtag/js?id=AW-11490416244"></script>

            <script>
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());

                    gtag('config', 'AW-11490416244');
                `}
            </script>

            <script>
                {`
                    gtag('event', 'conversion', {'send_to': 'AW-11490416244/XHAKCNLcmfgZEPSsh-cq'});
                `}
            </script>

            <script>
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '1277605383505048');
                    fbq('track', 'PageView');
                `}
            </script>
            <noscript>
                <img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1277605383505048&ev=PageView&noscript=1"
            />
            </noscript>

        </Helmet>
        <Layout>
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
        </Layout>
            
        </>
    );
};

export default ThankYou;
