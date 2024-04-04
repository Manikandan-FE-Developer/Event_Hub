import { Fragment } from "react";
import Shows from "../components/Shows";
import Events from "../components/Events";

export default function Home(){
    return <Fragment>

        <div className="home">
            <h1>Discover Exciting Events Happening<br/> Near You - Stay Tuned for Updates!</h1>
            <p>"Embark on a journey of discovery with Event Hub.<br/> Explore, experience, and embrace the endless possibilities of local events nearby."</p>
        </div>

        <div className="showsAndEvents">
            <div className="Recommended">
                <h1>Recommended shows <i class="fa fa-arrow-right"></i></h1>
                <p>See all</p>
            </div>
            <div className="container mt-5">
                <div className="row shows">
                    <Shows/>
                </div>
            </div><br/>

            <div className="Upcoming">
                <h1>Upcoming events <i class="fa fa-arrow-right"></i></h1>
                <p>See all</p>
            </div>
            <div className="row events">
                <Events/>
            </div>
        </div>
    </Fragment>
}