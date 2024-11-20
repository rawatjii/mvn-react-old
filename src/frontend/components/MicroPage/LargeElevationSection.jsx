import React from 'react'
import { Container } from 'react-bootstrap'
// import bgImg from '../../assets/images/'

export default function LargeElevation({ data }) {
    return (
        <div className='large-elevation'>
            <Container fluid>
                <div className='top_div'>
                    <h3 className='title text-uppercase'>{data.title}</h3>
                </div>
            </Container>
        </div>
    )
}
