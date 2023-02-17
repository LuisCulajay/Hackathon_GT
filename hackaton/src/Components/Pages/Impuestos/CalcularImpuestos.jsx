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
import { calcularISR } from './Funciones/calculoIsr';
import { calcularIVA } from './Funciones/calculoIva';
import { calcularIUSI } from './Funciones/calculoIusi';
import { calcularIggs } from './Funciones/calculoIggs';
import { calcularIrtra } from './Funciones/calculoIrtra';
import { calcularPlanilla } from './Funciones/calculoPlanilla';

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
  const [resultado6, setResultado6] = React.useState("");
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
    setResultado("")
    setResultado1("")
    setResultado2("")
    setResultado3("")
    setResultado4("")
    setResultado5("")
    setError("")
    setVisible(false);
    console.log("closed");

  };

  const [visible1, setVisible1] = React.useState(false);
  const handler1 = () => setVisible1(true);
  const closeHandler1 = () => {
    setResultado("")
    setResultado1("")
    setResultado2("")
    setResultado3("")
    setResultado4("")
    setResultado5("")
    setError("")
    setVisible1(false);
    console.log("closed");

  };

  //Metodo para mostrar le texto del segundo Text
  const handleChange = (e) => {
    console.log(e)
    switch (e) {
      case 'IVA':
        setTituloCalculo("Ingresa el precio del bien o servicio libre de impuesto a calcular el IVA.")
        break;
      case 'Planilla Mensual':
        setTituloCalculo("Ingresa el salario base mensual a calcular planilla mensual.")
        break;
      case 'Planilla Anual':
        setTituloCalculo("Ingresa el salario base mensual a calcular planilla anual.")
        break;
      case 'ISR':
        setTituloCalculo("Ingresa el salario base mensual a calcular el ISR.")
        break;
      case 'IUSI':
        setTituloCalculo("Ingresa la valuacion de bien inmueble a calcular el IUSI.")
        break;
      case 'IGGS':
        setTituloCalculo("Ingresa el salario base mensual a calcular el IGGS.")
        break;
      case 'IRTRA':
        setTituloCalculo("Ingresa el salario base mensual a calcular el IRTRA.")
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
                <Dropdown.Item key="Planilla Mensual">Planilla Mensual</Dropdown.Item>
                <Dropdown.Item key="Planilla Anual">Planilla Anual</Dropdown.Item>
                <Dropdown.Item key="IVA">IVA</Dropdown.Item>
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


  //Metodo calculo ISR
  const isr = () => {
    if (concatenar === "") {
      concatenar = "Vacio"
      const respuesta = calcularISR(concatenar)
      console.log(respuesta[0].Msg)
      let err = "Ocurrio el siguiente error: " + respuesta[0].Msg
      setError(err)
    } else {
      const respuesta = calcularISR(parseInt(concatenar))
      console.log(respuesta)
      if (respuesta[0].Error === undefined) {
        console.log(respuesta[0].DeduccionesLey)
        let mensaje = "Renta Neta Anual: Q" + respuesta[0].NetaAnual + "\n"
        let mensaje1 = "Deducciones de Ley: Q" + respuesta[0].DeduccionesLey + "\n"
        let mensaje2 = "Renta Imponible Anual: Q" + respuesta[0].ImponibleANual + "\n"
        let mensaje3 = "Porcentaje de ISR: " + respuesta[0].Porcentaje + "\n"
        let mensaje4 = "Pago ISR Anual: Q" + respuesta[0].PagoIsr
        if (respuesta[0].Excedente !== undefined) {
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
    }
  }

  //Metodo calculo IVA
  const iva = () => {
    console.log("entre")
    console.log(concatenar)
    if (concatenar === "") {
      concatenar = "Vacio"
      const respuestaIVA = calcularIVA(concatenar)
      console.log(respuestaIVA[0].Msg)
      let err = "Ocurrio el siguiente error: " + respuestaIVA[0].Msg
      setError(err)
    } else {
      const respuestaIVA = calcularIVA(parseInt(concatenar))
      let mensaje = "Valor del bien o servicio sin impuesto: Q" + respuestaIVA[0].SinImpuesto + "\n"
      let mensaje1 = "Porcentaje del impuesto: " + respuestaIVA[0].PorcentajeIva + "\n"
      let mensaje2 = "Valor del impuesto: Q" + respuestaIVA[0].Impuesto + "\n"
      let mensaje3 = "Total a pagar: " + respuestaIVA[0].Total + "\n"
      let mensaje4 = "Recuerda que el IVA lo pagamos todos los ciudadanos al realizar nuestras compras."
      setResultado(mensaje4)
      setResultado1(mensaje)
      setResultado2(mensaje1)
      setResultado3(mensaje2)
      setResultado5(mensaje3)
      concatenar = ""
    }
  }

  //Metodo calculo IUSI
  const iusi = () => {
    if (concatenar === "") {
      concatenar = "Vacio"
      const respuestaIUSI = calcularIUSI(concatenar)
      console.log(respuestaIUSI[0].Msg)
      let err = "Ocurrio el siguiente error: " + respuestaIUSI[0].Msg
      setError(err)
    } else {
      const respuestaIUSI = calcularIUSI(parseInt(concatenar))
      console.log(respuestaIUSI)
      if (respuestaIUSI[0].Error === undefined) {
        let mensaje = "¡Importante! No pagar el impuesto genera una mora del 20%" + "\n"
        let mensaje1 = "Condición aplicada: " + respuestaIUSI[0].Condición + "\n"
        let mensaje2 = "Tasa por millar: " + respuestaIUSI[0].TasaIusi + "\n"
        let mensaje3 = "La valoración de la vivienda Q: " + respuestaIUSI[0].Valoracion + "\n"
        let mensaje4 = "Pago de IUSI: Q" + respuestaIUSI[0].Total

        setResultado(mensaje)
        setResultado1(mensaje1)
        setResultado2(mensaje2)
        setResultado3(mensaje3)
        setResultado5(mensaje4)
        concatenar = ""
      } else {
        if (respuestaIUSI[0].Error === "Ntt") {
          console.log(respuestaIUSI[0].Msg)
          let err = respuestaIUSI[0].Msg
          setError(err)
        } else {
          console.log(respuestaIUSI[0].Msg)
          let err = "Ocurrio el siguiente error: " + respuestaIUSI[0].Msg
          setError(err)
        }

      }
    }
  }

  //Metodo calculo IGGS
  const iggs = () => {
    if (concatenar === "") {
      concatenar = "Vacio"
      const respuestaIGGS = calcularIggs(concatenar)
      console.log(respuestaIGGS[0].Msg)
      let err = "Ocurrio el siguiente error: " + respuestaIGGS[0].Msg
      setError(err)
    } else {
      const respuestaIGGS = calcularIggs(parseInt(concatenar))
      console.log(respuestaIGGS)
      if (respuestaIGGS[0].Error === undefined) {
        let mensaje = "El porcentaje que se aplica es: " + respuestaIGGS[0].Porcentaje + "\n"
        let mensaje1 = "Salario Mensual: Q" + respuestaIGGS[0].CantidadMensual + "\n"
        let mensaje2 = "El pago de IGGS por mes es: Q" + respuestaIGGS[0].Mensual + "\n"
        let mensaje3 = "Salario Anual: Q: " + respuestaIGGS[0].CantidadAnual + "\n"
        let mensaje4 = "El pago de IGGS por año es: Q" + respuestaIGGS[0].Anual

        setResultado(mensaje)
        setResultado1(mensaje1)
        setResultado2(mensaje2)
        setResultado3(mensaje3)
        setResultado5(mensaje4)
        concatenar = ""
      } else {
        console.log(respuestaIGGS[0].Msg)
        let err = "Ocurrio el siguiente error: " + respuestaIGGS[0].Msg
        setError(err)
      }
    }
  }

  //Metodo calculo IRTRA
  const irtra = () => {
    if (concatenar === "") {
      concatenar = "Vacio"
      const respuestaIRTRA = calcularIrtra(concatenar)
      console.log(respuestaIRTRA[0].Msg)
      let err = "Ocurrio el siguiente error: " + respuestaIRTRA[0].Msg
      setError(err)
    } else {
      const respuestaIRTRA = calcularIrtra(parseInt(concatenar))
      console.log(respuestaIRTRA)
      if (respuestaIRTRA[0].Error === undefined) {
        let mensaje = "El porcentaje que se aplica es: " + respuestaIRTRA[0].Porcentaje + "\n"
        let mensaje1 = "Salario Mensual: Q" + respuestaIRTRA[0].CantidadMensual + "\n"
        let mensaje2 = "El pago de IGGS por mes es: Q" + respuestaIRTRA[0].Mensual + "\n"
        let mensaje3 = "Salario Anual: Q: " + respuestaIRTRA[0].CantidadAnual + "\n"
        let mensaje4 = "El pago de IGGS por año es: Q" + respuestaIRTRA[0].Anual

        setResultado(mensaje)
        setResultado1(mensaje1)
        setResultado2(mensaje2)
        setResultado3(mensaje3)
        setResultado5(mensaje4)
        concatenar = ""
      } else {
        console.log(respuestaIRTRA[0].Msg)
        let err = "Ocurrio el siguiente error: " + respuestaIRTRA[0].Msg
        setError(err)
      }
    }
  }

  const planillaMensual = () => {
    if (concatenar === "") {
      concatenar = "Vacio"
      const res = calcularISR(concatenar)
      console.log(res[0].Msg)
      let err = "Ocurrio el siguiente error: " + res[0].Msg
      setError(err)
    } else {
      const respuestaPlaniISR = calcularISR(parseInt(concatenar))
      const respuestaPlaniIGSS = calcularIggs(parseInt(concatenar))
      const respuestaPlaniIRTRA = calcularIrtra(parseInt(concatenar))
      let totalISR = 0
      let totalIGSS = 0
      let totalIRTRA = 0

      if (respuestaPlaniISR[0].Error === undefined) {
        console.log(respuestaPlaniISR[0].DeduccionesLey)
        totalISR = respuestaPlaniISR[0].PagoIsr / 12
      } else {
        console.log(respuestaPlaniISR[0].Msg)
        let err = "Ocurrio el siguiente error: " + respuestaPlaniISR[0].Msg
        setError(err)
      }

      //CALCULO IGSS
      if (respuestaPlaniIGSS[0].Error === undefined) {
        totalIGSS = respuestaPlaniIGSS[0].Mensual
      } else {
        console.log(respuestaPlaniIGSS[0].Msg)
        let err = "Ocurrio el siguiente error: " + respuestaPlaniIGSS[0].Msg
        setError(err)
      }

      //CALCULO IRTRA
      if (respuestaPlaniIRTRA[0].Error === undefined) {
        totalIRTRA = respuestaPlaniIRTRA[0].Mensual
      } else {
        console.log(respuestaPlaniIRTRA[0].Msg)
        let err = "Ocurrio el siguiente error: " + respuestaPlaniIRTRA[0].Msg
        setError(err)
      }

      var totalDeducciones = 0
      totalDeducciones=totalIGSS+totalIRTRA
      console.log(totalDeducciones)
      // totalDeducciones = totalISR.toFixed(2) 
      // totalDeducciones+=totalIGSS
      // totalDeducciones+=totalIRTRA
      const restaDedudcciones = parseInt(concatenar) - totalDeducciones
      const salarioFinal = restaDedudcciones + 250

      const resultado = "El salario base mensual es: Q" + concatenar
      const resultado1 = "El ISR a pagar por mes es: Q" + totalISR.toFixed(2)
      const resultado2 = "El IGSS a pagar por mes es: Q" + totalIGSS
      const resultado3 = "El IRTRA a pagar por mes es: Q" + totalIRTRA
      

      const traer = calcularPlanilla(parseInt(concatenar),totalISR.toFixed(2),totalIGSS,totalIRTRA)
      const resultado4 = "El total de Deducciones de Ley a pagar por mes es: Q" + traer[0].Deducciones
      const resultado5 = "La resta de salario base y deducciones de ley es: Q" + traer[0].Resta
      const resultado6 = "El salario que se recibe al mes es: Q" + traer[0].Total
      setResultado(resultado)
      setResultado1(resultado1)
      setResultado2(resultado2)
      setResultado3(resultado3)
      setResultado4(resultado4)
      setResultado5(resultado5)
      setResultado6(resultado6)
      concatenar = ""
    }
  }
  //Metodo con la funcionalidad del boton y calcular los impuestos y pagos
  const pagarImpuesto = () => {
    console.log(selected.anchorKey)
    if (selected.anchorKey === "Planilla Mensual") {
      planillaMensual()
      handler1()
    } else {
      switch (selected.anchorKey) {
        case "ISR":
          isr()
          break;
        case "IVA":
          iva()
          break;
        case "IUSI":
          iusi()
          break;
        case "IGGS":
          iggs()
          break;
        case "IRTRA":
          irtra()
          break;
        default:
          setError("Selecciona una opción valida")
          break;
      }
      handler()
    }

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
              <Text id="error" b size={16}>
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
                  resultado4 !== "" ?
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

      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible1}
        onClose={closeHandler1}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            El resultado del cálculo de&nbsp;
            <Text b size={18}>
              {selected}
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>

          {
            error !== "" ?
              <Text id="error" b size={16}>
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
                <Text id="resultado4" size={16}>
                  {resultado4}
                </Text>
                <Text id="resultado5" size={16}>
                  {resultado5}
                </Text>
                <Text id="resultado6" b size={16}>
                  {resultado6}
                </Text>
              </>
          }


        </Modal.Body>
        <Modal.Footer>
          <Button auto flat color="error" onPress={closeHandler1}>
            De acuerdo!!!!
          </Button>

        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CalculadoraImpuestos;

