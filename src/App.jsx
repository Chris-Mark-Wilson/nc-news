import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Container } from './components/Container';
import { Home } from './components/Home';
import { ArticlesList } from './components/ArticlesList';

import { Article } from './components/Article';
import { Footer } from './components/Footer';

function App() {


const[article_id,setArticle_id]=useState(0)

  return (
    <>
    <Header/>
  <Container>   <Routes>
           <Route path="/" element={<Home setArticleId={setArticle_id}/>} />
           <Route path="/Articles" element={<ArticlesList setArticle_id={setArticle_id}/>}/>
           <Route path="/Articles/:article_id" element={<Article />}/> 


      </Routes>
      </Container>
 <Footer/>
    </>
  )
}

export default App
