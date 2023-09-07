import { Link } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { UserContext } from "../contexts/user-context";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { fetchAllTopics } from "../utils/api";

export const Header = () => {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetchAllTopics().then((topics) => {
      setTopics(topics);
    })
    .catch(err=>{
      alert(err)
    })
  }, []);

  const { user } = useContext(UserContext);
  return (
    <section className="header">
      <section className="nav-bar">
      <Navbar expand="lg" className="bg-body-tertiary">
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
      <p className="logged-in-as">Logged in as:{user}</p>
    </section>
  );
};
