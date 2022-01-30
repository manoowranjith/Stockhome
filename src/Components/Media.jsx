import React from "react";
// import axios from "axios";

function Media(props)
{
    const [renderMedia, setRenderMedia]=React.useState("photos")

    React.useEffect(()=>{
        // console.log(props.mediaType)
        if(renderMedia!==props.mediaType)
        {
            // console.log(renderMedia)
            setRenderMedia(props.mediaType)
        }
        // console.log(props.receivedData)
    },[props.receivedData])

    function colorSwap(button)
    {
        document.getElementById(button).style.backgroundColor="rgb(85, 250, 168)"
        document.getElementById(button).style.border="none"

        var activatebutton=""
        if(button === "photos")
        {
            activatebutton="videos"
        }
        else
        {
            activatebutton="photos"
        }

        document.getElementById(activatebutton).style.backgroundColor="transparent"
        document.getElementById(activatebutton).style.border="1px solid black"
    }
    return(
        <div id="media">
            <div className="media-type">
                <div>
                    <button onClick={()=>{props.setMediaType("photos"); colorSwap("photos")}} id="photos" className="media-button photo">Photos</button>
                    <div className="seperator">|</div>
                    <button onClick={()=>{props.setMediaType("videos"); colorSwap("videos")}} id="videos" className="media-button video">Videos</button>
                </div>
            </div>
            {/* <h1>{props.mediaType}</h1> */}
             {/* <h1>{props.mediaType}</h1> */}
             {/* <h1>{props.receivedData.length}</h1> */}
             {/* {console.log(props.mediaType)} */}
             {/* {console.log(renderMedia)} */}
             {
                       renderMedia === props.mediaType && props.mediaType!=="videos" ? (
                        props.receivedData.map(
                            (element, index)=>
                            {
                                return(
                                   <div  className="media-show">
                                       {element.photos.map(source=>{
                                       return(
                                           <div>   
                                               {/* {console.log(source.src)} */}
                                               <img className="media-content" src={source.src.portrait} alt="" srcSet="" />
                                           </div>
                                           )
                                       })}
                                    </div>
                                )
                            })
                      ) : (
                        // console.log("huh")
                        // <h1>videos huh? </h1>
                        // console.log(props.receivedData)
                        // props.receivedData.map(
                        //     (element, index)=>
                        //     {
                        //        console.log(element)
                        //     }
                        // )
                        renderMedia === props.mediaType && props.mediaType!=="photos" ? (
                            props.receivedData.map(
                                (element, index)=>
                                {
                                    return(
                                        <div  className="media-show">
                                            {element.videos.map(source=>{
                                            return(
                                                <div>   
                                                   { console.log(source)}
                                                    <img className="media-content" src={source.image} alt="" srcSet="" />
                                                </div>
                                                )
                                            })}
                                         </div>
                                     )
                                }
                            )
                        ):(
                            console.log("will it hit me?")
                        )

                      )
                // console.log(renderMedia)
                 
             }
        </div>
    )
}
export default Media;