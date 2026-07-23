import { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import {
  Box,
  Button,
  Chip,
  Container,
  Dialog,
  DialogContent,
  Grid,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";

type ProjectScreenshot = {
  src: string;
  alt: string;
  label: string;
};

const technologies = [
  "React",
  "TypeScript",
  "Spring Boot",
  "Java",
  "PostgreSQL",
  "Docker",
  "Material UI",
  "GitHub Actions",
];

const features = [
  "Payment CRUD operations",
  "Search, filtering, sorting, and pagination",
  "Payment status management",
  "Responsive Material UI dashboard",
  "REST API with validation",
  "Swagger / OpenAPI documentation",
  "Global exception handling",
  "Docker Compose environment",
];

const projectScreenshots: ProjectScreenshot[] = [
  {
    src: "/images/projects/create-payment.png",
    alt: "Create payment dialog",
    label: "Create Payment",
  },
  {
    src: "/images/projects/update-status.png",
    alt: "Update payment status dialog",
    label: "Update Status",
  },
  {
    src: "/images/projects/delete-payment.png",
    alt: "Delete payment confirmation dialog",
    label: "Delete Payment",
  },
];

function ProjectsSection() {
  const [selectedImage, setSelectedImage] = useState<ProjectScreenshot | null>(
    null,
  );

  const closeDialog = () => {
    setSelectedImage(null);
  };

  return (
    <Box
      id="projects"
      component="section"
      sx={{
        py: { xs: 8, md: 12 },
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="overline" color="primary">
          Featured Project
        </Typography>

        <Typography
          variant="h3"
          sx={{
            mt: 1,
            fontWeight: 800,
            maxWidth: 800,
          }}
        >
          Enterprise Payment Platform
        </Typography>

        <Typography
          color="text.secondary"
          sx={{
            mt: 3,
            maxWidth: 850,
            fontSize: "1.1rem",
            lineHeight: 1.8,
          }}
        >
          A full-stack enterprise payment management platform built with React,
          TypeScript, Spring Boot, PostgreSQL, Docker, and GitHub Actions.
        </Typography>

        <Grid
          container
          spacing={5}
          sx={{
            mt: 2,
            alignItems: "stretch",
          }}
        >
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              component="img"
              src="/images/projects/dashboard-overview.png"
              alt="Enterprise Payment Dashboard overview"
              sx={{
                width: "100%",
                height: "auto",
                display: "block",
                borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow: "0 24px 70px rgba(0,0,0,0.35)",
              }}
            />

            <Grid container spacing={2} sx={{ mt: 2 }}>
              {projectScreenshots.map((screenshot) => (
                <Grid size={{ xs: 12, sm: 4 }} key={screenshot.src}>
                  <Box
                    component="button"
                    type="button"
                    onClick={() => setSelectedImage(screenshot)}
                    aria-label={`Open ${screenshot.label} screenshot`}
                    sx={{
                      width: "100%",
                      p: 0,
                      color: "inherit",
                      textAlign: "left",
                      font: "inherit",
                      cursor: "pointer",
                      overflow: "hidden",
                      borderRadius: 3,
                      border: "1px solid rgba(255,255,255,0.08)",
                      backgroundColor: "rgba(255,255,255,0.03)",
                      transition:
                        "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease",
                      "&:hover": {
                        transform: "translateY(-4px) scale(1.01)",
                        boxShadow: "0 18px 45px rgba(0,0,0,0.35)",
                        borderColor: "rgba(139,92,246,0.45)",
                      },
                      "&:focus-visible": {
                        outline: "2px solid",
                        outlineColor: "primary.main",
                        outlineOffset: 3,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={screenshot.src}
                      alt={screenshot.alt}
                      sx={{
                        width: "100%",
                        aspectRatio: "16 / 10",
                        objectFit: "cover",
                        display: "block",
                        transition: "transform 0.25s ease",
                      }}
                    />

                    <Typography
                      sx={{
                        px: 2,
                        py: 1.5,
                        fontWeight: 700,
                        fontSize: "0.9rem",
                      }}
                    >
                      {screenshot.label}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                height: "100%",
                p: { xs: 3, md: 4 },
                borderRadius: 4,
                border: "1px solid rgba(255,255,255,0.08)",
                background:
                  "linear-gradient(180deg, rgba(31,41,75,0.68), rgba(12,18,35,0.92))",
              }}
            >
              <Typography variant="h5" sx={{ fontWeight: 800 }}>
                Project Highlights
              </Typography>

              <Stack spacing={1.5} sx={{ mt: 3 }}>
                {features.map((feature) => (
                  <Typography key={feature} color="text.secondary">
                    ✓ {feature}
                  </Typography>
                ))}
              </Stack>

              <Typography
                variant="h6"
                sx={{
                  mt: 4,
                  fontWeight: 700,
                }}
              >
                Technology Stack
              </Typography>

              <Stack
                direction="row"
                useFlexGap
                sx={{
                  mt: 2,
                  flexWrap: "wrap",
                  gap: 1,
                }}
              >
                {technologies.map((technology) => (
                  <Chip
                    key={technology}
                    label={technology}
                    variant="outlined"
                    color="primary"
                  />
                ))}
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 4 }}
              >
                <Button variant="contained" disabled>
                  Live Demo
                </Button>

                <Button
                  variant="outlined"
                  href="https://github.com/vinit-joshi1989/enterprise-payment-dashboard"
                  target="_blank"
                  rel="noreferrer"
                >
                  Frontend
                </Button>

                <Button
                  variant="outlined"
                  href="https://github.com/vinit-joshi1989/enterprise-payment-api"
                  target="_blank"
                  rel="noreferrer"
                >
                  Backend
                </Button>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Dialog
        open={Boolean(selectedImage)}
        onClose={closeDialog}
        maxWidth="lg"
        fullWidth
        aria-labelledby="project-screenshot-title"
        slotProps={{
          paper: {
            sx: {
              overflow: "hidden",
              borderRadius: 3,
              backgroundColor: "#0b1020",
              backgroundImage: "none",
            },
          },
        }}
      >
        <IconButton
          aria-label="Close image preview"
          onClick={closeDialog}
          sx={{
            position: "absolute",
            right: 12,
            top: 12,
            zIndex: 10,
            color: "white",
            backgroundColor: "rgba(0,0,0,0.55)",
            "&:hover": {
              backgroundColor: "rgba(0,0,0,0.75)",
            },
          }}
        >
          <CloseIcon />
        </IconButton>

        <DialogContent
          sx={{
            p: 0,
            backgroundColor: "#0b1020",
          }}
        >
          {selectedImage && (
            <>
              <Box
                component="img"
                src={selectedImage.src}
                alt={selectedImage.alt}
                sx={{
                  width: "100%",
                  maxHeight: "82vh",
                  objectFit: "contain",
                  display: "block",
                }}
              />

              <Typography
                id="project-screenshot-title"
                sx={{
                  px: 3,
                  py: 2,
                  fontWeight: 700,
                }}
              >
                {selectedImage.label}
              </Typography>
            </>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default ProjectsSection;
