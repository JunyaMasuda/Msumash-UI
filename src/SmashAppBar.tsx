import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import {
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import { mode } from "./App";

export type SmashAppBarProps = {
  current: mode;
  setCurrent: (input: mode) => void;
};

const SmashAppBar = (props: SmashAppBarProps) => {
  const [isMenuOpen, setMenuOpen] = React.useState(false);

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            onClick={() => setMenuOpen(true)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            SMASH
          </Typography>
          <Button color="inherit">Login</Button>
          <Drawer
            anchor="left"
            open={isMenuOpen}
            onClose={() => setMenuOpen(false)}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    setMenuOpen(false);
                    props.setCurrent("home");
                  }}
                >
                  <ListItemText primary="HOME" />
                </ListItemButton>
              </ListItem>
              <Divider />
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    setMenuOpen(false);
                    props.setCurrent("match-maker");
                  }}
                >
                  <ListItemText primary="Match Maker" />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
export default SmashAppBar;
