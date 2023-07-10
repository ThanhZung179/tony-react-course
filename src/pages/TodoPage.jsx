import React from 'react'

import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, Pagination } from '@carbon/react';
  
import { headerDataTodo } from '../mocks/data'

// components
import TableDefault from '../components/Table/TableDefault';
import useTable from '../hooks/useTable';

function TodoPage() {

  const { rowData, onChangePage } = useTable({
    method: 'GET',
    url: '/todo'
  });

  return (
    <TableDefault
      rowData={rowData}
      headerData={headerDataTodo}
      onChangePage={onChangePage}
      renderRow={row => {
        return (
          <TableRow key={row.id}>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.completed ? "DONE": "New"}</TableCell>
          </TableRow>
        )
      }}
    />
  )
}

export default TodoPage