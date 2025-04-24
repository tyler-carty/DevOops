import {
  Card,
  Title,
  Text,
  ThemeIcon,
  Group,
  Accordion,
  useMantineTheme,
  MantineTheme,
} from '@mantine/core';
import {
  IconTargetArrow,
  IconBulb,
  IconHeartbeat,
  IconBriefcase,
  IconPigMoney,
} from '@tabler/icons-react';
import { MicroGoal } from '../data/personaData';

interface MicroGoalsCardProps {
  goals: MicroGoal[];
}

// Helper to get an icon based on category
function getCategoryIcon(category: MicroGoal['category'], theme: MantineTheme) {
  const iconProps = { size: 18, color: theme.colors[theme.primaryColor][6] }; // Use primary color for icons
  switch (category) {
    case 'Wellbeing':
      return <IconHeartbeat {...iconProps} />;
    case 'Career Aspirations':
      return <IconBriefcase {...iconProps} />;
    case 'Financial Goals':
      return <IconPigMoney {...iconProps} />;
    default:
      return <IconBulb {...iconProps} />;
  }
}

export function MicroGoalsCard({ goals }: MicroGoalsCardProps) {
  const theme = useMantineTheme();

  if (!goals || goals.length === 0) {
    return (
      <Card shadow="sm" padding="lg" radius="md" withBorder>
        <Card.Section withBorder inheritPadding py="xs">
          <Title order={3}>Micro-Goals</Title>
        </Card.Section>
        <Text mt="md" c="dimmed">No goal suggestions right now. Check back later!</Text>
      </Card>
    );
  }

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        <Group justify="space-between">
          <Title order={3}>Suggested Micro-Goals</Title>
          <ThemeIcon variant="light" color={theme.primaryColor} size="lg" radius="md">
             <IconTargetArrow size={24} />
          </ThemeIcon>
        </Group>
      </Card.Section>

      <Text mt="sm" mb="md" c="dimmed" size="sm">
        Small steps, big progress. Here are a few ideas based on your recent insights:
      </Text>

      <Accordion variant="separated" defaultValue={goals[0]?.id}>
        {goals.map((goal) => (
          <Accordion.Item key={goal.id} value={goal.id}>
            <Accordion.Control icon={getCategoryIcon(goal.category, theme)}>
              <Text fw={500}>{goal.text}</Text>
            </Accordion.Control>
            <Accordion.Panel>
              <Text size="sm" c="dimmed">
                <Text span fw={600} c={theme.primaryColor}>Why this helps:</Text> {goal.reason}
              </Text>
              {/* Add button to mark as done/dismiss later */}
            </Accordion.Panel>
          </Accordion.Item>
        ))}
      </Accordion>
    </Card>
  );
} 