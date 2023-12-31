import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import './Wide-screen.css'

import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { MainContainer } from './components/Container';
import { Home } from './components/Home';
import { ArticlesList } from './components/ArticlesList';

import { Article } from './components/Article';
import { Footer } from './components/Footer';

function App() {


const[article_id,setArticle_id]=useState(1)

  return (
    <>
    <Header/>
  {/* <MainContainer>    */}
    <Routes>
           <Route path="/" element={<Home setArticleId={setArticle_id}/>} />
           <Route path="/Articles" element={<ArticlesList article_id={article_id} setArticle_id={setArticle_id}/>}/>
           <Route path="/Articles/:article_id" element={<Article />}/> 
     


      </Routes>
      {/* </MainContainer> */}
 <Footer/>
    </>
  )
}

export default App
