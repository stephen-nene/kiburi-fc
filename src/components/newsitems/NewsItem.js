import React from "react";
import manu from '../app/manu.jpg';
import gunners from '../app/gunners.jpg';

function NewsItem(){
    return (
        <div className="row">
      <div className="col-sm-6 mb-3 mb-sm-0">
           <div className="man-u card" style={{width: "18rem"}}>
           <img src={manu} className="card-img-top" alt="..."/>
           <div className="card-body">
           <h5 className="card-title">Team Kubwa Hiii I Say</h5>
            <p className="card-text">Manchester United Football Club, commonly referred to as Man United, or simply United, is a professional football club based in Old Trafford, Greater Manchester, England. The club competes in the Premier League, the top division in the English</p>
            <a href="#home" className="btn btn-primary">Going somewhere</a>
          </div>
          </div>
          </div>
          <div className="man-u card" style={{width: "18rem"}}>
       <img src={gunners} className="card-img-top" alt="..."/>
      <div className="card-body">
      <h5 className="card-title">Team Ndogo Hiii I Say</h5>
      <p className="card-text">Arsenal Football Club, commonly referred to as Arsenal, is a professional football club based in Islington, London, England. Arsenal plays in the Premier League, the top flight of English football.</p>
      <a href="#home" className="btn btn-primary">Not going Anywhere</a>
  </div>
</div>


        </div>
       

    )

}

export default NewsItem;