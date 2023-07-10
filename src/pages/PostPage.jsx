import React from 'react'

import { Tabs, TabList, Tab, TabPanels, TabPanel, Button, DataTable, TableContainer, Table, TableHead, TableRow, TableHeader, TableBody, TableCell, Pagination } from '@carbon/react';
  
import { headerDataTodo } from '../mocks/data'

// components
import TableDefault from '../components/Table/TableDefault';
import useTable from '../hooks/useTable';

function PostPage() {
  const { rowData } = useTable({
    url: '/posts'
  });

  return (
    <TableDefault
      rowData={rowData}
      headerData={headerDataTodo}
      renderRow={row => {
        return (
          <TableRow key={row.id}>
            <TableCell>{row.title}</TableCell>
            <TableCell>{row.body}</TableCell>
          </TableRow>
        )
      }}
    />
  )
}

export default PostPage