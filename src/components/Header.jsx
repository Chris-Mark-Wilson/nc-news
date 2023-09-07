import { Link } from 'react-router-dom';
import { useContext, useState,useEffect } from 'react';
import { UserContext } from '../contexts/user-context';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { fetchAllTopics } from '../utils/api';


export const Header=()=>{
  const[topics,setTopics]=useState([])

useEffect(()=>{
fetchAllTopics()
.then((topics)=>{
  setTopics(topics)
})
},[])
    // useEffect to fetch topics

    const {user} = useContext(UserContext)
    return(
      <>
        <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="#home">NC News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
             
              <NavDropdown title="
              Topics" id="basic-nav-dropdown">
                {topics.map(({slug})=>{
                  return(
                    <NavDropdown.Item key={slug} href={`/articles?topic=${slug}`}>
                   {slug}
                  </NavDropdown.Item>
                  )
                })}
                {/*worry about this later*/}
                {/* <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <p className='logged-in-as'>Logged in as:{user}</p>
      </>
    )
}

{/* <nav>
<div className="nav-buttons">
<Link to="/"><button className="nav-button">Home</button></Link>

  </div>

</nav> */}