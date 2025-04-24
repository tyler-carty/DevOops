import { Card, Title, Text, Group, Button, Stack, useMantineTheme } from '@mantine/core';
import { useState } from 'react';
import { moodOptions } from '../data/personaData';

export function LogMoodCard() {
  const theme = useMantineTheme();
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    setShowConfirmation(true);
    // In a real app, you'd likely save this mood log to state/backend
    setTimeout(() => setShowConfirmation(false), 2000);
  };

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Title order={3}>How are you feeling?</Title>
      </Card.Section>

      <Stack mt="md" align="center">
        <Text size="sm" c="dimmed" ta="center">
          Take a moment to check in with yourself.
        </Text>
        <Group justify="center" gap="xs" mt="sm">
          {moodOptions.map(({ mood, color }) => (
            <Button
              key={mood}
              variant={selectedMood === mood ? 'filled' : 'light'}
              color={color}
              onClick={() => handleMoodSelect(mood)}
              size="sm"
              radius="xl"
            >
              {mood}
            </Button>
          ))}
        </Group>
        {showConfirmation && selectedMood && (
          <Text c={theme.primaryColor} size="sm" mt="sm">
            Thanks for logging your mood as {selectedMood}!
          </Text>
        )}
      </Stack>
    </Card>
  );
} 