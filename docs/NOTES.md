# 📘 Next.js Learning Notes

This document contains my structured learning notes while studying Next.js step by step.

Repository: Nextjs-learning-journey

---

# 🟢 SECTION 1: INTRODUCTION

---

## 1. Introduction

### Concept

Next.js is a React framework for building modern full-stack web applications.

### What

It provides built-in features like routing, rendering, and optimization.

### Why

- Faster development
- Better performance
- SEO friendly

### Where

Used in production web apps (frontend + backend).

### When

When building scalable React applications.

### Rules

- Next.js is built on React
- Uses file-based routing

### Example

React app → manual setup
Next.js → everything built-in

### Golden Rule

Next.js = React + Production Features

### Real World Example

E-commerce websites, dashboards, SaaS apps

### Interview Question

What is Next.js and why is it used?

---

## 2. Installing Node.js

### What

Node.js runs JavaScript outside the browser.

### Why

Next.js depends on Node.js.

### Syntax

```
node -v
npm -v
```

### Rules

- Install LTS version
- npm comes with Node.js

### Error Task

❌ Error: command not found
✔ Solution: Install Node.js properly

---

## 3. IDE (VS Code)

### What

Code editor for development.

### Why

Better productivity and extensions support.

### Tools

- Prettier
- ES7 Snippets

### Golden Rule

Good tools = faster development

---

## 4. Repositories & Source Code

### Concept

Code is stored in GitHub repositories.

### Why

- Version control
- Portfolio building

### Syntax

```
git init
git add .
git commit -m "Initial commit"
git push
```

### Real World Example

Every company uses Git

### Interview Question

What is Git and why is it used?

---

## 5. What is Next.js?

### Concept

Framework built on React.

### Features

- Routing
- SSR / SSG
- API routes

### Why

Makes React apps production-ready.

### Golden Rule

Next.js simplifies full-stack development

---

# 🟢 SECTION 2: THE BASICS

---

## 6. Creating an App

### What

Create a new Next.js project.

### Syntax

```
npx create-next-app@latest
```

### Steps

- Setup project
- Run server

### Golden Rule

Always start with clean project setup

---

## 7. How Routes Work

### Concept

File-based routing system.

### What

Folder = Route
page.js = UI

### Example

```
app/contact/page.js → /contact
```

### Rules

- Must use page.js
- Folder defines URL

### Practice Task

Create `/about` route

### Error Task

❌ Missing page.js
✔ Fix: Add page.js file

### Golden Rule

File name controls routing

---

## 8. Static Routes

### What

Fixed routes.

### Example

```
/contact
/about
```

### Where

Simple pages

### Rules

No dynamic data

### Real World Example

About page, Contact page

---

## 9. Nested Routes

### Concept

Routes inside routes

### Example

```
/users/profile
```

### Structure

```
app/users/profile/page.js
```

### Rules

- Folder inside folder
- Must contain page.js

### Practice Task

Create `/dashboard/settings`

### Error Task

❌ Wrong folder structure
✔ Fix: Correct nesting

### Golden Rule

Folder nesting = URL nesting

---

## 10. Dynamic Routes

### Concept

Dynamic URL parameters

### What

URL changes dynamically

### Example

```
/users/profile/123
/users/profile/ali
```

### Syntax

```
app/users/profile/[id]/page.js
```

### Why

To show dynamic data

### Rules

- Use [id]
- Value comes from URL

### Error Task

❌ params undefined
✔ Fix: use correct params name

### Golden Rule

Dynamic folder = dynamic route

---

## 11. Params & SearchParams

### Concept

Get data from URL

### What

- params → route values
- searchParams → query values

### Example

```
/users/123?name=ali
```

### Syntax

```js
export default async function Page({ params, searchParams }) {
  const id = params.id;
  const name = searchParams.name;
}
```

### Why

To access dynamic data

### Rules

- params is Promise (Next 15)
- use async/await

### Error Task

❌ Cannot read properties of undefined
✔ Fix: use correct params

### Golden Rule

URL data = params + searchParams

---

## 12. Catch-All Segments

### Concept

Handle multiple dynamic routes

### Syntax

```
[...slug]
```

### Example

```
/cars/bmw/red/fast
```

### Optional Catch-All

```
[[...slug]]
```

### Difference

- [...slug] → required
- [[...slug]] → optional

### Golden Rule

Use when routes are unlimited

---

## 13. Layouts

### Concept

Shared UI wrapper

### What

Wrap pages automatically

### Syntax

```js
export default function Layout({ children }) {
  return <div>{children}</div>;
}
```

### Why

Reusable UI

### Rules

- layout.js is special file
- wraps all child routes

### Golden Rule

Layouts wrap pages automatically

---

## 14. Linking & Navigation

### Concept

Move between pages

### What

- Link component
- useRouter

### Syntax

```js
import Link from "next/link";
```

### Rules

- Use Link instead of <a>
- useRouter only in client

### Error Task

❌ Hook error
✔ Fix: add "use client"

### Golden Rule

Navigation should be smooth (SPA)

---

## 15. Components

### Concept

Reusable UI parts

### What

Stored in components folder

### Rules

- Default = Server component
- use "use client" for client

### Golden Rule

Component reuse = clean code

---

## 16. Styling

### Concept

Add styles

### Types

- Global CSS
- CSS Modules

### Syntax

```css
.module.css
```

### Rules

- Global → layout
- Module → specific component

### Golden Rule

Use modules for scoped styling

---

## 17. Server vs Client Components

### Concept

Rendering type

### Server

- Fast
- Default

### Client

- use hooks
- interactive

### Rule

Use client only when needed

### Golden Rule

Prefer server components

---

# 🧠 FINAL SUMMARY

- Next.js uses file-based routing
- Supports static, nested & dynamic routes
- Params help access URL data
- Layouts wrap pages
- Components are reusable
- Styling is modular
- Server components are default

---

# 🎯 FINAL INTERVIEW QUESTIONS

1. What is Next.js?
2. How routing works in Next.js?
3. Difference between static and dynamic routes?
4. What are params and searchParams?
5. What is layout in Next.js?
6. Difference between server and client components?

---
