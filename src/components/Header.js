export default function Header() {

    return (
        <nav className="navbar row">
            <div className="col-12 col-md-2 navLogo">
                <div className="navbar-brand">
                    <p>BookUsNow</p>
                </div>
                <div className="icons">
                    <i className="fa fa-search"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-user"></i>
                </div>
            </div>
            <div className="col-12 col-md-2 mt-4 mt-md-0 text-center navCat">
                <button className="categories"><i class="fa fa-bars"></i> Categories</button>
            </div>
            <div className="col-12 col-md-5 mt-2 mt-md-0 navSearch">
                <div className="input-group">
                    <input type="text" placeholder="Enter Product Name ..."/>
                    <i className="fa fa-search"></i>
                </div>
            </div>
            <div className="col-12 col-md-2 mt-4 mt-md-0 text-center">
                <div className="navFav">
                    <i className="fa fa-heart"></i>
                    <span className="ml-1">Favorites</span>
                </div>
            </div>
            <div className="col-12 col-md-1 mt-4 mt-md-0 text-center navSign">
                <button className="signIn">Sign In</button>
            </div>
            <div className="col-12 col-md-2 mt-4 mt-md-0 text-center d-flex align-items-center justify-content-center">
                <div className="navLoc">
                    <i className="fa fa-map-marker mr-1"></i>
                    <span className="ml-1"> Mumbai, India <i class="fa fa-chevron-right ml-1"></i></span>
                </div>
            </div>
            <div className="col-12 col-md-9 mt-4 mt-md-0 text-center navMenu">
                <ul className="list-unstyled m-0" id="menu">
                    <li>Live Shows</li>
                    <li>Streams</li>
                    <li>Movies</li>
                    <li>Plays</li>
                    <li>Events</li>
                    <li>Sports</li>
                    <li>Activities</li>
                </ul>
            </div>
        </nav>
    );
}
