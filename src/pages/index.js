import React from 'react';
import { Link } from 'gatsby';
import Header from '../components/header';
import Layout from '../components/layout';

export default () => (
    <Layout>
        <h1>
            Hello world! Gatsby!
        </h1>
        <Header headerText="Propsで取得" />
        <p>What a world...</p>
        <img src="https://source.unsplash.com/random/400x200" alt="" />
        <br/>
        <Link to="/about-css-modules">About</Link>
        <br/>
        <Link to="/contact">Contact</Link>
    </Layout>
);