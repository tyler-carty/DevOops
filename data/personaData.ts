import { MantineColor } from '@mantine/core';

export interface HealthMetric {
  metric: string;
  value: number; // Assuming a scale, e.g., 0-100 or similar for radar chart
}

export interface MicroGoal {
  id: string;
  text: string;
  reason: string; // "Why this helps?" text
  category: 'Wellbeing' | 'Career Aspirations' | 'Financial Goals';
}

export interface PersonaData {
  name: string;
  description: string;
  currentInsight: string; // e.g., "Recent good sleep quality"
  healthMetrics: HealthMetric[];
  suggestedGoals: MicroGoal[];
  moodLog?: { mood: string; timestamp: Date }[]; // Optional mood history
}

// Stub data for one persona
export const samiraData: PersonaData = {
  name: 'Samira',
  description: 'Young Adult with Mild Anxiety',
  currentInsight: 'Slight improvement in sleep consistency detected.',
  healthMetrics: [
    { metric: 'Sleep Quality', value: 75 },
    { metric: 'Stress Levels', value: 60 },
    { metric: 'Activity', value: 50 },
    { metric: 'Mindfulness', value: 80 },
    { metric: 'Focus', value: 65 },
  ],
  suggestedGoals: [
    {
      id: 's1',
      text: 'Try a 5-minute guided breathing exercise.',
      reason: 'Helps calm the nervous system and reduce immediate feelings of anxiety.',
      category: 'Wellbeing',
    },
    {
      id: 's2',
      text: 'Browse part-time job listings online for 15 minutes.',
      reason: 'Exploring options can build confidence and open doors to financial independence.',
      category: 'Career Aspirations',
    },
     {
      id: 's3',
      text: 'Track spending for one day (5 mins).',
      reason: 'Understanding where money goes is the first step to managing it better.',
      category: 'Financial Goals',
    },
  ],
  moodLog: [],
};

// --- JAVIER ---
export const javierData: PersonaData = {
  name: 'Javier',
  description: 'Gen Z Student with Academic/Financial Stress',
  currentInsight: 'Heart rate variability shows a slightly calmer period this morning.',
  healthMetrics: [
    { metric: 'Sleep Quality', value: 55 },
    { metric: 'Stress Levels', value: 80 }, // High stress
    { metric: 'Activity', value: 40 }, // Low activity
    { metric: 'Mindfulness', value: 45 },
    { metric: 'Focus', value: 50 },     // Difficulty focusing
  ],
  suggestedGoals: [
    {
      id: 'j1',
      text: 'Review finances & create a simple budget for 15 mins.',
      reason: 'Feeling in control of finances can reduce overall stress.',
      category: 'Financial Goals',
    },
    {
      id: 'j2',
      text: 'Research one skill needed for a desired future job (15 mins).',
      reason: 'Connecting studies to career goals can increase motivation.',
      category: 'Career Aspirations',
    },
    {
      id: 'j3',
      text: 'Take a 10-minute walk outside between study sessions.',
      reason: 'Physical activity helps manage stress and improves focus.',
      category: 'Wellbeing',
    },
  ],
  moodLog: [],
};

// --- AISHA ---
export const aishaData: PersonaData = {
  name: 'Aisha',
  description: 'Young Adult with Sleep Issues & Low Activity',
  currentInsight: 'Achieved your step goal yesterday afternoon!',
  healthMetrics: [
    { metric: 'Sleep Quality', value: 40 }, // Poor sleep
    { metric: 'Stress Levels', value: 55 },
    { metric: 'Activity', value: 35 }, // Low activity
    { metric: 'Mindfulness', value: 60 },
    { metric: 'Focus', value: 70 },
  ],
  suggestedGoals: [
    {
      id: 'a1',
      text: 'Set a reminder for a consistent wind-down routine tonight.',
      reason: 'Consistent routines improve sleep quality over time.',
      category: 'Wellbeing',
    },
    {
      id: 'a2',
      text: 'Identify one online course related to your interests (10 mins).',
      reason: 'Exploring learning opportunities can spark career ideas.',
      category: 'Career Aspirations',
    },
    {
      id: 'a3',
      text: 'Compare two different savings accounts online (15 mins).',
      reason: 'Understanding savings options supports long-term financial health.',
      category: 'Financial Goals',
    },
  ],
  moodLog: [],
};

// --- KOFI ---
export const kofiData: PersonaData = {
  name: 'Kofi',
  description: 'Young Professional Experiencing Burnout',
  currentInsight: 'You had more deep sleep last night.',
  healthMetrics: [
    { metric: 'Sleep Quality', value: 65 }, // Improving sleep?
    { metric: 'Stress Levels', value: 75 }, // Still high stress
    { metric: 'Activity', value: 60 },
    { metric: 'Mindfulness', value: 50 },
    { metric: 'Focus', value: 55 },     // Burnout affects focus
  ],
  suggestedGoals: [
    {
      id: 'k1',
      text: 'Schedule a 15-minute break away from your desk today.',
      reason: 'Regular breaks combat fatigue and prevent burnout.',
      category: 'Wellbeing',
    },
    {
      id: 'k2',
      text: 'Update one section of your LinkedIn profile or CV (15 mins).',
      reason: 'Keeping professional profiles current supports career growth.',
      category: 'Career Aspirations',
    },
    {
      id: 'k3',
      text: 'Review your pension contributions or options (10 mins).',
      reason: 'Planning for the future contributes to financial security.',
      category: 'Financial Goals',
    },
  ],
  moodLog: [],
};

// --- AHMED ---
export const ahmedData: PersonaData = {
  name: 'Ahmed',
  description: 'Night Shift Worker with Circadian Disruption',
  currentInsight: 'Activity levels were consistent during your shift.',
  healthMetrics: [
    { metric: 'Sleep Quality', value: 45 }, // Disrupted sleep
    { metric: 'Stress Levels', value: 65 },
    { metric: 'Activity', value: 70 }, // Active during shift
    { metric: 'Mindfulness', value: 55 },
    { metric: 'Focus', value: 60 },
  ],
  suggestedGoals: [
    {
      id: 'ah1',
      text: 'Ensure your bedroom is completely dark for daytime sleep.',
      reason: 'Darkness promotes melatonin production needed for sleep.',
      category: 'Wellbeing',
    },
    {
      id: 'ah2',
      text: 'Look up certifications relevant to your field (15 mins).',
      reason: 'Professional development can lead to career advancement.',
      category: 'Career Aspirations',
    },
    {
      id: 'ah3',
      text: 'Check your credit score using a free service (10 mins).',
      reason: 'Knowing your credit score is important for financial opportunities.',
      category: 'Financial Goals',
    },
  ],
  moodLog: [],
};

// --- LI WEI ---
export const liweiData: PersonaData = {
  name: 'Li Wei',
  description: 'Health Conscious Young Adult (Control)',
  currentInsight: 'Consistent high sleep quality recorded this week.',
  healthMetrics: [
    { metric: 'Sleep Quality', value: 90 }, // High metrics
    { metric: 'Stress Levels', value: 30 },
    { metric: 'Activity', value: 85 },
    { metric: 'Mindfulness', value: 75 },
    { metric: 'Focus', value: 80 },
  ],
  suggestedGoals: [
    {
      id: 'lw1',
      text: 'Try a 10-minute meditation or mindfulness exercise.',
      reason: 'Maintaining mental wellbeing complements physical health.',
      category: 'Wellbeing',
    },
    {
      id: 'lw2',
      text: 'Read an article about industry trends in your field (15 mins).',
      reason: 'Staying informed supports long-term career relevance.',
      category: 'Career Aspirations',
    },
    {
      id: 'lw3',
      text: 'Research ethical investment options for 15 minutes.',
      reason: 'Aligning finances with values can be rewarding.',
      category: 'Financial Goals',
    },
  ],
  moodLog: [],
};

// We can add more personas later
// export const javierData: PersonaData = { ... }; // Remove this comment line

export const personas: { [key: string]: PersonaData } = {
  samira: samiraData,
  javier: javierData,   // Add Javier
  aisha: aishaData,     // Add Aisha
  kofi: kofiData,       // Add Kofi
  ahmed: ahmedData,     // Add Ahmed
  liwei: liweiData,     // Add Li Wei
};

// Define potential moods and their associated colors (adjust as needed)
export const moodOptions: { mood: string; color: MantineColor }[] = [
  { mood: 'Happy', color: 'green' },
  { mood: 'Calm', color: 'blue' },
  { mood: 'Neutral', color: 'gray' },
  { mood: 'Anxious', color: 'orange' },
  { mood: 'Sad', color: 'indigo' },
  { mood: 'Stressed', color: 'red' },
]; 