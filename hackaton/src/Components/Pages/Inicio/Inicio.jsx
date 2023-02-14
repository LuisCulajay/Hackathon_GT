import React from 'react'
import { Grid, Card, Text } from "@nextui-org/react";



import Barra from "../../Barra/Barra";




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
          <Text h1 weight="bold" >
            Misión
          </Text>
        </Grid>
        
        <Grid xs={6} justify='center'>
          <Text h1 weight="bold">
            Visión
          </Text>
        </Grid>
        
        <Grid xs={6}>
          <MockItem text="aqui la misión" />
        </Grid>

        <Grid xs={6}>
          <MockItem text="aqui la visión" />
        </Grid>
        

      </Grid.Container>

    </div>
  );
};
  
export default Inicio;

  