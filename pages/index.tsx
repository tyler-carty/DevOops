import { AppShell, Container, Stack, Title, Text, Grid } from '@mantine/core';
import dynamic from 'next/dynamic'; // Import dynamic
import { useState } from 'react'; // Import useState if needed for persona switching later
import { LogMoodCard } from '../components/LogMoodCard';
import { MicroGoalsCard } from '../components/MicroGoalsCard';
import { SupportFooter } from '../components/SupportFooter';
import { personas, PersonaData } from '../data/personaData'; // Import the data

// Dynamically import HealthMetricsCard with SSR disabled
const HealthMetricsCard = dynamic(
  () => import('../components/HealthMetricsCard').then((mod) => mod.HealthMetricsCard),
  {
    ssr: false,
    // Optional: Add a loading component while the chart loads
    // loading: () => <p>Loading chart...</p>,
  }
);

export default function HomePage() {
  // For now, hardcode to Samira. Later, add state for persona switching.
  const currentPersona: PersonaData = personas.samira;

  return (
    <AppShell
      padding="md"
      // header={{ height: 60 }} // Placeholder if a header is added
      // navbar={{ width: 300, breakpoint: 'sm', collapsed: { mobile: true } }} // Placeholder for sidebar
      footer={{ height: 60 }}
    >
      {/* Placeholder for Header Component - Add when needed */}
      {/* <AppShell.Header p="md">
        <Title order={2}>Momentum Builder</Title>
      </AppShell.Header> */}

      {/* Placeholder for Navbar/Sidebar - Your colleague will integrate this */}
      {/* <AppShell.Navbar p="md">
        Navbar content (persona switcher, etc.)
      </AppShell.Navbar> */}

      <AppShell.Main>
        <Container size="lg" py="xl">
          {/* Page Header */}
          <Stack mb="xl"> {/* Add margin below header */}
            <Title order={1} c="lbg-green"> {/* Use LBG green for main title */}
                Momentum Builder
            </Title>
            <Text c="dimmed">Hello {currentPersona.name}, here's your dashboard.</Text>
             {/* Optional: Add Persona Description here if needed */}
             {/* <Text size="sm">({currentPersona.description})</Text> */}
          </Stack>

          {/* Main Content Grid */}
          <Grid gutter="xl">
            {/* Left Column (Health + Mood) */}
            <Grid.Col span={{ base: 12, md: 7 }}> {/* Takes full width on small, 7/12 on medium+ */}
              <Stack gap="xl">
                {/* Render the dynamically imported component */}
                <HealthMetricsCard
                  metrics={currentPersona.healthMetrics}
                  insight={currentPersona.currentInsight}
                />
                <LogMoodCard />
              </Stack>
            </Grid.Col>

            {/* Right Column (Goals) */}
            <Grid.Col span={{ base: 12, md: 5 }}> {/* Takes full width on small, 5/12 on medium+ */}
              <MicroGoalsCard goals={currentPersona.suggestedGoals} />
            </Grid.Col>

             {/* Add more Grid.Col or components here if needed */}
          </Grid>
        </Container>
      </AppShell.Main>

      <AppShell.Footer
        style={{ borderTop: `1px solid var(--mantine-color-gray-2)` }}
      >
          <SupportFooter />
      </AppShell.Footer>

    </AppShell>
  );
}
