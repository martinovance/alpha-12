import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputBase, Select, MenuItem, Pagination, FormControl, InputLabel, Box, Stack, Typography, FormLabel, IconButton, Collapse } from '@mui/material';
import { styled } from '@mui/system';
import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';

const SearchInput = styled(InputBase)({
  border: '1px solid #CBD5E0',
  borderRadius: '5px',
  padding: '8px',
  width: '30%',
});

const FilterSelect = styled(Select)({
  border: '1px solid #CBD5E0',
  borderRadius: '5px',
  padding: '8px',
  // width: '20%',
});

const TableComponent = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('Most Recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openRowIndex, setOpenRowIndex] = useState(-1);

  const handleToggleRow = (id) => {
    setOpenRowIndex(openRowIndex === id ? -1 : id)
  }

  const handleChangeRows = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))

    setCurrentPage(1);
  }


  useEffect(() => {
    const filtered = data
      ?.filter(
        (item) =>
          item.eventName.toLowerCase().includes(searchTerm.toLowerCase()) &&
          (!statusFilter || item.status === statusFilter)
      )
      .sort((a, b) => {
        if (sortOrder === 'Most Recent') {
          return new Date(b.date) - new Date(a.date);
        } else {
          return new Date(a.date) - new Date(b.date);
        }
      });

    setFilteredData(filtered);
  }, [searchTerm, statusFilter, sortOrder, data]);

  // Pagination logic
  const indexOfLastItem = currentPage * rowsPerPage;
  const indexOfFirstItem = indexOfLastItem - rowsPerPage;
  const currentItems = filteredData?.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(filteredData?.length / rowsPerPage);

  return (
    <TableContainer elevation={0} component={Paper} sx={{ mt: 5 }}>
      {/* Search and Filter Section */}
      <Box sx={{ mb: 3, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: '16px' }}>
        <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}>
          <SearchInput
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ 
              width: { xs: '100%', md: '200px' }, 
              height: '50px' 
            }}
          />
          <FormControl sx={{ width: { xs: '100%', md: '100px' } }}>
            <InputLabel>Date</InputLabel>
            <FilterSelect
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Status"
              sx={{ 
                width: { xs: '100%', md: '100px' }, 
                height: '50px' 
              }}
            >
              <MenuItem value="">All Status</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
            </FilterSelect>
          </FormControl>
          <FormControl sx={{ width: { xs: '100%', md: '100px' } }}>
            <InputLabel>Status</InputLabel>
            <FilterSelect
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Status"
              sx={{ 
                width: { xs: '100%', md: '100px' }, 
                height: '50px' 
              }}
            >
              <MenuItem value="">All Status</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
            </FilterSelect>
          </FormControl>
          <FormControl sx={{ width: { xs: '100%', md: '100px' } }}>
            <InputLabel>Name</InputLabel>
            <FilterSelect
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Status"
              sx={{ 
                width: { xs: '100%', md: '100px' }, 
                height: '50px'
              }}
            >
              <MenuItem value="">All Status</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
            </FilterSelect>
          </FormControl>
          <Typography>
            Displaying {filteredData?.length} results
          </Typography>
        </Stack>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <FormControl>
            <InputLabel>Sort By</InputLabel>
            <FilterSelect
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
              label="Sort By"
              sx={{ width: '150px', height: '50px' }}
            >
              <MenuItem value="Most Recent">Most Recent</MenuItem>
              <MenuItem value="Oldest First">Oldest First</MenuItem>
            </FilterSelect>
          </FormControl>
          <FormControl>
            <FilterSelect
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Status"
              sx={{ width: '40px', height: '50px' }}
            >
              <MenuItem value="">All Status</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
            </FilterSelect>
          </FormControl>
          <FormControl>
            <InputLabel>Export</InputLabel>
            <FilterSelect
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              label="Status"
              sx={{ width: '100px', height: '50px' }}
            >
              <MenuItem value="">All Status</MenuItem>
              <MenuItem value="Completed">Completed</MenuItem>
              <MenuItem value="In Progress">In Progress</MenuItem>
            </FilterSelect>
          </FormControl>
        </Stack>
      </Box>

      {/* Table */}
      <Table sx={{
        '.MuiTableCell-root': {
          borderBottom: 'none !important'
        }
      }}>
        <TableHead sx={{ backgroundColor: '#F1F5F9' }}>
          <TableRow>
            <TableCell sx={{ display: { xs: 'table-cell', md: 'none' }}}>
              {''}
            </TableCell>
            <TableCell>Event Name</TableCell>
            <TableCell sx={{ display: { xs: 'none', md: 'table-cell' }}}>
              Date
            </TableCell>
            <TableCell sx={{ display: { xs: 'none', md: 'table-cell' }}}>
              Speaker
            </TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems?.map((item, index) => (
            <React.Fragment key={index}>
              <TableRow>
                <TableCell sx={{ display: { xs: 'tale-cell', md: 'none' }}}>
                  <IconButton
                    aria-label='expanded row'
                    size="small"
                    onClick={() => handleToggleRow(index)}
                  >
                    {openRowIndex === index ? (
                      <KeyboardArrowUp />
                    ) : (
                      <KeyboardArrowDown />
                    )}
                  </IconButton>
                </TableCell>
                <TableCell>{item.eventName}</TableCell>
                <TableCell sx={{ display: { xs: 'none', md: 'table-cell' }}}>
                  {item.date}
                </TableCell>
                <TableCell sx={{ display: { xs: 'none', md: 'table-cell' }}}>
                  {item.speaker}
                </TableCell>
                <TableCell>
                  <span
                    style={{
                      padding: '5px 10px',
                      borderRadius: '20px',
                      backgroundColor: item.status === 'Completed' ? '#D1FAE5' : '#DBEAFE',
                      color: item.status === 'Completed' ? '#1OB981' : '#3B82F6',
                    }}
                  >
                    {item.status}
                  </span>
                </TableCell>
              </TableRow>
              <TableRow sx={{ backgroundColor: 'grey' }}>
                <TableCell
                  style={{
                    paddingBottom: 0,
                    paddingTop: 0,
                  }}
                  colSpan={4}
                >
                  <Collapse
                    in={openRowIndex === index}
                    timeout="auto"
                    unmountOnExit
                  >
                    <Box margin={1}>
                      <p><strong>Speaker:</strong> {item.speaker}</p>
                      <p><strong>Date:</strong> {item.date}</p>
                    </Box>
                  </Collapse>
                </TableCell>
              </TableRow>
            </React.Fragment>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Box sx={{ pt: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Pagination
          component="div"
          count={totalPages}
          page={currentPage}
          rowsPerPage={rowsPerPage}          
          onRowsPerPageChange={handleChangeRows}
          labelRowsPerPage="Show:"
          rowsPerPageOptions={[5, 10, 15]}
          onChange={(event, value) => setCurrentPage(value)}
          color="primary"
        />
        <FormControl orientation="vertical" size="sm">
          <FormLabel>Show:</FormLabel>
          <Select onChange={handleChangeRows} handleChangeRows>
            <MenuItem value={5}>5</MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={25}>25</MenuItem>
          </Select>
        </FormControl>
      </Box>
    </TableContainer>
  );
};
export default TableComponent;

// Prop types for validation
TableComponent.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      eventName: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      speaker: PropTypes.string.isRequired,
      status: PropTypes.oneOf(['Completed', 'In Progress']).isRequired,
    })
  ).isRequired,
};

