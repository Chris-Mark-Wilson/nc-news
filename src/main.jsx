import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { UserProvider} from'./contexts/user-context.jsx'
import { ArticleProvider } from './contexts/article-context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
        <BrowserRouter>
        <UserProvider>
          <ArticleProvider>
    <App />
    </ArticleProvider>
    </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
