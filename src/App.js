import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import kaiqueFoto from './kaique_foto.jpg'

const whatsappNumber = '5535984280547';

function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "white", color: "text.primary", display: "flex", flexDirection: "column" }}>
      <Box
        sx={{
          minHeight: "100vh",
          bgcolor: "white",
          color: "text.primary",
          display: "flex",
          flexDirection: "column",
        }}
      >
        {/* HEADER */}
        <Box
          component="header"
          sx={{
            bgcolor: "primary.dark",
            color: "white",
            py: 2,
            px: 2,
            boxShadow: 2,
          }}
        >
          <Box maxWidth="1200px" mx="auto">
            <Typography variant="h4" fontWeight="bold">
              Dr. Kaique Arriel
            </Typography>
            <Typography variant="subtitle1">
              Dermatologia Clínica, Estética e Cirúrgica
            </Typography>
          </Box>
        </Box>

        {/* CONTEÚDO PRINCIPAL */}
        <Box
          component="main"
          sx={{
            flex: 1,
            maxWidth: "1200px",
            mx: "auto",
            px: 2,
            py: 4,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box
            sx={{
              flex: 1,
              display: "flex",
              alignItems: "center",     // centraliza verticalmente
              justifyContent: "center", // opcional: centraliza horizontalmente
            }}
          >


            <Box>
              <Typography variant="h3" fontWeight="600" gutterBottom>
                Cuidado com a sua pele em boas mãos
              </Typography>
              <Typography variant="body1" color="text.secondary" mb={3}>
                Atendimento personalizado com excelência em dermatologia.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    bgcolor: "primary.dark",
                    color: "white",
                    px: 3,
                    py: 1.5,
                    borderRadius: 10,
                    boxShadow: 3,
                    transition: "transform 0.2s, box-shadow 0.2s",
                    "&:hover": {
                      transform: "scale(1.03)",
                      boxShadow: 6,
                    },
                  }}
                  component="a"
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Olá, gostaria de agendar uma consulta.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaWhatsapp size={24} color="white" />
                  <Typography variant="subtitle1" fontWeight="600">
                    Agende sua consulta pelo WhatsApp
                  </Typography>
                </Box>
              </Box>

            </Box>




          </Box>


          <Box flex={1} display="flex" justifyContent="center" alignItems="center">
            <Box
              component="img"
              src={kaiqueFoto}
              alt="Dr. Kaique Arriel"
              sx={{
                borderRadius: 2,
                boxShadow: 3,
                maxWidth: 300,
                width: "100%",
                height: "auto",
              }}
            />
          </Box>
        </Box>

        {/* SERVIÇOS */}
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            px: 2,
            py: 4,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={12} md={2} sx={{ maxWidth: "350px", mx: "auto" }}>
              <Paper
                elevation={1}
                sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper" }}
              >
                <Typography variant="h6" color="primary" fontWeight="600" mb={1}>
                  Dermatologia Clínica
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Tratamento de acne, rosácea, dermatites, psoríase e outras condições da pele.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={2} sx={{ maxWidth: "350px", mx: "auto" }}>
              <Paper
                elevation={1}
                sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper" }}
              >
                <Typography variant="h6" color="primary" fontWeight="600" mb={1}>
                  Dermatologia Estética
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Toxina botulínica, preenchimentos, lasers e rejuvenescimento.
                </Typography>
              </Paper>
            </Grid>

            <Grid item xs={12} md={2} sx={{ maxWidth: "350px", mx: "auto" }}>
              <Paper
                elevation={1}
                sx={{ p: 3, borderRadius: 2, bgcolor: "background.paper" }}
              >
                <Typography variant="h6" color="primary" fontWeight="600" mb={1}>
                  Cirurgias Dermatológicas
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Remoção de lesões benignas, biópsias e outros procedimentos.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Box>

        {/* FOOTER */}
        <Box
          component="footer"
          sx={{
            bgcolor: "primary.dark",
            color: "white",
            textAlign: "center",
            py: 2,
            fontSize: "0.875rem",
          }}
        >
          &copy; {new Date().getFullYear()} Dr. Kaique Arriel. Todos os direitos reservados.
        </Box>
      </Box>
    </Box>
  );
}

export default App;
