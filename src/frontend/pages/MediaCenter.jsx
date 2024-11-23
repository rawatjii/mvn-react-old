import React from 'react'
import MicroBanner from '../components/MicroBanner/Index'
import * as CONFIG from '../../config/config';

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
import GallerySlider from '../components/GallerySlider'
import pdfICON from '../assets/images/icons/pdf.png'


function MediaCenter() {
    const mvnLOGO = CONFIG.IMAGE_URL + 'logo_white.webp';


    const breadcrumbs = {
        title: 'Media Center',
        links: [
            {
                name: 'Home',
                link: '/'
            },
            {
                name: 'Media Center'
            }
        ]
    }

    const ourEvents = [
        {
            id: 1,
            poster: McVideoPoster,
            video: McVideo
        },
        {
            id: 2,
            poster: McVideoPoster,
            video: McVideo
        },
        {
            id: 3,
            poster: McVideoPoster,
            video: McVideo
        }
    ]
    const newsImages = [
        { src: "https://via.placeholder.com/800x600", alt: "Image 1" },
        { src: "https://via.placeholder.com/800x1000", alt: "Image 2" },
        { src: "https://via.placeholder.com/800x600", alt: "Image 3" },
        { src: "https://via.placeholder.com/800x600", alt: "Image 4" },
    ]
    const ourGallery = [
        {
            src: "https://via.placeholder.com/800x600",
            alt: "Image 1"
        },
        {
            src: "https://via.placeholder.com/800x1000",
            alt: "Image 2"
        },
        {
            src: "https://via.placeholder.com/800x600",
            alt: "Image 3"
        },
        {
            src: "https://via.placeholder.com/800x600",
            alt: "Image 4"
        },
        {
            src: "https://via.placeholder.com/800x600",
            alt: "Image 5"
        },
        {
            src: "https://via.placeholder.com/800x600",
            alt: "Image 6"
        },
        {
            src: "https://via.placeholder.com/800x600",
            alt: "Image 7"
        },
        {
            src: "https://via.placeholder.com/800x600",
            alt: "Image 8"
        }
    ]

    const pressCenter = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.',
            PDF: '#'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.',
            PDF: '#'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.',
            PDF: '#'
        }
    ]


    const onlineNews = [
        {
            id: 1,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.',
            img: newsIMG,
            postedDate: '25 Sep, 2025   ',
            url: '#'
        },
        {
            id: 2,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.',
            img: newsIMG,
            postedDate: '25 Sep, 2025   ',
            url: '#'
        },
        {
            id: 3,
            title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, voluptatum.',
            img: newsIMG,
            postedDate: '25 Sep, 2025   ',
            url: '#'
        }
    ]



    return (
        <div className='media_center'>
            <MicroBanner bg={mediaBG} data={breadcrumbs} />
            <section className="section media-news-section pb-0">
                <Container className='text-center'>
                    <img src={mediaIcon} alt="mvn-support-icon" className="img-fluid supportIcon mb-4" />

                    <SecTitle className="text-center color style1 mb_30">
                        <h4 className="title">latest news</h4>
                    </SecTitle>

                </Container>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-6 px-md-0">
                            <div className="media-news_offline">
                                <SecTitle className="text-center color style1 mb-0">
                                    <h4 className="title">Offline Media News</h4>
                                </SecTitle>

                                <GallerySlider data={newsImages} slidesPerView={2} navigation={true} />


                                {/* <div className="row">

                                    <div className="col-md-6">
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
                                    <div className="col-md-6 ">
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
                                </div> */}
                            </div>
                        </div>
                        <div className="col-sm-6 px-md-0">
                            <div className="media-news_online">
                                <SecTitle className="text-center color style1 mb-0">
                                    <h4 className="title">Online Media News</h4>
                                </SecTitle>

                                {
                                    onlineNews && onlineNews.map((item, index) => (
                                        <article className="awa_card awa_shadow" key={`news-${index}`}>
                                            <div>
                                                <img src={item.img} alt="image" />
                                            </div>

                                            <div>
                                                <p>{item.title}</p>
                                                <div className='awa_posted d-flex justify-content-between align-items-center'>

                                                    <span className='text-capitalize'><time>{item.postedDate}</time></span>

                                                    <a href={`${item.url}`} className='text-capitalize  ' target='_blank'>View Details</a>
                                                </div>
                                            </div>
                                        </article>
                                    ))
                                }



                            </div>
                        </div>
                    </div>


                </div>
            </section>
            <section className="section media-press-release pb-0">
                <div className="container">
                    <div className="sec_title text-center color style1 mb_30">
                        <h4 className="title">Press Center</h4>
                        <p>Pioneering new trends in the market, Ambience Group has an array of ongoing and planned projects at strategic locations in Delhi NCR, Sonepat, Panipat, Udaipur and Visakhapatnam incorporating a mix of Townships, Residential, Commercial, SEZ, Hospitality and Education</p>
                    </div>
                    <section class="press-release" id="press-center">

                        <div class="">
                            <div class="press-rel-sec">
                                <div class="inner-press-re">
                                    <div class="logo-sec">
                                        <div class="inner-logo-sec">

                                            <div class="box box-g">
                                                <h4>Ambience Logo with Tagline</h4>
                                                <div class="inner-box">
                                                    <div class="logo">
                                                        <img src={mvnLOGO} alt="logo"
                                                            width="100%" />
                                                    </div>
                                                    <div class="type">
                                                        <ul>
                                                            <li><a
                                                                href="javascript:void(0);">Jpeg</a>
                                                            </li>
                                                            <li><a
                                                                href="javascript:void(0);">png</a>
                                                            </li>
                                                            <li><a
                                                                href="javascript:void(0);">Eps</a>
                                                            </li>
                                                            <li><a
                                                                href="javscript:void(0);">Ai</a>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="content-sec">
                                        <div class="inner-content-sec">


                                            <div class="document-list">
                                                <ul id="presslistitem">

                                                    {
                                                        pressCenter && pressCenter.map((item, index) => (
                                                            <li key={`press-${index}`}>
                                                                <a href={item.PDF}
                                                                    download="">
                                                                    <span>{item.title}</span>
                                                                    <span>
                                                                        <img src={pdfICON} className='img-fluid' alt="pdf" />
                                                                    </span>
                                                                </a>
                                                            </li>
                                                        ))
                                                    }

                                                    
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>



                    {/* <div className="row">
                        <div className="col-sm-4">
                            <div className="press-release-content ">
                                <h4>Simply Dummy Text</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className="col-sm-8">
                            <div className="press-release-content ">
                                <h4>Simply Dummy Text</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                        <div className="col-sm-4">
                            <div className="press-release-content ">
                                <h4>Simply Dummy Text</h4>
                                <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>
                        </div>
                    </div> */}
                </div>
            </section>
            <section className='section media-gallery'>
                <div className="container">
                    <SecTitle className="text-center color style1 mb_30">
                        <h4 className="title">GALLERY</h4>
                    </SecTitle>
                    <GallerySlider data={ourGallery} slidesPerView={3} spaceBetween={20} navigation={true} />
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

                                        <Video videoSrc={item.video} videoPoster={item.poster} />
                                        <h5 className="media_content_heading">Lorem ipsum dolor sit amet, consectetur </h5>
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
                        <Enquire />
                    </div>
                    <div className="col-sm-6">
                        <div className="media_enquiry_form_card">
                            <EnquireForm />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MediaCenter