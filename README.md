# 🌐 Shenith Chanidu | Professional Portfolio

A premium, modern, and highly-interactive portfolio website built with **React.js** and **Vite**. Built to showcase skills in AI/ML Engineering, Software Development, and Data Science with a stunning neon-dark aesthetic and glassmorphism design.

---

## 🚀 Live Demo

> Development server: [http://localhost:5173/](http://localhost:5173/) *(run locally)*  
> Deployed via **GitHub Actions → AWS S3**

---

## 👤 About

**Shenith Chanidu** is a final-year **BICT (Hons)** student from **Sri Lanka**, passionate about building AI-driven solutions and high-performance web applications. Currently available for internship & entry-level roles.

- 📍 Location: Sri Lanka
- 💼 Status: Final Year Undergraduate
- 🔗 GitHub: [github.com/shenith084](https://github.com/shenith084)
- 🔗 LinkedIn: [linkedin.com/in/shenith-chanidu](https://www.linkedin.com/in/shenith-chanidu)

---

## ✨ Key Features

- **Premium UI/UX** — Dark-themed design with neon-cyan & purple accents, glassmorphism cards throughout
- **Custom Branding** — Custom SC logo, favicon, and consistent brand identity
- **Typing Hero Section** — Animated typewriter effect cycling through job titles
- **Scroll-Reveal Animations** — Sections fade and slide into view on scroll
- **Interactive Hover Effects** — Cards and buttons with glowing neon transitions
- **Staggered Entrance Animations** — Continuous pulsing, floating, and spin animations on icons
- **Functional Contact Form** — EmailJS integration with real-time submission feedback
- **Floating Back to Top** — Utility button that appears on scroll
- **Fully Responsive** — Optimized for smartphones to widescreen monitors
- **CI/CD Deployment** — GitHub Actions workflow auto-deploys to AWS S3 on every push to `main`

---

## 🛠️ Technology Stack

| Category       | Technologies                                                      |
|----------------|-------------------------------------------------------------------|
| **Framework**  | [React.js v19](https://reactjs.org/)                              |
| **Build Tool** | [Vite v7](https://vitejs.dev/)                                    |
| **Styling**    | Vanilla CSS — custom variable design system                       |
| **Icons**      | [Lucide React](https://lucide.dev/)                               |
| **Email**      | [EmailJS](https://www.emailjs.com/) (`emailjs-com`)               |
| **Deployment** | GitHub Actions → AWS S3 + (CloudFront optional)                   |
| **Linting**    | ESLint with React Hooks & React Refresh plugins                   |

---

## 📂 Project Structure

```bash
├── .github/
│   └── workflows/
│       └── deploy.yml         # CI/CD: Auto-deploy to AWS S3 on push to main
├── public/                    # Static assets (logo.svg, favicon, cv-dummy.pdf)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky glassmorphism navigation bar
│   │   ├── Navbar.css
│   │   ├── Hero.jsx           # Animated hero with typewriter effect
│   │   ├── Hero.css
│   │   ├── About.jsx          # Bio, education info cards
│   │   ├── About.css
│   │   ├── Skills.jsx         # Categorized skill tags (4 categories)
│   │   ├── Skills.css
│   │   ├── Projects.jsx       # Project showcase grid (6 projects)
│   │   ├── Projects.css
│   │   ├── Experience.jsx     # Timeline of professional experience
│   │   ├── Experience.css
│   │   ├── Certifications.jsx # Professional certifications list
│   │   ├── Certifications.css
│   │   ├── Contact.jsx        # Contact form (EmailJS) + footer
│   │   ├── Contact.css
│   │   ├── BackToTop.jsx      # Floating scroll-to-top button
│   │   └── BackToTop.css
│   ├── App.jsx                # Main app assembly and scroll-reveal logic
│   ├── App.css
│   ├── index.css              # Global styles and CSS design tokens
│   └── main.jsx               # Entry point
├── index.html                 # HTML template with SEO metadata
├── vite.config.js
├── eslint.config.js
└── package.json
```

---

## 💼 Projects Showcased

| # | Project | Tech Stack | Date |
|---|---------|-----------|------|
| 1 | **Brain Tumor Detection System using CNN & Transfer Learning** | Python, TensorFlow, Keras, MobileNetV2, React.js, Flask, OpenCV, CNN | Jan 2026 |
| 2 | **AI-Based Mango Disease Detection with Smart Chatbot** (Manglo) | Python, TensorFlow, Computer Vision, NLP, Flask | Jan–Sep 2025 |
| 3 | **Gas Leakage Detection System** (IoT) | Arduino, IoT, C++, MQ2 Sensor, HX711 | May 2025 |
| 4 | **Freelancer Platform – Job Posting & Finding** | PHP, MySQL, Bootstrap, JavaScript, HTML/CSS, Figma | Jan 2024 |
| 5 | **Cafe Management System** | PHP, MySQL, JavaScript, HTML, CSS | Jan 2023 |
| 6 | **E-Commerce Website** | Laravel 11, PHP, MySQL, Blade, Tailwind CSS, PayHere | Recent |

---

## 🧠 Technical Skills

### AI & Machine Learning
`Python` `TensorFlow` `Machine Learning` `Deep Learning` `Computer Vision` `NLP` `Generative AI`

### Web Development
`React.js` `JavaScript` `HTML5` `CSS3` `Bootstrap` `Node.js`

### Databases & Backend
`MySQL` `Firebase` `REST APIs` `Python` `PHP`

### Tools & Design
`Docker` `VS Code` `Git` `GitHub` `Linux`

---

## 🏢 Experience

| Role | Organization | Period |
|------|-------------|--------|
| **Project Lead** *(Current)* | ATIT Rajarata - Association of Technology IT | Jul 2024 — Jan 2026 |
| **Project Lead** | Robotic Society Of Technology | Aug 2024 — Mar 2025 |
| **Member** | ATIT Rajarata - Association of Technology IT | Jul 2023 — Jul 2024 |

---

## 🏅 Certifications

| Certification | Issuer | Date |
|--------------|--------|------|
| Career Essentials in Data Analysis | LinkedIn | Mar 2026 |
| Deep Learning and Generative AI: Data Prep, Analysis, and Visualization with Python | LinkedIn | Feb 2026 |
| What Is Generative AI? | LinkedIn | Feb 2026 |
| Full Stack Web Development | Find X (PVT) LTD | Dec 2025 |
| AI/ML Engineer – Stage 2 | SLIIT | Aug 2025 |
| Front-End Web Development | University of Moratuwa | Jul 2023 |
| AI/ML Engineer – Stage 1 | SLIIT | Jun 2023 |
| Python Programming | University of Moratuwa | 2023 |

---

## ⚙️ Setup & Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/shenith084/Portfolio-website.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd Portfolio-website
   ```

3. **Install dependencies**:
   ```bash
   npm install
   ```

4. **Create a `.env` file** in the root (for EmailJS contact form):
   ```env
   VITE_EMAILJS_SERVICE_ID=your_service_id
   VITE_EMAILJS_TEMPLATE_ID=your_template_id
   VITE_EMAILJS_PUBLIC_KEY=your_public_key
   ```

5. **Run the development server**:
   ```bash
   npm run dev
   ```

6. **Build for production**:
   ```bash
   npm run build
   ```

7. **Preview production build locally**:
   ```bash
   npm run preview
   ```

---

## 🚢 Deployment (CI/CD)

This project uses **GitHub Actions** for automated deployment to **AWS S3**.

**Workflow** (`.github/workflows/deploy.yml`):
- Triggers on every push to the `main` branch
- Builds the project with `npm run build`
- Syncs the `dist/` folder to an S3 bucket
- Serves `index.html` without cache for SPA routing support
- CloudFront invalidation is pre-configured (enable by adding `CLOUDFRONT_DISTRIBUTION_ID` secret)

**Required GitHub Secrets:**
| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | AWS IAM access key |
| `AWS_SECRET_ACCESS_KEY` | AWS IAM secret key |
| `AWS_REGION` | AWS region (e.g., `ap-south-1`) |
| `S3_BUCKET_NAME` | Target S3 bucket name |
| `VITE_EMAILJS_SERVICE_ID` | EmailJS service ID |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template ID |
| `VITE_EMAILJS_PUBLIC_KEY` | EmailJS public key |

---

## 📄 License

© 2026 **Shenith Chanidu**. All rights reserved.
