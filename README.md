# Test Node.js App 🚀

A modern web application demo showcasing Node.js, Express.js, and creative tools with GitHub Pages deployment.

## 🌟 Features

- **Express.js Server**: Fast, minimalist web framework for Node.js
- **UX Design Generator**: Interactive tool for generating creative design suggestions
- **Docker Support**: Containerized deployment ready
- **GitHub Pages**: Automatic deployment with GitHub Actions
- **Modern UI**: Beautiful, responsive design with interactive elements

## 🚀 GitHub Pages Demo

This project is automatically deployed to GitHub Pages! You can view the live demo at:
`https://[your-username].github.io/[repository-name]`

### Setting up GitHub Pages

1. **Enable GitHub Pages**:
   - Go to your repository settings
   - Scroll down to "Pages" section
   - Under "Source", select "GitHub Actions"

2. **Automatic Deployment**:
   - The workflow file `.github/workflows/pages.yml` handles automatic deployment
   - Every push to `main` or `master` branch triggers a new deployment
   - You can also manually trigger deployment from the Actions tab

## 🛠️ Local Development

### Prerequisites
- Node.js (v14 or higher)
- npm

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd [repository-name]
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and visit `http://localhost:3000`

## 🐳 Docker Deployment

Build and run with Docker:

```bash
# Build the image
docker build -t test-nodejs-app .

# Run the container
docker run -p 3000:3000 test-nodejs-app
```

## 📁 Project Structure

```
├── index.html                 # GitHub Pages main page
├── design-suggestions-app.html # UX Design Generator demo
├── server.js                  # Express.js server
├── package.json              # Node.js dependencies
├── Dockerfile                # Docker configuration
├── .github/
│   └── workflows/
│       └── pages.yml         # GitHub Actions workflow
└── README.md                 # This file
```

## 🎨 Demo Pages

- **Main Demo Page**: Interactive showcase with project information
- **UX Design Generator**: Creative tool for generating design suggestions
- **Server Info**: Details about the Express.js backend

## 🚀 Technologies Used

- **Backend**: Node.js, Express.js
- **Frontend**: HTML5, CSS3, JavaScript
- **Deployment**: GitHub Pages, GitHub Actions
- **Containerization**: Docker
- **CI/CD**: Webhook-triggered automatic builds

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

Built with ❤️ using Node.js, Express, and modern web technologies
