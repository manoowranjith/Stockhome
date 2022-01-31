import Search from './Search';

function Header(props)
{    
    return(
        <div>
            <div className="header">
                <Search receivedData={props.receivedData} setReceivedData={props.setReceivedData}  mediaType={props.mediaType} setMediaType={props.setMediaType} />
            </div>
        </div>
        
    )
}
export default Header;