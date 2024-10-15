import React, { useEffect, useState, ChangeEvent } from "react";
import { Container, InputAdornment, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
import { SearchBarProps } from "../../../types/types";

const SearchBar: React.FC = () => {
  const [data] = useState<SearchBarProps[]>([]);  // Simpan data produk
  const [filteredData, setFilteredData] = useState<SearchBarProps[]>([]);  // Hasil filter pencarian
  const [searchTerm, setSearchTerm] = useState<string>('');  // Kata kunci pencarian
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState<string>('');  // Kata kunci yang di-debounce

  useEffect(() => {
    // Simulasi mengambil produk (getAllProducts)
    // Misalnya, Anda memiliki API yang memuat produk dari server.
    // getAllProducts((products: Product[]) => setData(products));
    
    // Ini untuk contoh, anggap kita sudah punya data produk di `data`
  }, []);

  // Logika debounce untuk mengurangi panggilan filter
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);  // Delay 300ms
    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Filter produk ketika debouncedSearchTerm berubah
  useEffect(() => {
    if (debouncedSearchTerm) {
      const term = debouncedSearchTerm.toLowerCase();
      const filtered = data.filter((item) =>
        item.name.toLowerCase().includes(term) ||
        item.type.toLowerCase().includes(term) ||
        (item.brand && item.brand.toLowerCase().includes(term)) ||
        (item.category && item.category.toLowerCase().includes(term)) ||
        (item.description && item.description.toLowerCase().includes(term)) ||
        (item.gender && item.gender.toLowerCase().includes(term))
      );
      setFilteredData(filtered);
    } else {
      setFilteredData([]);  // Reset hasil jika pencarian kosong
    }
  }, [debouncedSearchTerm, data]);

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);  // Update term pencarian
  };

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
    <Container style={{ display: "flex", justifyContent: 'center', alignItems: 'center', flexDirection: 'column', padding: 5 }}>
      {/* Search Input */}
      <TextField
        id="search"
        type="search"
        label="Search Products"
        value={searchTerm}
        onChange={handleSearch}
        className="search-bar-light"
        sx={{ width: { xs: 350, sm: 500, md: 800 } }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <AiOutlineSearch />
            </InputAdornment>
          ),
        }}
      />

      {/* Display Filtered Results */}
      {debouncedSearchTerm.length > 0 && (
        <Box sx={{ width: { xs: 350, sm: 500, md: 800 }, overflowY: "scroll", height: "200px" }}>
          <Stack spacing={0}>
            {filteredData.length === 0 ? (
              <Typography variant="h6" textAlign="center" margin="25px 0">
                Product Not Found
              </Typography>
            ) : (
              filteredData.map((product) => (
                <Link to={`/Detail/type/${product.type}/${product._id}`} key={product._id}>
                  <Item sx={{ borderRadius: 0, display: 'flex', justifyContent: 'space-between', padding: "2px 15px", alignItems: 'center' }}>
                    <Typography variant="body2">{product.name.slice(0, 35)}</Typography>
                    <img src={product.image} alt={product.name} style={{ width: 55, height: 65 }} />
                  </Item>
                </Link>
              ))
            )}
          </Stack>
        </Box>
      )}
    </Container>
  );
};

export default SearchBar;
