import React from 'react'
import { Text } from "@nextui-org/react";
import { Grid, Card } from "@nextui-org/react";
import { Button, Row } from "@nextui-org/react";
import { Dropdown } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
import { Input } from '@nextui-org/react';
import { Modal, Checkbox } from "@nextui-org/react";
// import { Mail } from "./Mail";
// import { Password } from "./Password";


import Barra from "../../Barra/Barra";
import { calcularISR } from './Funciones/calculos';



function CalculadoraImpuestos() {
  const tituloPrincipal = "Calculadora de Impuestos a Pagar"
  const [tituloCalculo, setTituloCalculo] = React.useState("");
  const [cantidad, setCantidad] = React.useState("");
  const [resultado, setResultado] = React.useState("");
  const [resultado1, setResultado1] = React.useState("");
  const [resultado2, setResultado2] = React.useState("");
  const [resultado3, setResultado3] = React.useState("");
  const [resultado4, setResultado4] = React.useState("");
  const [resultado5, setResultado5] = React.useState("");
  const [error, setError] = React.useState("");

  //States para el dropdown para seleccionar impuesto/pago
  const [selected, setSelected] = React.useState(new Set(["Impuesto/Pago"]));
  const selectedValue = React.useMemo(
    () => Array.from(selected).join(", ").replaceAll("_", " "),
    [selected]
  );

  //States modal de respuesta
  const [visible, setVisible] = React.useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
    setResultado("")
    setResultado1("")
    setResultado2("")
    setResultado3("")
    setResultado4("")
    setResultado5("")
    setError("")
  };

  //Metodo para mostrar le texto del segundo Text
  const handleChange = (e) => {
    console.log(e)
    switch (e) {
      case 'IVA':
        setTituloCalculo("Ingresa el precio del bien o servicio a calcular el IVA.")
        break;
      case 'IVA Pequeño contribuyente':
        setTituloCalculo("Ingresa el salario a calcular el IVA Pequeño contribuyente.")
        break;
      case 'ISR':
        setTituloCalculo("Ingresa el salario a calcular el ISR.")
        break;
      case 'IUSI':
        setTituloCalculo("Ingresa la valuacion de bien inmueble a calcular el IUSI.")
        break;
      case 'IGGS':
        setTituloCalculo("Ingresa el salario a calcular el IGGS.")
        break;
      case 'IRTRA':
        setTituloCalculo("Ingresa el salarioo a calcular el IRTRA.")
        break;
    }
  }

  let concatenar = ""
  const handleChange1 = (e) => {
    console.log(e)
    concatenar = e
    // setCantidad(concatenar)
  }


  //Metodo con la configuración de la carta de la calculadora.
  const MockItem1 = ({ text }) => {
    return (
      <Card css={{ h: "$90", $$cardColor: 'white' }}>
        <Card.Divider />
        <Card.Body css={{ mw: "10000px" }}>
          <Row justify="center">
            <Text h4 size={18}>
              Selecciona el impuesto o pago que deseas calcular.
            </Text>
          </Row>

          <Row justify="center">
            <Dropdown css={{ height: 150, width: 30 }}>
              <Dropdown.Button shadow color="warning" css={{ tt: "capitalize", width: "$50", }}>
                {selectedValue}
              </Dropdown.Button>
              <Dropdown.Menu
                aria-label="Single selection actions"
                color="warning"
                disallowEmptySelection
                selectionMode="single"
                onAction={handleChange}
                selectedKeys={selected}
                onSelectionChange={setSelected}
              >
                <Dropdown.Item key="IVA">IVA</Dropdown.Item>
                <Dropdown.Item key="IVA Pequeño contribuyente">IVA Pequeño contribuyente </Dropdown.Item>
                <Dropdown.Item key="ISR">ISR</Dropdown.Item>
                <Dropdown.Item key="IUSI">IUSI</Dropdown.Item>
                <Dropdown.Item key="IGGS">IGGS</Dropdown.Item>
                <Dropdown.Item key="IRTRA">IRTRA</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Row>
          <Row justify="center">
            <Text h4 size={18}>
              {tituloCalculo}
            </Text>
          </Row>
          <Row justify="center">
            <Input placeholder="Q 0.00" label="Cantidad" onChange={(e) => handleChange1(e.target.value)} />


          </Row>
        </Card.Body>
        <Card.Divider />
        <Card.Footer>
          <Row justify="center">
            <Button solid color="error" onPress={pagarImpuesto}>
              Calcular
            </Button>
          </Row>
        </Card.Footer>
      </Card>
    );
  };

  const pagarImpuesto = () => {
    console.log(selected.anchorKey)
    switch (selected.anchorKey) {
      case "ISR":
        const respuesta = calcularISR(parseInt(concatenar))
        console.log(respuesta)
        if (respuesta[0].Error === undefined) {
          console.log(respuesta[0].DeduccionesLey)
          let mensaje = "Renta Neta Anual: Q" + respuesta[0].NetaAnual + "\n"
          let mensaje1 = "Deducciones de Ley: Q" + respuesta[0].DeduccionesLey + "\n"
          let mensaje2 = "Renta Imponible Anual: Q" + respuesta[0].ImponibleANual + "\n"
          let mensaje3 = "Porcentaje de ISR: " + respuesta[0].Porcentaje + "\n"
          let mensaje4 = "Pago ISR Anual: Q" + respuesta[0].PagoIsr
          if (respuesta[0].Excedente != undefined) {
            let mensaje5 = "Excendente: Q" + respuesta[0].Excedente
            setResultado4(mensaje5)
          }
          setResultado(mensaje)
          setResultado1(mensaje1)
          setResultado2(mensaje2)
          setResultado3(mensaje3)
          setResultado5(mensaje4)
          concatenar = ""
        } else {
          console.log(respuesta[0].Msg)
          let err = "Ocurrio el siguiente error: " + respuesta[0].Msg
          setError(err)
        }
        break;
    }
    handler()
  }

  return (
    <div>
      <Barra />
      <br></br>
      <Text h1>{tituloPrincipal}</Text>
      <Grid.Container gap={2} justify="center" >
        <Grid xs={8}>
          <MockItem1 text="" />
        </Grid>
      </Grid.Container>
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            El resultado del cálculo del Impuesto del&nbsp;
            <Text b size={18}>
              {selected}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>

          {
            error !== "" ?
              <Text id="resultado5" b size={16}>
                {error}
              </Text>
              :
              <>
                <Text id="resultado" size={16}>
                  {resultado}
                </Text>
                <Text id="resultado1" size={16}>
                  {resultado1}
                </Text>
                <Text id="resultado2" size={16}>
                  {resultado2}
                </Text>
                <Text id="resultado3" size={16}>
                  {resultado3}
                </Text>
                {
                  resultado4 != "" ?
                    <>
                      <Text id="resultado4" size={16}>
                        {resultado4}
                      </Text>
                      <Text id="resultado5" b size={16}>
                        {resultado5}
                      </Text>
                    </>
                    :
                    <Text id="resultado5" b size={16}>
                      {resultado5}
                    </Text>
                }
              </>
          }


        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler}>
            De acuerdo!
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CalculadoraImpuestos;

