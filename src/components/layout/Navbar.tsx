import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  Typography,
} from "@mui/material";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

function Navbar() {
  return (
    <AppBar
      position="sticky"
      elevation={0}
      sx={{
        backgroundColor: "rgba(11, 16, 32, 0.88)",
        backdropFilter: "blur(12px)",
        borderBottom: "1px solid rgba(255, 255, 255, 0.08)",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters sx={{ minHeight: 72 }}>
          <Typography
            component="a"
            href="#home"
            variant="h6"
            sx={{
              fontWeight: 800,
              flexGrow: 1,
              color: "inherit",
              textDecoration: "none",
              letterSpacing: "-0.5px"
            }}>
            TechForensiqo
          </Typography>

          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
            {navItems.map((item) => (
              <Button
                key={item.label}
                color="inherit"
                href={item.href}
                sx={{ fontWeight: 600 }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Navbar;
