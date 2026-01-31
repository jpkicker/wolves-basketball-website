// Team announcements data for Wellington Wolves 17u Elite
// Update this file to add or modify announcements
// Announcements are displayed in reverse chronological order (newest first)

export const announcements = [
  {
    id: 1,
    date: "2026-01-15",
    title: "Welcome to the 2026 Season!",
    content: "We're excited to announce our transition to Wellington Wolves 17u Elite as a Puma NXTpro team! This season brings new opportunities for high-level competition and exposure across the country.",
    category: "Team News"
  },
  {
    id: 2,
    date: "2026-01-20",
    title: "2026 Tournament Schedule Released",
    content: "Our 2026 tournament schedule is now available on the Travel page. This season includes multiple NXTpro circuit events, HOOPSEEN showcases, and the prestigious Best of the South tournament.",
    category: "Schedule"
  },
  {
    id: 3,
    date: "2026-01-28",
    title: "Hotel Booking for Providence Event",
    content: "Hotel booking is now open for our April 11-13 NXTpro event in Providence, RI. Please book through Event Connect using the link on the Travel page. Early booking is recommended!",
    category: "Travel"
  }
];

// Helper function to format date
export const formatDate = (dateString) => {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
};

// Category colors for badges
export const categoryColors = {
  "Team News": { bg: "#001f3f", text: "#ffd700" },
  "Schedule": { bg: "#2e7d32", text: "#ffffff" },
  "Travel": { bg: "#1565c0", text: "#ffffff" },
  "Roster": { bg: "#7b1fa2", text: "#ffffff" },
  "General": { bg: "#616161", text: "#ffffff" }
};
