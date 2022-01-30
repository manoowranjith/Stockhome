import './App.css';
import React from 'react';
import Header from './Components/Header';
import Media from './Components/Media';
function App() {
  const [receivedData, setReceivedData]=React.useState([])
  const [mediaType, setMediaType]=React.useState("photos")
  return (
    <div className="App">
      <Header receivedData={receivedData} setReceivedData={setReceivedData}  mediaType={mediaType} setMediaType={setMediaType}/>
      <Media  receivedData={receivedData} setReceivedData={setReceivedData} mediaType={mediaType} setMediaType={setMediaType}/>
    </div>
  );
}

export default App;
