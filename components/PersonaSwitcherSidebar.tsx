import { NavLink, Stack, Title} from '@mantine/core';
import { IconUserCircle } from '@tabler/icons-react';
import { personas } from '../data/personaData'; // Import personas to get names

interface PersonaSwitcherSidebarProps {
  personaKeys: string[];
  selectedPersonaKey: string;
  onSelectPersona: (key: string) => void;
}

export function PersonaSwitcherSidebar({
  personaKeys,
  selectedPersonaKey,
  onSelectPersona,
}: PersonaSwitcherSidebarProps) {

  return (
    <Stack gap="sm">
      <Title order={4} mb="xs">Select Persona</Title>
      {personaKeys.map((key) => {
        const persona = personas[key]; // Get persona data for the name
        if (!persona) return null; // Should not happen, but safe check

        return (
          <NavLink
            key={key}
            href="#" // Prevent page navigation
            label={persona.name} // Display full name
            // description={persona.description} // Optional: show description
            leftSection={<IconUserCircle size="1rem" stroke={1.5} />}
            active={key === selectedPersonaKey}
            onClick={(event) => {
              event.preventDefault(); // Prevent navigation
              onSelectPersona(key); // Call the state setter
            }}
            variant="subtle" // Use subtle variant for less visual noise
            color={key === selectedPersonaKey ? 'lbg-green' : 'gray'} // Use theme color for active link
          />
        );
      })}
      {/* Add other sidebar content here if needed */}
    </Stack>
  );
} 