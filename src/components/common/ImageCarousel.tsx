import { useState } from 'react';
import {
    Box,
    MobileStepper,
    IconButton,
    useMediaQuery
} from '@mui/material';
import {
    KeyboardArrowLeft,
    KeyboardArrowRight,
} from '@mui/icons-material';
import { useTheme } from '@mui/material/styles';

interface ImageCarouselProps {
    images: string[];
}

const ImageCarousel = ({ images }: ImageCarouselProps) => {
    const theme = useTheme();
    const [activeStep, setActiveStep] = useState(0);
    const maxSteps = images.length;

    const handleNext = () => {
        setActiveStep((prevStep) =>
            prevStep === maxSteps - 1 ? 0 : prevStep + 1
        );
    };

    const handleBack = () => {
        setActiveStep((prevStep) =>
            prevStep === 0 ? maxSteps - 1 : prevStep - 1
        );
    };

    return (
        <Box sx={{
            position: 'relative',
            mb: 3,
            height: { xs: '300px', sm: '400px', md: '500px' },
            overflow: 'hidden',
            borderRadius: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.03)',
        }}>
            <Box
                component="img"
                src={images[activeStep]}
                alt={`Slide ${activeStep + 1}`}
                sx={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'top', // Add this to show top portion of images
                    display: 'block',
                }}
            />
            <Box sx={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                right: 0,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                px: 2
            }}>
                <IconButton
                    onClick={handleBack}
                    sx={{
                        color: 'primary.main',
                        bgcolor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                        p: { xs: 1, sm: 2 }, // Smaller padding on mobile
                    }}
                >
                    <KeyboardArrowLeft sx={{
                        fontSize: { xs: 25, sm: 40 } // Smaller icon size on mobile
                    }} />
                </IconButton>
                <IconButton
                    onClick={handleNext}
                    sx={{
                        color: 'primary.main',
                        bgcolor: 'rgba(255, 255, 255, 0.8)',
                        '&:hover': { bgcolor: 'rgba(255, 255, 255, 0.9)' },
                        p: { xs: 1, sm: 2 }, // Smaller padding on mobile
                    }}
                >
                    <KeyboardArrowRight sx={{
                        fontSize: { xs: 25, sm: 40 } // Smaller icon size on mobile
                    }} />
                </IconButton>
            </Box>
            <MobileStepper
                steps={maxSteps}
                position="static"
                activeStep={activeStep}
                sx={{
                    background: 'transparent',
                    position: 'absolute',
                    bottom: 0,
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    '& .MuiMobileStepper-dots': {
                        gap: '8px'
                    },
                    '& .MuiMobileStepper-dot': {
                        backgroundColor: 'rgba(255, 255, 255, 0.5)',
                    },
                    '& .MuiMobileStepper-dotActive': {
                        backgroundColor: theme.palette.primary.main,
                    }
                }}
                backButton={null}
                nextButton={null}
            />
        </Box>
    );
};

export default ImageCarousel;
