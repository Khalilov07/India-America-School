import React, { useState } from 'react';
import {
    Box,
    Typography,
    TextField,
    Button,
    Grid,
    Card,
    CardContent,
    InputAdornment,
    Paper,
    CardMedia,
    Tooltip,
    IconButton
} from '@mui/material';

import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom';


const eventsData = [
    {
        id : 1,
        title: "React JS",
        category: "React",
        images: "https://lwfiles.mycourse.app/633dad0ac8c963ec854a3a09-public/d5b60a8deea2a3761f0b7767bc9ec4de.png",
        title: 'hell'
    },
    {
        id : 2,
        title: "React JS 123",
        category: "React",
        images: "https://lwfiles.mycourse.app/633dad0ac8c963ec854a3a09-public/d5b60a8deea2a3761f0b7767bc9ec4de.png",
        title: 'hell'
    },
    {
        id : 3,
        title: "SDET",
        category: "SDET",
        images: "	https://lwfiles.mycourse.app/633dad0ac8c963ec854a3a09-public/d5b60a8deea2a3761f0b7767bc9ec4de.png",
        title: 'hell'
    },
    {
        id : 4,
        title: "DEV OPS",
        category: "DevOps",
        images: "	https://lwfiles.mycourse.app/633dad0ac8c963ec854a3a09-public/d5b60a8deea2a3761f0b7767bc9ec4de.png",
        title: 'hell'
    },
    {
        id : 5,
        title: "React JS",
        category: "Java",
        images: "	https://lwfiles.mycourse.app/633dad0ac8c963ec854a3a09-public/d5b60a8deea2a3761f0b7767bc9ec4de.png",
        title: 'hell'
    }
];

const categories = ['All', 'React', 'SDET', 'Java', 'DevOps'];

const BlogPage = () => {
    const [filter, setFilter] = useState('');
    const [visibleEvents, setVisibleEvents] = useState(4);
    const [selectedCategory, setSelectedCategory] = useState('All');

    const filteredEvents = eventsData.filter(
        (event) =>
            (selectedCategory === 'All' || event.category === selectedCategory) &&
            (event.title.toLowerCase().includes(filter.trim().toLowerCase()) ||
                event.category.toLowerCase().trim().includes(filter.trim().toLowerCase()))
    );

    const loadMoreEvents = () => {
        setVisibleEvents((prev) => prev + 4);
    };

    return (
        <Box sx={{ width: '85%', margin: '0 auto', padding: '50px 0' }}>
            <Typography textAlign={"center"} color={"#022139"} variant="h3" gutterBottom>
                Here, <br /> you can view our <span style={{ color: "#1565C0" }} >events</span>
            </Typography>
            <Typography sx={{ opacity: "0.9" }} textAlign={"center"} variant="subtitle1" letterSpacing={"1px"} gutterBottom>
                Plenty of useful articles and resources.
            </Typography>

            {/* Фильтр и поиск */}
            <Box marginBottom={2} mt={20} textAlign="center">
                <TextField
                    label="Filter by title or category"
                    variant="outlined"
                    value={filter}
                    onChange={(e) => setFilter(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton>
                                    <SearchIcon />
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                />
            </Box>

            {/* Кнопки фильтрации по категории */}
            <Box marginBottom={2} display='flex' justifyContent='center' flexWrap='wrap' gap={2} textAlign="center">
                {categories.map((category) => (
                    <Button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        variant={selectedCategory === category ? 'contained' : 'outlined'}
                    >
                        {category}
                    </Button>
                ))}
            </Box>

            {/* События */}
            <Grid container spacing={2}>
                {filteredEvents.slice(0, visibleEvents).map((event) => (
                    <Grid component={Link} to={`/blog/${event.id}`} sx={{ cursor: 'pointer' }} key={event.id} item xs={12} sm={6} md={6}>
                        <Tooltip sx={{ padding: '10px 10px 20px', '& .MuiTooltip-tooltip': { fontSize: '11rem' }  }} title="Click for more">
                            <Paper>
                                <img src={event.images} alt={event.title} style={{ width: '100%', height: '100%', objectFit: 'cover', padding: "10px" }} />
                                <Typography variant="h6">{event.title}</Typography>
                                <Typography color="textSecondary">{event.category}</Typography>
                            </Paper>
                        </Tooltip>
                    </Grid>
                ))}
            </Grid>

            {/* Кнопка "Ещё" */}
            {visibleEvents < filteredEvents.length && (
                <Box display="flex" justifyContent="center" marginTop={3}>
                    <Button
                        onClick={loadMoreEvents}
                        variant="contained"
                        sx={{
                            background: 'primary',
                            fontSize: '1rem',
                            textTransform: 'none',
                        }}
                    >
                        Load more
                    </Button>
                </Box>
            )}
        </Box>
    );
};

export default BlogPage;
