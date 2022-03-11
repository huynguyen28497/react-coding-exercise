import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { IUniversity } from "utils/types/university.types";
import { close_icon } from "assets";
import {
  Button,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from "@mui/material";
import moment from "moment";
import { ICountry } from "utils/types/country.types";
import {
  addUniversity,
  editUniversity,
} from "redux/actions/university.actions";
import { useDispatch } from "react-redux";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50vw",
  bgcolor: "background.paper",
  boxShadow: 24,
};

export default function ModalUniversity({
  mode = "Create",
  open = false,
  setOpen = null as any,
  item = {} as IUniversity,
  countries = [] as ICountry[],
  refresh = null as any,
}) {
  const handleClose = () => setOpen(false);
  const [university, setUniversity] = React.useState({} as IUniversity);
  const [domain, setDomain] = React.useState("");
  const [webPage, setWebPage] = React.useState(
    mode === "Created" ? "" : item.id ? item.web_pages[0] : ""
  );
  const dispatch = useDispatch();
  React.useEffect(() => {
    mode === "Created" ? setUniversity({} as IUniversity) : setUniversity(item);
    mode === "Created"
      ? setDomain("")
      : item.id && setDomain(item.domains[0] ?? "");
    mode === "Created"
      ? setWebPage("")
      : item.id && setWebPage(item.web_pages[0] ?? "");
  }, [mode]);
  const handleCreate = async () => {
    try {
      const res = await addUniversity(dispatch, {
        ...university,
        domains: [domain],
        web_pages: [webPage],
      });
      if (res) {
        alert("Done");
        refresh && refresh();
        handleClose();
      }
    } catch (error) {
      alert(error);
    }
  };
  const handleEdit = async () => {
    try {
      const res = await editUniversity(dispatch, {
        ...university,
        domains: [domain],
        web_pages: [webPage],
      });
      if (res) {
        alert("Done");
        refresh && refresh();
        handleClose();
      }
    } catch (error) {
      alert(error);
    }
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
          <Typography variant="h5" sx={{ mt: 2 }}>
            {mode}
          </Typography>
          <IconButton onClick={handleClose}>
            <img style={{ width: 15, height: 15 }} src={close_icon} />
          </IconButton>
        </Box>
        <Box paddingX={4} paddingTop="10px" paddingBottom="20px">
          <Typography variant="h6">
            {mode === "Create" ? "Create new university " : mode}
          </Typography>
        </Box>
        <Box paddingX={4} paddingBottom="48px" style={{ background: "#fff" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Name"
                variant="outlined"
                fullWidth
                value={university.name || ""}
                onChange={(e: any) =>
                  setUniversity({ ...university, name: e.target.value })
                }
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id="demo-simple-select-helper-label">
                  Country
                </InputLabel>
                <Select
                  value={university.country || ""}
                  label="Country"
                  onChange={(e: any) =>
                    setUniversity({ ...university, country: e.target.value })
                  }
                >
                  {countries.map((c) => (
                    <MenuItem value={c.name}>{c.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Domain"
                variant="outlined"
                fullWidth
                value={domain || ""}
                onChange={(e: any) => setDomain(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="outlined-basic"
                label="Web pages"
                variant="outlined"
                fullWidth
                value={webPage || ""}
                onChange={(e: any) => setWebPage(e.target.value)}
              />
            </Grid>
          </Grid>
        </Box>
        <Box
          style={{ background: "#F3F4F6" }}
          display="flex"
          paddingY={2}
          paddingX={4}
          justifyContent="space-between"
          marginX={4}
          marginBottom={6}
          borderRadius={'8px'}
        >
          <Typography variant="h6">Actions</Typography>
          <Box display="flex">
            <Box paddingRight={1}>
              {mode === "Create" ? (
                <Button variant="contained" onClick={handleCreate}>
                  Create
                </Button>
              ) : (
                <Button variant="contained" onClick={handleEdit}>
                  Edit
                </Button>
              )}
            </Box>
            <Button variant="outlined" onClick={handleClose}>
              Cancel
            </Button>
          </Box>
        </Box>
      </Box>
    </Modal>
  );
}
