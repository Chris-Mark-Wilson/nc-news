import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user-context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { fetchAllTopics } from "../utils/api";
import usePrefersColorScheme from 'use-prefers-color-scheme'

export const Header = () => {
  const [topics, setTopics] = useState([]);
  const[mode,setMode]=useState("dark")
  const { user } = useContext(UserContext);

const  theme=usePrefersColorScheme()
  useEffect(() => {
    fetchAllTopics().then((topics) => {
      setTopics(topics);
    })
    .catch(err=>{
      alert(err)
    })
    setMode(theme)


  }, []);


  return (
    <section className="header">
      <section className="nav-bar">
      <Navbar expand="lg" bg={mode} data-bs-theme={mode}>
        <Container>
          <Navbar.Brand href="#home">NC News</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>

              <NavDropdown
                title="
              Topics"
                id="basic-nav-dropdown"
              >
                {topics.map(({ slug }) => {
                  return (
                    <NavDropdown.Item
                      key={slug}
                      href={`/articles?topic=${slug}`}
                    >
                      {slug}
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </section>
      <p className="logged-in-as">Posting as:{user}</p>
    </section>
  );
};
