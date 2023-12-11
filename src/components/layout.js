import * as React from 'react'
import Helmet from "react-helmet"
import { Link } from "gatsby"
import {
    containerMain,
    siteTitle,
    containerHeader,
    site
} from '../components/styles/layout.module.css'
import {
    footer,
    footerContainer,
    leftFooter,
    rightFooter
} from '../components/styles/footer.module.css'

const ListLink = props => (
    <Link to={props.to}>{props.children}</Link>
)
export default ({ children }) => (
    <div className={site}>
        <Helmet>
            <title>Nick Neyland</title>
            <meta name="title" content="Nick Neyland" />
            <link rel="canonical" href="https://nickneyland.com" />
            <meta name="description" content="Personal website of web developer and writer Nick Neyland." />
        </Helmet>
        <div className={containerHeader}>
            <header>
                <Link to="/" className={siteTitle}>
                    Nick Neyland
                </Link>
                <ul>
                    <li><ListLink to="/about">About</ListLink></li>
                    <li><ListLink to="/coding">Coding</ListLink></li>
                    <li><ListLink to="/writing">Writing</ListLink></li>
                </ul>
            </header>
        </div>
        <div className={containerMain}>
            {children}
        </div>
        <footer className={footer}>
            <div className={footerContainer}>
                <ul className={leftFooter}>
                    <li>Site built with <a href="https://www.gatsbyjs.org" target="_blank" rel="noopener noreferrer">gatsby.js</a></li>
                    <li>&copy; {new Date().getFullYear()} Nick Neyland</li>
                </ul>
                <ul className={rightFooter}>
                    <li><a href="https://github.com/nickneyland" target="_blank" rel="noopener noreferrer">Github</a></li>
                    <li><a href="https://www.linkedin.com/in/nick-neyland/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    </div>
)