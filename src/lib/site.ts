export const img = (file: string) => `/images/${file}`;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/service" },
  { label: "Contact", href: "/contact" },
];

export const contact = {
  phone: "+1 (555) 123-4567",
  inquiriesPhone: "(422) 820 820",
  email: "example@gmail.com",
  address: "123 Medical Plaza, Suite 200 New York, NY 10001",
};

export const icons = {
  flower: img("pVizI9EC88jfwtyQFTEQeZusFCU.svg"),
  flowerDark: img("O1tnocyvBNm6Zym1OQLf7n6GMk.svg"),
  flowerWhite: img("4iWcn6Q5ARX9Q0vQrxXLKSdg.svg"),
  flowerHero: img("plklp2N1xUUHOLUaylGgsRi7cA.svg"),
  stars: img("nBmS1U8s92WIveVNePAFLYYFODo.svg"),
  starsWhite: img("Acl1ppgvFjpXDaMWy2sV8Mlbvc.svg"),
  check: img("33XkLvjzWq064W4PyW5fi76S6Q.svg"),
  checkSmall: img("jpq8GOsuFZ96b3wLI5lPuVIVZic.svg"),
  trophy: img("KJCexy3qUvEVz5iT9ATSI9jsdzs.svg"),
  pin: img("aQQ6dXxPnranldxNFsTHZ4bNxLo.svg"),
  phone: img("lmPvhDEzGj26KRkahUIQWB6zro.svg"),
  mail: img("oOt7d4YZemIJT1ZMeLx7SzNJUc.svg"),
  phoneWhite: img("41scJeFj5Bf2cVSqFcxpMJKYTRU.svg"),
  mailWhite: img("rK86GL6i6pk4yHjr8s1iGGZfCrM.svg"),
  arrowLeft: img("cr3ihp8Vl3lI6CSb6vchKbFUQ.svg"),
  arrowRight: img("O9JrR7P3igJICzgs9ElLc9ZySjM.svg"),
  arrowUpRight: img("B3HBBiFLGX7liw28aT47hOxDC0.svg"),
  mapArrow: img("i7DMNfq2YXZPTlPv1kjFO4sk37k.svg"),
  pinWhite: img("GuHYGrj3j8hH3HwWiQT0wk8bP7Q.svg"),
  phoneRound: img("rPAAw0z9A1vhV6oK9BYWPWH4OM.svg"),
  chat: img("k4HnbM6JENO7U9uUIcOeao1yuo.svg"),
  calendar: img("bwvAkDUPwZOEIUwtt8Pt16la6NM.svg"),
  sparkle: img("Q4byTCZACT3SRq25spsgH2LM.svg"),
  badge: img("f1bwLBL0ZWOIKRZPcLihNcokU4.svg"),
  science: img("GwRCV6CJRYcW2ghnGbChO1KPB2w.svg"),
  shield: img("NO3zJ0Sz5Rrhdocpuef3VDzwgIU.svg"),
  care: img("0JMlgMvu6Ocvnd3RRtPplUxceD4.svg"),
};

export const socials = [
  { label: "Facebook", href: "https://www.facebook.com/", icon: img("JM69rVSFmUqMw1s8URxwnNBGgQ.svg") },
  { label: "YouTube", href: "https://www.youtube.com/", icon: img("9o3basN1aHCav7bKsVBa1Ebe2M.svg") },
  { label: "LinkedIn", href: "https://www.linkedin.com/", icon: img("eYA8Ol3J2rGL1d0d8c1yV8KhoY.svg") },
  { label: "Instagram", href: "https://www.instagram.com/", icon: img("gQJKkwx8BdWEmA363ESaphf8yU.svg") },
];

export const reviews = [
  {
    text: "The personalized approach made all the difference. They didn’t rush anything and created a plan that.",
    name: "Olivia Chen",
    role: "Creative Director",
    avatar: img("V40vRazc9cFurG60JnK0c85s.jpg"),
  },
  {
    text: "My acne finally cleared after years of trying everything. The treatment plan was simple, clear, and effective.",
    name: "Sofia Hale",
    role: "Actress",
    avatar: img("1EZhAxM1tjwLB5GmrjQlLPUMYjE.jpg"),
  },
  {
    text: "From consultation to follow-up, the care was exceptional. My skin texture and tone have improved noticeably.",
    name: "Daniel Brooks",
    role: "Entrepreneur",
    avatar: img("fVGs5CIQQvo8icbXPnJaqtruwZg.jpg"),
  },
];

export const shortReviews = [
  {
    text: "The doctors really listened to my concerns and explained every step.",
    name: "Sofia Hale",
    role: "Actress",
    avatar: img("LLgU7Wo4MxblkbiOwo1xZB1o7ig.jpg"),
  },
  {
    text: "I was nervous about aesthetic treatments, but the results look completely natural.",
    name: "Olivia Chen",
    role: "Creative Director",
    avatar: img("PyjMSo6pfuPNLWf9DUJPOOnxCng.jpg"),
  },
  {
    text: "Professional, clean clinic with advanced technology. The laser treatment was comfortable, and the results.",
    name: "Priya Mehta",
    role: "Product Manager",
    avatar: img("j6oC7YZz1cfpeQSnSeYsb7iddk4.jpg"),
  },
];

export const appointmentReviews = [
  {
    text: "My acne finally cleared after years of trying everything. The treatment plan was simple, clear, and actually worked.",
    name: "Sofia Hale",
    role: "Actress",
    avatar: img("1EZhAxM1tjwLB5GmrjQlLPUMYjE.jpg"),
  },
  {
    text: "The doctors really listened to my concerns and explained every step. My pigmentation has visibly improved.",
    name: "Emma Rodriguez",
    role: "Marketing Consultant",
    avatar: img("V40vRazc9cFurG60JnK0c85s.jpg"),
  },
  {
    text: "From consultation to follow-up, the care was exceptional. My skin texture and tone have improved noticeably in just a few weeks.",
    name: "Olivia Chen",
    role: "Entrepreneur",
    avatar: img("PyjMSo6pfuPNLWf9DUJPOOnxCng.jpg"),
  },
  {
    text: "I was nervous about aesthetic treatments, but the results look completely natural. Subtle, refreshed, and exactly what I wanted.",
    name: "Priya Mehta",
    role: "Product Manager",
    avatar: img("rmaNoowueaeJpAJe2LHvvrc60.jpg"),
  },
];

export const homeFaqs = [
  {
    q: "What treatment is right for my skin type?",
    a: "During your consultation, our dermatologist evaluates your skin concerns, goals, and medical history to recommend the most suitable treatment.",
  },
  {
    q: "How many sessions will I need?",
    a: "The number of sessions depends on your skin condition and chosen treatment. Most concerns show visible improvement within a few sessions.",
  },
  {
    q: "Are the procedures painful?",
    a: "Most treatments involve minimal discomfort. We use advanced techniques and numbing options to keep you comfortable throughout the procedure.",
  },
  {
    q: "Do you offer personalized treatment plans?",
    a: "Yes. Every treatment plan is personalized to your skin type, concerns, and long-term goals.",
  },
  {
    q: "What should I expect during my first visit?",
    a: "Your first visit includes a detailed skin assessment, expert consultation, and a personalized treatment plan tailored to your needs.",
  },
];

export const contactFaqs = [
  {
    q: "How do I book my first appointment?",
    a: "We begin with a detailed consultation to understand your concerns, skin history, and long-term goals.",
  },
  {
    q: "Do you offer free consultations?",
    a: "Yes. We offer a complimentary initial skin consultation where our specialists assess your concerns, discuss treatment options, and recommend a personalized plan—at no cost.",
  },
  {
    q: "What should I bring to my appointment?",
    a: "Please bring a valid ID, a list of current medications or skincare products you use, and any previous medical or skin treatment records if available. Arriving with clean skin (no makeup) is recommended.",
  },
  {
    q: "Are the procedures painful?",
    a: "Most treatments involve minimal discomfort. We use advanced techniques, cooling systems, and topical numbing when needed to ensure your comfort throughout the procedure.",
  },
];
