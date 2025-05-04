import { useState } from 'react';
import {
    Box,
    Typography,
    Chip,
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Paper,
    Grid,
    Divider,
    MobileStepper,
    IconButton,
    useMediaQuery,
} from '@mui/material';
import {
    Code as CodeIcon,
    Timer as TimerIcon,
    Person as PersonIcon,
    Link as LinkIcon,
    CheckCircleOutline as CheckIcon,
    LocationOn as LocationIcon,
    Build as ToolsIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import vodafone_card_early_bird from '../../assets/images/projects/vodafone/vodafone_card_early_bird.jpg';
import vodafone_early_attendance from '../../assets/images/projects/vodafone/vodafone_early_attendance.jpg';
import vodafone_early_bird from '../../assets/images/projects/vodafone/vodafone_early_bird.jpg';
import vodafone_id from '../../assets/images/projects/vodafone/vodafone_id.jpg';
import vodafone_intro from '../../assets/images/projects/vodafone/vodafone_intro.jpg';
import vodafoneLogo from '../../assets/images/projects/vodafone/vodafone-logo.png';

import ImageCarousel from '../common/ImageCarousel';

const images = [
    vodafone_card_early_bird,
    vodafone_early_attendance,
    vodafone_early_bird,
    vodafone_id,
    vodafone_intro
];

const technologies = [
    'AngularJS', 'Angular',
    'React', 'Redux', 'TypeScript', 'CSS', 'Jest', 'Git', 'Gulp', 'Grant', 'Webpack', 'HTML5', 'Sass',];
const responsibilities = [
    'Participated in the recruitment process by interviewing and evaluating software engineering candidates.',
    'Staying up-to-date with the latest web development trends and technologies.',
    'Participating in team meetings and contributing to project planning.',
    'Writing technical documentation for the team and stakeholders.',
    'Ensuring cross-browser compatibility and responsiveness.',
    'Collaborated with designers and backend developers to implement new features, fix bugs, and optimize website performance.',
    'Developed and maintained the Vodafone website while participating in Agile processes and performing code reviews.',
    'Wrote unit tests, mentored junior developers, and created design documents to guide their implementation.',








];

const Vodafone = () => {
    const theme = useTheme();
    const typographyStyles = {
        fontFamily: '"Lato", sans-serif'
    };

    return (
        <Box sx={{ p: { xs: 0, sm: 4 }, maxWidth: 1200, margin: '0 auto' }}>
            <Grid container spacing={{ xs: 2, sm: 4 }}> {/* Reduced spacing for mobile */}
                {/* Top Section with side-by-side layout */}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{
                        p: { xs: 2, sm: 3 }, // Reduced padding for mobile
                        mb: { xs: 2, sm: 4 }, // Reduced margin for mobile
                        mt: { xs: 0, sm: 3 }, // Add margin top for larger screens
                        borderRadius: 2
                    }}>
                        <Grid container spacing={3}>
                            {/* Left side - Company Info & Roles */}
                            <Grid item xs={12} md={4} sx={{
                                order: { xs: 2, md: 1 }
                            }}>
                                <Box sx={{
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: 4
                                }}>
                                    {/* Company Info */}
                                    <Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
                                            <Box
                                                component="img"
                                                src={vodafoneLogo}
                                                alt="Vodafone Logo"
                                                sx={{
                                                    width: 30,
                                                    height: 30,
                                                    objectFit: 'contain'
                                                }}
                                            />
                                            <Typography variant="h5" color="text.primary" sx={typographyStyles}>
                                                Vodafone Germany
                                            </Typography>
                                        </Box>
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <LocationIcon fontSize="small" color="action" />
                                            <Typography variant="subtitle1" color="text.secondary" sx={typographyStyles}>
                                                Enterprise-level telecommunications website development
                                            </Typography>
                                        </Box>
                                    </Box>

                                    {/* Role Info */}
                                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                                        <Box>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2
                                            }}>
                                                <PersonIcon sx={{ fontSize: 20 }} color="primary" />
                                                <Typography variant="h6" color="secondary.main" sx={typographyStyles}>
                                                    Role
                                                </Typography>
                                                <Typography variant="h6" color="text.primary" sx={typographyStyles}>
                                                    Senior Frontend Developer
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box>
                                            <Box sx={{
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 2
                                            }}>
                                                <TimerIcon sx={{ fontSize: 20 }} color="primary" />
                                                <Typography variant="h6" color="secondary.main" sx={typographyStyles}>
                                                    Duration
                                                </Typography>
                                                <Typography variant="h6" color="text.primary" sx={typographyStyles}>
                                                    1 Year and 6 Months
                                                </Typography>
                                            </Box>
                                        </Box>

                                        <Box>
                                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                                <ToolsIcon sx={{ mr: 1 }} color="primary" />
                                                <Typography variant="h6" color="secondary.main" sx={typographyStyles}>Technologies</Typography>
                                            </Box>
                                            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                                                {technologies.map((tech) => (
                                                    <Chip
                                                        key={tech}
                                                        label={tech}
                                                        color="primary"
                                                        variant="outlined"
                                                        sx={{
                                                            borderRadius: '16px',
                                                            '&:hover': {
                                                                backgroundColor: theme.palette.primary.main,
                                                                color: theme.palette.primary.contrastText,
                                                                cursor: 'pointer',
                                                            },
                                                        }}
                                                    />
                                                ))}
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Grid>

                            {/* Right side - Image Carousel */}
                            <Grid item xs={12} md={8} sx={{
                                order: { xs: 1, md: 2 }
                            }}>
                                <ImageCarousel images={images} />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>

                {/* Full Width - Responsibilities */}
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{
                        p: { xs: 2, sm: 3 }, // Reduced padding for mobile
                        borderRadius: 2
                    }}>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 3 }}>
                            <CheckIcon color="primary" />
                            <Typography variant="h5" color="text.primary" sx={typographyStyles}>
                                Key Responsibilities
                            </Typography>
                        </Box>
                        <List>
                            {responsibilities.map((responsibility, index) => (
                                <ListItem key={index} sx={{ py: 0.5 }}>
                                    <ListItemIcon sx={{ minWidth: 36 }}>
                                        <Box
                                            sx={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: '50%',
                                                bgcolor: theme.palette.primary.main
                                            }}
                                        />
                                    </ListItemIcon>
                                    <ListItemText
                                        primary={responsibility}
                                        primaryTypographyProps={{
                                            color: 'text.primary',
                                            fontFamily: '"Lato", sans-serif'
                                        }}
                                    />
                                </ListItem>
                            ))}
                        </List>

                        <Divider sx={{ my: 3 }} />

                        <Button
                            variant="contained"
                            color="secondary"
                            endIcon={<LinkIcon />}
                            href="https://vodafone.de"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{
                                mt: 2,
                                fontFamily: '"Lato", sans-serif',
                                '&:hover': {
                                    color: theme.palette.secondary.contrastText,
                                }
                            }}
                        >
                            Visit Website
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Vodafone;