import { Box, Button, Drawer, Typography } from "@mui/material";
import { house_icon, logo } from "assets";
import React, { useEffect } from "react";

const NavTab = ({ open = true, drawerWidth = "15vw" }) => {
  return open ? (
    <Drawer
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: drawerWidth,
          boxSizing: "border-box",
          backgroundColor: "#111827",
          color: "#10B981",
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Box paddingTop={"28px"} paddingBottom={"28px"} paddingLeft={"24px"}>
        <img style={{ width: 42, height: 33 }} src={logo} />
      </Box>
      <Typography paddingLeft={"14px"} color={"#9CA3AF"}>
        General
      </Typography>
      <Box
        marginX={"16px"}
        marginY={"4px"}
        height="100%"
        display="flex"
        flexDirection="column"
        justifyContent="space-between"
      >
        <Box>
          <Box
            display={"flex"}
            alignItems="center"
            paddingX={"12px"}
            borderRadius={"8px"}
            style={{ background: "rgba(255, 255, 255, 0.08)" }}
          >
            <img
              style={{ width: 16, height: 16, marginRight: 8 }}
              src={house_icon}
            />
            <p style={{ color: "#10B981", fontWeight: 600 }}>Main</p>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" paddingBottom="24px">
          <Box paddingBottom="16px">
            <Typography fontSize={"14px"} color={"#fff"}>
              Need help?
            </Typography>
            <Typography fontSize={"14px"} color={"#9CA3AF"}>
              Check our docs
            </Typography>
          </Box>
          <Button
            variant="contained"
            style={{ backgroundColor: "#10B981", textTransform: "none" }}
          >
            Documentation
          </Button>
        </Box>
      </Box>
    </Drawer>
  ) : null;
};

export default NavTab;
