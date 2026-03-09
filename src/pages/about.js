import * as React from 'react'
import Layout from "../components/layout"
import { StaticImage } from 'gatsby-plugin-image'

const aboutPage = () => (
    <Layout>
        <div className="container">
            <p>I grew up on the south-east coast of England and now live in Brooklyn, NY.</p>
            <p>I currently work as the Vice President of Technology for <a href="https://www.islandgrid.com/" target="_blank" rel="noopener noreferrer">Island Grid</a> and <a href="https://www.bahamasgrid.net/" target="_blank" rel="noopener noreferrer">Bahamas Grid</a>.</p>
            <p>I am also the co-founder and owner of <a href="https://thirdbranchconsulting.com/" target="_blank" rel="noopener noreferrer">Third Branch</a>.</p>
            <StaticImage
                src="../images/nick.jpg" 
                alt="photo of nick" 
             />
        </div>
    </Layout>
)

export default aboutPage