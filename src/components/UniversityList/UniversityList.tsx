import {
  Box,
  Button,
  Container,
  FormControl,
  IconButton,
  InputLabel,
  Menu,
  MenuItem,
  OutlinedInput,
  Select,
  SelectChangeEvent,
  TablePagination,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { plus, search, tool_icon } from "assets";
import ModalDetailUniversity from "components/common/Modal/ModalDetailUniversity";
import ModalUniversity from "components/common/Modal/ModalUniversity";
import Table from "components/common/Table";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getCountries } from "redux/actions/country.actions";
import {
  deleteUniversity,
  getListUniversity,
} from "redux/actions/university.actions";
import { ICountry } from "utils/types/country.types";
import { IUniversity } from "utils/types/university.types";
import "./style.css";

const UniversityList = () => {
  const [items, setItems] = useState([] as IUniversity[]);
  const [selectedItem, setSelectedItem] = useState({} as IUniversity);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [count, setCount] = useState(0);
  const [searchText, setSearchText] = useState("");
  const [countries, setCountries] = useState([] as ICountry[]);
  const [country, setCountry] = useState("");
  const [openModalView, setOpenModalView] = useState(false);
  const [openModalEdit, setOpenModalEdit] = useState(false);
  //Create, Edit
  const [mode, setMode] = useState("Create");
  const matches = useMediaQuery("(max-width:900px)");

  const openMenu = Boolean(anchorEl);
  const dispatch = useDispatch();

  const handleView = () => {
    setOpenModalView(true);
  };
  const handleEdit = () => {
    setMode("Edit");
    setOpenModalEdit(true);
  };
  const handleDelete = async () => {
    try {
      if (window.confirm("Do you want to delete?")) {
        await deleteUniversity(dispatch, selectedItem.id.toString());
        load(limit, 1, searchText, country);
      }
    } catch (error) {
      alert(error);
    }
  };

  const handleClickMenu = (
    event: React.MouseEvent<HTMLButtonElement>,
    university: IUniversity
  ) => {
    setSelectedItem(university);
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const UniversityColumns = [
    {
      title: "UNIVERSITY NAME",
      property: "name",
      render: (u: IUniversity) => (
        <>
          <p className="university-name">{u.name}</p>
          {u.domains.map((d) => (
            <p className="university-domain">{d}</p>
          ))}
        </>
      ),
    },
    {
      title: "COUNTRY",
      property: "country",
    },
    {
      title: "",
      render: (u: IUniversity) => (
        <IconButton
          id="basic-button"
          aria-controls={openMenu ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openMenu ? "true" : undefined}
          onClick={(event) => handleClickMenu(event, u)}
        >
          <img style={{ width: 4, height: 16 }} src={tool_icon} />
        </IconButton>
      ),
    },
  ];

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage + 1);
    load(limit, newPage + 1, searchText, country);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    load(parseInt(event.target.value, 10), 1, searchText, country);
  };

  const handleChangeCountry = (e: SelectChangeEvent) => {
    setCountry(e.target.value ?? "");
    load(limit, 1, searchText, e.target.value);
  };

  const keyPress = (e: any) => {
    if (e.keyCode == 13) {
      load(limit, 1, searchText);
    }
  };

  const load = async (
    _limit?: number,
    _page?: number,
    name?: string,
    _country?: string
  ) => {
    try {
      const res = await getListUniversity(
        dispatch,
        _page,
        name,
        _limit,
        _country
      );
      setPage(res.current_page - 1);
      setCount(res.total);
      setLimit(res.per_page);
      setItems(res.data);
    } catch (error) {
      alert(error);
    }
  };

  const loadCountries = async () => {
    try {
      const res = await getCountries(dispatch);
      setCountries(res.data);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    load();
    loadCountries();
  }, []);

  return (
    <Box className="root">
      <ModalUniversity
        mode={mode}
        item={selectedItem}
        open={openModalEdit}
        setOpen={setOpenModalEdit}
        countries={countries}
        refresh={load}
      />
      <ModalDetailUniversity
        open={openModalView}
        setOpen={setOpenModalView}
        item={selectedItem}
        editItem={handleEdit}
        deleteItem={handleDelete}
      />
      <Container
        sx={{
          minHeight: "87vh",
          paddingBottom: '5vh'
        }}
      >
        <Menu
          anchorEl={anchorEl}
          id="basic-menu"
          open={openMenu}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem onClick={handleView}>View</MenuItem>
          <MenuItem onClick={handleEdit}>Edit</MenuItem>
          <MenuItem onClick={handleDelete}>Delete</MenuItem>
        </Menu>
        <Box paddingY="34px" display="flex" justifyContent="space-between">
          <Typography variant="h4">Universities</Typography>
          <Button
            variant="contained"
            onClick={() => {
              setMode("Create");
              setOpenModalEdit(true);
            }}
            style={{ textTransform: "none", backgroundColor: "#5048E5" }}
            startIcon={<img style={{ width: 12, height: 12 }} src={plus} />}
          >
            Add
          </Button>
        </Box>
        <Box borderRadius={"8px"} style={{ backgroundColor: "#fff" }}>
          <Box display="flex" padding="32px">
            <OutlinedInput
              placeholder="Input text and press Enter"
              fullWidth
              startAdornment={
                <img
                  style={{ marginRight: 10, width: 18, height: 18 }}
                  src={search}
                />
              }
              onChange={(e: any) => setSearchText(e.target.value)}
              onKeyDown={keyPress}
            />
            <Box paddingX={"5px"}>
              <FormControl sx={{ minWidth: "15vw" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Country
                </InputLabel>
                <Select
                  // value={age}
                  label="Country"
                  onChange={handleChangeCountry}
                >
                  {countries.map((c) => (
                    <MenuItem value={c.name}>{c.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <Box paddingX={"5px"}>
              <FormControl sx={{ minWidth: "15vw" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Sort
                </InputLabel>
                <Select
                  // value={age}
                  label="Sort"
                  // onChange={handleChange}
                >
                  <MenuItem value={10}>Not available</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Table
            columns={UniversityColumns}
            dataSource={items}
            checkbox={true}
          />
          <Box>
            <TablePagination
              component="div"
              count={count}
              page={page}
              onPageChange={handleChangePage}
              rowsPerPage={limit}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default UniversityList;
