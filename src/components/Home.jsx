import { ArticlesList } from "./ArticlesList"


export const Home=({setArticleId})=>{
    return(
        <>
          <section className="article">
            <h1>NC-News</h1>
            <h4>Everything you wanted to know but were too afraid to ask
            </h4>
<img src='/chrishillnorthcoders.jpg' className="ncImage"></img>
        </section>
                <ArticlesList setArticle_id={setArticleId}/>
                </>

    )
}