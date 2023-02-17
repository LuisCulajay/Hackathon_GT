import React from "react";

import Barra from "../../../Barra/Barra";
import { Grid, Card, Text, Button, Row, Col, Link } from "@nextui-org/react";
import "./QueImpuestosPagar.css";
import logo from "../../../../assets/yasekomo-7.jpg";
import Footer from "../../../Footer/Footer";

function PagarImpuestos() {
  return (
    <>
      <Barra />
      <Text
        h1
        size={60}
        css={{ textGradient: "45deg, $cyan500 -20%, $blue600 50%" }}
        weight="bold"
      >
        Sobre los impuestos
      </Text>
      <div class="wrapper">
        <div class="sidebar">
          <Card4 />
        </div>
        <div class="main">
          <Grid>
            <Card css={{ width: "fit-content" }}>
              <Card.Body className="carta">
                <h2>
                  <b>¿ Por qué pagamos impuestos ?</b>
                </h2>
                <Text css={{ width: "95%" }}>
                  El estado debe garantizar la vida, libertad, justicia,
                  seguridad, paz y desarrollo para todos sus habitantes, por
                  ello se recaudan tributos monetarios pagados por la población.
                </Text>
                <b>Principios constitucionales de tributación</b>
                <ul>
                  <li>Solo el congreso puede decretar impuestos</li>
                  <li>
                    Se debe contar con un sistema tributario justo y equitativo
                  </li>
                  <li>Se prohíbe la múltiple tributación</li>
                </ul>
              </Card.Body>
            </Card>
            <Card
              css={{
                $$cardColor: "$colors$warning",
                padding: "$0",
                marginTop: "$10",
                width: "fit-content",
              }}
            >
              <Card.Body css={{ padding: "$5" }}>
                <b>¡ Importante !</b> El código tributario indica qué tributos
                exige el estado a la población
              </Card.Body>
            </Card>
            <Card css={{ width: "80%", marginTop: "$10" }}>
              <Card.Body className="carta">
                <h2>
                  <b>¿ A quién le pago impuestos ?</b>
                </h2>
                <Text css={{ width: "95%" }}>
                  <b>Superintendencia de Administración Tributaria (SAT)</b>{" "}
                  Tiene a su cargo recaudar alrededor de 13 impuestos diferentes
                </Text>
                <h3>Algunos de los impuestos son</h3>
                <ul>
                  <li>Impuesto sobre la renta (ISR)</li>
                  <li>Impuesto al valor agregado (IVA)</li>
                  <li>Impuesto único sobre inmuebles (IUSI)</li>
                  <li>
                    Impuesto a la distribución de petróleo crudo y derivados
                  </li>
                  <li>Impuesto sobre la distribución de bebidas alcohólicas</li>
                  <li>Impuesto al tabaco y sus productos</li>
                  <li>Impuesto a la distribución de cemento</li>
                  <li>Impuesto de solidaridad</li>
                  <li>Impuesto sobre herencias, legados y donaciones</li>
                  <li>Impuesto sobre la circulación</li>
                </ul>
                <Text css={{ width: "95%" }}>
                  Pudes ver más en{" "}
                  <Link href="https://portal.sat.gob.gt/portal/">
                    <b>Portal SAT</b>
                  </Link>
                </Text>
              </Card.Body>
            </Card>
          </Grid>
        </div>
      </div>
      <Footer />
    </>
  );
}

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
            Recuerda que puedes pargar tus impuestos desde tu banca virtual.
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

export default PagarImpuestos;
