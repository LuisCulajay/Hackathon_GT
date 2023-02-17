import React from "react";
import { Grid } from "@nextui-org/react";

function CentralElement(props) {
  const { children, xs } = props;
  return (
    <Grid.Container justify="rigth" css={{ marginTop: "$10" }}>
      <Grid xs={xs} css={{ display: "grid" }}>
        {children}
      </Grid>
    </Grid.Container>
  );
}

export default CentralElement;
