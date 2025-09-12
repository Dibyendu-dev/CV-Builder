## CV Builder

Create, preview, and export professional resumes in minutes. This React + Vite app lets you fill out forms for your personal details, experience, education, skills, projects, and more, then instantly preview them in multiple templates. Reorder sections with drag-and-drop and export to PDF.

### Features

- **Multiple templates**: Classic, Modern, Compact, Sidebar, and Timeline
- **Live preview**: See changes instantly as you type
- **Drag-and-drop section reordering**: Powered by `@hello-pangea/dnd`
- **Export to PDF**: Uses `html2canvas` + `jspdf`
- **Step-by-step forms**: Personal info, Objective, Experience, Education, Skills, Projects, and References
- **Clean UI**: Built with Tailwind CSS

### Tech Stack

- **Framework**: React 19 + Vite
- **Routing**: `react-router-dom`
- **Styling**: Tailwind CSS
- **Drag & Drop**: `@hello-pangea/dnd`
- **PDF Export**: `html2canvas`, `jspdf`

## Getting Started

### Prerequisites

- Node.js (LTS recommended)
- npm (ships with Node)

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

This starts the Vite dev server. Open the URL shown in your terminal.

### Production Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint

```bash
npm run lint
```

## Usage

1. Run the app with `npm run dev`.
2. Go through the forms to enter your details (Personal, Objective, Experience, Education, Skills, Projects, References).
3. Use the template selector to switch between templates.
4. Reorder sections using the Reorder UI (drag-and-drop or arrow buttons).
5. Export your resume to PDF from the preview area.

### Templates

The preview renders one of five templates based on the selected index:

- Template 1: Classic
- Template 2: Modern
- Template 3: Compact
- Template 4: Sidebar
- Template 5: Timeline

## Scripts

- `npm run dev`: Start development server
- `npm run build`: Build for production
- `npm run preview`: Preview the production build
- `npm run lint`: Run ESLint

## Project Structure

```text
CV-builder/
├─ public/
├─ src/
│  ├─ components/
│  │  ├─ atoms/            # Reusable UI primitives
│  │  ├─ cv/               # CV blocks & sections
│  │  ├─ forms/            # Section forms (Education, Experience, etc.)
│  │  ├─ pages/            # Routed pages (Home, CV, Contact)
│  │  ├─ templete/         # Resume templates (Classic, Modern, ...)
│  │  └─ ui/               # App UI (Header, Leftbar, Rightbar, Preview)
│  ├─ App.jsx
│  ├─ main.jsx
│  └─ index.css
├─ package.json
├─ vite.config.js
└─ README.md
```

## Contributing

Issues and pull requests are welcome. If you plan larger changes, consider opening an issue to discuss your proposal first.

## License

No license file is currently provided. If you need to use or distribute this project, add a license that fits your needs.
