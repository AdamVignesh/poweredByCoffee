import React, { useState } from 'react';
import './styles/App.css';
import { PageLayout } from './components/PageLayout';
import { AuthenticatedTemplate, UnauthenticatedTemplate, useMsal } from '@azure/msal-react';
import Button from 'react-bootstrap/Button';
import { loginRequest } from './authConfig';
import { callMsGraph } from './graph';
import { ProfileData } from './components/ProfileData';
import { Box, ChakraProvider, theme } from "@chakra-ui/react";
import Chat from "./pages/Chat";
import { SignInButton } from './components/SignInButton';


/**
 * Renders information about the signed-in user or a button to retrieve data about the user
 */

// const ProfileContent = () => {
//     const { instance, accounts } = useMsal();
//     const [graphData, setGraphData] = useState(null);

//     function RequestProfileData() {
//         // Silently acquires an access token which is then attached to a request for MS Graph data
//         instance
//             .acquireTokenSilent({
//                 ...loginRequest,
//                 account: accounts[0],
//             })
//             .then((response) => {
//                 // callMsGraph(response.accessToken).then((response) => setGraphData(response));
//                 console.log(response.accessToken + " response");
//                 callMsGraph(response.accessToken)
//                     .then((userData) => {
//                         setGraphData(userData);
//                     })
//                     .catch((error) => {
//                         console.error('Error fetching user data:', error);
//                     });
//             });
//     }

//     return (
//         <>
//             <h5 className="card-title">Welcome {accounts[0].name}</h5>
//             {graphData ? (
//                 <ProfileData graphData={graphData} />
//             ) : (
//                 <Button variant="secondary" onClick={RequestProfileData}>
//                     Request Profile Information
//                 </Button>
//             )}
//         </>
//     );
// };

/**
 * If a user is authenticated the ProfileContent component above is rendered. Otherwise a message indicating a user is not authenticated is rendered.
 */
const MainContent = () => {
    const { instance, accounts } = useMsal();
    const [graphData, setGraphData] = useState(null);

        // Silently acquires an access token which is then attached to a request for MS Graph data
        instance
            .acquireTokenSilent({
                ...loginRequest,
                account: accounts[0],
            })
            .then((response) => {
                // callMsGraph(response.accessToken).then((response) => setGraphData(response));
                console.log(response.accessToken + " response");
                callMsGraph(response.accessToken)
                    .then((userData) => {
                        setGraphData(userData);
                    })
                    .catch((error) => {
                        console.error('Error fetching user data:', error);
                    });
                })
    return (
        <Box className="App">
            <AuthenticatedTemplate>
                {/* <ProfileContent /> */}
                {graphData? 
                <ChakraProvider theme={theme}>
                    <Chat graphData={graphData}/>
                </ChakraProvider> :<p>hii</p>
}
            </AuthenticatedTemplate>

            <UnauthenticatedTemplate>
            <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
               
               
        <div class="shadow-lg p-3 mb-5 bg-white rounded"
        style={{border:'1px solid black',
        padding: '10px', display :'inline-block'}} >
            
                <br/>
                <h5 className="card-title">Use Single-Sign-On to GET STARTED</h5>
                <br/>
                <br/>
                <SignInButton />
                </div>
                
               
            </UnauthenticatedTemplate>
       </Box>
    );
};

export default function App() {
    return (
        <PageLayout>
            <MainContent />
        </PageLayout>


    );
}
