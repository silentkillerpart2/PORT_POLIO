# SIDDU Portfolio Website

A modern, responsive portfolio website with an intelligent AI chatbot assistant.

## 🌟 Features

### ✨ Modern Design
- **Responsive Layout**: Works perfectly on all devices
- **Dark/Light Theme**: Toggle between themes with an attractive animated switch
- **Smooth Animations**: Beautiful scroll animations and hover effects
- **Modern UI/UX**: Clean, professional design with excellent user experience

### 🤖 AI Chatbot Assistant
- **Intelligent Responses**: Trained with resume data and portfolio information
- **Multiple Topics**: Can discuss skills, experience, education, projects, and contact info
- **Real-time Interaction**: Instant responses with typing indicators
- **Conversation History**: Maintains chat history for better context

### 📱 Enhanced Functionality
- **Certificate Viewer**: Dedicated page showcasing achievements
- **Contact Form**: Functional contact form with validation
- **Social Media Integration**: Direct links to professional profiles
- **Download CV**: Simulated CV download functionality
- **Smooth Scrolling**: Seamless navigation between sections

## 🛠️ Technologies Used

### Frontend
- **HTML5**: Semantic markup
- **CSS3**: Modern styling with animations
- **JavaScript**: Interactive functionality
- **Unicons**: Beautiful icon library
- **Typed.js**: Typing animation effects
- **ScrollReveal**: Scroll animations

### Backend (Optional)
- **Python 3.8+**: Chatbot backend
- **Flask**: Web framework
- **Flask-CORS**: Cross-origin resource sharing

## 📁 Project Structure

```
siddu/
├── index.html              # Main portfolio page
├── cerit.html              # Certificate viewer page
├── style.css               # Main stylesheet
├── main.js                 # Frontend JavaScript
├── chatbot.py              # Python chatbot backend
├── requirements.txt        # Python dependencies
├── README.md              # This file
└── assets/
    └── images/
        ├── favicon.png     # Website favicon
        └── siddu.png       # Profile image
```

## 🚀 Quick Start

### Frontend Only (Recommended for most users)

1. **Clone or download** the project files
2. **Open `index.html`** in your web browser
3. **Enjoy!** The website works completely offline

### With Python Backend (Advanced users)

1. **Install Python 3.8+** if not already installed
2. **Install dependencies**:
   ```bash
   pip install -r requirements.txt
   ```

3. **Start the chatbot server**:
   ```bash
   python chatbot.py
   ```

4. **Open `index.html`** in your browser
5. **Test the chatbot** by clicking the chat icon

## 🎨 Customization

### Personal Information
Edit the following files to customize your information:

- **`index.html`**: Update personal details, skills, and contact information
- **`cerit.html`**: Add your certificates and achievements
- **`chatbot.py`**: Modify the `load_resume_data()` method for chatbot responses

### Styling
- **`style.css`**: Customize colors, fonts, and layout
- **Theme colors**: Modify CSS variables in `:root` section
- **Animations**: Adjust timing and effects in CSS

### Chatbot Training
- **`chatbot.py`**: Add more responses and training data
- **Intent classification**: Extend the `classify_intent()` method
- **Response generation**: Customize response templates

## 🌐 API Endpoints (Backend)

If running the Python backend:

- `POST /api/chat` - Send message to chatbot
- `GET /api/chat/history` - Get conversation history
- `POST /api/chat/clear` - Clear conversation history

### Example API Usage:
```bash
curl -X POST http://localhost:5000/api/chat \
  -H 'Content-Type: application/json' \
  -d '{"message": "What are your skills?"}'
```

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Desktop**: 1920px and above
- **Tablet**: 768px - 1024px
- **Mobile**: 320px - 767px

## 🎯 Key Features Explained

### Theme Toggle
- Animated sun/moon icons
- Smooth transition effects
- Persistent theme preference (localStorage)

### Chatbot Widget
- Floating chat button with notification dot
- Expandable chat interface
- Intelligent responses based on user queries
- Conversation history management

### Certificate Page
- Grid layout for certificates
- Hover effects and animations
- Download and verify buttons
- Responsive design

### Contact Form
- Form validation
- Email format checking
- Success/error feedback
- Smooth animations

## 🔧 Browser Support

- **Chrome**: 90+
- **Firefox**: 88+
- **Safari**: 14+
- **Edge**: 90+

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to contribute to this project by:
1. Forking the repository
2. Creating a feature branch
3. Making your changes
4. Submitting a pull request

## 📞 Support

For support or questions:
- **Email**: siddunayak604@gmail.com
- **LinkedIn**: [Siddaraju T](https://linkedin.com/in/siddu)
- **GitHub**: [siddu](https://github.com/siddu)

## 🎉 Acknowledgments

- **Unicons** for beautiful icons
- **Typed.js** for typing animations
- **ScrollReveal** for scroll effects
- **Flask** for the backend framework

---

**Made with ❤️ by Siddaraju T**
