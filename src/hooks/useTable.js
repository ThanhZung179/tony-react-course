import React from 'react'
import axios from 'axios';

import { axiosInstance } from '../services/initRequest'

function useTable({ url, method = 'GET' }) {
  const [rowData, setRowData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  function onChangePage(value) {
    setPage(value.page)
    setPageSize(value.pageSize)
  }

  React.useEffect(() => {
    axiosInstance(url + `?limit=${pageSize}&page=${page}`, {
      method,
      showLoading: true
    })
      .then(res => res.json())
      .then(data => {
        setRowData(data)
      })
  }, [page, pageSize])

  return  {
    rowData,
    onChangePage
  }
}

export default useTable