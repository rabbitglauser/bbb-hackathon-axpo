import React, { useState, useEffect } from 'react';
import {
    BookmarkIcon,
    HomeIcon,
    ChatBubbleLeftRightIcon,
    BookmarkSquareIcon,
    PlusCircleIcon,
} from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

interface NewsItem {
    id: number;
    title: string;
    description: string;
    date: string;
    tag: string;
    image?: string;
}

const newsData: NewsItem[] = [
    {
        id: 1,
        title: 'NEUER MITARBEITER MANUELLSON',
        description:
            'Lorem ipsum dolor sit amet, consectetur sadipscing elit, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.',
        date: '04/04/2025',
        tag: 'Neuigkeit',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Crystal_Project_bell.png/48px-Crystal_Project_bell.png',
    },
    {
        id: 2,
        title: 'NEUER MITARBEITER MANUELLSON 2',
        description:
            'Dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.',
        date: '05/04/2025',
        tag: 'Mitarbeiter',
        image: 'https://via.placeholder.com/60',
    },
    {
        id: 3,
        title: 'TEAMBUILDING EVENT 2025',
        description:
            'Einladung zum nächsten Teamevent! Anmeldung ab sofort möglich.',
        date: '06/04/2025',
        tag: 'Event',
        image: 'https://via.placeholder.com/60',
    },
    {
        id: 4,
        title: 'LEHRABSCHLUSS 2025',
        description:
            'Glückwunsch an alle, die ihre Lehre erfolgreich abgeschlossen haben! 🎉',
        date: '07/04/2025',
        tag: 'Neuigkeit',
        image: 'https://via.placeholder.com/60',
    },
    {
        id: 5,
        title: 'NEUE PROJEKTE 2025',
        description:
            'Ein Überblick über alle neuen Projekte der Lernenden.',
        date: '08/04/2025',
        tag: 'Projekt',
        image: 'https://via.placeholder.com/60',
    },
    {
        id: 6,
        title: 'SICHERHEIT AM ARBEITSPLATZ',
        description:
            'Sicherheitsupdate für alle Standorte – bitte lesen und bestätigen.',
        date: '09/04/2025',
        tag: 'Info',
        image: 'https://via.placeholder.com/60',
    },
];

const highlightText = (text: string, query: string) => {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    const parts = text.split(regex);
    return parts.map((part, i) =>
        regex.test(part) ? <span key={i} className="bg-yellow-300 text-black font-semibold">{part}</span> : part
    );
};

const NewsFeed: React.FC = () => {
    const [selectedTag, setSelectedTag] = useState<string>('Alle');
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [savedIds, setSavedIds] = useState<number[]>([]);
    const [isAdmin, setIsAdmin] = useState<boolean>(false);
    const [activeImage, setActiveImage] = useState<string | null>(null);
    const navigate = useNavigate();

    useEffect(() => {
        const saved = localStorage.getItem('savedNews');
        if (saved) {
            setSavedIds(JSON.parse(saved));
        }
        const userRole = localStorage.getItem('userRole');
        setIsAdmin(userRole === 'admin');
    }, []);

    const toggleSave = (id: number) => {
        const updated = savedIds.includes(id)
            ? savedIds.filter((savedId) => savedId !== id)
            : [...savedIds, id];
        setSavedIds(updated);
        localStorage.setItem('savedNews', JSON.stringify(updated));
    };

    const filteredNews = newsData.filter((item) => {
        const matchesTag = selectedTag === 'Alle' || item.tag === selectedTag;
        const matchesSearch =
            item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.description.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesTag && matchesSearch;
    });

    const tags = ['Alle', 'Neuigkeit', 'Mitarbeiter'];

    const displayedNews = selectedTag === 'Gespeichert'
        ? newsData.filter((item) => savedIds.includes(item.id))
        : filteredNews;

    return (
        <div className="min-h-screen bg-gradient-to-b from-[#FF5D64] via-[#F060C8] to-[#4545CF] text-white p-4 pb-28">
            {/* Header */}
            <header className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => navigate('/profil')}>
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png"
                        alt="Profil"
                        className="h-12 w-12 rounded-full object-cover"
                    />
                    <h1 className="text-2xl font-bold">NEWSII</h1>
                </div>
                {isAdmin && (
                    <button title="Neuer Beitrag">
                        <PlusCircleIcon className="h-8 w-8 text-white" />
                    </button>
                )}
            </header>

            {/* Weitere Inhalte folgen hier */}
        </div>
    );
};

export default NewsFeed;

