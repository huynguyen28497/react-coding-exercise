import { AppBar, Toolbar, IconButton, Typography } from "@mui/material";
import React from "react";

const AppBarCustom = () => {
  return (
    <AppBar
      position="fixed"
      style={{ backgroundColor: '#fff', boxShadow: '0px 1px 2px 0px #64748B1A' }}
    >
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          sx={{ mr: 2, display: { sm: "none" } }}
        >
        </IconButton>
        <Typography variant="h6" noWrap component="div" color={'#000'}>
          App Bar
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default AppBarCustom;
