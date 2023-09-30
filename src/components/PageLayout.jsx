import React from 'react';
import Image from '../assets/loginimage.png';

import { useIsAuthenticated } from '@azure/msal-react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { SignInButton } from './SignInButton';


/**
 * Renders the navbar component with a sign-in or sign-out button depending on whether or not a user is authenticated
 * @param props
 */
export const PageLayout = (props) => {
    const isAuthenticated = useIsAuthenticated();
    return (




        <Row>
            <Col xs={12} md={6} lg={6} sm={6} className="d-none d-sm-block">
                {/* Left Div */}

                {/* Content for the left div */}
                <img src={Image} style={{ width: "100%", height: "100vh" }} />
            </Col>
            <Col xs={12} sm={6} md={6} lg={6} className="d-flex justify-content-center align-items-center flex-column">
                
                <h3 style={{"font-family": "Times New Roman"}}><b> STEP INTO THE WORLD OF ANSWERS!</b></h3>
                {/* <div
                    className="shadow-lg p-3 mb-5 mt-5 bg-white rounded "
                    style={{
                        border: '2px solid #1fb6ff',
                        padding: '10px',
                        display: 'inline-block',
                    }}>
                    <br />
                    <h5 className="card-title">Get Started with SSO</h5>
                    <br />
                    <br />
                    <div className="d-flex justify-content-center align-items-center flex-column"> */}
                    <SignInButton  />
                    
                   
            </Col>
        </Row>









    );
};

