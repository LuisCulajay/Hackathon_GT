import React from "react";

import Barra from "../../Barra/Barra";
import { Grid, Card, Text, Button, Row, Col, Link } from "@nextui-org/react";
import logo from "../../../assets/yasekomo-7.jpg";
import Footer from "../../Footer/Footer";




function PlanRetiro ()  {
  
  
  return (
    <div>
      <Barra/>
      <br></br>
      <div class="wrapper">
        <div class='main'>
        <Card css={{ width: "fit-content" }}>
              <Card.Body className="carta">
                <h2>
                  <b>¿ Por qué es importante un plan de retiro ?</b>
                </h2>
                <Text css={{ width: "95%" }}>
                Un plan de retiro es importante porque ayuda a las personas a prepararse financieramente para la jubilación. La jubilación es un momento en la vida en el que las personas dejan de trabajar y dependen de sus ahorros y pensiones para cubrir sus gastos diarios
                </Text>
                <b>Razones por las cuales tener un plan de retiro</b>
                <ul >
                  <li>Ahorrar adecuadamente: Un plan de retiro te ayudará a ahorrar dinero de manera regular para tu jubilación. Esto es importante porque cuanto más pronto comiences a ahorrar, más tiempo tendrás para acumular fondos y más dinero tendrás para gastar durante tu jubilación.</li>
                  <li>Establecer objetivos: Un plan de retiro te permite establecer objetivos claros sobre cuánto dinero necesitarás para tu jubilación y cómo llegar a esa cantidad.</li>
                  <li>Reducir el estrés financiero: Un plan de retiro te ayuda a reducir el estrés financiero que puede surgir cuando te acercas a la edad de jubilación y te das cuenta de que no has ahorrado lo suficiente.</li>
                  <li>Aprovechar los beneficios fiscales: Los planes de retiro pueden ofrecer beneficios fiscales significativos, como reducir tus impuestos actuales y permitir que tus inversiones crezcan libre de impuestos.</li>
                </ul>
              </Card.Body>
            </Card>
        </div>
        <div class="sidebar">
          <Card4 />
        </div>
        </div>
    </div>
  );
};
  

const Card4 = () => (
  <Card css={{ w: "90%", h: "40vh", marginLeft: "1rem" }}>
    <Card.Body css={{ p: 0 }}>
      <Card.Image
        src={logo}
        width="100%"
        height="100%"
        objectFit="cover"
        alt="Card example background"
      />
    </Card.Body>
    <Card.Footer
      isBlurred
      css={{
        position: "absolute",
        bgBlur: "#ffffff66",
        borderTop: "$borderWeights$light solid rgba(255, 255, 255, 0.2)",
        bottom: 0,
        zIndex: 1,
        w: "92%",
      }}
    >
      <Row className="btnO">
        <Col>
          <Text color="#000" size={12}>
            Puedes crear una cuenta de Ahorra o nunca en tu Banca Virtual
          </Text>
        </Col>
        <Col>
          <Row justify="flex-end">
            <Link href="https://www.gtc.com.gt">
              <Button flat auto rounded href="https://www.gtc.com.gt">
                <Text
                  css={{ color: "inherit" }}
                  size={12}
                  weight="bold"
                  transform="uppercase"
                >
                  Ir a mi banca
                </Text>
              </Button>
            </Link>
          </Row>
        </Col>
      </Row>
    </Card.Footer>
  </Card>
);


export default PlanRetiro;

  