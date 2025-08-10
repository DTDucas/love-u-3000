# Love U 3000 ❤️

A cute interactive website for expressing affection! Inspired by the famous "I love you 3000" line from Avengers.

## 🌟 Features

- Friendly and adorable interface
- Fun interactions when users try to reject
- Smooth animations
- Support for both desktop and mobile
- Customizable recipient name

## 🎮 How to Use

1. Open the website
2. Optional: Add `?name=YourName` parameter to the URL for personalization
3. Click the "Có" (Yes) button to receive love! 💕
4. Try clicking the "Không" (No) button to see what happens... 😏

## 📱 Demo

Access directly at: [Render Deployment Link]

## 🛠️ Technologies Used

- HTML5
- CSS3 (with responsive design)
- JavaScript (vanilla)

## 📁 Project Structure

```
love-u-3000/
├── index.html          # Main page
├── script.js           # Interactive logic
├── style.css           # Styling and responsive
├── img/                # Images folder
│   ├── heart.png       # Heart icon
│   ├── shocked.png     # Shocked expression
│   ├── think.png       # Thinking expression
│   ├── angry.png       # Angry expression
│   ├── crying.png      # Crying expression
│   └── hug.png         # Hug expression
├── .github/            # GitHub Actions workflows
│   └── workflows/
│       └── deploy.yml  # CI pipeline for code quality checks
├── LICENSE             # MIT License
├── render.yaml         # Render deployment config
└── README.md           # This document
```

## 🚀 Installation Guide

1. Clone this repository:

   ```bash
   git clone [repository-url]
   ```

2. Open `index.html` in your browser or deploy to Render using the included `render.yaml` config

3. Enjoy! 🎉

## 🌐 Deployment

This project uses **GitHub Actions for CI** and **direct GitHub-Render integration** for deployment.

### How it works

1. **CI Pipeline**: When you push to `main` branch, GitHub Actions automatically runs tests (HTML validation, JS syntax check, CSS validation)
2. **Auto Deployment**: Render directly monitors your GitHub repository and automatically deploys when changes are pushed to the main branch
3. **No manual intervention needed** - Render handles the deployment automatically

### Setup Instructions

1. **Create Render Service**:

   - Go to [Render Dashboard](https://render.com)
   - Click "New" → "Static Site"
   - Connect your GitHub repository
   - Choose "Static Site" service type
   - Render will automatically detect and use the `render.yaml` configuration

2. **Configure Auto Deploy**:

   - Render automatically sets up branch-based deployment
   - Every push to `main` branch will trigger a new deployment
   - No additional configuration needed

3. **GitHub Actions**:
   - The CI pipeline runs automatically on every push/PR
   - Validates HTML, JavaScript, and CSS
   - Provides code quality assurance before Render deployment

### Benefits

- ✅ **Free tier compatible** - No need for Render Pro plan
- ✅ **Automatic deployments** - Push to main = instant deployment
- ✅ **Code quality checks** - GitHub Actions ensures code integrity
- ✅ **Zero configuration** - Works out of the box

## 🎨 Customization

You can customize:

- Colors in `style.css`
- Text content in `script.js`
- Images in the `img/` folder

## 📝 License

This project is released under the [MIT License](LICENSE).

## 🤝 Contributing

All contributions are welcome! Feel free to create issues or pull requests.

## 👨‍💻 Author

**Duong Tran Quang (DTDucas)**
📧 Contact: [baymax.contact@gmail.com](mailto:baymax.contact@gmail.com)

## ❤️ Acknowledgments

Created with love and joy to bring smiles to everyone! 😊
