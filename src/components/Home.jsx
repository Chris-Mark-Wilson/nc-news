import { ArticlesList } from "./ArticlesList"
import { Container } from "./Container"

export const Home=({setArticleId})=>{
    return(
          <section className="welcome">
            <h1>NC-News</h1>
            <h4>Everything you wanted to know but were too afraid to ask
                <ArticlesList setArticle_id={setArticleId}/>

            </h4>
        </section>


    )
}