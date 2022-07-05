import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import ListIcon from "@mui/icons-material/List";
import SearchIcon from "@mui/icons-material/TravelExplore";
import PageBuscaPokemon from "../../pages/PageBuscaPokemon/PageBuscaPokemon";
import PageListaPokemon from "../../pages/PageListaPokemon/PageListaPokemon";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const drawerWidth = 240;

export default function Home() {
  return (
    <Router>
      <Box sx={{ display: "flex" }}>
        <AppBar
          position="fixed"
          sx={{
            width: `calc(100% - ${drawerWidth}px)`,
            ml: `${drawerWidth}px`,
          }}
        >
          <Toolbar>
            <Typography variant="h6" noWrap component="div">
              PokeDex do M4goth
            </Typography>
          </Toolbar>
        </AppBar>
        <Drawer
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            "& .MuiDrawer-paper": {
              width: drawerWidth,
              boxSizing: "border-box",
            },
          }}
          variant="permanent"
          anchor="left"
        >
          <Toolbar />
          <Divider />
          <List>
            <ListItem key={"Buscar Pokemon"} disablePadding>
              <ListItemButton component={Link} to="busca-de-pokemons">
                <ListItemIcon>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary={"Buscar Pokemon"} />
              </ListItemButton>
            </ListItem>
            <ListItem key={"Listar Pokemon"} disablePadding>
              <ListItemButton component={Link} to="">
                <ListItemIcon>
                  <ListIcon />
                </ListItemIcon>
                <ListItemText primary={"Listar Pokemon"} />
              </ListItemButton>
            </ListItem>
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{ flexGrow: 1, bgcolor: "background.default", p: 3 }}
        >
          <Toolbar />
          <div className="App">
            {/* <img alt="" src="https://logodownload.org/wp-content/uploads/2017/08/pokemon-logo-0.png" /> */}
            <Routes>
              <Route
                path="busca-de-pokemons"
                element={<PageBuscaPokemon />}
              ></Route>
              <Route path="" element={<PageListaPokemon />}></Route>
            </Routes>
          </div>
        </Box>
      </Box>
    </Router>
  );
}
