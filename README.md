# Momentum Builder - Lloyds Banking Group Hackathon Project

**Hackathon:** Reboot 2025 London
**Date:** 24/04/2025
**Team:** Tyler, Josh G, Josh T, Olivia, Tyler, Michal

## 1. Overview

Momentum Builder is a conceptual application designed for the Lloyds Banking Group internal hackathon. It aims to support the wellbeing and personal development of young adults (18-24) by leveraging wearable health data to suggest personalised, actionable "micro-goals". By focusing on positive moments and encouraging small, consistent steps, Momentum Builder helps users build healthy habits and gain momentum towards greater independence and financial stability.

## 2. The Problem: Building Positive Habits

Many young adults today face significant hurdles related to mental wellbeing (anxiety, burnout, stress), financial pressures, and finding their path towards independence. These challenges can make self-improvement feel overwhelming.

Speaking from personal experience, one of the biggest hurdles when trying to improve or learn something new is turning intention into routine. The key is often starting small and doing "little but often" – allowing new behaviours to be gradually absorbed into daily life.

Existing wellbeing apps might track data, but often fail to bridge the gap between insight and action, especially when users feel low or overwhelmed.

## 3. Our Solution: Momentum Builder

Momentum Builder tackles this by focusing on **positive reinforcement** and **actionable nudges**.

Our concept uses synthetic health data (provided via the hackathon personas) from wearable technology to identify moments when a user might be more receptive to taking a small step forward. Instead of just highlighting problems (like poor sleep or high stress), it recognises improvements or periods of stability (e.g., slightly better sleep quality, a calmer heart rate, achieving a step goal) as opportunities.

When such a positive moment is detected, the app suggests a relevant **"micro-goal"** – a small, manageable task tailored to the user's persona and potential needs. The goal is to create a positive feedback loop:

* User's data shows a positive sign (better sleep, lower stress marker, activity achieved).
* App suggests a small, relevant goal.
* User completes the achievable goal, fostering a sense of accomplishment.
* This builds momentum and reinforces the habit of taking small, positive actions.

## 4. Key Features & Micro-Goal Examples (Conceptual)

* **Persona-Driven Insights:** Leverages the 6 provided hackathon personas (Samira, Javier, Aisha, Kofi, Ahmed, Li Wei) to simulate different user needs and data patterns.
* **Data-Triggered Suggestions:** Uses key metrics (like Sleep Duration/Quality, Heart Rate Variability, Step Count, Mindfulness Minutes) to trigger goal suggestions.
* **Personalised Micro-Goals:** Suggests small, actionable tasks relevant to wellbeing, independence, and financial stability. Examples include:
    * "Set 5 minutes aside for a guided breathing exercise." (Triggered by signs of stress or anxiety, but perhaps suggested during a calmer moment).
    * "Spend 15 minutes updating your CV." (Triggered by good sleep/focus indicators).
    * "Look into local volunteering opportunities for 10 minutes." (Triggered by increased activity levels or stable mood).
    * "Browse job opportunities related to [interest] for 15 minutes."
    * "Research one simple savings approach or budgeting app." (Triggered by stable periods, linking wellbeing to financial health).
    * "Try a 2-minute standing break." (Triggered for low-activity personas).

## 5. Hackathon Implementation (6-Hour Scope)

Given the 6-hour timeframe, our focus is on demonstrating the core concept effectively:

* **Polished UI:** A clean, simple, and visually appealing user interface (likely a single-page web app) is crucial for presentation.
* **Persona Selection:** Users can select one of the key personas (e.g., Samira, Aisha, Javier) to see tailored suggestions.
* **"Staged" Logic:** Instead of real-time data analysis, we will use pre-defined logic. When a persona is selected, the UI will display a relevant (potentially mock/stubbed) "positive data insight" (e.g., "Deep Sleep: 18%") and the corresponding pre-determined micro-goal suitable for that persona and insight.
* **Focus on the Narrative:** Clearly communicating the "why" and "how" – linking the persona's challenges, the data trigger, and the suggested micro-goal to the overall aim of building positive momentum.

## 6. Technology Stack (Proposed)

* **Frontend:** HTML, CSS (Tailwind CSS), JavaScript (or potentially a simple React setup if time permits and team is comfortable).
* **Backend:** Minimal/None. Logic will likely be handled directly in the frontend JavaScript for this MVP.
* **Data:** Using the provided CSV persona files to inform the "staged" logic and narrative.

