import React from "react";
import { Button, Card, Text, Row } from "@nextui-org/react";
import { Link } from "react-router-dom";
import Barra from "../../../Barra/Barra";
import Footer from "../../../Footer/Footer";
import "./estilo.css";

function QueImpuestosPagar() {
  
  return (
    <>
      <Barra />
      <div id="myCarousel" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="0"
            class="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#myCarousel"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#5D6D7E" />
            </svg>
            <div class="container">
              <div class="carousel-caption text-start">
                <h1>Impuestos directos.</h1>
                <p>Impuesto directamente al patrimonio, ingresos o rentas.</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#5D6D7E" />
            </svg>
            <div class="container">
              <div class="carousel-caption">
                <h1>Impuestos indirectos</h1>
                <p>Impuesto al consumo de bienes y servicios</p>
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <svg
              class="bd-placeholder-img"
              width="100%"
              height="100%"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
              preserveAspectRatio="xMidYMid slice"
              focusable="false"
            >
              <rect width="100%" height="100%" fill="#5D6D7E" />
            </svg>
            <div class="container">
              <div class="carousel-caption text-end">
                <h1>Principios Constitucionales de la Tributación</h1>
                <p>
                  El Código Tributario indica que tributos son los pagos que el
                  Estado exige a la población, con el objetivo de obtener
                  recursos para el cumplimiento de sus fines y deberes. Son
                  tributos los impuestos, arbitrios, contribuciones especiales y
                  contribuciones por mejoras.
                </p>
                <Link href="https://portal.sat.gob.gt/portal/">
                  <Button solid color="primary">
                    Ir al portal
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#myCarousel"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>

      <h1>Impuestos directos</h1>
      <div class="container marketing">
        <div class="row">
          <div class="col-lg-4">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Impuesto sobre la circulación</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Pagado por la circulación de vehículos terrestres, marítimos y
                  aéreos
                </Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
          <div class="col-lg-4">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Impuesto sobre la renta (ISR)</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Pagado en base a los ingresos que reciben las personas
                  individuales residentes
                </Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
          <div class="col-lg-4 mt-2">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Impuesto único sobre inmuebles (IUSI)</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>Pagado sobre todo inmueble urbano o rural</Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
        </div>
        <div class="row mt-2">
          <div class="col-lg-4">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Impuesto sobre herencias, legados y donaciones</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Pagado por beneficiarios de herencias, legados y donaciones
                </Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
          <div class="col-lg-4">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Impuesto de solidaridad</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Pagado por personas afiliadas al Régimen Sobre Utilidades del
                  ISR y cumplan condiciones específicas.
                </Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
        </div>
      </div>
      <h1>Impuestos indirectos</h1>
      <div class="container marketing">
        <div class="row">
          <div class="col-lg-4">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Impuesto al valor agregado (IVA)</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Pagado por toda persona que compra un bien o adquiere un
                  servicio
                </Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
          <div class="col-lg-4">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>
                  Impuesto a la distribución de petróleo crudo y derivados
                </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  El valor del impuesto varía según el tipo de petróleo y su
                  peso
                </Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
          <div class="col-lg-4 mt-2">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>
                  Impuesto sobre la distribución de bebidas alcohólicas
                </Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>Bebidas alcohólicas, fermentadas, vinos y sidras.</Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
        </div>
        <div class="row">
          <div class="col-lg-4">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Impuesto al tabaco y sus productos</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Recae sobre la siembra, cultivo, tránsito, exportación e
                  importación
                </Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
          <div class="col-lg-4">
            <Card css={{ mw: "330px" }}>
              <Card.Header>
                <Text b>Impuesto a la distribución de cemento</Text>
              </Card.Header>
              <Card.Divider />
              <Card.Body css={{ py: "$10" }}>
                <Text>
                  Pagado por los fabricantes e importadores del producto.
                </Text>
              </Card.Body>
              <Card.Divider />
            </Card>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default QueImpuestosPagar;
