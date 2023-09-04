import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Container } from './components/Container';
import { Home } from './components/Home';
import { ArticlesList } from './components/ArticlesList';
import { useContext } from 'react';
import { ArticleContext } from './contexts/article-context';
import { Article } from './components/Article';
import { Footer } from './components/Footer';

function App() {

const {article_id}=useContext(ArticleContext)
  return (
    <>
    <Header/>
  <Container>   <Routes>
           <Route path="/" element={<Home />} />
           <Route path="/Articles" element={<ArticlesList/>}/>
           <Route path="/Articles/Article" element={<Article article_id={article_id}/>}/>


      </Routes>
      </Container>
 <Footer/>
    </>
  )
}

export default App
