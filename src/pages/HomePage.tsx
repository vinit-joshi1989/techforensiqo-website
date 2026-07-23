import {
  Box,
  Button,
  Card,
  CardContent,
  Chip,
  Container,
  Grid,
  Stack,
  Typography,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import CodeIcon from "@mui/icons-material/Code";
import CloudIcon from "@mui/icons-material/Cloud";
import PsychologyIcon from "@mui/icons-material/Psychology";
import ProjectsSection from "../components/sections/ProjectsSection";

const services = [
  {
    title: "Enterprise Software",
    description:
      "Scalable full-stack applications designed around real business requirements.",
    icon: <CodeIcon fontSize="large" />,
  },
  {
    title: "Cloud Solutions",
    description:
      "Modern APIs, containerized services, automated delivery, and cloud-ready architecture.",
    icon: <CloudIcon fontSize="large" />,
  },
  {
    title: "AI Integration",
    description:
      "Practical AI capabilities that can be integrated into websites, products, and workflows.",
    icon: <PsychologyIcon fontSize="large" />,
  },
];

function HomePage() {
  return (
    <Box>
      <Box
        id="home"
        component="section"
        sx={{
          minHeight: "88vh",
          display: "flex",
          alignItems: "center",
          position: "relative",
          overflow: "hidden",
          background:
            "radial-gradient(circle at 78% 30%, rgba(139,92,246,0.28), transparent 32%), radial-gradient(circle at 92% 72%, rgba(34,211,238,0.14), transparent 28%)",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: "50%",
            right: -120,
            top: 80,
            background: "rgba(139,92,246,0.12)",
            filter: "blur(80px)",
          }}
        />

        <Container maxWidth="lg">
          <Grid
            container
            spacing={6}
            sx={{
              alignItems: "center",
            }}
          >
            <Grid size={{ xs: 12, md: 7 }}>
              <Chip
                label="Enterprise engineering • Cloud • AI"
                color="primary"
                variant="outlined"
                sx={{ mb: 3 }}
              />

              <Typography
                component="h1"
                sx={{
                  fontSize: { xs: "2.8rem", sm: "4rem", md: "5.2rem" },
                  fontWeight: 900,
                  lineHeight: 1.02,
                  letterSpacing: "-0.06em",
                }}
              >
                Building technology that moves businesses forward.
              </Typography>

              <Typography
                sx={{
                  color: "text.secondary",
                  mt: 3,
                  maxWidth: 700,
                  fontSize: { xs: "1.1rem", md: "1.3rem" },
                  lineHeight: 1.7,
                }}
              >
                TechForensiqo creates scalable enterprise applications, modern
                APIs, cloud-ready platforms, and intelligent digital solutions.
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{ mt: 5 }}
              >
                <Button
                  variant="contained"
                  size="large"
                  endIcon={<ArrowForwardIcon />}
                  href="#projects"
                >
                  Explore our work
                </Button>

                <Button variant="outlined" size="large" href="#contact">
                  Contact us
                </Button>
              </Stack>
            </Grid>

            <Grid size={{ xs: 12, md: 5 }}>
              <Box
                sx={{
                  position: "relative",
                  minHeight: 430,
                  display: { xs: "none", md: "block" },
                }}
              >
                <Card
                  sx={{
                    position: "absolute",
                    inset: "45px 0 auto 40px",
                    p: 2,
                    border: "1px solid rgba(139,92,246,0.35)",
                    background:
                      "linear-gradient(145deg, rgba(17,24,39,0.96), rgba(23,18,54,0.92))",
                    boxShadow: "0 30px 90px rgba(0,0,0,0.45)",
                    transform: "rotate(-2deg)",
                  }}
                >
                  <CardContent>
                    <Typography variant="overline" color="primary">
                      Live architecture
                    </Typography>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 800,
                        mt: 1,
                      }}
                    >
                      Enterprise Payment Platform
                    </Typography>

                    <Stack spacing={1.5} sx={{ mt: 3 }}>
                      {[
                        "React Dashboard",
                        "Spring Boot API",
                        "PostgreSQL Database",
                        "Docker Deployment",
                      ].map((item) => (
                        <Box
                          key={item}
                          sx={{
                            p: 1.5,
                            borderRadius: 2,
                            border: "1px solid rgba(255,255,255,0.08)",
                            backgroundColor: "rgba(255,255,255,0.03)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontWeight: 600,
                            }}
                          >
                            {item}
                          </Typography>
                        </Box>
                      ))}
                    </Stack>
                  </CardContent>
                </Card>

                <Card
                  sx={{
                    position: "absolute",
                    right: -10,
                    bottom: 20,
                    width: 210,
                    p: 2,
                    border: "1px solid rgba(34,211,238,0.3)",
                    backgroundColor: "rgba(15,23,42,0.95)",
                    boxShadow: "0 24px 70px rgba(0,0,0,0.4)",
                    transform: "rotate(4deg)",
                  }}
                >
                  <Typography variant="overline" color="secondary">
                    Engineering stack
                  </Typography>

                  <Stack
                    direction="row"
                    sx={{
                      flexWrap: "wrap",
                      gap: 1,
                      mt: 2,
                    }}
                  >
                    {["React", "Java", "Docker", "Cloud"].map((item) => (
                      <Chip key={item} label={item} size="small" />
                    ))}
                  </Stack>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Container maxWidth="lg">
        <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Typography variant="overline" color="primary">
            About TechForensiqo
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mt: 1,
              maxWidth: 800,
            }}
          >
            Engineering reliable digital products with a long-term mindset.
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              mt: 3,
              maxWidth: 800,
              fontSize: "1.1rem",
              lineHeight: 1.8,
            }}
          >
            TechForensiqo is a software engineering initiative focused on
            designing and building enterprise-grade applications. Combining
            modern backend technologies, intuitive user experiences,
            cloud-native architecture, and AI, the goal is to create scalable
            solutions that solve real business problems.
          </Typography>
        </Box>
        <Box sx={{ py: { xs: 4, md: 8 } }}>
          <Typography
            align="center"
            sx={{
              color: "text.secondary",
              mb: 4,
              fontWeight: 600,
            }}
          >
            Technologies We Use
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            useFlexGap
            sx={{
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            {[
              "React",
              "TypeScript",
              "Spring Boot",
              "Java",
              "PostgreSQL",
              "Docker",
              "GitHub Actions",
              "Azure",
              "AWS",
              "REST APIs",
            ].map((tech) => (
              <Chip
                key={tech}
                label={tech}
                color="primary"
                variant="outlined"
              />
            ))}
          </Stack>
        </Box>
        <Box id="services" component="section" sx={{ py: { xs: 8, md: 12 } }}>
          <Typography variant="overline" color="primary">
            Services
          </Typography>

          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
              mt: 1,
              mb: 5,
            }}
          >
            What we build
          </Typography>

          <Grid container spacing={3}>
            {services.map((service) => (
              <Grid size={{ xs: 12, md: 4 }} key={service.title}>
                <Card
                  sx={{
                    height: "100%",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backgroundImage: "none",
                  }}
                >
                  <CardContent sx={{ p: 4 }}>
                    <Box
                      sx={{
                        color: "primary.main",
                      }}
                    >
                      {service.icon}
                    </Box>

                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 700,
                        mt: 3,
                      }}
                    >
                      {service.title}
                    </Typography>

                    <Typography
                      sx={{
                        color: "text.secondary",
                        mt: 2,
                        lineHeight: 1.7,
                      }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <ProjectsSection />

        <Box
          id="contact"
          component="section"
          sx={{
            my: { xs: 8, md: 12 },
            p: { xs: 4, md: 7 },
            textAlign: "center",
            borderRadius: 4,
            background:
              "linear-gradient(135deg, rgba(124,58,237,0.22), rgba(6,182,212,0.12))",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 800,
            }}
          >
            Let&apos;s build something meaningful.
          </Typography>

          <Typography
            sx={{
              color: "text.secondary",
              mt: 2,
              fontSize: "1.1rem",
            }}
          >
            Explore our engineering work or get in touch to discuss an idea.
          </Typography>

          <Button
            variant="contained"
            size="large"
            sx={{ mt: 4 }}
            href="mailto:contact@techforensiqo.com"
          >
            Contact TechForensiqo
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default HomePage;
