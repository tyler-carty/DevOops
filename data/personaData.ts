import { MantineColor } from '@mantine/core';

export interface HealthMetric {
  metric: string;
  value: number; // Assuming a scale, e.g., 0-100 or similar for radar chart
}

export interface MicroGoal {
  id: string;
  text: string;
  reason: string; // "Why this helps?" text
  category: 'Wellbeing' | 'Productivity' | 'Finance' | 'Activity';
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
      id: 'g1',
      text: 'Try a 5-minute guided breathing exercise.',
      reason: 'Helps calm the nervous system and reduce feelings of anxiety.',
      category: 'Wellbeing',
    },
    {
      id: 'g2',
      text: 'Spend 10 minutes tidying one small area.',
      reason: 'A tidy space can reduce overwhelm and improve focus.',
      category: 'Productivity',
    },
     {
      id: 'g3',
      text: 'Go for a short 15-minute walk outside.',
      reason: 'Gentle movement and fresh air can boost mood and energy.',
      category: 'Activity',
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
      category: 'Finance',
    },
    {
      id: 'j2',
      text: 'Plan study blocks for one subject today (10 mins).',
      reason: 'Breaking down tasks makes academic work less daunting.',
      category: 'Productivity',
    },
    {
      id: 'j3',
      text: 'Take a 5-minute mindful breathing break.',
      reason: 'Helps manage immediate feelings of stress and overwhelm.',
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
      text: 'Do a 10-minute stretching routine.',
      reason: 'Gentle movement can boost energy and improve mood.',
      category: 'Activity',
    },
    {
      id: 'a2',
      text: 'Set a reminder for a consistent wind-down routine tonight.',
      reason: 'Consistent routines improve sleep quality over time.',
      category: 'Wellbeing',
    },
    {
      id: 'a3',
      text: 'Spend 15 minutes reading a book before bed (no screens).',
      reason: 'Reduces blue light exposure which can disrupt sleep.',
      category: 'Wellbeing',
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
      text: 'Identify one small work task to delegate or postpone.',
      reason: 'Reducing workload helps manage burnout symptoms.',
      category: 'Productivity',
    },
    {
      id: 'k3',
      text: 'Plan a relaxing activity for the weekend (10 mins).',
      reason: 'Anticipating leisure time can improve mood and motivation.',
      category: 'Wellbeing',
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
      text: 'Plan healthy meals/snacks for your next shift (15 mins).',
      reason: 'Consistent nutrition helps regulate energy on irregular schedules.',
      category: 'Wellbeing',
    },
    {
      id: 'ah3',
      text: 'Spend 10 minutes in bright light soon after waking.',
      reason: 'Helps reset your body clock and improve alertness.',
      category: 'Wellbeing',
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
      text: 'Try a new healthy recipe this week.',
      reason: 'Exploring variety keeps healthy eating enjoyable.',
      category: 'Wellbeing',
    },
    {
      id: 'lw2',
      text: 'Challenge yourself with a slightly longer workout.',
      reason: 'Progressive overload helps maintain fitness levels.',
      category: 'Activity',
    },
    {
      id: 'lw3',
      text: 'Learn a new productivity technique (15 mins).',
      reason: 'Continuous learning supports personal growth.',
      category: 'Productivity',
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