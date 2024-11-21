import React, { Suspense } from 'react'
import MicroBanner from '../components/MicroBanner/Index'

import careerbg from '../assets/images/career/careerbg.png'
import ContactPage from '../components/contact/Index'
import Enquire from '../components/homepage/Enquire'
import EnquireForm from '../components/homepage/EnquireForm'
import { Container } from 'react-bootstrap'
import SecTitle from '../../common/SecTitle/Index'

import supportIcon from '../assets/images/icons/contact/career.png'
import careerIMG from '../assets/images/career/career.png'


function Career() {
    const breadcrumbs = {
        title:'Career',
        links:[
          {
            name:'Home',
            link:'/'
          },
          {
            name:'career'
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
            <div className="container py-5">
                <div className="row align-items-center row_gap">
                    <div className="col-sm-6">
                        <div className='job_description_img'>
                            <img src={careerIMG} className='img-fluid' alt="" />
                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="job_description_content">
                        <SecTitle className="color style1 mb-3 ">
                            <h4 className="title  mb-4">Why Work With Us?</h4>
                            <p className='extra mb-0'>Our purpose is to ‘Enhance quality of life through the spaces we create’. The well-being of all our stakeholders, is thus at the core of our operating philosophy.</p>
                        </SecTitle>
                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>

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
                        <EnquireForm   career={true} />
                    </div>
                </div>
            </div>
            </Suspense>
        </div>
      </div>
    </div>
  )
}

export default Career