import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputBase, Select, MenuItem, Pagination, FormControl, InputLabel, Box, Stack, Typography } from '@mui/material';
import { styled } from '@mui/system';

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
  width: '20%',
});

const TableComponent = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('Most Recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangeRows = (event) => {
    setRowsPerPage(parseInt(event.target.value, 5))

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
      <Box sx={{ mb: 3, display: 'flex', justifyContent: 'space-between' }}>
        <Stack spacing={2} direction="row" sx={{ alignItems: 'center' }}>
          <SearchInput
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            sx={{ width: '200px', height: '50px' }}
          />
          <FormControl>
            <InputLabel>Date</InputLabel>
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
          <FormControl>
            <InputLabel>Status</InputLabel>
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
          <FormControl>
            <InputLabel>Name</InputLabel>
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
        <TableHead sx={{ backgroundColor: '#F7FAFC' }}>
          <TableRow>
            <TableCell>Event Name</TableCell>
            <TableCell>Date</TableCell>
            <TableCell>Speaker</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {currentItems?.map((item, index) => (
            <TableRow key={index}>
              <TableCell>{item.eventName}</TableCell>
              <TableCell>{item.date}</TableCell>
              <TableCell>{item.speaker}</TableCell>
              <TableCell>
                <span
                  style={{
                    padding: '5px 10px',
                    borderRadius: '20px',
                    backgroundColor: item.status === 'Completed' ? '#C6F6D5' : '#BEE3F8',
                    color: item.status === 'Completed' ? '#2F855A' : '#3182CE',
                  }}
                >
                  {item.status}
                </span>
              </TableCell>
            </TableRow>
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

