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

// We can add more personas later
// export const javierData: PersonaData = { ... };

export const personas: { [key: string]: PersonaData } = {
  samira: samiraData,
  // javier: javierData,
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