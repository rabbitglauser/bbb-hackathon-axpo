import React from "react";
import {
    Button,
    Card,
    CardContent,
    Typography,
    IconButton,
    Box,
} from "@mui/material";
import {
    CheckCircle,
    Home,
    Message,
    SentimentSatisfied,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Arial, sans-serif",
    },
});

const MoodTracker = () => {
    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    minHeight: "100vh",
                    background: "linear-gradient(to bottom right, #ffc0cb, #4b0082)",
                    backgroundSize: "cover",
                    position: "relative", // Needed for absolute positioning of children
                    paddingBottom: "56px", // Add padding to prevent content from being hidden behind the fixed navbar
                }}
            >
                {/* Scrollable content */}
                <Box
                    sx={{
                        flex: 1,
                        overflowY: "auto",
                        padding: 2,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                    }}
                >
                    {/* Header */}
                    <Box
                        sx={{
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            color: "white",
                            marginTop: 2,
                        }}
                    >
                        <Typography variant="h6" fontWeight="bold">
                            RECENT MOODIIS
                        </Typography>
                    </Box>

                    {/* Your main content would go here */}

                </Box>

                {/* Bottom Nav Bar - Fixed at bottom */}
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: "rgba(255, 255, 255, 0.2)",
                        backdropFilter: "blur(10px)",
                        padding: 2,
                        display: "flex",
                        justifyContent: "space-around",
                        alignItems: "center",
                        borderRadius: "16px 16px 0 0",
                        boxShadow: 3,
                        color: "white",
                        position: "fixed", // This makes it stick to the bottom
                        bottom: 0, // Positions it at the bottom
                        left: 0, // Ensures it spans the full width
                        zIndex: 1000, // Ensures it stays above other content
                    }}
                >
                    <IconButton color="inherit" sx={{ padding: 1.5 }}>
                        <SentimentSatisfied fontSize="medium" />
                    </IconButton>
                    <IconButton color="inherit" sx={{ padding: 1.5 }}>
                        <Home fontSize="medium" />
                    </IconButton>
                    <IconButton color="inherit" sx={{ padding: 1.5 }}>
                        <Message fontSize="medium" />
                    </IconButton>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default MoodTracker;