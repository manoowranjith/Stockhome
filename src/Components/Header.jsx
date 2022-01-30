import Search from './Search';

function Header(props)
{    
    return(
        <div>
            <div className="header">
                <div className="nav">
                    <div className="brand">
                        <h1 className="logo-brand"><span className="logo">{"//."}</span> <span className="brand-name">Stockhome</span></h1>
                    </div>
                    <div className="donate">
                            <button className="btn-donate"><span className="material-icons-outlined">volunteer_activism</span></button>
                    </div>
                </div>
                <Search receivedData={props.receivedData} setReceivedData={props.setReceivedData}  mediaType={props.mediaType} setMediaType={props.setMediaType} />
            </div>
        </div>
        
    )
}
export default Header;