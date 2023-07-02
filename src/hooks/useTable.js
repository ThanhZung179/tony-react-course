import React from 'react'

function useTable({ url }) {
  const [rowData, setRowData] = React.useState([]);
  const [page, setPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(10);

  function onChangePage(value) {
    setPage(value.page)
    setPageSize(value.pageSize)
  }

  React.useEffect(() => {
    fetch(url + `?_limit=${pageSize}&_page=${page}`)
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