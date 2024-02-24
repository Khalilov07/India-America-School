import { Box, Typography, Paper, Tooltip } from '@mui/material'
import { Link } from 'react-router-dom';

const CourseCard = ({ title, description, image, tooltipText, id }) => {
    return (
        <Tooltip title={tooltipText} arrow component={Link} to={`/course/${id}`}>
            <Paper elevation={3}
                sx={{
                    width: 250,
                    height: 300,
                    overflow: 'hidden',
                    position: 'relative',
                    margin: 2,
                    transition: 'transform 0.2s',
                    '&:hover': {
                        transform: 'translateX(-5px)', // Пример эффекта увеличения при наведении
                    },
                }}>
                <img src={image} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <Box
                    sx={{
                        position: 'absolute',
                        bottom: 0,
                        left: 0,
                        padding: 1,
                        background: 'rgba(255, 255, 255, 0.7)',
                        width: '100%',
                    }}
                >
                    <Typography variant="subtitle1" fontWeight="bold">
                        {title}
                    </Typography>
                    <Typography>{description}</Typography>
                </Box>
            </Paper>
        </Tooltip>
    );
};

export default CourseCard