import * as React from 'react'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const aboutPage = () => (
    <Layout>
        <div className="container">
            <p>I grew up on the south-east coast of England and now live in Brooklyn, NY.</p>
            <p>I currently work as the CTO for <a href="https://essensepartners.com/" target="_blank" rel="noopener noreferrer">Essense Partners</a>.</p>
            <StaticImage
                src="../images/nick.jpg" 
                alt="photo of nick" 
             />
        </div>
    </Layout>
)

export default aboutPage