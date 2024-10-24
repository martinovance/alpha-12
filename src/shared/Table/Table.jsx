import React, { useState, useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, InputBase, Select, MenuItem, Pagination, FormControl, InputLabel, Box, Stack, Typography, FormLabel, IconButton, Collapse, Chip, InputAdornment, Button, Avatar } from '@mui/material';
import { styled } from '@mui/system';
import { KeyboardArrowDown, KeyboardArrowRight, SearchTwoTone, MoreVertTwoTone, FileDownloadTwoTone, FiberManualRecordTwoTone } from '@mui/icons-material';
import EventModal from '../Modal/Modal';
import { ThemeContext } from '../../context/ThemeContext';
// import SearchIcon from '@mui/icons-material/Search';

// import Download from '../../assets/Download.svg'

const SearchInput = styled(InputBase)(({ theme }) => ({
  border: `${theme.palette.mode === 'dark' ? '#484554' : '1px solid #CBD5E0'}`,
  backgroundColor: `${theme.palette.mode === 'dark' ? '#484554' : '#fff'}`,
  borderRadius: '5px',
  padding: '8px',
  width: '30%',
}));

const FilterSelect = styled(Select)(({ theme }) => ({
  border: `${theme.palette.mode === 'dark' ? '#484554' : '1px solid #CBD5E0'}`,
  backgroundColor: `${theme.palette.mode === 'dark' ? '#484554' : '#fff'}`,
  borderRadius: '5px',
  padding: '8px',
  // width: '20%',
  height: '30px'
}));

const TableComponent = ({ data }) => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('');
  const [sortOrder, setSortOrder] = useState('Most Recent');
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [openRowIndex, setOpenRowIndex] = useState(-1);
  const [openModal, setOpenModal] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState(data);
  const { darkMode } = useContext(ThemeContext);

  const handleRowClick = (row) => {
    setSelectedEvent(row);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedEvent(null);
  };

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
    <>
      <TableContainer elevation={0} component={Paper} sx={{ overflowY: 'hidden' }}>
        {/* Search and Filter Section */}
        <Box sx={{ mb: 3, display: 'flex', flexDirection: { xs: 'column', md: 'row' }, justifyContent: 'space-between', gap: '16px' }}>
          <Stack spacing={2} direction={{ xs: 'column', md: 'row' }} sx={{ alignItems: { xs: 'flex-start', md: 'center' } }}>
            <SearchInput
              placeholder="Search..."
              value={searchTerm}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchTwoTone />
                  </InputAdornment>
                ),
              }}
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
          <Stack spacing={2} direction={{ xs: "column", md: "row"}} sx={{ alignItems: 'center' }}>
            <Box sx={{ width: { xs: '100%', md: 'none' }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
              <Typography>
                Sort:
              </Typography>
              <FormControl>
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
            </Box>
            <Box sx={{ width: { xs: '100%', md: 'none' }, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '8px' }}>
              <FormControl>
                <IconButton 
                  aria-label="more"
                  id="filter-button"
                  // onClick={handleMenuClick}
                  sx={{ 
                    borderRadius: '5px',
                    backgroundColor: darkMode ? '#484554' : '#fff',
                    border: darkMode ? '#484554' : '1px solid #CBD5E0',
                    height: '50px',
                    width: '50px',
                    '&:hover': {
                      backgroundColor: darkMode ? '#484554' : '#fff',
                      border: darkMode ? '#484554' : '1px solid #000',
                    }
                  }}
                >
                  <MoreVertTwoTone />
                </IconButton>
              </FormControl>
              <FormControl>
                <Button
                  variant="outlined"
                  startIcon={<FileDownloadTwoTone sx={{ color: darkMode ? '#fff' : '#000'}} />}
                  sx={{
                    borderRadius: '5px',
                    backgroundColor: darkMode ? '#484554' : '#fff',
                    border: darkMode ? '#484554' : '1px solid #CBD5E0',
                    width: '100px',
                    height: '50px',
                    '&:hover': {
                      backgroundColor: darkMode ? '#484554' : '#fff',
                      border: darkMode ? '#484554' : '1px solid #000',
                    }
                  }}
                >
                  <Typography sx={{
                    color: darkMode ? '#fff' : '#000',
                  }}>
                    Export
                  </Typography>
                </Button>
              </FormControl>
            </Box>
          </Stack>
        </Box>

        {/* Table */}
        <Table sx={{
          '.MuiTableCell-root': {
            borderBottom: 'none !important',
          },
          '.MuiTableCell-body': {
            backgroundColor: darkMode ? '#484554' : 'primary',
          }
        }}>
          <TableHead sx={{ backgroundColor: darkMode ? '#6A6676' : '#F1F5F9' }}>
            <TableRow>
              <TableCell sx={{ width: '2px', display: { xs: 'table-cell', md: 'none' }}}>
                {''}
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Event Name</TableCell>
              <TableCell sx={{ fontWeight: 'bold', display: { xs: 'none', md: 'table-cell' }}}>
                Date
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold', display: { xs: 'none', md: 'table-cell' }}}>
                Speaker
              </TableCell>
              <TableCell sx={{ fontWeight: 'bold' }}>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentItems?.map((item, index) => (
              <React.Fragment 
                key={index} 
              >
                <TableRow
                  hover
                  onClick={() => handleRowClick(item)}
                >
                  <TableCell sx={{ display: { xs: 'tale-cell', md: 'none' }}}>
                    <IconButton
                      aria-label='expanded row'
                      size="small"
                      onClick={(event) => {
                        event.stopPropagation();
                        handleToggleRow(index);
                      }}
                    >
                      {openRowIndex === index ? (
                        <KeyboardArrowDown />
                      ) : (
                        <KeyboardArrowRight />
                      )}
                    </IconButton>
                  </TableCell>
                  <TableCell>{item.eventName}</TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' }}}>
                    {item.date}
                  </TableCell>
                  <TableCell sx={{ display: { xs: 'none', md: 'table-cell' }}}>
                    {item.speakers?.[0]}
                  </TableCell>
                  <TableCell>
                    <Chip
                      avatar={
                        <Avatar variant="filled" sx={{ backgroundColor: 'transparent' }}>
                          <FiberManualRecordTwoTone 
                            variant="filled"
                            sx={{ 
                              color: item.status === 'Completed' ? '#65DDB5' : '#3B82F6',
                              fontSize: 12 
                            }} 
                          />
                        </Avatar>
                      }
                      label={item.status}
                      size="small"
                      variant={darkMode ? 'outlined' : 'filled'}
                      sx={{
                        padding: '5px 10px',
                        borderRadius: '20px',
                        border: darkMode ?
                          item.status === 'Completed' ? '1px solid #65DDB5' : '1px solid #3B82F6' : null,
                        // width: '30%',
                        backgroundColor: darkMode ?
                          item.status === 'Completed' ? 'primary' : 'primary'
                          : item.status === 'Completed' ? '#D1FAE5' : '#DBEAFE',
                        color: item.status === 'Completed' ? '#65DDB5' : '#3B82F6',
                      }}
                    />
                  </TableCell>
                </TableRow>
                <TableRow sx={{ backgroundColor: '#F5F5F5' }}>
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
                      <Box margin={1} sx={{ height: '50px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Typography>{item.speakers?.[0]}</Typography>
                        <Typography>{item.date}</Typography>
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
            <Box sx={{ display: "flex", alignItems: 'center', gap: '4px', }}>
            <FormLabel>Show:</FormLabel>
            <FilterSelect onChange={handleChangeRows} handleChangeRows>
              <MenuItem value={5}>5</MenuItem>
              <MenuItem value={10}>10</MenuItem>
              <MenuItem value={25}>25</MenuItem>
            </FilterSelect>
            </Box>
          </FormControl>
        </Box>
      </TableContainer>
      {selectedEvent && (
        <EventModal open={openModal} onClose={handleCloseModal} eventData={selectedEvent} />
      )}
    </>
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

