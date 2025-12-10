import { AppConfig } from './types';

// Set event date to December 13th, 2025 at 12:00 PM
const eventDate = new Date('2025-12-13T12:00:00');

export const config: AppConfig = {
  eventName: "XYZ Contest",
  organizer: "Model Club",
  tagline: "Compete. Create. Conquer.",
  eventDate: eventDate.toISOString(), 
  about: {
    title: "About XYZ Contest",
    description: "The XYZ Contest is the premier tech-innovation challenge hosted by Model Club. It serves as a battleground for aspiring developers, designers, and problem solvers. Participants will face real-world challenges designed to test their technical prowess and creative thinking. This is more than a competition; it's an opportunity to network, learn from industry leaders, and push your limits.",
    highlights: [
      { id: 1, text: "Open to all branches", icon: "Users" },
      { id: 2, text: "Team & Individual participation", icon: "UserPlus" },
      { id: 3, text: "Exciting rewards & certificates", icon: "Award" },
      { id: 4, text: "Guidance from seniors", icon: "Zap" },
    ]
  },
  rounds: [
    {
      id: 1,
      title: "Round 1: The Quiz",
      description: "A fast-paced online quiz testing your fundamental knowledge in logic, tech trends, and aptitude.",
      icon: "Brain",
      details: ["Duration: 45 Mins", "Mode: Online", "Top 50% advance"]
    },
    {
      id: 2,
      title: "Round 2: Case Study",
      description: "Dive deep into a real-world problem statement. Analyze, innovate, and present your solution to the judges.",
      icon: "Presentation",
      details: ["Duration: 2 Days", "Mode: Offline Presentation", "Jury Evaluation"]
    }
  ],
  prizes: [
    {
      id: 1,
      position: "Winner",
      amount: "₹15,000",
      description: "Cash Prize + Trophy + Merchandise",
      icon: "Trophy",
      color: "from-yellow-400 to-orange-500"
    },
    {
      id: 2,
      position: "Runner Up",
      amount: "₹10,000",
      description: "Cash Prize + Medal + Certificates",
      icon: "Medal",
      color: "from-gray-300 to-gray-400"
    },
    {
      id: 3,
      position: "2nd Runner Up",
      amount: "₹5,000",
      description: "Cash Prize + Medal + Certificates",
      icon: "Award",
      color: "from-orange-400 to-red-500"
    }
  ],
  timeline: [
    { id: 1, date: "Dec 01, 2025", title: "Registration Opens", description: "Portals open for all students." },
    { id: 2, date: "Dec 10, 2025", title: "Registration Closes", description: "Last day to form teams." },
    { id: 3, date: "Dec 13, 2025", title: "Round 1: Quiz", description: "Online elimination round starts." },
    { id: 4, date: "Dec 15, 2025", title: "Round 2: Grand Finale", description: "Case study presentations." },
    { id: 5, date: "Dec 16, 2025", title: "Results", description: "Winners announced." }
  ],
  faqs: [
    { id: 1, question: "Who can participate?", answer: "The contest is open to all students from any branch or year of study." },
    { id: 2, question: "Is it team or individual?", answer: "You can participate individually or in a team of up to 3 members." },
    { id: 3, question: "Is there any entry fee?", answer: "No, participation in the XYZ Contest is completely free." },
    { id: 4, question: "Will certificates be provided?", answer: "Yes, all participants get participation certificates, and winners get merit certificates plus prizes." }
  ],
  socials: {
    instagram: "https://instagram.com",
    linkedin: "https://linkedin.com",
    facebook: "https://facebook.com"
  }
};