import React from 'react';

import Header from './Header';
import Media from './Media';

function Home()
{
    const [receivedData, setReceivedData]=React.useState([])
    const [mediaType, setMediaType]=React.useState("photos")
    return(
        <div>
            <Header receivedData={receivedData} setReceivedData={setReceivedData}  mediaType={mediaType} setMediaType={setMediaType}/>
            <Media  receivedData={receivedData} setReceivedData={setReceivedData} mediaType={mediaType} setMediaType={setMediaType}/> 
        </div>
       )
}
export default Home;