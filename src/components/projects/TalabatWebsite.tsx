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
} from "@mui/material";
import {
  Timer as TimerIcon,
  Person as PersonIcon,
  Link as LinkIcon,
  CheckCircleOutline as CheckIcon,
  VideoChat as VideoIcon,
  LocationOn as LocationIcon,
  Build as ToolsIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";
import vodafone_card_early_bird from "../../assets/images/projects/vodafone/vodafone_card_early_bird.jpg";

import ImageCarousel from "../common/ImageCarousel";
import ReactPlayer from "react-player";
const videos = [
  "https://youtu.be/szLvhiqLGB0",
  "https://youtu.be/dL3v1gE2ZsI",
  "https://youtu.be/tsSShCSc1xM",
];
const images = [vodafone_card_early_bird];

const technologies = [
  "AngularJS",
  "Ionic",
  "React",
  "Redux",
  "TypeScript",
  "Scss",
  "Jest",
  "Cypress",
  "Node.js",
  "Express.js",
  "RESTful APIs",
  "NestJS",
  "Git",
  "Jira",
  "GitLab",
  "Webpack",
  "HTML5",
  "Sass",
  "CSS3",
  "Docker",
  "CircleCI",
  "DroneCI",
];
const responsibilities = [
  "Led the web engineering chapter: coached team members, established best practices, and drove technical excellence across projects",
  "Spearheaded technical hiring: screened resumes, led live coding interviews, and assessed candidates’ front‑ and back‑end expertise to build a high‑performing team",
  "Evangelized modern web standards—React Hooks, Next.js, PWAs—and introduced best practices that improved developer productivity and site performance",
  "Drove Agile delivery: facilitated sprint planning, daily stand‑ups, backlog grooming, and retrospective action items to ensure on‑time, high‑quality feature releases",
  "Authored comprehensive technical docs—API contracts, component guidelines, release checklists—to align cross‑functional stakeholders and streamline onboardings",
  "Championed responsive, cross‑browser experiences across Chrome, Safari, Firefox, and Edge, ensuring pixel‑perfect layouts from desktop to mobile",
  "Partnered with UX designers and backend teams to launch key features like real‑time order tracking, dynamic restaurant filtering, and personalized recommendations",
  "Maintained and extended core website modules—search, menu rendering, cart management—through rigorous code reviews, linting enforcement, and modular architecture",
  "Instituted a testing culture with Jest, React Testing Library, and Cypress integration tests to validate end‑to‑end flows",
  "Configured CI/CD pipelines to automate builds, tests, and deployments for web and PWA releases",
  "Developed mobile‑optimized PWA using Ionic framework to deliver app‑like experiences on iOS and Android devices",
];

const TalabatWebsite = () => {
  const theme = useTheme();
  const typographyStyles = {
    fontFamily: '"Lato", sans-serif',
  };

  return (
    <Box sx={{ p: { xs: 0, sm: 4 }, maxWidth: 1200, margin: "0 auto" }}>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {" "}
        {/* Reduced spacing for mobile */}
        {/* Top Section with side-by-side layout */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3 }, // Reduced padding for mobile
              mb: { xs: 2, sm: 4 }, // Reduced margin for mobile
              mt: { xs: 0, sm: 3 }, // Add margin top for larger screens
              borderRadius: 2,
            }}
          >
            <Grid container spacing={3}>
              {/* Left side - Company Info & Roles */}
              <Grid
                item
                xs={12}
                md={4}
                sx={{
                  order: { xs: 2, md: 1 },
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 4,
                  }}
                >
                  {/* Company Info */}
                  <Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: 2,
                        mb: 2,
                      }}
                    >
                      <Box
                        component="img"
                        src={
                          "https://www.talabat.com/assets/images/remix-logo.svg"
                        }
                        alt="Talabat Logo"
                        sx={{
                          width: 80,
                          objectFit: "contain",
                        }}
                      />
                      <Typography
                        variant="h5"
                        color="text.primary"
                        sx={typographyStyles}
                      >
                        Talabat website
                      </Typography>
                    </Box>
                    <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                      <LocationIcon fontSize="small" color="action" />
                      <Typography
                        variant="subtitle1"
                        color="text.secondary"
                        sx={typographyStyles}
                      >
                        Dubai, UAE
                      </Typography>
                    </Box>
                  </Box>

                  {/* Role Info */}
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 3 }}
                  >
                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <PersonIcon sx={{ fontSize: 20 }} color="primary" />
                        <Typography
                          variant="h6"
                          color="secondary.main"
                          sx={typographyStyles}
                        >
                          Role
                        </Typography>
                        <Typography
                          variant="h6"
                          color="text.primary"
                          sx={typographyStyles}
                        >
                          Frontend Chapter Lead
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: 2,
                        }}
                      >
                        <TimerIcon sx={{ fontSize: 20 }} color="primary" />
                        <Typography
                          variant="h6"
                          color="secondary.main"
                          sx={typographyStyles}
                        >
                          Duration
                        </Typography>
                        <Typography
                          variant="h6"
                          color="text.primary"
                          sx={typographyStyles}
                        >
                          {(() => {
                            const startDate = new Date(2019, 4); // May 2019 (month is 0-indexed)
                            const currentDate = new Date();
                            const diffInMonths =
                              (currentDate.getFullYear() -
                                startDate.getFullYear()) *
                                12 +
                              (currentDate.getMonth() - startDate.getMonth());
                            const years = Math.floor(diffInMonths / 12);
                            const months = Math.round(diffInMonths % 12);
                            return months === 0
                              ? `${years} year${years !== 1 ? "s" : ""}`
                              : `${years} year${
                                  years !== 1 ? "s" : ""
                                } and ${months} month${
                                  months !== 1 ? "s" : ""
                                }`;
                          })()}
                        </Typography>
                      </Box>
                    </Box>

                    <Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 2 }}
                      >
                        <ToolsIcon sx={{ mr: 1 }} color="primary" />
                        <Typography
                          variant="h6"
                          color="secondary.main"
                          sx={typographyStyles}
                        >
                          Technologies
                        </Typography>
                      </Box>
                      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 1 }}>
                        {technologies.map((tech) => (
                          <Chip
                            key={tech}
                            label={tech}
                            color="primary"
                            variant="outlined"
                            sx={{
                              borderRadius: "16px",
                              "&:hover": {
                                backgroundColor: theme.palette.primary.main,
                                color: theme.palette.primary.contrastText,
                                cursor: "pointer",
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
              <Grid
                item
                xs={12}
                md={8}
                sx={{
                  order: { xs: 1, md: 2 },
                }}
              >
                <ImageCarousel images={images} />
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        {/* Full Width - Responsibilities */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3 }, // Reduced padding for mobile
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <CheckIcon color="primary" />
              <Typography
                variant="h5"
                color="text.primary"
                sx={typographyStyles}
              >
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
                        borderRadius: "50%",
                        bgcolor: theme.palette.primary.main,
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={responsibility}
                    primaryTypographyProps={{
                      color: "text.primary",
                      fontFamily: '"Lato", sans-serif',
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 3 }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <VideoIcon color="primary" />
              <Typography
                variant="h5"
                color="text.primary"
                sx={typographyStyles}
              >
                Live Showcase
              </Typography>
            </Box>
            <Box>
              {videos.map((video, index) => {
                return (
                  <Box key={index} sx={{ mb: 2 }}>
                    <ReactPlayer
                      key={index}
                      url={video}
                      controls
                      width="100%"
                    />
                  </Box>
                );
              })}
            </Box>
            <Divider sx={{ my: 3 }} />

            <Button
              variant="contained"
              color="secondary"
              endIcon={<LinkIcon />}
              href="https://talabat.com/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                mt: 2,
                fontFamily: '"Lato", sans-serif',
                "&:hover": {
                  color: theme.palette.secondary.contrastText,
                },
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

export default TalabatWebsite;
