
function myMenuFunction(){
    var menuBtn = document.getElementById("myNavMenu");

    if(menuBtn.className === "nav-menu"){
      menuBtn.className += " responsive";
    } else {
      menuBtn.className = "nav-menu";
    }
  }


  window.onscroll = function() {headerShadow()};

  function headerShadow() {
    const navHeader =document.getElementById("header");

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {
      navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
      navHeader.style.height = "60px";
      navHeader.style.lineHeight = "60px";
    } else {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
    }
  }

 var typingEffect = new Typed(".typedText",{
    strings : ["STUDENT","FRESHER", "DEVELOPER"],
    loop : true,
    typeSpeed : 100, 
    backSpeed : 80,
    backDelay : 2000
 })


 const sr = ScrollReveal({
        origin: 'top',
        distance: '80px',
        duration: 2000,
        reset: true     
 })

sr.reveal('.featured-text-card',{})
sr.reveal('.featured-name',{delay: 100})
sr.reveal('.featured-text-info',{delay: 200})
sr.reveal('.featured-text-btn',{delay: 200})
sr.reveal('.social_icons',{delay: 200})
sr.reveal('.featured-image',{delay: 300})

sr.reveal('.project-box',{interval: 200})


sr.reveal('.top-header',{})

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '80px',
  duration: 2000,
  reset: true
})

srLeft.reveal('.about-info',{delay: 100})
srLeft.reveal('.contact-info',{delay: 100})


const srRight = ScrollReveal({
  origin: 'right',
  distance: '80px',
  duration: 2000,
  reset: true
})

srRight.reveal('.skills-box',{delay: 100})
srRight.reveal('.form-control',{delay: 100})


const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current =>{
    const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id')

    if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) { 

        document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')

    }  else {

      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')

    }
  })
}

window.addEventListener('scroll', scrollActive)


const themeToggle = document.getElementById('theme-toggle');
const themeIcon = themeToggle ? themeToggle.querySelector('.toggle-switch') : null;
const body = document.body;

function setTheme(dark) {
    if (dark) {
        body.classList.add('dark-theme');
        if (themeIcon) {
            themeIcon.style.transform = 'rotate(180deg)';
        }
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-theme');
        if (themeIcon) {
            themeIcon.style.transform = 'rotate(0deg)';
        }
        localStorage.setItem('theme', 'light');
    }
}

if (themeToggle) {
    themeToggle.addEventListener('click', () => {
        const isDark = !body.classList.contains('dark-theme');
        setTheme(isDark);
        
        // Add click animation
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 150);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('theme');
    setTheme(savedTheme === 'dark');
});


class Chatbot {
    constructor() {
        this.messages = [];
        this.isOpen = false;
        this.useBackend = false; // Set to true to use Python backend
        this.backendUrl = 'http://localhost:5000/api/chat';
        this.init();
    }

    init() {
        this.toggle = document.getElementById('chatbot-toggle');
        this.container = document.getElementById('chatbot-container');
        this.closeBtn = document.getElementById('chatbot-close');
        this.input = document.getElementById('chatbot-input');
        this.sendBtn = document.getElementById('chatbot-send');
        this.messagesContainer = document.getElementById('chatbot-messages');

        this.bindEvents();
        this.loadResponses();
        this.checkBackendAvailability();
    }

    async checkBackendAvailability() {
        if (!this.useBackend) return;
        
        try {
            const response = await fetch(this.backendUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: 'test' })
            });
            
            if (response.ok) {
                this.useBackend = true;
                console.log('✅ Python backend connected');
            }
        } catch (error) {
            console.log('⚠️ Python backend not available, using frontend responses');
            this.useBackend = false;
        }
    }

    bindEvents() {
        this.toggle.addEventListener('click', () => this.toggleChat());
        this.closeBtn.addEventListener('click', () => this.closeChat());
        this.sendBtn.addEventListener('click', () => this.sendMessage());
        this.input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Close chat when clicking outside
        document.addEventListener('click', (e) => {
            if (!this.container.contains(e.target) && !this.toggle.contains(e.target)) {
                this.closeChat();
            }
        });
    }

    loadResponses() {
        this.responses = {
            greetings: [
                "Hello! I'm SIDDU's AI assistant. How can I help you today? 😊",
                "Hi there! Welcome to SIDDU's portfolio. What would you like to know?",
                "Greetings! I'm here to tell you about SIDDU's skills and experience.",
                "Hello! I'm excited to share information about SIDDU. What interests you?"
            ],
            skills: [
                "SIDDU is skilled in:\n• Frontend: HTML, CSS, JavaScript, React\n• Backend: PHP, Java, Python\n• Database: MySQL, MongoDB\n• Tools: Excel, Word",
                "His technical skills include web development, programming languages, and database management. He's particularly strong in Python and web technologies.",
                "SIDDU has expertise in both frontend and backend development, with experience in multiple programming languages and database systems."
            ],
            experience: [
                "SIDDU is currently a Computer Science Engineering student at RVTM. He's a fresher with a strong academic foundation and practical project experience.",
                "As a CSE student, he's gaining hands-on experience through various projects and certifications. He's completed 10+ certificates in different technologies.",
                "He's a passionate student with a focus on software development and problem-solving. His experience includes academic projects and self-learning initiatives."
            ],
            contact: [
                "You can reach SIDDU at:\n• Email: siddunayak604@gmail.com\n• Phone: +91 8151042840\n• Location: Bangalore, Karnataka, India",
                "For professional inquiries, contact him via email or phone. He's based in Bangalore and available for opportunities.",
                "SIDDU is available for freelance work and full-time opportunities. Feel free to reach out through the contact form or directly via email."
            ],
            projects: [
                "SIDDU has worked on various projects including web development, database management, and programming assignments. Check out his certificates page for more details!",
                "His projects range from web applications to database systems. He's particularly interested in creating user-friendly and efficient solutions.",
                "He's completed multiple projects during his academic career, focusing on practical applications of his technical skills."
            ],
            education: [
                "SIDDU is pursuing Computer Science and Engineering (CSE) at RVTM. He's passionate about technology and continuous learning.",
                "He's a dedicated CSE student with a strong foundation in computer science fundamentals and modern development practices.",
                "His education focuses on software engineering, algorithms, data structures, and practical programming skills."
            ],
            default: [
                "I'm not sure about that. Could you ask me about SIDDU's skills, experience, education, projects, or contact information?",
                "That's an interesting question! I can tell you about SIDDU's technical skills, background, or how to contact him.",
                "I'd be happy to help! Try asking about his skills, experience, education, or contact details."
            ]
        };
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.container.classList.add('active');
            this.input.focus();
            // Remove notification dot
            const notificationDot = document.querySelector('.notification-dot');
            if (notificationDot) notificationDot.style.display = 'none';
        } else {
            this.container.classList.remove('active');
        }
    }

    closeChat() {
        this.isOpen = false;
        this.container.classList.remove('active');
    }

    async sendMessage() {
        const message = this.input.value.trim();
        if (!message) return;

        // Add user message
        this.addMessage(message, 'user');
        this.input.value = '';

        // Show typing indicator
        this.showTypingIndicator();

        try {
            let response;
            
            if (this.useBackend) {
                // Use Python backend
                response = await this.getBackendResponse(message);
            } else {
                // Use frontend responses
                response = this.getFrontendResponse(message);
            }
            
            // Hide typing indicator and show response
            this.hideTypingIndicator();
            setTimeout(() => {
                this.addMessage(response, 'bot');
            }, 500);
            
        } catch (error) {
            console.error('Error getting response:', error);
            this.hideTypingIndicator();
            setTimeout(() => {
                this.addMessage("I'm sorry, I'm having trouble connecting right now. Please try again later.", 'bot');
            }, 500);
        }
    }

    async getBackendResponse(message) {
        const response = await fetch(this.backendUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ message: message })
        });
        
        if (!response.ok) {
            throw new Error('Backend request failed');
        }
        
        const data = await response.json();
        return data.response;
    }

    getFrontendResponse(message) {
        const lowerMessage = message.toLowerCase();
        
        // Check for different types of questions
        if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
            return this.getRandomResponse('greetings');
        } else if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('programming')) {
            return this.getRandomResponse('skills');
        } else if (lowerMessage.includes('experience') || lowerMessage.includes('work') || lowerMessage.includes('job')) {
            return this.getRandomResponse('experience');
        } else if (lowerMessage.includes('contact') || lowerMessage.includes('email') || lowerMessage.includes('phone') || lowerMessage.includes('reach')) {
            return this.getRandomResponse('contact');
        } else if (lowerMessage.includes('project') || lowerMessage.includes('portfolio') || lowerMessage.includes('work')) {
            return this.getRandomResponse('projects');
        } else if (lowerMessage.includes('education') || lowerMessage.includes('study') || lowerMessage.includes('college') || lowerMessage.includes('university')) {
            return this.getRandomResponse('education');
        } else {
            return this.getRandomResponse('default');
        }
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot-message typing-indicator';
        typingDiv.innerHTML = `
            <div class="message-content">
                <i class="uil uil-robot"></i>
                <div class="typing-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        `;
        this.messagesContainer.appendChild(typingDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    hideTypingIndicator() {
        const typingIndicator = this.messagesContainer.querySelector('.typing-indicator');
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    addMessage(text, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}-message`;
        
        const icon = sender === 'bot' ? 'uil-robot' : 'uil-user';
        
        messageDiv.innerHTML = `
            <div class="message-content">
                <i class="uil ${icon}"></i>
                <p>${text}</p>
            </div>
        `;

        this.messagesContainer.appendChild(messageDiv);
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    getRandomResponse(category) {
        const responses = this.responses[category];
        return responses[Math.floor(Math.random() * responses.length)];
    }
}

// Initialize chatbot when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Initialize chatbot
    const chatbot = new Chatbot();
    
    // Show notification dot after 5 seconds
    setTimeout(() => {
        const notificationDot = document.querySelector('.notification-dot');
        if (notificationDot) {
            notificationDot.style.display = 'block';
        }
    }, 5000);
});


document.addEventListener('DOMContentLoaded', () => {
    const contactForm = document.querySelector('.form-control');
    const nameInput = document.querySelector('input[placeholder="Name"]');
    const emailInput = document.querySelector('input[placeholder="Email"]');
    const messageInput = document.querySelector('textarea');
    const sendButton = document.querySelector('.form-button .btn');

    if (sendButton) {
        sendButton.addEventListener('click', (e) => {
            e.preventDefault();

            if (!nameInput.value.trim() || !emailInput.value.trim() || !messageInput.value.trim()) {
                alert('Please fill in all fields');
                return;
            }

            if (!isValidEmail(emailInput.value)) {
                alert('Please enter a valid email address');
                return;
            }

            sendButton.innerHTML = '<i class="uil uil-spinner"></i> Sending...';
            sendButton.disabled = true;

            setTimeout(() => {
                alert('Thank you for your message! I will get back to you soon.');
                nameInput.value = '';
                emailInput.value = '';
                messageInput.value = '';
                sendButton.innerHTML = '<i class="uil uil-message"></i> Send Message';
                sendButton.disabled = false;
            }, 2000);
        });
    }
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}


document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-link[href^="#"]');
    
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});

// ----- SOCIAL MEDIA LINKS -----
document.addEventListener('DOMContentLoaded', () => {
    const socialIcons = document.querySelectorAll('.social_icons .icon, .footer-social-icons .icon');
    
    socialIcons.forEach((icon, index) => {
        icon.addEventListener('click', () => {
            const platforms = [
                'https://www.instagram.com/unlucky_3s/',
                'https://www.linkedin.com/in/siddaraju-t-036901250/',
                'https://github.com/silentkillerpart2',
                'mailto:siddunayak604@gmail.com'
            ];
            
            if (platforms[index]) {
                window.open(platforms[index], '_blank');
            }
        });
    });
});

// ----- DOWNLOAD CV FUNCTIONALITY -----
document.addEventListener('DOMContentLoaded', () => {
    const downloadButtons = document.querySelectorAll('.btn:has(i.uil-file-alt), .btn:has(i.uil-import)');
    
    downloadButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Simulate download
            button.innerHTML = '<i class="uil uil-spinner"></i> Downloading...';
            button.disabled = true;
            
            setTimeout(() => {
                alert('CV download started! (This is a demo - in a real scenario, it would download your actual CV)');
                button.innerHTML = '<i class="uil uil-file-alt"></i> Download CV';
                button.disabled = false;
            }, 2000);
        });
    });
});

// ----- HIRE ME BUTTON -----
document.addEventListener('DOMContentLoaded', () => {
    const hireButtons = document.querySelectorAll('.blue-btn');
    
    hireButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Scroll to contact section
            const contactSection = document.querySelector('#contact');
            if (contactSection) {
                contactSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
});
