## Momentum Builder - Hackathon Task Breakdown (6 Hours - Next.js Stack)

**Goal:** Create a clickable demo using Next.js, Mantine, and Tailwind, deployed on Azure, showcasing the core concept for 1-3 selected personas (e.g., Samira, Aisha, Javier). Focus on the *narrative* of data insight leading to a micro-goal.

---

**Frontend (Josh T / Tyler)**

* **Priority 0: Setup Mantine & Tailwind**
    * Integrate Mantine UI library into the existing Next.js app following Mantine's Next.js setup guide.
    * Integrate Tailwind CSS into the Next.js app, ensuring it works alongside Mantine (configure `tailwind.config.js` and `postcss.config.js` correctly). *This is crucial upfront.*
* **Priority 1: Build Core UI Structure with Mantine/Tailwind**
    * Create the main page layout (`app/page.tsx` or similar) using Mantine components (like `AppShell`, `Card`, `Group`, `Text`, `Button`) and Tailwind utility classes for spacing/fine-tuning.
    * Structure the layout to include placeholders for Header, Insight Section, Goal Suggestion Section, History Section based on the mockup.
* **Priority 2: Implement Persona Switching & State**
    * Use React state (`useState`) to manage the currently selected persona.
    * Add simple Mantine Buttons or a Select component to switch between 2-3 hardcoded personas.
    * Ensure selecting a persona updates the state and triggers content changes.
* **Priority 3: Populate UI Components Dynamically**
    * Create reusable React components (e.g., `<PersonaHeader>`, `<InsightCard>`, `<GoalCard>`, `<HistoryItem>`) using Mantine components.
    * Pass data (from the structure defined by Olivia/Backend) into these components as props based on the selected persona state.
    * Display the dynamic text, mock metrics, goal text, etc.
* **Priority 4 (If Time): Polish & Basic Interactivity**
    * Refine Tailwind classes and Mantine component props (`theme`, `sx`) to better match the mockup.
    * Implement the "Why this helps?" interaction (e.g., using a Mantine `Modal` or `Popover`).
    * Make the "Open Goal" button trigger a simple state change or log.

**Data Analysis / Logic (Olivia / supported by Backend)**

* **Priority 1: Define Trigger Logic & Content (for 2-3 Personas)**
    * *No change:* Define 1-2 specific "positive trigger" scenarios based on the CSV data/README for chosen personas.
    * *No change:* Write the exact text for Insight titles, mock data points, Micro-Goal suggestions, and "Why this helps?" explanations.
* **Priority 2: Structure the Data for Frontend (JS/JSON)**
    * *No change:* Organize the defined content into a simple JavaScript object or JSON structure.
    * *Support from Backend (Josh G/Michal):* Help define this structure. It will likely live in a `lib/` or `data/` folder within the Next.js project.
* **Priority 3 (If Time): Simple Visualisation Concept**
    * *No change:* Suggest or mock up the simple graph icon representation.

**Backend / Data Structuring (Josh G / Michal)**

* **Priority 1: Implement Data Structure**
    * Create the JavaScript object/JSON file (e.g., `lib/personaData.js`) within the Next.js project containing the structured content from Olivia.
    * Export this data so the Frontend components can import and use it directly.
* **Priority 2: Create Helper Functions (Optional but Recommended)**
    * Write simple utility functions within the Next.js project (e.g., in `lib/utils.js`) like `getPersonaData(personaName)` or `getCurrentGoal(personaName)` that Frontend components can call to retrieve the necessary data based on the selected persona state. This keeps the component logic cleaner.
* **Priority 3 (If Time): Explore API Route (Low Priority)**
    * *Low Priority for MVP:* If needed for some dynamic aspect *later*, consider creating a simple Next.js API route (`app/api/persona/[name]/route.ts`) to serve the persona data instead of direct import. Stick to direct import first for speed.

**Deployment & Presentation (Tarek)**

* **Priority 1: Set Up Azure Deployment**
    * Create a GitHub repository.
    * Set up deployment using **Azure Static Web Apps**. Configure the build settings for a Next.js application (likely needs the Node.js build preset). Ensure continuous deployment from the main branch is working early.
* **Priority 2: Develop Presentation Outline & Narrative**
    * *No change:* Draft presentation slides covering the Problem, Solution, How it Works (using the demo), Data Usage, Lloyds Relevance, and Future Potential.
    * *No change:* Practice the demo flow narrative.
* **Priority 3: Gather Assets & Refine Pitch**
    * *No change:* Collect screenshots/video of the working Azure-deployed demo.
    * *No change:* Refine slides and talking points. Prepare for Q&A.

**Key Focus for Everyone:**
* **Setup First:** Frontend team needs to block time *immediately* for Mantine/Tailwind setup.
* **Communication:** Crucial between Frontend, Backend (Data Structuring), and Data Analysis to ensure the data structure works for the components.
* **MVP:** Stick to the core flow: Select Persona -> See Insight -> See Goal on the deployed Azure site.
s