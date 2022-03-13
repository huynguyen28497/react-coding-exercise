import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IUniversity } from "utils/types/university.types";
import { close_icon, delete_icon, edit_icon } from "assets";
import { Button, Grid, IconButton, useMediaQuery } from "@mui/material";
import moment from "moment";

export default function ModalDetailUniversity({
  open = false,
  setOpen = null as any,
  item = {} as IUniversity,
  deleteItem = null as any,
  editItem = null as any,
}) {
  const handleClose = () => setOpen(false);
  const matches = useMediaQuery("(max-width:900px)");
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: matches ? "90vw" : "50vw",
    bgcolor: "background.paper",
    boxShadow: 24,
  };
  const handleEdit = () => {
    editItem();
  };
  const handleDelete = () => {
    deleteItem();
    setOpen(false);
  };
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
          <Typography variant="h6" sx={{ mt: 2 }}>
            Detail Information
          </Typography>
          <IconButton onClick={handleClose}>
            <img style={{ width: 15, height: 15 }} src={close_icon} />
          </IconButton>
        </Box>
        <Box
          marginX="24px"
          marginY="32px"
          style={{ backgroundColor: "#F3F4F6" }}
        >
          <Box
            display="flex"
            justifyContent="space-between"
            paddingX="24px"
            paddingY="14px"
            borderRadius="8px"
          >
            Action
            <Box display="flex" alignItems="center">
              <Button
                variant="text"
                style={{ textTransform: "none" }}
                startIcon={
                  <img style={{ width: 20, height: 20 }} src={edit_icon} />
                }
                onClick={handleEdit}
              >
                <span style={{ color: "#5048E5", fontWeight: 600 }}>Edit</span>
              </Button>
              <Button
                variant="text"
                style={{ textTransform: "none" }}
                startIcon={
                  <img style={{ width: 20, height: 20 }} src={delete_icon} />
                }
                onClick={handleDelete}
              >
                <span style={{ color: "#D14343", fontWeight: 600 }}>
                  Delete
                </span>
              </Button>
            </Box>
          </Box>
        </Box>
        <Box paddingX={4} paddingTop="10px" paddingBottom="20px">
          <Typography
            variant="h6"
            style={{
              //styleName: Typography/h6;
              fontSize: "18px",
              fontWeight: 600,
              lineHeight: "25px",
            }}
          >
            Detail
          </Typography>
        </Box>
        <Box paddingX={4} paddingBottom="48px" style={{ background: "#fff" }}>
          <Grid container spacing={2}>
            <Grid item xs={4}>
              <Typography fontWeight={500} variant="subtitle2">
                ID
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography fontWeight={400} color="#6B7280" variant="body2">
                {item.id}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontWeight={500} variant="subtitle2">
                Name
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography fontWeight={400} color="#6B7280" variant="body2">
                {item.name}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontWeight={500} variant="subtitle2">
                Country
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography fontWeight={400} color="#6B7280" variant="body2">
                {item.country}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontWeight={500} variant="subtitle2">
                Web Pages
              </Typography>
            </Grid>
            <Grid item xs={8}>
              {item?.web_pages?.map((i) => (
                <Typography fontWeight={400} color="#6B7280" variant="body2">
                  {i}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Typography fontWeight={500} variant="subtitle2">
                Domains
              </Typography>
            </Grid>
            <Grid item xs={8}>
              {item?.domains?.map((i) => (
                <Typography fontWeight={400} color="#6B7280" variant="body2">
                  {i}
                </Typography>
              ))}
            </Grid>
            <Grid item xs={4}>
              <Typography fontWeight={500} variant="subtitle2">
                Created
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography fontWeight={400} color="#6B7280" variant="body2">
                {moment(item.created_at).format("MMMM Do YYYY, h:mm a")}
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Typography fontWeight={500} variant="subtitle2">
                Updated
              </Typography>
            </Grid>
            <Grid item xs={8}>
              <Typography fontWeight={400} color="#6B7280" variant="body2">
                {moment(item.updated_at).fromNow()}
              </Typography>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Modal>
  );
}
