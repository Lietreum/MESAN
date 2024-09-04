import React, { useEffect, useState, ChangeEvent } from "react";
import { Container, InputAdornment, TextField, Typography } from "@mui/material";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Link } from "react-router-dom";
import { AiOutlineSearch } from 'react-icons/ai';
// import { getAllProducts } from "./Constant";

// Define the type for the product
interface Product {
    _id: string;
    name: string;
    type: string;
    brand?: string;
    category?: string;
    author?: string;
    description?: string;
    gender?: string;
    image: string;
    className?: string; 

}

const SearchBar: React.FC = () => {
    const LightStyledTextField = styled(TextField)(({ theme }) => ({
        '& .MuiInputBase-root': {
          backgroundColor: 'white', // Light mode background color
          color: 'black', // Text color
        },
        '& .MuiOutlinedInput-notchedOutline': {
          borderColor: '#ccc', // Border color
        },
        '& .MuiInputBase-input': {
          color: 'black', // Input text color
        },
      }));
      
    const [data, setData] = useState<Product[]>([]);
    const [filteredData, setFilteredData] = useState<Product[]>([]);
    const [searchTerm, setSearchTerm] = useState<string>('');

    useEffect(() => {
        // getAllProducts((products: Product[]) => setData(products));
    }, []);

    const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
        const term = event.target.value.toLowerCase();
        setSearchTerm(term);

        const newFilteredData = data.filter(item =>
            (item.name.toLowerCase().includes(term)) ||
            (item.type.toLowerCase().includes(term)) ||
            (item.brand && item.brand.toLowerCase().includes(term)) ||
            (item.category && item.category.toLowerCase().includes(term)) ||
            (item.author && item.author.toLowerCase().includes(term)) ||
            (item.description && item.description.toLowerCase().includes(term)) ||
            (item.gender && item.gender.toLowerCase().includes(term))
        );

        setFilteredData(newFilteredData);
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
            {searchTerm.length > 0 &&
                <Box sx={{ width: { xs: 350, sm: 500, md: 800 }, overflowY: "scroll", height: "200px" }}>
                    <Stack spacing={0}>
                        {filteredData.length === 0 ?
                            <Typography variant="h6" textAlign="center" margin="25px 0">Product Not Found</Typography>
                            : filteredData.map(products => (
                                <Link to={`/Detail/type/${products.type}/${products._id}`} key={products._id}>
                                    <Item sx={{ borderRadius: 0, display: 'flex', justifyContent: 'space-between', padding: "2px 15px", alignItems: 'center' }}>
                                        <Typography variant="body2">{products.name.slice(0, 35)}</Typography>
                                        <img src={products.image} alt={products.name} style={{ width: 55, height: 65 }} />
                                    </Item>
                                </Link>
                            ))}
                    </Stack>
                </Box>
            }
        </Container>
    );
}

export default SearchBar;
