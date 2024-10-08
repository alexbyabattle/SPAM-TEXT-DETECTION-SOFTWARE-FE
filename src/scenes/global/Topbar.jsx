import { Box, IconButton, useTheme } from "@mui/material";
import { useContext  , useState } from "react";
import { ColorModeContext, tokens } from "../../theme";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import { Logout } from "@mui/icons-material";
import SignOutDialog from "../Authentication/SignOutDialog";

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  

  const [logoutDialogOpen, setLogoutDialogOpen] = useState(false);

  const handleLogoutDialogOpen = () => {
    setLogoutDialogOpen(true);
  };

  const handleLogoutDialogClose = () => {
    setLogoutDialogOpen(false);
  };

  const handleLogoutConfirm = () => {
    // Close the logout dialog
    setLogoutDialogOpen(false);
  };   


  return (
    <>
      <Box display="flex" justifyContent="space-between" p={2}>
       
         {/* SEARCH BAR */}
        <Box
          display="flex"
          backgroundColor={colors.primary[400]}
          borderRadius="3px"
        >
         
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === "dark" ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          
          <IconButton>
            <PersonOutlinedIcon />
          </IconButton>
          <IconButton onClick={handleLogoutDialogOpen}>
            <Logout />
          </IconButton>
        </Box>
      </Box>

      {/* Logout Dialog */}
      <SignOutDialog
        open={logoutDialogOpen}
        onClose={handleLogoutDialogClose}
        onConfirm={handleLogoutConfirm}
        setLogoutDialogOpen={setLogoutDialogOpen} // Pass setLogoutDialogOpen as a prop
      />
    </>
  );
};

export default Topbar;
