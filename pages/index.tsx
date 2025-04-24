import { AppShell, Container, Stack, Title, Grid, Burger, Group } from '@mantine/core';
import dynamic from 'next/dynamic'; // Import dynamic
import { useState } from 'react'; // Import useState
import { useDisclosure } from '@mantine/hooks'; // Import useDisclosure for mobile nav toggle
import Image from 'next/image'; // Import Next.js Image component
import { LogMoodCard } from '@/components/LogMoodCard';
import { MicroGoalsCard } from '@/components/MicroGoalsCard';
import { SupportFooter } from '@/components/SupportFooter';
import { PersonaSwitcherSidebar } from '@/components/PersonaSwitcherSidebar';
import { personas, PersonaData } from '@/data/personaData'; // Import the data

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
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure();
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(true); // Sidebar starts open on desktop

  // State for selected persona key
  const [selectedPersonaKey, setSelectedPersonaKey] = useState<string>('samira'); // Default to Samira
  const personaKeys = Object.keys(personas);
  const currentPersona: PersonaData = personas[selectedPersonaKey];

  return (
    <AppShell
      padding="md"
      header={{ height: 60 }}
      navbar={{ width: 250, breakpoint: 'sm', collapsed: { mobile: !mobileOpened, desktop: !desktopOpened } }}
      footer={{ height: 60 }}
    >
      {/* Simple Header with Burger for mobile nav toggle */}
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
            <Group>
                <Burger opened={mobileOpened} onClick={toggleMobile} hiddenFrom="sm" size="sm" />
                <Burger opened={desktopOpened} onClick={toggleDesktop} visibleFrom="sm" size="sm" />
                <Image
                  src="/lloyds-logo.svg" // Path relative to the public directory
                  alt="Lloyds Bank Logo"
                  height={35} // Adjust height as needed for the header
                  width={100} // Adjust width based on logo aspect ratio, or let height control
                  priority // Prioritize loading the logo
                  style={{ objectFit: 'contain' }} // Ensure logo scales nicely
                />
            </Group>
            {/* Optional: Add User Info/Logout here */}
        </Group>
      </AppShell.Header>

      {/* Sidebar for Persona Switching */}
      <AppShell.Navbar p="md">
        <PersonaSwitcherSidebar
          personaKeys={personaKeys}
          selectedPersonaKey={selectedPersonaKey}
          onSelectPersona={setSelectedPersonaKey}
        />
      </AppShell.Navbar>

      {/* Main Content Area */}
      <AppShell.Main>
        <Container size="lg" py="xl">
          {/* Page Header (Now displays current persona) */}
          <Stack mb="xl">
            <Title order={1}>
                Welcome, {currentPersona.name}
            </Title>
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
