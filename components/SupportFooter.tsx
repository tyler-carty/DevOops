import { Group, Anchor, Text } from '@mantine/core';

// LBG-inspired colors
const lbgGreen = '#00864F';

export function SupportFooter() {
  return (
    <Group justify="space-between" h="100%" px="md">
      <Text size="sm" c="dimmed">
        © {new Date().getFullYear()} Momentum 
      </Text>
      <Group gap="md">
        <Anchor href="#" target="_blank" size="sm" c={lbgGreen}> {/* Replace # with actual links */} 
          Lloyds Bank Academy
        </Anchor>
        <Anchor href="#" target="_blank" size="sm" c={lbgGreen}>
          Lloyds Bank Products & Services
        </Anchor>
        <Anchor href="#" target="_blank" size="sm" c={lbgGreen}>
          Headspace App
        </Anchor>
      </Group>
    </Group>
  );
} 