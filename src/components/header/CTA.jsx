import React from 'react'
import CV from '../../assets/cv1.pdf'

const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download me</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>

        </div>
    )
}

export default CTA