import { Box } from "@mui/material";
import AppBarCustom from "components/common/AppBarCustom";
import MainLayout from "components/common/MainLayout";
import NavTab from "components/common/NavTab";
import UniversityList from "components/UniversityList/UniversityList";
import React from "react";

interface Props {}

const HomePage = (props: Props) => {
  return (
    <MainLayout>
      <UniversityList />
    </MainLayout>
  );
};

export default HomePage;
