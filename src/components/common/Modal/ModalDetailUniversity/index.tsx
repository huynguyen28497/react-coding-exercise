import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IUniversity } from "utils/types/university.types";
import { close_icon } from "assets";
import { Grid, IconButton } from "@mui/material";
import moment from "moment";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function ModalDetailUniversity({
  open = false,
  setOpen = null as any,
  item = {} as IUniversity,
}) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Box
          paddingX={4}
          paddingY={4}
          style={{ background: "#5048E5" }}
          color="#fff"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h5" sx={{ mt: 2 }}>
            Detail Information
          </Typography>
          <IconButton onClick={handleClose}>
            <img style={{ width: 15, height: 15 }} src={close_icon} />
          </IconButton>
        </Box>
        <Box paddingX={4} paddingTop="10px" paddingBottom="20px">
          <Typography variant="h6">Detail</Typography>
        </Box>
        <Box paddingX={4} paddingBottom="48px" style={{ background: "#fff" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              ID
            </Grid>
            <Grid item xs={8}>
              {item.id}
            </Grid>
            <Grid item xs={4}>
              Name
            </Grid>
            <Grid item xs={8}>
              {item.name}
            </Grid>
            <Grid item xs={4}>
              Country
            </Grid>
            <Grid item xs={8}>
              {item.country}
            </Grid>
            <Grid item xs={4}>
              Web Pages
            </Grid>
            <Grid item xs={8}>
              {item?.web_pages?.map((i) => (
                <span>{i}</span>
              ))}
            </Grid>
            <Grid item xs={4}>
              Domains
            </Grid>
            <Grid item xs={8}>
              {item?.domains?.map((i) => (
                <span>{i}</span>
              ))}
            </Grid>
            <Grid item xs={4}>
              Created
            </Grid>
            <Grid item xs={8}>
              {moment(item.created_at).format("MMMM Do YYYY, h:mm a")}
            </Grid>
            <Grid item xs={4}>
              Updated
            </Grid>
            <Grid item xs={8}>
              {moment(item.updated_at).fromNow()}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
