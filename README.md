# Development Test Instructions

Welcome to this mini-project designed to assess your technical skills, logic, and ability to follow detailed instructions.

## Prerequisites

- **Fork the GitHub Repository**: Start by forking the repository at https://github.com/ELEVATOR-ONBOARDER/my-crm, which contains the base of the project.

## General Guidelines

- **Philosophy**: Don't reinvent the wheel. Aim for clear logic and a polished finish. The style should be clean and done in a logical way, but the specific style is up to you. We're not looking for a designer, so while aesthetics are appreciated, they are not the most critical aspect.
- **Required Technologies**:
  - **CSS**: Use TailwindCSS.
  - **Typescript**: Use Typescript and use it properly. Strongly type your variables for example and don't use any, never.
  - **Framework**: Use Prisma with Next.js (version >14) utilizing server actions.
  - **Tests**: Write unit tests for style and functionality.

## Tasks to Accomplish

1. **Database Configuration**:
   - Set up a database suitable for Prisma. PlanetScale is recommended, but other options are acceptable.

2. **User Interface**:
   - **Header**: Create a header with the Next.js icon (in `/public`), and links to `Home`, `Contacts`, and `Settings`.
   - **Loading Indicator**: Each page should display a loading indicator while data is being fetched.
   - **Responsive Design**: Ensure that the application is functional across various devices and screen sizes.

3. **Application Features**:
   - **Table (/contacts)**: Implement a table that lists the contacts. Include a link to the edit form (see below).
   - **Creation Form (/contacts/new)**: A form to add new entries. The form should contain the following fields with the exact field names:
    - `firstName` (required string)
    - `lastName` (required string)
    - `email` (required string)
    - `gender` (required string, possible values: male, female, other)
    - `moneyToInvest` (optional number, defined in € Euro)
    Display a message in case of success or error and redirect to the table.
    **Edit Form (/contacts/[id]/edit)**: A form to edit the contact from the table button.

4. **Submission and Documentation**:
   - **GitHub**: The final project must be submitted on GitHub with me added as a collaborator. Ensure I can clone the repository and start the project without needing additional information.
   - **README**: Include in the README the number of hours spent on the project, as well as any additional features you could have implemented.

Good luck and happy developing!
