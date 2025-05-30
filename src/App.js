import React from 'react';
import { Box, Typography, Grid, Paper, IconButton } from "@mui/material";
import { FaWhatsapp } from "react-icons/fa";
import kaiqueFoto from './kaique_foto.jpg'

const whatsappNumber = '553599705297';

function App() {
  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "primary.dark", color: "text.primary", display: "flex", flexDirection: "column" }}>
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
            bgcolor: "background.dark",
            color: "white",
            py: 2,
            px: 2,
            boxShadow: 2,
            display: "flex",
          }}
        >
          <Box flex={1} display="flex" flexDirection="column"></Box>
          <Box flex={11} mx="auto">
            <Typography variant="h4" fontWeight="bold" color="text.dark">
              Dr. Kaique Arriel
            </Typography>
            <Typography variant="subtitle1" color="text.dark">
              Dermatologia Clínica, Estética e Cirúrgica.
            </Typography>
          </Box>
        </Box>

        {/* CONTEÚDO PRINCIPAL */}
        <Box
          component="main"
          sx={{
            bgcolor: "background.dark",
            flex: 1,
            px: 2,
            py: 4,
            width: "100%",
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            gap: 4,
          }}
        >
          <Box
            sx={{
              //maxWidth: "1200px",
              mx: "auto",
              flexDirection: { xs: "column", md: "row" },
              gap: 4,
              flex: 1,
              display: "flex",
              alignItems: "center",     // centraliza verticalmente
              justifyContent: "center", // opcional: centraliza horizontalmente
            }}
          >

            <Box flex={1} display="flex" flexDirection="column"></Box>
            <Box flex={2} display="flex" flexDirection="column">
              <Typography variant="h3" color="text.dark" fontWeight="600" gutterBottom>
                Cuidado com a sua pele em boas mãos
              </Typography>
              <Typography variant="body1" color="text.dark" mb={3}>
                Atendimento personalizado com excelência em dermatologia.
              </Typography>

              <Box sx={{ display: "flex", alignItems: "center", mt: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    bgcolor: "background.dark",
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


            <Box flex={2} display="flex" justifyContent="center" alignItems="center">
              <Box
                component="img"
                src={kaiqueFoto}
                alt="Dr. Kaique Arriel"
                sx={{
                  borderRadius: 2,
                  boxShadow: 3,
                  maxWidth: 300,
                  height: "auto",
                }}
              />
            </Box>


          </Box>
        </Box>

        {/* SERVIÇOS */}
        <Box
          sx={{
            bgcolor: "background.dark",
            px: 2,
            py: 4,
            width: "100%",
          }}
        >
          <Grid container display="flex" justifyContent={'center'} spacing={3} >
            <Grid item xs={12} sx={{ width: "320px" }}>
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

            <Grid item xs={12} sx={{ width: "320px" }}>
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

            <Grid item xs={12} sx={{ width: "320px" }}>
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
            bgcolor: "background.dark",
            color: "text.dark",
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
