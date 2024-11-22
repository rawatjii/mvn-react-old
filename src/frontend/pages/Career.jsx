import React, { Suspense } from 'react'
import MicroBanner from '../components/MicroBanner/Index'

import careerbg from '../assets/images/career/tables-chairs-office.png'
import ContactPage from '../components/contact/Index'
import Enquire from '../components/homepage/Enquire'
import EnquireForm from '../components/homepage/EnquireForm'
import { Container } from 'react-bootstrap'
import SecTitle from '../../common/SecTitle/Index'

import supportIcon from '../assets/images/icons/contact/career.png'
import careerIMG from '../assets/images/career/career.png'

import leftArrow from '../assets/images/career/left-arrow.png'
import CultureImg from '../assets/images/career/image.jpg'
import peopleDevelopmentImg from '../assets/images/career/peaple-d.png'
import RewardsImg from '../assets/images/career/rewards.png'
import ligemvnImg from '../assets/images/career/lifeatmvn.png'
import BlankIMG from '../assets/images/career/bg.png'


function Career() {
    const breadcrumbs = {
        title: 'Career',
        links: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Career'
            }
        ]
    }




    return (
        <div className='career_page'>
            <MicroBanner bg={careerbg} data={breadcrumbs} />

            <div className="micro_content">
                <div className="micro_data">
                    <Suspense fallback="loading">
                        <section className="section contact-us-section ">
                            <Container>
                                <img src={supportIcon} alt="mvn-support-icon" className="img-fluid supportIcon" />

                                <SecTitle className="text-center color style1 mb_30">
                                    <h4 className="title">Find Holistic well-being At Your Workplace</h4>
                                </SecTitle>

                            </Container>
                        </section>



                        {/* <div className="container py-5">
                <div className="row align-items-center justify-content-center row_gap">
                    <div className="col-sm-8">
                        <div className='job_description_img'>
                            <img src={careerIMG} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="job_description_content">
                        <SecTitle className="color style1 mb-3  text-center">
                            <h4 className="title  mb-4">Why Work With Us?</h4>
                            <p className='extra mb-0'>Our purpose is to ‘Enhance quality of life through the spaces we create’. The well-being of all our stakeholders, is thus at the core of our operating philosophy.</p>
                        </SecTitle>
                            <p className='text-center'>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>

            */}
                    </Suspense>
                </div>

                <section className="front-page-all">

                    <div className="container">
                        <div className="heading">
                            <h1>Talent Management</h1>
                            <p>Our Human Resource team is dedicated to attracting, nurturing, and retaining top talent, ensuring the right people are in the right roles to drive the company forward. We prioritize skill, passion, and commitment to our shared goals.
                            </p>
                        </div>
                    </div>

                    <div className="container">
                        <div className="grid-left">
                            <div className="img-left">
                                <div className="inner-sec">
                                    <div className="half">
                                        <div className="img-in-left">
                                            <img src={CultureImg} width="100%;" />
                                        </div>
                                    </div>
                                    <div className="half">
                                        <div className="content-half h-100">
                                            <div>
                                            <h2>Work Environment</h2>
                                            <p>At MVN, we cultivate a culture of collaboration, innovation, and inclusivity, where every individual’s voice is valued and every contribution matters. We believe in fostering a positive, dynamic work environment that encourages personal and professional growth.
                                            </p>
                                            </div>

                                        </div>
                                        <div className="arrow-g">
                                            <img src={leftArrow} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="grid-left-right">
                                <div className="img-left-right">
                                    <div className="item animated wow fadeIn">
                                        <img className="blank-img" src={BlankIMG} width="100%" />
                                        <div className="content-right-img">
                                            <div className="gd-inner h-100 d-grid align-items-center">
                                                <div>
                                                <h2>Employee Growth</h2>
                                                <p>We are committed to the continuous development of our people, providing opportunities for learning, mentorship, and skill enhancement. Our focus is on empowering employees to reach their fullest potential, both personally and professionally.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overlay right-overlay">
                                            <div className="img-hov">
                                                <img src={peopleDevelopmentImg} width="100%" />
                                            </div>
                                        </div>
                                    </div>


                                </div>
                            </div>
                        </div>

                        <div className="grid-right">
                            <div className="grid-left-right">
                                <div className="img-left-right">
                                    <div className="item animated wow fadeIn">
                                        <img className="blank-img" src={BlankIMG} width="100%" />
                                        <div className="content-right-img">
                                            <div className="gd-inner h-100 d-grid align-items-center">
                                                <div>
                                                <h2>Rewards & Recognition</h2>
                                                <p>We celebrate achievements and milestones, ensuring our employees’ hard work and dedication are recognized and rewarded. Through tailored incentives and acknowledgment, we motivate our team to strive for excellence.
                                                </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="overlay right-overlay">
                                            <div className="img-hov">
                                                <img src={RewardsImg} width="100%" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>


                            <div className="img-left">
                                <div className="inner-sec">
                                    <div className="half">
                                        <div className="img-in-left">
                                            <img src={ligemvnImg} width="100%;" />
                                        </div>
                                    </div>
                                    <div className="half">
                                        <div className="content-half h-100">
                                            <div>
                                            <h2>Life At MVN</h2>
                                            <p>Life at MVN is all about balance, collaboration, and growth. We offer a supportive and vibrant workplace where employees thrive, enjoy meaningful work, and are encouraged to achieve both professional success and personal well-being</p>
                                            </div>
                                        </div>
                                        <div className="arrow-g">
                                            <img src={leftArrow} />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                    </div>
                </section>


                <section className="oppotunities">
                    <div className="container">
                        <div className="inn-oppor">
                            <div className="left text-center mx-auto">

                                <h2>Shape Your Future with MVN</h2>
                                <p>At MVN, your career isn’t just a job—it’s a journey of growth, learning, and limitless opportunities. We empower individuals to explore their potential, embrace challenges, and achieve excellence in a dynamic and supportive environment. Join us to build a rewarding future where your ideas and ambitions find their true place.</p>
                                <div className="job_mail">
                                        <p className='mb-0'>Send your CV to  </p>
                                        <a href="mailto:careers@mvninfrastructure.com" className='jobmail'> careers@mvninfrastructure.com</a>
                                    </div>
                            </div>
                            {/* <div className="right">
                                
                            </div> */}
                        </div>
                    </div>
                </section>

                <div className="JobForm">
                    <div className='container-fluid'>
                        <div className="row align-items-center">
                            <div className="col-sm-6">
                                <div className="job_description">
                                    <SecTitle className="text-center color mb_30">
                                        <h4 className="title  mb-4">Apply Here for Jobs</h4>
                                        <p>Join MVN Group for exciting career opportunities. We value excellence, innovation, and dedication, and we provide a dynamic, inclusive work environment for your growth. Apply now to make a meaningful impact and contribute to a future defined by quality and innovation.</p>
                                    </SecTitle>
                                    
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <EnquireForm career={true} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Career