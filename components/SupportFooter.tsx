import { Group, Anchor, Text } from '@mantine/core';

// LBG-inspired colors
const lbgGreen = '#00864F';

export function SupportFooter() {
  return (
    <Group justify="space-between" h="100%" px="md">
      <Text size="sm" c="dimmed">
        © {new Date().getFullYear()} Momentum Builder (Lloyds Hackathon)
      </Text>
      <Group gap="md">
        <Anchor href="#" target="_blank" size="sm" c={lbgGreen}> {/* Replace # with actual links */} 
          Support
        </Anchor>
        <Anchor href="#" target="_blank" size="sm" c={lbgGreen}>
          Privacy Policy
        </Anchor>
        <Anchor href="#" target="_blank" size="sm" c={lbgGreen}>
          Terms of Service
        </Anchor>
      </Group>
    </Group>
  );
} 