# Next.js Learning Notes

This document contains my personal learning notes while studying Next.js step by step.

Repository: Nextjs-learning-journey

---

SECTION 1: INTRODUCTION

---

1. Introduction

Next.js is a powerful React framework used to build modern web applications.

It provides many built-in features that make development easier and faster.

Some important features of Next.js include:

• File-based routing  
• Server-side rendering (SSR)  
• Static site generation (SSG)  
• API routes  
• Performance optimization  
• SEO friendly applications

Next.js allows developers to build full-stack applications using React.

---

2. Installing Node.js

Before working with Next.js we must install Node.js.

Node.js allows us to run JavaScript outside the browser and install packages using npm.

Steps:

1. Go to the official Node.js website
2. Download the LTS version
3. Install Node.js
4. Verify the installation

Commands to check installation:

node -v  
npm -v

If both commands return versions then Node.js is installed successfully.

---

3. IDE (Integrated Development Environment)

An IDE is a tool used for writing and managing code efficiently.

Recommended IDE for Next.js development:

Visual Studio Code (VS Code)

Useful VS Code extensions:

• ES7 React Snippets  
• Prettier (Code formatter)  
• Tailwind CSS IntelliSense (optional)  
• GitLens (optional)

VS Code provides features like:

• Syntax highlighting  
• Auto completion  
• Integrated terminal  
• Debugging tools

---

4. Repositories and Source Code

A repository is a storage location where project source code is stored and managed.

Developers use Git and GitHub for version control.

Benefits of repositories:

• Track code changes  
• Store project history  
• Collaborate with other developers  
• Share code publicly

Example repository:

Nextjs-learning-journey

GitHub is widely used to host repositories.

---

5. What is Next.js?

Next.js is a React framework created by Vercel.

It extends React by adding powerful features such as:

• File-based routing  
• Server components  
• Client components  
• Built-in API routes  
• Automatic code splitting  
• Performance optimizations

Next.js is commonly used to build production-ready applications.

---

SECTION 2: THE BASICS

---

6. Creating an App

We can create a new Next.js application using the following command:

npx create-next-app@latest

During installation we choose:

• Project name  
• JavaScript or TypeScript  
• App Router  
• src directory  
• ESLint configuration

After installation move into the project folder:

cd project-name

Then start the development server:

npm run dev

Open the application in the browser:

http://localhost:3000

---

7. How Routes Work

Next.js uses file-based routing.

This means routes are automatically created based on the folder structure.

Important rules:

Folder name = Route  
page.js = Webpage

Example:

src/app/contact/page.js

This creates the route:

/contact

Next.js automatically generates the route based on the folder structure.

---

8. Static Routes

Static routes are fixed routes that do not change.

Example project structure:

src/app/

page.js  
contact/page.js

Routes created:

/ → Home page  
/contact → Contact page

Each folder that contains a page.js file becomes a route.

---

9. Nested Routes

Nested routes are created using sub-folders inside a route folder.

Example structure:

src/app/users/page.js  
src/app/users/profile/page.js

Routes created:

/users  
/users/profile

Key concept:

Next.js looks for the page.js file to render the page.

Other JavaScript files inside the folder will not automatically create routes.

Example:

users/misc.js

This file will NOT create a route unless it is imported inside page.js.

---

IMPORTANT RULES LEARNED

---

1. Folder name defines the route.
2. page.js defines the webpage.
3. Nested folders create nested routes.
4. Next.js ignores other files unless they are imported.
5. File-based routing makes routing simple and automatic.

---
