function Navbar()
{

    return(
        <div className="nav">
            <div className="brand">
                <h1 className="logo-brand"><span className="logo">{"//."}</span> <span className="brand-name">Stockhome</span></h1>
            </div>
            <a href="https://www.buymeacoffee.com/ajmanoowo">
            <div className="donate">
                    <button className="btn-donate"><span className="heart material-icons-outlined">favorite</span></button>
            </div>
            </a>
        </div>
    )
}
export default Navbar;