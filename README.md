# ProjectNews - Headless CMS News Website

A modern news website built with React, TypeScript, and Vite, powered by a headless CMS backend.

## 📋 Project Overview

This project demonstrates the integration of a headless CMS with a responsive React frontend. The goal is to create a fully functional news website that fetches all content dynamically from a CMS system using either REST API or GraphQL.

### Learning Objectives

- Understanding headless CMS architecture and implementation
- Building responsive web applications
- Combining frontend frameworks with CMS backends
- API integration with React

---

## ✅ Core Requirements Checklist

### **Basic Functionality**

- [ ] Website is fully responsive and works on mobile devices
- [ ] All news articles display the following information:
  - [ ] Title/Headline
  - [ ] Publication Date
  - [ ] Author Name
  - [ ] Image(s)
  - [ ] Content/Body
  - [ ] Category
- [ ] News articles can be filtered by categories shown in the navigation
- [ ] "Read More" button displays full article in a new view/page
- [ ] Footer is implemented (links don't need to be functional)
- [ ] At least 9 articles are displayed on the website (more is encouraged)

### **CMS Integration**

- [ ] Headless CMS is configured (Contentful, HyGraph, or similar)
- [ ] All content is fetched from the CMS (no hardcoded content)
- [ ] Choice of API method implemented:
  - [ ] REST API, OR
  - [ ] GraphQL

---

## 🎁 Bonus Requirements Checklist

### **Admin Features**

- [ ] Admin login system implemented
- [ ] User authentication (login/logout)
- [ ] Admin view shows Edit and Delete buttons for each article
- [ ] Edit functionality:
  - [ ] Click "Edit" to open article editor
  - [ ] Modify article content
  - [ ] Save changes back to CMS
- [ ] Delete functionality:
  - [ ] Click "Delete" to remove article
  - [ ] Article is deleted from CMS

---

## 🛠️ Tech Stack

### **Frontend**

- **React 18** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool with hot module replacement
- **Tailwind CSS** - Utility-first styling (optional)
- **Material-UI (MUI)** - UI component library (optional)

### **CMS & Data**

- **Headless CMS** - Contentful, HyGraph, etc.
- **GraphQL Client** - For GraphQL queries (if using GraphQL)
- **REST Client** - For REST API calls (if using REST)

### **Development**

- **ESLint** - Code quality
- **TypeScript Compiler** - Type checking

---

## 📦 Installation & Setup

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd ProjectNews
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Configure your CMS**
   - Create a `.env.local` file in the project root
   - Add your CMS API credentials:

     ```env
     VITE_CMS_API_URL=your_cms_api_url
     VITE_CMS_API_KEY=your_api_key
     VITE_CMS_SPACE_ID=your_space_id (if using Contentful)
     ```

4. **Start the development server**

   ```bash
   npm run dev
   ```

5. **Build for production**

   ```bash
   npm run build
   ```

---

## 📁 Project Structure

```
ProjectNews/
├── src/
│   ├── api/              # CMS API integration
│   │   └── FetchApi.ts   # API calls and queries
│   ├── component/        # Reusable React components
│   ├── hook/             # Custom React hooks
│   │   └── useFetch.tsx  # Data fetching hook
│   ├── pages/            # Page components
│   ├── assets/           # Images and icons
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Entry point
├── public/               # Static assets
├── tailwind.css         # Tailwind configuration
├── vite.config.ts       # Vite configuration
├── tsconfig.json        # TypeScript configuration
└── package.json         # Dependencies
```

---

## 🚀 Development Workflow

### Creating Articles

- Articles can be created directly in your CMS dashboard
- Use AI tools to generate article content
- Required fields: Title, Date, Author, Image, Content, Category

### Fetching Articles

- Articles are automatically fetched from the CMS on page load
- Implement filtering by category in the component
- Pagination can be added for performance

### Styling

- Use Tailwind CSS for utility-based styling
- Material-UI components are optional for enhanced UI
- Ensure responsive design for mobile devices

---

## 🔐 Admin Panel (Bonus Feature)

When implementing the bonus requirements:

1. Create a login page with email/password authentication
2. Protect the admin view with authentication
3. Display Edit/Delete buttons only for authenticated admin users
4. Implement CRUD operations:
   - **Create** - Form to add new articles
   - **Read** - Display articles (already done)
   - **Update** - Form to edit existing articles
   - **Delete** - Confirmation and deletion

---

## 📝 Content Guidelines

- Article titles should be clear and descriptive (50-100 characters)
- Include relevant images (landscape format recommended)
- Content should be well-structured with proper formatting
- Categories should be consistent (e.g., "Technology", "Business", "Lifestyle")
- Consider SEO best practices for titles and descriptions

---

## 🎨 Design Reference

- Figma Design File: [Figma link here](https://www.figma.com/file/s9pFwPGqv4rHHdKrjGRPOh/INGN-Nyheder?type=design&node-id=0%3A1&mode=design&t=DZMhXZwTWMRlrnos-1)
- Follow the provided design for layout and styling
- Adapt the design for mobile responsiveness

---

## ❓ FAQ

**Q: Can I use my own CMS?**  
A: Yes! The only requirement is that it's a headless CMS. Popular options include Contentful, HyGraph and others.

**Q: Do I have to use GraphQL or REST?**  
A: No, you can choose either. GraphQL is more flexible for specific data requirements, while REST is simpler to set up initially.

**Q: Can I use Tailwind CSS and Material-UI together?**  
A: Yes, but it's optional. You can use either, both, or neither. Plain CSS works fine too.

**Q: Where should I store sensitive API keys?**  
A: Always use environment variables (`.env.local`). Never commit credentials to version control.

---

## 📚 Useful Resources

- [React Documentation](https://react.dev)
- [Vite Documentation](https://vitejs.dev)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Material-UI Documentation](https://mui.com/material-ui/getting-started/)
- [GraphQL Tutorial](https://graphql.org/learn/)

---

## 📄 License

This project is created for a School Project.

---

## 👨‍💻 Author

Created as a course assignment for CMS systems integration.
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])

```
