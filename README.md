# Development Test Instructions

Welcome to this mini-project designed to assess your technical skills, logic, and ability to follow detailed instructions.

## Prerequisites

- **Fork the GitHub Repository**: Start by forking the repository at https://github.com/ELEVATOR-ONBOARDER/my-crm, which contains the base of the project.
- **Clock**: You will need to clock how long you spent doing the project so make sure to have a tool for it.
- **README**: Read the whole README before doing anything. Read again.

## General Guidelines

- **Philosophy**: Don't reinvent the wheel. Aim for clear logic and a polished finish. The style should be clean and done in a logical way, but the specific style is up to you. We're not looking for a designer, so while aesthetics are appreciated, they are not the most critical aspect.
- **Required Technologies**:
  - **CSS**: Use TailwindCSS.
  - **Typescript**: Use Typescript and use it properly. Strongly type your variables for example and don't use any, **never**.
  - **Framework**: Use Prisma with Next.js (version >14) utilizing server actions.
  - **Tests**: Write unit tests for functionality (tests for style are nice to have but less important here).

## Tasks to Accomplish

1. **Database Configuration**:

   - Use Prisma to handle your database. You will use the given database URL.

2. **User Interface**:

   - **Header**: Create a header with the Next.js icon (in `/public`), and links to `Dashboard`, `Machines`, and `Settings`.
   - **Loading Indicator**: Each page should display a loading indicator while data is being fetched.
   - **Responsive Design**: Ensure that the application is functional across various devices and screen sizes.

3. **Application Features**:

   - **Dashboard**: Just create a page that renders "Dashboard".
   - **Settings**: Just create a page that renders "Settings".
   - **Table (/machines)**: Implement a table that lists the machines stored in the database. Include a link to the edit form (see below).
   - **Creation Form (/machines/new)**: A form to add new entries. The form should contain the following fields with the exact field names:
   - `codeName` (required string)
   - `managerName` (required string)
   - `warehousePosition` (required string, possible values: inside, outside, other)
   - `energyConsumption` (optional number, defined in Kw/H, **the number could be 102.30 for example**)
   - Display a message in case of success or error and redirect to the table.
   - **Edit Form (/machines/[id]/edit)**: A form to edit the machine from the table button.

4. **Additional features**:
   You have here a list of features that you can add to your project. You can select which features you implement

   - **Table sorting**: On the machines table, add a way for the user to sort the table on each column (ascending and descending). The sort can be triggered on only one column at the same time.
   - **Delete handling**: Add a delete button on each rows of the table to be able to delete the row. A confirmation alert should appear to prevent accidental deletes.
   - **Images handling**: For each machine, add a way to store an image. That image can be then seen on each row of the table.
   - **Details page**: Implement the details page (/machines/[id]) where the data of a specific machine can be seen. In that page, you must also add a "Notes" section where the user can save notes about the machine in a text area input and read the previous notes.

5. **Submission and Documentation**:
   - **GitHub**: The final project must be submitted on GitHub with me added as a collaborator. Ensure I can clone the repository and start the project without needing additional information. **that means you should make sure that every information is available in the repository and that I can do all steps to launch the website in build mode, also think about env.**
   - **README**: Include in the README the number of hours spent on the project, as well as any additional features you could have implemented.

Good luck and happy developing!


feature I could have implemented : delete notes, edit notes


number of hours spent on the project :

day 1
   40min : setup project, setup environment, header, texts on pages, new machine page
   3h00  : setup postgresql (fail)

day 2
   27 min : setup postgresql
   1h38   : remaining Application Features + Delete handling + Details page
   31 min : tests (fail)
