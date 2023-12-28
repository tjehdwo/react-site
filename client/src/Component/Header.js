import React from 'react';
import {Navbar,Nav, Container,NavDropdown} from 'react-bootstrap';
import {Link} from 'react-router-dom';

export default function Header () {
    // bg = background 배경색
    // expand = 화면 크기가 큰 곳에서는
    // 네비게이션이 펼쳐지고 모바일에서는 네비게이션이 축소되게함
    // Navbar.Collapse 화면이 모바일로 작아졌을 때를 대비해서 감싸줌
    // aria-controls="basic-navbar-nav"
    return 
    <Navbar bg="light" expand="lg">
        <Container>
            <Navbar.Brand as={Link} to="/">
                로고
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse>
                <Nav.Link as={Link} to="/">
                    Home
                </Nav.Link>
                <Nav.Link as={Link} to="/movie">
                    Movies
                </Nav.Link>
                <Nav.Link as={Link} to="/todos">
                    Todo List
                </Nav.Link>

                <NavDropdown title="Games" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/numberGuessingGame">
                        Number Guessing Game
                    </NavDropdown.Item>
                </NavDropdown>

                <NavDropdown title="Games" id="basic-nav-dropdown">
                    <NavDropdown.Item as={Link} to="/quiz">
                        Quiz
                    </NavDropdown.Item>
                </NavDropdown>

            </Navbar.Collapse>
        </Container>
    </Navbar>;
}