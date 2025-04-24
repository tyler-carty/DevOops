import { Card, Title, Text, useMantineTheme } from '@mantine/core';
import { RadarChart } from '@mantine/charts';
import { HealthMetric } from '../data/personaData';

interface HealthMetricsCardProps {
  metrics: HealthMetric[];
  insight: string;
}

export function HealthMetricsCard({ metrics, insight }: HealthMetricsCardProps) {
  const theme = useMantineTheme();
  // Use the primary color defined in the theme
  const primaryChartColor = theme.colors[theme.primaryColor][6]; // Adjust index for desired shade

  const chartData = metrics.map(m => ({ ...m, value: m.value }));

  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder>
      <Card.Section withBorder inheritPadding py="xs">
        {/* Title color is handled by theme override in _app.tsx */}
        <Title order={3}>Health Summary</Title>
      </Card.Section>

      <Text mt="sm" mb="lg" c="dimmed" size="sm">
        {insight}
      </Text>

      <RadarChart
        h={300}
        data={chartData}
        dataKey="metric"
        withPolarGrid
        withPolarAngleAxis
        withPolarRadiusAxis
        series={[
          // Use theme color for the chart series
          { name: 'value', color: primaryChartColor, opacity: 0.6 },
        ]}
        // You might need to adjust props based on your data scale
        // For example, if values aren't 0-100, you might need domain settings
      />
    </Card>
  );
} 