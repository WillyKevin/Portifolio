import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Tela-Login-4.jpeg";
import projImg2 from "../assets/img/Tela-Login5.png";
import projImg3 from "../assets/img/Tela-Login-3.png";
import projImg4 from "../assets/img/Tela-Login1.png";
import projImg5 from "../assets/img/Tela-Login-2.png";
import projImg6 from "../assets/img/Tela-Login6.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Exodus",
      description: "Bootstrap / Angular",
      imgUrl: projImg1,
    },
    {
      title: "Gamer Trade",
      description: "HTML / CSS / JS",
      imgUrl: projImg2,
    },
    {
      title: "React Login",
      description: "ReactJS",
      imgUrl: projImg3,
    },
    {
      title: "League Of Legends",
      description: "HTML / CSS / JS",
      imgUrl: projImg4,
    },
    {
      title: "Tele Agro",
      description: "Bootstrap / Angular",
      imgUrl: projImg5,
    },
    {
      title: "World Games",
      description: "HTML / CSS / JS",
      imgUrl: projImg6,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projetos</h2>
                <p>Aqui está um pouco dos meus projetos que desenvolvi ao longo de 3 anos na área da
                  tecnológia, incluindo projetos pessoais, de faculdade, e para empresas dos mais 
                  variados ramos do mercado em geral.
                </p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="section">
                      <p>Mais Projetos Em Breve . . . </p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Mais Projetos Em Breve . . . </p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
