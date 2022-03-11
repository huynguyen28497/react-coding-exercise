import { Box } from "@mui/material";
import AppBarCustom from "components/common/AppBarCustom";
import NavTab from "components/common/NavTab";
import UniversityList from "components/UniversityList/UniversityList";
import React from "react";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <div>
      <AppBarCustom/>
      <Box sx={{ display: "flex", paddingTop: '8vh' }}>
        <NavTab />
        <UniversityList />
      </Box>
    </div>
  );
};

export default HomePage;
