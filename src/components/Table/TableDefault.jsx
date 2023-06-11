import React from 'react'

import { DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, Pagination } from '@carbon/react';
import useTable from '../../hooks/useTable';

function TableDefault({ rowData, headerData, renderRow, onChangePage }) {
  return (
    <>
      <DataTable rows={rowData} headers={headerData}>
        {({ rows, headers, getHeaderProps, getTableProps }) => (
          <TableContainer title="DataTable">
            <Table {...getTableProps()}>
              <TableHead>
                <TableRow>
                  {headers.map((header) => (
                    <TableHeader {...getHeaderProps({ header })}>
                      {header.header}
                    </TableHeader>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rowData.map(renderRow)}
                {/* {rows.map((row) => (
                  <TableRow key={row.id}>
                    {row.cells.map((cell) => (
                      <TableCell key={cell.id}>{cell.value}</TableCell>
                    ))}
                  </TableRow>
                ))} */}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </DataTable>
      <br />
      <Pagination
        backwardText="Previous page"
        forwardText="Next page"
        itemsPerPageText="Items per page:"
        page={1}
        pageNumberText="Page Number"
        pageSize={10}
        pageSizes={[
          10,
          20,
          30,
          40,
          50
        ]}
        totalItems={103}
        onChange={value => {
          onChangePage(value)
        }}
      />
    </>
  )
}

export default TableDefault