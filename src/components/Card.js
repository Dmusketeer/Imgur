
import React from 'react';
import PostData from './PostData';
import Post from './Post';
import "./Card.css"

function Card() {
    return (
        <>
            <div className="post-container">
                {PostData.map((val) => {
                    return (
                        <Post
                            className="postcard"
                            imgsrc={val.imgsrc}
                            title={val.title}
                            like={val.like}
                            comment={val.comment}
                            view={val.view}
                        />
                    )
                })}
            </div>
        </>
    )
}

export default Card;
