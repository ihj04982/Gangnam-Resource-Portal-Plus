import React, { useState } from 'react';
import { TextField, Button, Box } from '@mui/material';

interface SearchBarProps {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  const handleKeyPress = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key === 'Enter') {
      onSearch(inputValue);
    }
  };

  return (
    <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
      <TextField
        label="검색어를 입력하세요"
        variant="outlined"
        value={inputValue}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        fullWidth
      />
      <Button
        variant="contained"
        onClick={handleSearchClick}
        sx={{ height: '56px' }} // TextField와 높이를 맞춥니다.
      >
        검색
      </Button>
    </Box>
  );
};

export default SearchBar;
