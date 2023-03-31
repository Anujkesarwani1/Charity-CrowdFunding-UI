import { Button, Grid, styled } from "@mui/material";
import React from "react";
import CampaignCard from "./CampaignCard";
import ControlPointIcon from "@mui/icons-material/ControlPoint";

const MuiButton = styled(Button)({
  textTransform: "capitalize",
  fontWeight: "bold",
  marginTop: "1rem",
});

const Campaigns = () => {
  return (
    <>
      {/* <h1>Open Campaigns</h1> */}
      <Grid container direction="row">
        <Grid item>
          <CampaignCard id="Ox6DCc4F4A498988bafD7C243723823820E0a612e3" />
          <CampaignCard id="Ox8aAB147D3033e564fD80A28F3916290CE1ACb3b1" />
          <CampaignCard id="Ox9853e99956e658cF071640C66eF1dAf378422C78" />
          <CampaignCard id="Ox12965AB3E854DCa79316477309c10a4B9DD63A81" />
          <CampaignCard id="0x400C6e985480125e99d3c801bd140A6Ae90F7b16" />
        </Grid>
        <Grid item>
          <MuiButton
            variant="contained"
            size="large"
            startIcon={<ControlPointIcon />}
          >
            Create Campaign
          </MuiButton>
        </Grid>
      </Grid>
    </>
  );
};

export default Campaigns;
