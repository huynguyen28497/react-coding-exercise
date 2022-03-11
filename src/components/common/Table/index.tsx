import {
  TableContainer,
  Paper,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Table as MUITable,
  Checkbox,
  Tab,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import "./style.css";

interface IColumns {
  title: string;
  property?: string;
  render?: (data: any) => React.Component | JSX.Element;
}

const Table = ({
  columns = [] as IColumns[],
  dataSource = [] as any[],
  checkbox = false,
}) => {
  return (
    <TableContainer component={Paper}>
      <MUITable sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            {checkbox && (
              <TableCell>
                <Checkbox color="primary" />
              </TableCell>
            )}
            {columns.map((c) => (
              <TableCell key={c.title} className="font-weight">{c.title}</TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {dataSource.map((d, _i) => (
            <TableRow key={_i}>
              {checkbox && (
                <TableCell>
                  <Checkbox color="primary" />
                </TableCell>
              )}
              {columns.map((c, i) =>
                c.render ? (
                  <TableCell key={i}>{c.render(d)}</TableCell>
                ) : (
                  <TableCell key={i}>{d[`${c.property}`]}</TableCell>
                )
              )}
            </TableRow>
          ))}
        </TableBody>
      </MUITable>
    </TableContainer>
  );
};

export default Table;
