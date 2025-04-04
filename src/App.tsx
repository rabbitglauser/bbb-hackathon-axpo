import React from "react";
import {
    Button,
    Card,
    CardContent,
    Typography,
    IconButton,
    Box,
    Avatar,
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
                    position: "relative",
                    paddingBottom: "56px",
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
                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            <Avatar
                                sx={{
                                    background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                                    marginRight: 1,
                                }}
                            >
                                <SentimentSatisfied />
                            </Avatar>
                            <Typography variant="h6" fontWeight="bold">
                                MOODIIS
                            </Typography>
                        </Box>
                    </Box>

                    {/* Main Content */}
                    <Card
                        sx={{
                            width: "100%",
                            maxWidth: 400,
                            height: 250,
                            marginTop: 4,
                            padding: 2,
                            background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                            color: "white",
                            borderRadius: 4,
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <CardContent
                            sx={{
                                display: "flex",
                                flexDirection: "column",
                                flexGrow: 1,
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    alignItems: "center",
                                    marginBottom: 2,
                                }}
                            >
                                {["😢", "😐", "😲", "😄", "🤩"].map((emoji, index) => (
                                    <Box
                                        key={index}
                                        onClick={() => console.log(`Clicked on ${emoji}`)}
                                        sx={{
                                            fontSize: "2rem",
                                            cursor: "pointer",
                                            transition: "transform 0.2s",
                                            '&:hover': {
                                                transform: "scale(1.2)",
                                            },
                                        }}
                                    >
                                        {emoji}
                                    </Box>
                                ))}
                            </Box>

                            <Typography>
                                Möchtest du uns etwas mitteilen?
                            </Typography>

                            <Box sx={{ flexGrow: 1 }} />

                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    marginTop: 2,
                                }}
                            >
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#ff6f00",
                                        '&:hover': {
                                            backgroundColor: "#e65c00",
                                        },
                                    }}
                                >
                                    NEED HELP?
                                </Button>
                                <Button
                                    variant="contained"
                                    sx={{
                                        backgroundColor: "#ff6f00",
                                        '&:hover': {
                                            backgroundColor: "#e65c00",
                                        },
                                    }}
                                >
                                    SUBMIT
                                </Button>
                            </Box>
                        </CardContent>
                    </Card>
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
                        position: "fixed",
                        bottom: 0,
                        left: 0,
                        zIndex: 1000,
                    }}
                >
                    <IconButton color="inherit" sx={{ padding: 1.5 }}>
                        <SentimentSatisfied fontSize="large" />
                    </IconButton>
                    <IconButton color="inherit" sx={{ padding: 1.5 }}>
                        <Home fontSize="large" />
                    </IconButton>
                    <IconButton color="inherit" sx={{ padding: 1.5 }}>
                        <Message fontSize="large" />
                    </IconButton>
                </Box>
            </Box>
        </ThemeProvider>
    );
};

export default MoodTracker;