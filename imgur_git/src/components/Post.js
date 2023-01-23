import React from 'react';
import './Post.css';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';


function Post(prop) {
    return (
        <>
            <div className="card">
                <img className="card-img-top card-img" src={prop.imgsrc} alt="Cardimg cap" />
                <div className="card-body">
                    <h5 className="card-title">{prop.title}</h5>
                    <div className="cardstatus">
                        <span className="cardst like "> Like-{prop.like}  </span>
                        <span className="cardst comment"> Comment-{prop.comment}  </span>
                        <span className="cardst view"> View-{prop.view} </span>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Post;



