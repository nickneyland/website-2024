import * as React from 'react'
import Layout from "../components/layout"
import { Link } from "gatsby"
import {
    typedText,
    homeText
} from '../components/styles/homepage.module.css'

const ListLink = props => (
    <Link to={props.to}>{props.children}</Link>
)
const homePage = () => (
    <Layout>
        <div id={typedText}>
            <h1>Hello</h1> 
            <p className={homeText}>My name is Nick.</p>
            <p className={homeText}>I am an IT professional and former writer.</p>
            <p className={homeText}>You can see some of my <ListLink to="/coding">coding work here</ListLink>.</p>
            <p className={homeText}>And you can see some of my <ListLink to="/writing">work as a writer here</ListLink>.</p>
        </div>
    </Layout>
)

export default homePage