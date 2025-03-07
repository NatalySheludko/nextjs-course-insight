# Project Setup

This document outlines the steps followed to set up the project, including configuration, tooling, and development best practices. 

## Steps Taken

### 1. **Installed Next.js with TypeScript and Tailwind CSS**
- To initialize the project, I used `create-next-app` to set up a Next.js application with TypeScript and Tailwind CSS:
  ```bash
  npx create-next-app@latest my-project --typescript

- Installed Tailwind CSS for utility-first styling:
	```bash
	npm install tailwindcss postcss autoprefixer
	npx tailwindcss init

### 2. Installed and Configured Prettier
- To ensure consistent code formatting, I installed Prettier, along with necessary ESLint configurations:
npm install --save-dev prettier eslint-config-prettier eslint-plugin-prettier
- Created and configured the .prettierrc and .prettierignore files to define formatting rules and exclusions.

### 3. Set Up ESLint with Prettier
- Configured ESLint to work with Prettier by adding Prettier-specific rules to the ESLint configuration. This ensures that both linting and formatting run seamlessly together.

### 4. Added Prettier to Git Hooks
- Installed Husky and lint-staged to automatically run Prettier formatting before each commit, ensuring consistent code quality across all commits:
	```bash
	npm install --save-dev husky lint-staged

- Set up Husky to trigger Prettier on pre-commit, automatically formatting staged files.

### 5. Created Basic Folder Structure and Files
- Developed the main project folder structure for scalability and easy navigation.
- Included an utils folder to store utility functions for reusability across the project.

### 6. SEO Setup
- Implemented SEO best practices by adding meta tags and other optimization techniques to improve visibility in search engines.

### 7. Optimized Fonts
- Integrated and optimized custom fonts for better performance and improved typography.

### 8. Created Global Styles
- Defined global styles using Tailwind CSS, ensuring consistency across all pages.

### 9. Not Found Page
- Created a custom 404 "Not Found" page to handle invalid routes and improve user experience.

### 10. Optimized Images
- Added and optimized images for faster load times and better performance.

### 11. Page and Component Development
- Developed 11 pages, including the header and footer components.
- Developed responsive UI components such as buttons and inputs.
- Built a mobile-friendly navigation bar that adjusts for different screen sizes.

### 12. Responsive Layout
- Ensured the website is fully responsive across both desktop (1280px) and mobile (320px) views using Tailwind CSS.

## Getting Started
-	Clone the repository:
	```bash
	git clone https://github.com/your-repository.git

- Install dependencies:
	```bash
	npm install

- Start the development server:
	```bash
	npm run dev

- You can now open the application in your browser at:
	```bash
	http://localhost:3000

### 13. Additional Configuration
- For any further configurations like adding additional dependencies, setting up environment variables, or other project-specific setups, refer to the relevant sections of the codebase.


