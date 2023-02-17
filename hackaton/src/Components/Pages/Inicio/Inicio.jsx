import React from 'react'
import { Grid, Card } from "@nextui-org/react";
import { Collapse, Text, Image } from "@nextui-org/react";



import Barra from "../../Barra/Barra";
import imagen1 from './img1.jpeg'




function Inicio ()  {
  const MockItem = ({ text }) => {
    return (
      <Card >
        <Card.Body>
          <Text h6 size={15} color="black" css={{ m: 0 }}>
            {text}
          </Text>
        </Card.Body>
      </Card>
    );
  };

  
  return (
    <div>
      <Barra/>
      <br></br>


      <Text h1 size={60} css={{ textGradient: "45deg, $cyan500 -20%, $blue600 50%", }} weight="bold">
        ¿Quiénes somos? 
      </Text>
      <br></br>

      <Grid.Container gap={2} justify="center">
        

        <Grid xs={6} justify='center'>
        </Grid>
        
        <Grid xs={6} justify='center'>
        </Grid>
        
        <Grid xs={6}>    

          <Collapse.Group accordion={false}>
            <br></br><br></br><br></br><br></br>
            <Collapse title="Misión">
              <Text>
              Somos reconocidos por nuestra excelecia en el servicio como el Grupo Financiero No. 1 en crecimiento y rentabilidad, a través del desarrollo de colaboradores, comprometidos en generar el máximo bienestar de sus clientes.
              </Text>
            </Collapse>
            <Collapse title="Visión">
              <Text>
                Nuestra pasión por el servicio, RESUELVE YA!
              </Text>
            </Collapse>
          </Collapse.Group>
        </Grid>

        <Grid xs={6}>
          <Image src={imagen1}/>
        </Grid>
        

      </Grid.Container>

    </div>
  );
};
  
export default Inicio;

  