import React from 'react'
import MicroBanner from '../components/MicroBanner/Index'

import mediaBG from '../assets/images/media/mediacenter.png'
import { Container } from 'react-bootstrap'
import SecTitle from '../../common/SecTitle/Index'
import mediaIcon from '../assets/images/icons/media/media.png'
import McVideo from '../assets/videos/media/video.mp4'
import McVideoPoster from '../assets/videos/media/poster.png'
import rightArrow from '../assets/images/mediacenter/right-arrow.png'
import newsIMG from '../assets/images/mediacenter/news-1.png'
import EnquireForm from '../components/homepage/EnquireForm'
import Video from '../components/Video'
import Enquire from '../components/homepage/Enquire'


function MediaCenter() {
    const breadcrumbs = {
        title:'Media Center',
        links:[
          {
            name:'Home',
            link:'/'
          },
          {
            name:'Media Center'
          }
        ]
      }

      const ourEvents = [
        {
            id : 1,
            poster : McVideoPoster,
            video : McVideo
        },
        {
            id : 2,
            poster : McVideoPoster,
            video : McVideo
        },
        {
            id : 3,
            poster : McVideoPoster,
            video : McVideo
        }
      ]


    return (
        <div className='media_center'>
        <MicroBanner bg={mediaBG}  data={breadcrumbs}/>
            <section className="section media-news-section pb-0">
            <Container className='text-center'>
                    <img src={mediaIcon} alt="mvn-support-icon" className="img-fluid supportIcon mb-4" />

                    <SecTitle className="text-center color style1 mb_30">
                        <h4 className="title">latest news</h4>
                    </SecTitle>

                </Container>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="media-news-page">
                                <div className="media-news-page-box">
                                    <div className="media-news-page-img">
                                        <img src={newsIMG} alt="" />
                                    </div>
                                    <div className="news-page-content">
                                        <p className="news-date">25 September, 2025</p>
                                        <p className="news-title">MVN Infrastructure Celebrates MVN Mall’s New Office Opening</p>
                                        <a className="btn btn_style-news" href="">View Details <img className="img-fluid" src={rightArrow} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="media-news-page ">
                                <div className="media-news-page-box">
                                    <div className="media-news-page-img">
                                        <img src={newsIMG} alt="" />
                                    </div>
                                    <div className="news-page-content">
                                        <p className="news-date">25 September, 2025</p>
                                        <p className="news-title">MVN Infrastructure Celebrates MVN Mall’s New Office Opening</p>
                                        <a className="btn btn_style-news" href="">View Details <img className="img-fluid" src={rightArrow} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="media-news-page ">
                                <div className="media-news-page-box">
                                    <div className="media-news-page-img">
                                        <img src={newsIMG} alt="" />
                                    </div>
                                    <div className="news-page-content">
                                        <p className="news-date">25 September, 2025</p>
                                        <p className="news-title">MVN Infrastructure Celebrates MVN Mall’s New Office Opening</p>
                                        <a className="btn btn_style-news" href="">View Details <img className="img-fluid" src={rightArrow} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>
            <section className="section media-press-release pb-0">
                <div className="container">
                    <div className="sec_title text-center color style1 mb_30">
                        <h4 className="title">PRESS RELEASES</h4>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="press-release-content ">
                                <h4>Simply Dummy Text</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="press-release-content ">
                                <h4>Simply Dummy Text</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className="press-release-content ">
                                <h4>Simply Dummy Text</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section media-events ">
                <div className="container">
                    <div className="sec_title text-center color style1 mb_30">
                        <h4 className="title">OUR EVENTS</h4>
                    </div>
                    <div className="row">
                        {
                            ourEvents && ourEvents.map((item, index) => (
                                <div className="col-sm-4" key={`event-${index}`}>
                                    <div className="media-event-content">
                                        <h5 className="media_content_heading">Lorem ipsum dolor sit amet, consectetur </h5>
                                        <Video videoSrc={item.video} videoPoster={item.poster}  />
                                    </div>
                                </div>
                                    ))
                                }

                                


                        
                    </div>
                </div>
            </section>
            <div className="container-fluid">
                <div className="row align-items-center">
                    <div className="col-sm-6">
                        <Enquire/>
                    </div>
                    <div className="col-sm-6">
                        <div className="media_enquiry_form_card">
                        <EnquireForm/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaCenter