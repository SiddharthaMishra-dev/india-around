import React from 'react'
function Article(props){
   return <>
    {props.articles.map((singleItem,index)=>{
        return (
            <div key={index} className="article">
                <div className="lside">
                    <img src={singleItem.urlToImage} alt="" />
                </div>
                <div className="rside">
                    <h2>{singleItem.description}</h2>
                    <h3><a href={singleItem.url}>Read more</a></h3>
                    <p>{singleItem.author}</p>
                </div>
            </div>
        )
    })}
   </>
}
export default Article;