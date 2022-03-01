import React from "react";
import axios from "axios";
import {useParams, useNavigate} from "react-router-dom";

function Details()
{
    const [mediaSource, setMediaSource]=React.useState([])
    const params=useParams();
    const navigate = useNavigate();

    React.useEffect(()=>{

        var options={}
        if(params.type === "photos")
        {
            options = {
                method: 'GET',
                url: 'https://pexelsdimasv1.p.rapidapi.com/v1/'+params.type+'/'+params.id,
                headers: {
                    authorization: 'pexels API KEY',
                    'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com',
                    'x-rapidapi-key': 'rapid API KEY'
                }
            };
        }
        else
        {
            options = {
                method: 'GET',  
                url: 'https://pexelsdimasv1.p.rapidapi.com/'+params.type+'/'+params.type+'/'+params.id,
                headers: {
                    authorization: 'pexels API KEY',
                    'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com',
                    'x-rapidapi-key': 'rapid API KEY'
                }
            };
        }

        axios.request(options).then(function (response) {
            var schema={}
            if(params.type === "photos")
            {
                 schema={
                    photographBy:response.data.photographer,
                    photgrapherLink:response.data.photographer_url,
                    image:response.data.src.medium,
                    original:response.data.src.original,
                    color:response.data.avg_color
                }
            }
            else if(params.type === "videos")
            {
                 schema={
                    photographBy:response.data.user.name,
                    photgrapherLink:response.data.user.url,
                    image:response.data.video_pictures[0].picture,
                    original:response.data.video_files[0].link,
                    color:response.data.avg_color,
                    duration:"Duration "+response.data.duration+"s"
                }
            }

            setMediaSource([schema])
        }).catch(function (error) {
            console.error(error);
        });
    },[])
    return(
        <div className="mediaDetails">
            <div onClick={()=>{navigate('/Stockhome')}} class="back material-icons-outlined">arrow_back</div>
            <div id="mediaInfo">
            {
                mediaSource.map((element)=>{
                    return(

                        <div>
                            <div className="mediaCard">
                                <a href={element.photgrapherLink} target="_blank" id="photoBy" href={element.photgrapherLink} target="_blank">
                                    <div id="dp"><span class=" person material-icons-outlined">person</span></div>
                                    <h3 className="ceatorName" >{element.photographBy}</h3>
                                </a>
                                <a href={element.original} target="_blank" className="original"><span class=" view material-icons-outlined">visibility</span><h3>View Original</h3></a>
                            </div>
                            <div className="imageMedium">
                                <img src={element.image} alt="" />
                            </div>
                               <h4 className="duration">{element.duration}</h4>
                        </div>
                    )
                })
            }
            </div>
        </div>
         )
}
export default Details;
