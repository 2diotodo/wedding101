import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function SelectBox() {
  const [search, setSearch] = React.useState('');

  const handleChange = (event) => {
    setSearch(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="select-label">검색조건</InputLabel>
        <Select
          labelId="select-label"
          id="search-select"
          value={search}
          label="Search"
          onChange={handleChange}
        >
          <MenuItem value={10}>이름</MenuItem>
          <MenuItem value={20}>날짜</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export default SelectBox;