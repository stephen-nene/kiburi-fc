import React from "react";
import NewsItem from "../newsitems/NewsItem";

function Home (){

    return(
       <div className="container mt-4">
<NewsItem/><NewsItem/>  <div className="row">
            <NewsItem/>
            </div>           

        </div>
    )

}
 export default Home;