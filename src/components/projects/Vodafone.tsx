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
    Divider
} from '@mui/material';
import {
    Code as CodeIcon,
    Timer as TimerIcon,
    Person as PersonIcon,
    Link as LinkIcon,
    CheckCircleOutline as CheckIcon,
    House as CompanyIcon,
    LocationOn as LocationIcon,
    Build as ToolsIcon,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';
import vodafoneWebsite from '../../assets/images/projects/vodafone/vodafoneWebsite.png';

const technologies = ['React', 'Redux', 'TypeScript', 'CSS', 'Jest', 'Git'];
const responsibilities = [
    'Developing and maintaining the Vodafone website.',
    'Implementing new features and fixing bugs.',
    'Collaborating with designers and backend developers.',
    'Ensuring cross-browser compatibility and responsiveness.',
    'Writing unit tests and performing code reviews.',
    'Optimizing website performance and load times.',
    'Participating in Agile development processes.',
    'Mentoring junior developers.',
    'Conducting code reviews',
    'Writing technical documentation for the team and stakeholders.',
    'Participated in the recruitment process by interviewing and evaluating software engineering candidates.',
    'Participating in team meetings and contributing to project planning.',
    'Staying up-to-date with the latest web development trends and technologies.'
];

const Vodafone = () => {
    const theme = useTheme();

    const typographyStyles = {
        fontFamily: '"Lato", sans-serif'
    };

    return (
        <Box sx={{ p: 4, maxWidth: 1200, margin: '0 auto' }}>
            <Grid container spacing={4}>
                <Grid item xs={12}>
                    <Paper elevation={3} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
                        <Box component="img"
                            src={vodafoneWebsite}
                            alt="Vodafone Website"
                            sx={{
                                width: '100%',
                                height: 'auto',
                                borderRadius: 1,
                                mb: 3
                            }}
                        />
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2, lineHeight: 1 }}>
                            <CompanyIcon
                                color="primary"
                                sx={{ fontSize: 30 }}
                            />
                            <Typography variant="h5" color="text.primary" sx={typographyStyles}>
                                Vodafone Germany
                            </Typography>
                        </Box>
                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, lineHeight: 1, mt: 1 }}>
                            <LocationIcon fontSize="small" color="action" sx={{ mb: 0 }} />
                            <Typography variant="subtitle1" color="text.secondary" sx={typographyStyles}>
                                Enterprise-level telecommunications website development
                            </Typography>
                        </Box>
                    </Paper>
                </Grid>

                <Grid item xs={12} md={4}>
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 2, height: '100%' }}>
                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <PersonIcon sx={{ mr: 1 }} color="primary" />
                                <Typography variant="h6" color="text.primary" sx={typographyStyles}>Role</Typography>
                            </Box>
                            <Typography variant="body1" color="text.secondary" sx={typographyStyles}>Frontend Developer</Typography>
                        </Box>

                        <Box sx={{ mb: 3 }}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <TimerIcon sx={{ mr: 1 }} color="primary" />
                                <Typography variant="h6" color="text.primary" sx={typographyStyles}>Duration</Typography>
                            </Box>
                            <Typography variant="body1" color="text.secondary" sx={typographyStyles}>1.5 Years</Typography>
                        </Box>

                        <Box>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                                <ToolsIcon sx={{ mr: 1 }} color="primary" />
                                <Typography variant="h6" color="text.primary" sx={typographyStyles}>Technologies</Typography>
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
                    </Paper>
                </Grid>

                <Grid item xs={12} md={8}>
                    <Paper elevation={3} sx={{ p: 3, borderRadius: 2 }}>
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