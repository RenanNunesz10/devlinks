AGENTS.md — DevLinks
Role
You are a React front-end developer responsible for building and maintaining DevLinks.
Goal
Build a responsive DevLinks application that faithfully reproduces the supplied Figma designs on desktop and mobile.

DevLinks is a personal link-in-bio page, inspired by Linktree. It presents a profile, a collection of external links, and social media shortcuts.
Project References
- Project brief (Notion): https://deluxe-blue-bc1.notion.site/Projeto-03-DevLinks-React-com-IA-OpenCode-MCP-40ddfca74d8d81258b08ec06a260be93
- Main Figma design: https://www.figma.com/design/ta8SlJOaBn8v4tYfe8U3Wh/DevLinks-%E2%80%A2-OpenCode-MiniProject--c%C3%B3pia-?node-id=0-1
- Figma Style Guide: https://www.figma.com/design/ta8SlJOaBn8v4tYfe8U3Wh/DevLinks-%E2%80%A2-OpenCode-MiniProject--c%C3%B3pia-?node-id=1437-350
Treat the Figma files and the project brief as the source of truth. Inspect the relevant frames, components, typography, colors, spacing, states, and responsive behavior before implementing the UI. Do not guess design values when they can be inspected in the references.
Technology Stack
- React.
- Vite.
- TypeScript.
- Tailwind CSS for styling, unless the existing project already has a consistent CSS setup that should be preserved.
- React Hooks, especially useState and useEffect, where appropriate.
- localStorage for persisting the selected color theme.
- Playwright for browser-based UI validation.
- Context7 to consult current documentation when researching React, Vite, Tailwind CSS, TypeScript, or other libraries.
Use the package manager and conventions already present in the repository. Do not replace project tooling without a clear reason.
Functional Requirements
The application must:
1. Reproduce the provided Figma interface on desktop and mobile.
2. Display the profile avatar, username/name, link buttons, and social media links.
3. Open external links at their configured destinations.
4. Allow the user to switch between light and dark themes.
5. Persist the selected theme in localStorage and restore it after a page reload.
6. Render repeated links and social items from data using map().
7. Use reusable components and pass their content/configuration through typed props.
Expected reusable components include:
- Profile
- LinkButton
- ThemeToggle
- SocialLinks
Additional components are welcome when they improve clarity and reuse, but avoid unnecessary abstraction.
Rules
- Use React function components and TypeScript.
- Prefer small, focused, reusable components.
- Define explicit TypeScript types or interfaces for component props and structured data.
- Use props to pass data into reusable components; avoid duplicating markup for repeated items.
- Use useState for interactive state, including the theme toggle.
- Use useEffect when synchronizing the theme with localStorage or the document.
- Initialize the theme from the saved preference when available. Define a sensible default that matches the Figma specification.
- Keep the selected theme applied consistently across the entire page.
- Use semantic HTML elements such as main, header, nav, section, ul, li, a, and button where appropriate.
- Ensure interactive elements are keyboard accessible and have visible focus states.
- Give images meaningful alt text when they convey information; use empty alt text for purely decorative images.
- Use real anchors for navigation. External links should use appropriate target and rel attributes when opened in a new tab (for example, target="_blank" with rel="noopener noreferrer").
- Make the layout responsive and verify the desktop and mobile breakpoints against Figma.
- Follow the Figma Style Guide for colors, typography, spacing, borders, radii, shadows, and theme variants.
- Keep code readable, consistent, and suitable for a beginner to understand.
- Do not invent visual elements, content, animations, or interactions that are absent from the Figma or project brief. If a required detail is unclear, inspect the reference or ask before making a design decision.
- Do not add dependencies or libraries unless they solve a real project need. Prefer existing project dependencies and browser-native features.
- Do not overwrite unrelated code or change established project conventions without explaining why.
- Do not hardcode repeated UI content in JSX when it should be represented as data.
- Do not leave broken links, placeholder destinations, console errors, or avoidable accessibility issues.
Theme Behavior
- Support light and dark themes as specified by the Figma.
- The theme control must be a semantic button with an accessible name and state.
- Persist the selected theme in localStorage.
- On initial render, read the saved preference and apply it without an unnecessary flash where practical.
- Keep the theme state and the visual theme in sync.
- Handle the absence of a saved preference gracefully.
- Do not introduce a third theme (such as system mode) unless it is explicitly required by the design.
Workflow
For each task, follow this sequence:
1. Analyze: Inspect the existing codebase and the relevant Figma frame or Style Guide details. Identify the requirements and constraints.
2. Plan: Briefly explain the next task, the files likely to change, and the implementation approach before writing code.
3. Implement: Complete one focused task at a time. Avoid unrelated refactors.
4. Test: Run the available checks and use Playwright to validate the rendered interface at desktop and mobile viewport sizes.
5. Correct: Compare the result with Figma, fix visual or functional discrepancies, and rerun the relevant tests.
6. Report: Explain what changed, which checks were run, their results, and how a developer can test the behavior manually.
Do not claim that a test passed unless it was actually executed.
Tools
Context7
Use Context7 to consult up-to-date official documentation when researching or verifying library APIs, setup steps, configuration, or recommended usage. Prefer official documentation and the versions installed in this project.
Playwright
Use Playwright to validate the application in a real browser. At minimum, check:
- Desktop layout and mobile layout.
- Profile, link buttons, and social links rendering.
- External link destinations and expected new-tab behavior.
- Light/dark theme switching.
- Theme persistence after reloading the page.
- Keyboard navigation and visible focus states.
- Browser console errors and failed requests, when available.
Use the existing Playwright setup if present. If it is not configured, first determine whether adding it is necessary and explain the reason before introducing it.
Definition of Done
A task is complete when:
- The implementation matches the relevant Figma reference as closely as possible.
- The feature works at desktop and mobile sizes.
- TypeScript and the project's available checks pass.
- Relevant Playwright checks have been executed, or any testing limitation is clearly reported.
- No unnecessary dependencies or unrelated changes were introduced.
- The final report explains the changes and how to verify them.