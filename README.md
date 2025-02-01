# Sterling Transportation Website React
#### Development and Maintenance by AbdulSource


## Business plan:
- Create a marketing page as a landing page when Sterling is being searched online
- Have a Link/QR code to direct potential customers
- Create functionality to capture future customers' information.
### Requirements:
> Example site: https://austinpremiumlimousine.com/
- Home landing page
- About page with company
    - principles and promises
    - clients
    - contact form
- Services page
    - lists of services
    - photos of vehicles
    - contact form
        
## Development Plan
# Transportation Company Website Development Plan

This document outlines a detailed, step-by-step development plan for creating a website for a transportation company using React, TypeScript, and Material UI. The site will include multiple routes (Landing, About, and Services pages) and features such as contact forms (using RJFS), a navigation bar, footers, and vehicle images.

## Table of Contents

1. [Phase 1: Project Setup](#phase-1-project-setup)
2. [Phase 2: Routing and Global Layout](#phase-2-routing-and-global-layout)
3. [Phase 3: Page and Feature Development](#phase-3-page-and-feature-development)
4. [Phase 4: Styling, Responsive Design, and Theming](#phase-4-styling-responsive-design-and-theming)
5. [Phase 5: Testing and Deployment](#phase-5-testing-and-deployment)
6. [Additional Considerations](#additional-considerations)

---

## Phase 1: Project Setup

### Ticket 1: Initialize Git Repository and Project
- **Title:** Initialize Git Repository and Create React TypeScript Project  
- **Description:**  
  - Create a new Git repository for the transportation website.
  - Initialize a new React project using your preferred tool (e.g., Create React App with the TypeScript template or Vite).
  - Confirm that TypeScript is configured and working.
- **Acceptance Criteria:**  
  - Repository is created.
  - Project runs locally with a basic “Hello World” component.
  - A `tsconfig.json` file is present.

### Ticket 2: Install Dependencies
- **Title:** Install Material UI, React Router, and RJFS Dependencies  
- **Description:**  
  - Install Material UI core and icons.
  - Install React Router DOM for routing.
  - Install RJFS (or your chosen React JSON Form Schema package) for contact forms.
- **Acceptance Criteria:**  
  - Dependencies are listed in `package.json`.
  - Basic usage examples (or a quick test component) verify that each package is functioning.

### Ticket 3: Configure Project Structure
- **Title:** Set Up Project Folder Structure  
- **Description:**  
  - Create folders for `components`, `pages`, `assets` (for images), and `styles` (if needed).
  - Add placeholder files for main application entry points (e.g., `App.tsx` and `index.tsx`).
- **Acceptance Criteria:**  
  - Clear and organized folder structure.
  - Basic files are in place.

---

## Phase 2: Routing and Global Layout

### Ticket 4: Set Up React Router
- **Title:** Implement React Router in App Component  
- **Description:**  
  - Install and import `BrowserRouter` from React Router.
  - Define routes for `/` (Landing), `/about`, and `/services`.
  - Ensure that each route loads the correct page component.
- **Acceptance Criteria:**  
  - Navigation between routes works without errors.
  - URL changes reflect the current page.

### Ticket 5: Create Global Layout Components (Navigation Bar & Footer)
- **Navigation Bar:**
  - **Title:** Develop Navigation Bar Component  
  - **Description:**  
    - Use Material UI’s AppBar to create a responsive navigation bar.
    - Include links to the Landing, About, and Services pages.
    - Ensure active route highlighting.
  - **Acceptance Criteria:**  
    - Navigation bar is visible on all pages.
    - Clicking a link routes to the correct page.
  
- **Footer:**
  - **Title:** Develop Footer Component  
  - **Description:**  
    - Create a footer component that appears on all pages.
    - Include contact details and basic company info.
  - **Acceptance Criteria:**  
    - Footer is responsive and styled appropriately.

### Ticket 6: Integrate Layout with Router
- **Title:** Integrate Navigation and Footer into Main Layout  
- **Description:**  
  - Wrap page components in a layout that includes the navigation bar and footer.
  - Verify that the layout persists across route changes.
- **Acceptance Criteria:**  
  - Consistent layout across all pages.
  - No duplication of the navigation or footer on any page.

---

## Phase 3: Page and Feature Development

### Ticket 7: Develop Landing Page
- **Title:** Create Landing Page Component  
- **Description:**  
  - Build a landing page that includes a hero section.
  - Insert images of vehicles from the `assets` folder.
  - Use Material UI components for a clean design.
- **Acceptance Criteria:**  
  - Landing page displays a hero image, headline, and call-to-action.
  - Page is responsive and visually appealing.

### Ticket 8: Develop About Page
- **Title:** Create About Page Component  
- **Description:**  
  - Build an about page with content describing the company’s background, mission, and team.
  - Use Material UI typography and layout components.
- **Acceptance Criteria:**  
  - About page content is clear and styled.
  - Responsive design is maintained.

### Ticket 9: Develop Services Page
- **Title:** Create Services Page Component  
- **Description:**  
  - Build a services page listing the transportation services offered.
  - Incorporate images or icons for each service if needed.
- **Acceptance Criteria:**  
  - Services are listed in a clear, engaging format.
  - Page integrates with the overall site design.

### Ticket 10: Implement Contact Form Using RJFS
- **Title:** Develop Contact Form Component with RJFS  
- **Description:**  
  - Integrate the RJFS library to build a contact form.
  - The form should include fields for name, email, subject, and message.
  - Validate user input as per RJFS capabilities.
  - Decide whether the contact form should be embedded on the Services page or as a modal/standalone component.
- **Acceptance Criteria:**  
  - Contact form renders correctly.
  - Input validation works as expected.
  - Form submission is simulated (or wired up to an API endpoint if available).

---

## Phase 4: Styling, Responsive Design, and Theming

### Ticket 11: Apply Global Material UI Theme
- **Title:** Set Up Material UI Theming and Global Styles  
- **Description:**  
  - Configure a global Material UI theme (colors, typography, spacing).
  - Ensure consistency across all components.
- **Acceptance Criteria:**  
  - Theme is applied globally.
  - All components reflect the defined theme.

### Ticket 12: Responsive Design Adjustments
- **Title:** Ensure Responsive Design for All Components  
- **Description:**  
  - Review and adjust the layout for mobile, tablet, and desktop views.
  - Test the navigation bar, footer, and page layouts on different screen sizes.
- **Acceptance Criteria:**  
  - The site displays properly on multiple devices.
  - No layout breaking or overflowing content.

---

## Phase 5: Testing and Deployment

### Ticket 13: Write Unit Tests for Core Components
- **Title:** Unit Testing for Key Components  
- **Description:**  
  - Write tests for the navigation bar, footer, and page components using your preferred testing library (e.g., Jest with React Testing Library).
- **Acceptance Criteria:**  
  - Key components have passing unit tests.
  - Tests cover basic rendering and interaction scenarios.

### Ticket 14: End-to-End (E2E) Testing for Navigation and Forms
- **Title:** E2E Testing for Routing and Contact Form  
- **Description:**  
  - Implement end-to-end tests to simulate user navigation between pages.
  - Test the contact form submission flow.
- **Acceptance Criteria:**  
  - E2E tests confirm that all routes load correctly.
  - Contact form validation and submission process are covered.

### Ticket 15: Prepare Deployment Pipeline
- **Title:** Configure CI/CD and Deployment Pipeline  
- **Description:**  
  - Set up continuous integration (e.g., GitHub Actions, CircleCI) for automated testing.
  - Configure deployment scripts for your chosen hosting platform.
- **Acceptance Criteria:**  
  - Automated tests run on each commit.
  - Deployment pipeline successfully publishes the site.

### Ticket 16: Final Deployment and Documentation
- **Title:** Deploy Website and Finalize Documentation  
- **Description:**  
  - Deploy the website to production.
  - Document the setup, development, and deployment steps in the project’s README.
- **Acceptance Criteria:**  
  - The website is accessible via the production URL.
  - Documentation is complete and clear for future maintenance.

---

## Additional Considerations

- **Version Control & Code Reviews:**  
  - Develop each ticket on feature branches and merge after code review.
  - Use descriptive commit messages and update Jira tickets with progress notes.

- **Regular Standups and Demos:**  
  - Schedule regular check-ins to demonstrate functionality (e.g., navigation working, contact form validation) as components are completed.

- **Future Enhancements:**  
  - Consider planning for analytics integration, improved form handling (such as spam prevention), and accessibility improvements.

---

This plan is designed to help manage the project efficiently by breaking down development into clear, actionable steps that can be tracked using Jira. Each ticket builds on previous work, ensuring steady progress from initial project setup to a fully functional, responsive website.

