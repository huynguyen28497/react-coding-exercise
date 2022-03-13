import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import AppBarCustom from "../AppBarCustom";
import NavTab from "../NavTab";
import useMediaQuery from "@mui/material/useMediaQuery";

const DrawerHeader = styled("div")(
  ({ theme }) =>
    ({
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    } as any)
);

export default function MainLayout({ children = null as any }) {
  const [open, setOpen] = useState(true);
  const [drawerWidth, setDrawerWidth] = useState("15vw");
  const matches = useMediaQuery("(max-width:900px)");
  const handleOpen = () => {
    setOpen((pre) => !pre);
  };
  useEffect(() => {
    if (matches) {
      setOpen(false);
      setDrawerWidth("40vw");
    } else {
      setOpen(true);
      setDrawerWidth("15vw");
    }
  }, [matches]);
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBarCustom
        open={open}
        drawerWidth={drawerWidth}
        handleOpen={handleOpen}
      />
      <NavTab drawerWidth={drawerWidth} open={open} />
      <Box component="main">
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
