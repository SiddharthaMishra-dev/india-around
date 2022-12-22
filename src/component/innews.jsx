import React from 'react'
import { useEffect,useState } from 'react';
import keys from '../keys'
import Article from './article';
function Innews(){
    const [article,setArticle]=useState([])
    async function getAPI(){
        const response=await fetch("https://newsapi.org/v2/top-headlines?country=in&apiKey="+keys.value);
        const result=await response.json();
        setArticle(result.articles);
    }
   useEffect(()=>{
    getAPI()
   },[])
    return (
        <Article articles={article} />
    )
}

export default Innews;