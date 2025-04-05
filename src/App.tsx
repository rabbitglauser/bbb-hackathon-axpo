import React, {useState} from "react";
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
    Visibility,
    VisibilityOff,
    Delete,
    Close,
} from "@mui/icons-material";
import {ThemeProvider, createTheme} from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Arial, sans-serif",
    },
});

const moodDescriptions = {
    "😢": "You seem sad. It's okay to feel this way, and talking to someone might help!",
    "😐": "You're feeling neutral. Not great, not bad—just in between!",
    "😲": "Surprised! Something unexpected must have happened!",
    "😄": "You're happy! Keep that positive energy going!",
    "🤩": "Super excited! Something amazing must have happened!"
};

interface MoodCard {
    id: number;
    mood: string;
    visible: boolean;
    selected: boolean;
}

const MoodTracker = () => {
    const [moodCards, setMoodCards] = useState<MoodCard[]>([]);
    const [nextId, setNextId] = useState(1);

    const handleEmojiClick = (emoji: string) => {
        const moodExists = moodCards.find((card) => card.mood === emoji);
        if (!moodExists) {
            setMoodCards([
                ...moodCards,
                {id: nextId, mood: emoji, visible: true, selected: false},
            ]);
            setNextId(nextId + 1);
        }
    };

    const toggleVisibility = (id: number) => {
        setMoodCards((prev) =>
            prev.map((card) =>
                card.id === id ? {...card, visible: !card.visible} : card
            )
        );
    };

    const toggleSelect = (id: number) => {
        setMoodCards((prev) =>
            prev.map((card) =>
                card.id === id ? {...card, selected: !card.selected} : card
            )
        );
    };

    const deleteCard = (id: number) => {
        setMoodCards((prev) => prev.filter((card) => card.id !== id));
    };

    const deleteSelectedCards = () => {
        setMoodCards((prev) => prev.filter((card) => !card.selected));
    };

    return (
        <ThemeProvider theme={theme}>
            <Box
                sx={{
                    flex: 1,
                    overflowY: "auto",
                    padding: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    background: "linear-gradient(to bottom right, #ffc0cb, #4b0082)", // Added background color
                    minHeight: "100vh", // Ensure the background covers the entire page
                }}
            >
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        alignItems: "center",
                        marginBottom: 2,
                    }}
                >
                    <Button
                        onClick={deleteSelectedCards}
                        variant="contained"
                        sx={{
                            backgroundColor: "#ff6f00",
                            '&:hover': {
                                backgroundColor: "#e65c00",
                            },
                            position: "relative",
                        }}
                    >
                        <Typography
                            sx={{
                                color: "white",
                                fontSize: "12px",
                                textTransform: "uppercase",
                                border: "1px solid orange",
                                padding: "0 8px",
                                marginRight: "8px",
                            }}
                        >
                            Reject All
                        </Typography>
                        <Close/>
                    </Button>
                </Box>
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
                                justifyContent: "space-between",
                                alignItems: "center",
                                marginBottom: 2,
                            }}
                        >
                            {["😢", "😐", "😲", "😄", "🤩"].map((emoji, index) => (
                                <Box
                                    key={index}
                                    onClick={() => handleEmojiClick(emoji)}
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
                        <Box
                            sx={{
                                marginTop: 2,
                            }}
                        >
                            <input
                                type="text"
                                placeholder="Type your message here"
                                style={{
                                    width: "100%",
                                    padding: "8px",
                                    fontSize: "14px",
                                    borderRadius: "4px",
                                    border: "1px solid #ccc",
                                    marginBottom: "16px",
                                }}
                            />
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
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
                        </Box>
                    </CardContent>
                </Card>
                {moodCards.map((card) => (
                    card.visible && (
                        <Card
                            key={card.id}
                            sx={{
                                width: "100%",
                                maxWidth: 400,
                                marginTop: 2,
                                padding: 2,
                                background: "linear-gradient(to right, #ff7e5f, #feb47b)",
                                color: "white",
                                borderRadius: 4,
                                display: "flex",
                                flexDirection: "column",
                            }}
                        >
                            <CardContent>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexDirection: "column",
                                        justifyContent: "space-between",
                                        alignItems: "center",
                                    }}
                                >
                                    <Button
                                        variant="contained"
                                        onClick={deleteSelectedCards}
                                        sx={{
                                            backgroundColor: "#ff6f00",
                                            '&:hover': {
                                                backgroundColor: "#e65c00",
                                            },
                                            marginBottom: 2,
                                        }}
                                    >
                                        Reject
                                    </Button>
                                    <Box
                                        sx={{
                                            display: "flex",
                                            justifyContent: "space-between",
                                            alignItems: "center",
                                            width: "100%",
                                        }}
                                    >
                                        <Typography
                                            variant="h4"
                                            onClick={() => toggleSelect(card.id)}
                                            sx={{
                                                cursor: "pointer",
                                                color: card.selected ? "#4caf50" : "white",
                                                flexGrow: 1,
                                                textAlign: "center",
                                            }}
                                        >
                                            {card.mood}
                                        </Typography>
                                        <Box>
                                            <IconButton
                                                onClick={() => toggleVisibility(card.id)}
                                                color="inherit"
                                            >
                                                {card.visible ? <Visibility/> : <VisibilityOff/>}
                                            </IconButton>
                                            <IconButton
                                                onClick={() => deleteCard(card.id)}
                                                color="inherit"
                                            >
                                                <Delete/>
                                            </IconButton>
                                        </Box>
                                    </Box>
                                </Box>
                                <Typography sx={{textAlign: "center"}}>
                                    {moodDescriptions[card.mood as keyof typeof moodDescriptions]}
                                </Typography>
                            </CardContent>
                        </Card>
                    )
                ))}
            </Box>
            <Box
                sx={{
                    width: "100%",
                    backgroundColor: "#e65c00",
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
                <IconButton color="inherit" sx={{padding: 1.5}}>
                    <SentimentSatisfied className="text-4xl" />
                </IconButton>
                <IconButton color="inherit" sx={{padding: 1.5}}>
                    <Home className="text-4xl" />
                </IconButton>
                <IconButton color="inherit" sx={{padding: 1.5}}>
                    <Message className="text-9xl" />
                </IconButton>
            </Box>
        </ThemeProvider>
    );
};

export default MoodTracker;