import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { forwardRef } from 'react';
import '../assets/styles/ProjectDetails.scss';

interface ProjectDetailsProps {
    open: boolean;
    onClose: () => void;
    mode: string; // Add mode prop
    project: {
        title: string;
        description: string;
        image: string;
        link: string;
        hasAndroid?: boolean;
        hasIOS?: boolean;
    } | null;
}

const Transition = forwardRef(function Transition(
    props: TransitionProps & {
        children: React.ReactElement;
    },
    ref: React.Ref<unknown>,
) {
    return <Slide direction="up" ref={ref} {...props} />;
});

function ProjectDetails({ open, onClose, project, mode }: ProjectDetailsProps) {
    if (!project) return null;

    return (
        <Dialog
            fullScreen
            open={open}
            onClose={onClose}
            TransitionComponent={Transition}
            className={`project-details-dialog ${mode === 'light' ? 'light-mode' : 'dark-mode'}`}
        >
            <IconButton
                aria-label="close"
                onClick={onClose}
                className="close-button"
            >
                <CloseIcon />
            </IconButton>
            <DialogContent className="dialog-content">
                <div className="project-header">
                    <img src={project.image} alt={project.title} />
                    <h1>{project.title}</h1>
                    <p>{project.description}</p>
                </div>
            </DialogContent>
        </Dialog>
    );
}

export default ProjectDetails;