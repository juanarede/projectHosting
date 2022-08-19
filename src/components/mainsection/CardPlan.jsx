import React from "react";
import {
  Box,
  Typography,
  Container,
  Grid,
  Card,
  Divider,
  Button,
  List,
  ListItem,
} from "@mui/material";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CheckIcon from "@mui/icons-material/Check";

import "./cardplan.css";

function CardPlan() {
  return (
    <>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            position: "relative",
            bottom: "7rem",
          }}
        >
          <Typography
            variant="h1"
            noWrap
            sx={{
              fontFamily: "'Bebas Neue', cursive",
              color: "#000",
              fontSize: { xs: "1rem", sm: "3rem" },
            }}
          >
            Selecciona el Plan que mas se ajuste a tu proyecto
          </Typography>
        </Box>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Grid
            container
            rowSpacing={1}
            columnSpacing={{ xs: 1, sm: 2, md: 3 }}
          >
            <Grid item xs={4}>
              <Card className="cardPremium">
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "'Bebas Neue', cursive",
                    paddingTop: "1rem",
                  }}
                >
                  Silver
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  paddingBottom="2rem"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: " 'Dosis', sans-serif",
                    paddingTop: "0rem",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the
                </Typography>
                <Divider />
                <Box paddingTop="2rem">
                  <Typography
                    variant="h4"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "'Bebas Neue', cursive",
                      paddingTop: "1rem",
                    }}
                  >
                    AR$ 99/mes
                  </Typography>
                  <Box
                    sx={{
                      paddingTop: "2rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      className="buttonHeader"
                      color="mycolor"
                    >
                      <ShoppingCartIcon /> Agregar al Carrito
                    </Button>
                  </Box>

                  <List>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>
                  </List>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card className="cardPremium1">
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "'Bebas Neue', cursive",
                    paddingTop: "1rem",
                  }}
                >
                  Premium
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  paddingBottom="2rem"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: " 'Dosis', sans-serif",
                    paddingTop: "0rem",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the
                </Typography>
                <Divider />
                <Box paddingTop="2rem">
                  <Typography
                    variant="h4"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "'Bebas Neue', cursive",
                      paddingTop: "1rem",
                    }}
                  >
                    AR$ 99/mes
                  </Typography>
                  <Box
                    sx={{
                      paddingTop: "2rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button variant="contained" className="buttonHeader">
                      <ShoppingCartIcon /> Agregar al Carrito
                    </Button>
                  </Box>
                  <List>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>
                  </List>
                </Box>
              </Card>
            </Grid>

            <Grid item xs={4}>
              <Card className="cardPremium">
                <Typography
                  variant="h4"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    fontFamily: "'Bebas Neue', cursive",
                    paddingTop: "1rem",
                  }}
                >
                  Gold
                </Typography>
                <Typography
                  variant="h6"
                  fontWeight="bold"
                  paddingBottom="2rem"
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    textAlign: "center",
                    fontFamily: " 'Dosis', sans-serif",
                    paddingTop: "0rem",
                  }}
                >
                  Lorem Ipsum is simply dummy text of the
                </Typography>
                <Divider />
                <Box paddingTop="2rem">
                  <Typography
                    variant="h4"
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      fontFamily: "'Bebas Neue', cursive",
                      paddingTop: "1rem",
                    }}
                  >
                    AR$ 99/mes
                  </Typography>
                  <Box
                    sx={{
                      paddingTop: "2rem",
                      display: "flex",
                      justifyContent: "center",
                    }}
                  >
                    <Button
                      variant="contained"
                      className="buttonHeader"
                      color="mycolor"
                    >
                      <ShoppingCartIcon /> Agregar al Carrito
                    </Button>
                  </Box>
                  <List>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>
                    </ListItem>
                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>

                    <ListItem
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                      }}
                    >
                      <Typography variant="subtitle1">
                        <CheckIcon className="listcheck" color="success" />
                        Lorem Ipsum is simply dummy simply du{" "}
                      </Typography>{" "}
                    </ListItem>
                  </List>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
}

export default CardPlan;
