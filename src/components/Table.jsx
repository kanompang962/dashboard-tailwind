import React from "react";
import { columns, rows } from "../content/content";
import { DataGrid } from "@mui/x-data-grid";

const Table = () => {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      initialState={{
        pagination: {
          paginationModel: { page: 0, pageSize: 5 },
        },
      }}
      pageSizeOptions={[5, 10]}
      checkboxSelection
    />
  );
};

export default Table;
