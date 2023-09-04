import { createContext, useState } from "react";


export const ArticleContext = createContext();

export const ArticleProvider = ({children}) => {
    const [article_id, setArticle_id] = useState(0)
    return (
        <ArticleContext.Provider value={{article_id,setArticle_id}}>
        {children}
        </ArticleContext.Provider>
    )
}