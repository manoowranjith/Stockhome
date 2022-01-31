import React from "react";
import axios from 'axios';
import swal from 'sweetalert';
import { useDebouncedCallback } from 'use-debounce';
function Search(props)
{
    const [searched, setSearched]=React.useState("")
    const [suggestions, setSuggestions]=React.useState([])
    const [queryData, setQueryData]=React.useState("")
    // const [receivedData, setReceivedData]=React.useState("")

    React.useEffect(
        ()=>
        {
            // alert("stopped typing huh?")
            if(searched === "")
            {
                console.log("Triggered empty")
                setSuggestions([])
            }

            else
            {
                var options = {
                    method: 'GET',
                    url: 'https://stockhome-api.herokuapp.com/search/'+searched,
                }

                axios.request(options).then(function (response) 
                {
                    setSuggestions(response.data.suggestions.slice(0,6))
                    // console.log(response.data.suggestions.slice(0,6))
                })
                .catch(function (error) {
                    console.error(error);
                })
            }      
        
        },[searched]
    )

    React.useEffect(
        ()=>{
            var options={}
            if(queryData === "")
            {
                // mediaType={mediaType} setMediaType={setMediaType}
                if(props.mediaType === "photos")
                {
                    options = {
                        method: 'GET',
                        url: 'https://pexelsdimasv1.p.rapidapi.com/v1/curated',
                        params: {locale: 'en-US', per_page: '15', page: '1'},
                        headers: {
                        authorization: 'pexels API KEY',
                        'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com',
                        'x-rapidapi-key': 'Rapid API KEY'
                        }
                    }
                }

                else if(props.mediaType === "videos")
                {
                     options = 
                    {
                        method: 'GET',
                        url: 'https://pexelsdimasv1.p.rapidapi.com/videos/popular',
                        params: {per_page: '15', page: '1'},
                        headers: {
                          authorization: 'PEXELS AP KEY',
                          'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com',
                          'x-rapidapi-key': 'Rapid API KEY'
                        }
                      };
                }
            }
            else
            {
                if(props.mediaType === "photos")
                {
                    options =
                    {
                        method: 'GET',
                        url: 'https://pexelsdimasv1.p.rapidapi.com/v1/search',
                        params: {query: queryData, locale: 'en-US', per_page: '15', page: '1'},
                        headers: {
                          authorization: 'pexels API KEY',
                          'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com',
                          'x-rapidapi-key': '4cc77eccd7msh34b0a31fd027ad3p1a8060jsnc9a8128cf367'
                        }
                    }
                }
                else if(props.mediaType === "videos")
                {
                     options = 
                    {
                        method: 'GET',
                        url: 'https://pexelsdimasv1.p.rapidapi.com/videos/search',
                        params: {query: queryData, per_page: '15', page: '1'},
                        headers: {
                          authorization: 'PEXELS API KEY',
                          'x-rapidapi-host': 'PexelsdimasV1.p.rapidapi.com',
                          'x-rapidapi-key': 'RAPID API KEY'
                        }
                      };
                }

            }
            
            axios.request(options).then(function (response) {
                console.log(response);
                // props.setReceivedData( oldArray => [...oldArray, response.data])
                props.setReceivedData([response.data])
                // props.setReceivedData([response.data])
            }).catch(function (error) {
                // alert("Hello")
                // swal("Here's the title!", "...and here's the text!");
                swal({
                    title: "API service unavailable",
                    icon: "error",
                    buttons: false,
                    className: "sweet-alert",
                  });
                console.error(error);
            });
    },[queryData, props.mediaType])


    const debounced = useDebouncedCallback(
        (value) => {
            setSearched(value);
        },1000  
      );
    
    function fetchData(value)
    {
       if(value.key === "Enter")
       {    
           setQueryData(searched)
       }
    }

    
    return(
    <div>
        <div className="search">
            <h1 className="phrase">Stunning free images & royalty free stock</h1>
            <p className="phrase-1">Over 2.5 million+ high quality stock images, videos  </p>
            <input onChange={(e)=>{debounced(e.target.value)}} onKeyDown={(e)=>{fetchData(e)}} autoComplete="off" spellCheck="false" id="search-bar" className="search-bar" type="search" placeholder="Search ..."/>
            <div id="suggestions">
                {
                    suggestions.map((element, index)=>{
                        return(
                            <h3 onClick={()=>{document.getElementById('search-bar').value=element; setQueryData(element); setSearched(element)}} key={"suggestions-"+index.toString()} className="suggest-item">{element}</h3>
                        )
                    })
                }
            </div>
        </div>
    </div>
    )
}
export default Search;