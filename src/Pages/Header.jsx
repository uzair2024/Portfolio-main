import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const tabsData = [
  { to: "/", label: "Home" },
  { to: "./exp", label: "Experience" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/contact", label: "Get in Touch" },
];

const CustomTab = ({ to, label, isActive, onClick }) => (
  <Tab
    label={label}
    component={NavLink}
    to={to}
    onClick={onClick}
    style={{
      textDecoration: "none",
      color: isActive ? "blue" : "black",
    }}
  />
);

CustomTab.propTypes = {
  to: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

function Header() {
  const [activeTab, setActiveTab] = useState(0);
  const [drawerOpen, setDrawerOpen] = useState(false);

  const handleTabClick = (index) => {
    setActiveTab(index);
    setDrawerOpen(false);
  };

  const isMobile = useMediaQuery("(max-width:600px)");

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const drawerContent = (
    <List>
      {tabsData.map((tab, index) => (
        <ListItem
          key={index}
          button
          component={NavLink}
          to={tab.to}
          onClick={() => handleTabClick(index)}
        >
          <ListItemText primary={tab.label} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static" sx={{ bgcolor: "white" }}>
      <Toolbar>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="Blue"
              onClick={toggleDrawer}
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
              {drawerContent}
            </Drawer>
            <Box display="flex" justifyContent="center" width="100%">
              <Typography color="black" variant="h6">
                {tabsData[activeTab].label}
              </Typography>
            </Box>
          </>
        ) : (
          <Box display="flex" justifyContent="center" width="100%">
            <Tabs
              centered={!isMobile}
              scrollButtons={isMobile ? "auto" : true}
              value={activeTab}
            >
              {tabsData.map((tab, index) => (
                <CustomTab
                  key={index}
                  {...tab}
                  isActive={activeTab === index}
                  onClick={() => handleTabClick(index)}
                />
              ))}
            </Tabs>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Header;
