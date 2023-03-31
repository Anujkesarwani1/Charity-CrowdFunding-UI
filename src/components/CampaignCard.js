import { Grid, Paper, styled, Button } from "@mui/material";
import React from "react";

const MuiPaper = styled(Paper)({
    padding: '5px',
  width: "80rem",
  margin: "1rem 1rem",
});


const CampaignCard = (props) => {
  return (
    <MuiPaper elevation={5}>
      <Grid direction="column">
        <h2>{props.id}</h2>
        <Button 
        size="meduim" 
        sx={{textTransform: 'capitalize', paddingTop: '0.1px'}}
        >Veiw Campaigns</Button>
      </Grid>
    </MuiPaper>
  );
};

export default CampaignCard;
