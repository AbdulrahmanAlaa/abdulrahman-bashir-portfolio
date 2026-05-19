import {
  Box,
  Typography,
  Chip,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Paper,
  Grid,
  Divider,
} from "@mui/material";
import {
  Timer as TimerIcon,
  Person as PersonIcon,
  CheckCircleOutline as CheckIcon,
  LocationOn as LocationIcon,
  Build as ToolsIcon,
  Architecture as ArchIcon,
  Speed as SpeedIcon,
} from "@mui/icons-material";
import { useTheme } from "@mui/material/styles";

const technologies = [
  "React 18",
  "TypeScript",
  "Microfrontend Plugin",
  "React Query",
  "MobX",
  "Strapi CMS",
  "Server-Driven UI",
  "Drone CI/CD",
  "AWS S3",
  "n8n Automation",
  "Airtable",
  "Okta Auth",
  "JSON Schema Validation",
  "Slack Integration",
];

const responsibilities = [
  "Designed and built the Home CMS as a microfrontend plugin using React 18 — integrating into the existing Strapi-based ops portal while maintaining independent deployability",
  "Replaced Redux with React Query to eliminate MobX conflicts in the host application, simplifying state handling and reducing maintenance overhead",
  "Mapped frontend metadata dynamically and added JSON validation to align with backend changes, reducing misconfigurations and increasing CMS reliability",
  "Added backend-driven segment and experiment fields with key validation to prevent configuration errors in A/B testing setups",
  "Introduced multi-level scheduling rules with rotation support — enabling time-based component scheduling for campaigns like the coffee tile experiment",
  "Built HTML and image previewers for content validation before publishing, then delegated implementation to the IPM team as shared components",
  "Deployed audit schemas in staging and production with VPN usage guidance, supporting compliance and traceability requirements",
  "Created generic CMS components (e.g., ColorDropDown) and updated tile properties for consistency, supporting reusability and scalability",
  "Explored and documented CMS architecture — identified overlapping IPM and Home domain responsibilities, aligned with Staff Engineer to separate domain boundaries via RFC",
  "Directed API routing from CMS to Home Gateway instead of Launcher, supporting proper domain alignment and service routing",
];

const architectureHighlights = [
  "Microfrontend Architecture — Plugin runs independently within the ops portal, built with React 18 and its own CI/CD pipeline via Drone for staging and production",
  "Server-Driven UI — Backend defines screen layout and component hierarchy, enabling marketing to configure home screen content without mobile releases",
  "State Management Strategy — Chose React Query over Redux after discovering global MobX state in the parent app would create ambiguities with two competing state systems",
  "Domain Separation RFC — Authored RFC to separate Home CMS from IPM CMS, establishing clear ownership boundaries and directing backend calls to the correct gateway",
  "Authentication — Integrated Okta tokens via IPM BFF for secure access control across environments",
  "Automation Pipeline — Connected Airtable → CMS → Slack via n8n workflows, automating banner creation and notification flows for marketing teams",
];

const HomeCMS = () => {
  const theme = useTheme();
  const typographyStyles = {
    fontFamily: '"Lato", sans-serif',
  };

  return (
    <Box sx={{ p: { xs: 0, sm: 4 }, maxWidth: 1200, margin: "0 auto" }}>
      <Grid container spacing={{ xs: 2, sm: 4 }}>
        {/* Top Section */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3 },
              mb: { xs: 2, sm: 4 },
              mt: { xs: 0, sm: 3 },
              borderRadius: 2,
            }}
          >
            <Grid container spacing={3}>
              {/* Left side - Project Info */}
              <Grid
                item
                xs={12}
                md={5}
                sx={{
                  order: { xs: 1, md: 1 },
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
                        Talabat Home CMS
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
                          Technical Lead & Architect
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
                          Feb 2025 – Present
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

              {/* Right side - Business Impact */}
              <Grid
                item
                xs={12}
                md={7}
                sx={{
                  order: { xs: 2, md: 2 },
                }}
              >
                <Paper
                  elevation={0}
                  sx={{
                    p: 3,
                    borderRadius: 2,
                    bgcolor: "rgba(80, 0, 202, 0.04)",
                    border: "1px solid rgba(80, 0, 202, 0.12)",
                    height: "100%",
                  }}
                >
                  <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                    <SpeedIcon color="primary" />
                    <Typography
                      variant="h5"
                      color="text.primary"
                      sx={typographyStyles}
                    >
                      Business Impact
                    </Typography>
                  </Box>
                  <List dense>
                    {[
                      "Empowered marketing to manage home screen components, banners, and campaigns across 8 markets — without requiring mobile app releases",
                      "Shortened campaign time-to-market from days to minutes by providing a self-service CMS with scheduling, targeting, and experiment support",
                      "Eliminated external vendor costs by bringing all content management in-house through the Server-Driven UI architecture",
                      "Reduced manual operations through n8n automation — Airtable → CMS → Slack workflows for banner creation and team notifications",
                      "Prevented production misconfigurations through JSON validation, segment key verification, and experiment field constraints",
                      "Launched coffee tile experiment at 100% in UAE using the rescheduling feature — first production use of recurring schedule capability",
                    ].map((impact, index) => (
                      <ListItem key={index} sx={{ py: 0.5 }}>
                        <ListItemIcon sx={{ minWidth: 28 }}>
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
                          primary={impact}
                          primaryTypographyProps={{
                            color: "text.primary",
                            fontFamily: '"Lato", sans-serif',
                            fontSize: "0.9rem",
                          }}
                        />
                      </ListItem>
                    ))}
                  </List>
                </Paper>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        {/* Architecture Highlights */}
        <Grid item xs={12}>
          <Paper
            elevation={3}
            sx={{
              p: { xs: 2, sm: 3 },
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <ArchIcon color="primary" />
              <Typography
                variant="h5"
                color="text.primary"
                sx={typographyStyles}
              >
                Architecture & Technical Decisions
              </Typography>
            </Box>
            <List>
              {architectureHighlights.map((highlight, index) => (
                <ListItem key={index} sx={{ py: 0.5 }}>
                  <ListItemIcon sx={{ minWidth: 36 }}>
                    <Box
                      sx={{
                        width: 6,
                        height: 6,
                        borderRadius: "50%",
                        bgcolor: "#5000ca",
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={highlight}
                    primaryTypographyProps={{
                      color: "text.primary",
                      fontFamily: '"Lato", sans-serif',
                    }}
                  />
                </ListItem>
              ))}
            </List>

            <Divider sx={{ my: 3 }} />

            {/* Key Contributions */}
            <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
              <CheckIcon color="primary" />
              <Typography
                variant="h5"
                color="text.primary"
                sx={typographyStyles}
              >
                Key Contributions
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
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HomeCMS;
