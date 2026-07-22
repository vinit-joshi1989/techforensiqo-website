import { Box, Container, Link, Stack, Typography } from "@mui/material";

function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        backgroundColor: "rgba(7,11,23,0.92)",
        py: 5,
      }}
    >
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={3}
          sx={{
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" }
          }}>
          <Box>
            <Typography variant="h6" sx={{
              fontWeight: 800
            }}>
              TechForensiqo
            </Typography>

            <Typography
              sx={{
                color: "text.secondary",
                mt: 1
              }}>
              Enterprise software, cloud engineering, and AI solutions.
            </Typography>
          </Box>

          <Stack direction="row" spacing={3}>
            <Link
              href="https://github.com/vinit-joshi1989"
              target="_blank"
              rel="noreferrer"
              underline="hover"
              sx={{
                color: "text.secondary"
              }}
            >
              GitHub
            </Link>

            <Link
              href="mailto:contact@techforensiqo.com"
              underline="hover"
              sx={{
                color: "text.secondary"
              }}
            >
              Email
            </Link>
          </Stack>
        </Stack>

        <Typography
          variant="body2"
          sx={{
            color: "text.secondary",
            mt: 4,
            pt: 3,
            borderTop: "1px solid rgba(255,255,255,0.06)"
          }}>
          © {new Date().getFullYear()} TechForensiqo. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
