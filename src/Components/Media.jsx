import React from "react";
import { useNavigate } from 'react-router-dom';

function Media(props)
{
    const [renderMedia, setRenderMedia]=React.useState("photos")
    const navigate = useNavigate();

    React.useEffect(()=>{
        if(renderMedia!==props.mediaType)
        {
            setRenderMedia(props.mediaType)
        }
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

    function routing(type,id)
    {
       
        navigate('/'+type+'/'+id.toString());
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
                                               {/* {console.log(source)} */}
                                               <img onClick={()=>{routing("photos",source.id)}} className="media-content" src={source.src.portrait} alt="" srcSet="" />
                                           </div>
                                           )
                                       })}
                                    </div>
                                )
                            })
                      ) : (
                        renderMedia === props.mediaType && props.mediaType!=="photos" ? (
                            props.receivedData.map(
                                (element, index)=>
                                {
                                    return(
                                        <div  className="media-show">
                                            {element.videos.map(source=>{
                                            return(
                                                <div>   
                                                    <img  onClick={()=>{routing("videos",source.id)}} className="media-content" src={source.image} alt="" srcSet="" />
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
                 
             }
        </div>
    )
}
export default Media;
