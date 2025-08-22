

import json
import os
import random
import re
from datetime import datetime
from typing import Dict, List, Optional
import logging


logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

class SIDDUChatbot:
    def __init__(self):
        self.resume_data = self.load_resume_data()
        self.conversation_history = []
        self.user_preferences = {}
        
    def load_resume_data(self) -> Dict:
        """Load resume and portfolio data from assets/resume.json if available, else use defaults"""
        json_path = os.path.join(os.path.dirname(__file__), 'assets', 'resume.json')
        try:
            if os.path.exists(json_path):
                with open(json_path, 'r', encoding='utf-8') as f:
                    data = json.load(f)
                    logger.info("Loaded resume data from assets/resume.json")
                    return data
        except Exception as e:
            logger.warning(f"Failed to load assets/resume.json, using defaults. Error: {e}")

        return {
            "personal_info": {
                "name": "Siddaraju T",
                "title": "Computer Science Engineering Student",
                "email": "siddunayak604@gmail.com",
                "phone": "+91 8151042840",
                "location": "Bangalore, Karnataka, India",
                "linkedin": "https://www.linkedin.com/in/siddaraju-t-036901250/",
                "github": "https://github.com/silentkillerpart2",
                "portfolio": "",
                "instagram": "https://www.instagram.com/siddu_t_036901250/"
            },
            "education": {
                "degree": "Computer Science and Engineering (CSE)",
                "institution": "RVTM",
                "status": "Currently pursuing",
                "focus_areas": ["Software Development", "Web Technologies", "Database Management"]
            },
            "skills": {
                "frontend": ["HTML", "CSS", "JavaScript", "React", "Excel", "Word"],
                "backend": ["PHP", "Java", "Python"],
                "database": ["MySQL", "MongoDB"],
                "tools": ["Git", "VS Code", "Eclipse"],
                "languages": ["English", "Kannada", "Hindi"]
            },
            "experience": {
                "level": "Fresher",
                "type": "Student",
                "projects_completed": "10+",
                "certificates": "10+",
                "focus": "Academic projects and self-learning"
            },
            "certificates": [
                {
                    "name": "Networking Basics",
                    "issuer": "Great Learning",
                    "date": "December 04, 2024",
                    "url": "https://www.mygreatlearning.com/certificate/SQYSWZDF"
                },
                {
                    "name": "Python Programming",
                    "issuer": "Coursera",
                    "date": "November 15, 2024",
                    "url": "#"
                },
                {
                    "name": "Web Development",
                    "issuer": "Udemy",
                    "date": "October 20, 2024",
                    "url": "#"
                }
            ],
            "projects": [
                {
                    "name": "Portfolio Website",
                    "description": "Personal portfolio website with modern design and chatbot integration",
                    "technologies": ["HTML", "CSS", "JavaScript", "Python"],
                    "type": "Web Development"
                },
                {
                    "name": "Database Management System",
                    "description": "Academic project for database design and management",
                    "technologies": ["MySQL", "PHP", "HTML", "CSS"],
                    "type": "Database"
                }
            ],
            "interests": [
                "Software Development",
                "Web Technologies",
                "Problem Solving",
                "Continuous Learning",
                "Innovation"
            ]
        }
    
    def get_response(self, user_message: str) -> str:
        """Generate intelligent response based on user input"""
        try:
  t
            clean_message = self.preprocess_message(user_message)
            
         
            self.conversation_history.append({
                "user": user_message,
                "timestamp": datetime.now().isoformat()
            })
           
            intent = self.classify_intent(clean_message)
            response = self.generate_response(intent, clean_message)
            
           
            self.conversation_history.append({
                "bot": response,
                "timestamp": datetime.now().isoformat()
            })
            
            return response
            
        except Exception as e:
            logger.error(f"Error generating response: {e}")
            return "I apologize, but I'm having trouble processing your request right now. Please try again later."
    
    def preprocess_message(self, message: str) -> str:
        """Clean and normalize user input"""
   
        message = message.lower()
        
       
        message = re.sub(r'\s+', ' ', message).strip()
        
        
        message = re.sub(r'[^\w\s]', '', message)
        
        return message
    
    def classify_intent(self, message: str) -> str:
        """Classify user intent based on keywords"""
 
        if any(word in message for word in ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon']):
            return 'greeting'
      
        if any(word in message for word in ['skill', 'technology', 'programming', 'language', 'framework', 'tool']):
            return 'skills'
        
        if any(word in message for word in ['experience', 'work', 'job', 'career', 'background', 'history']):
            return 'experience'
        
        
        if any(word in message for word in ['education', 'study', 'college', 'university', 'degree', 'academic']):
            return 'education'
       
        if any(word in message for word in ['contact', 'email', 'phone', 'reach', 'connect', 'get in touch']):
            return 'contact'
        
        
        if any(word in message for word in ['project', 'portfolio', 'work', 'development', 'application']):
            return 'projects'
        
       
        if any(word in message for word in ['certificate', 'certification', 'course', 'training', 'achievement']):
            return 'certificates'
        
       
        if any(word in message for word in ['name', 'who', 'about', 'personal', 'info']):
            return 'personal_info'
        
        
        if any(word in message for word in ['help', 'what can you do', 'assist', 'support']):
            return 'help'
        
        return 'unknown'
    
    def generate_response(self, intent: str, original_message: str) -> str:
        """Generate appropriate response based on intent"""
        responses = {
            'greeting': self.get_greeting_response(),
            'skills': self.get_skills_response(),
            'experience': self.get_experience_response(),
            'education': self.get_education_response(),
            'contact': self.get_contact_response(),
            'projects': self.get_projects_response(),
            'certificates': self.get_certificates_response(),
            'personal_info': self.get_personal_info_response(),
            'help': self.get_help_response(),
            'unknown': self.get_unknown_response()
        }
        
        return responses.get(intent, self.get_unknown_response())
    
    def get_greeting_response(self) -> str:
        """Generate greeting response"""
        greetings = [
            f"Hello! I'm {self.resume_data['personal_info']['name']}'s AI assistant. How can I help you today? 😊",
            f"Hi there! Welcome to {self.resume_data['personal_info']['name']}'s portfolio. What would you like to know?",
            f"Greetings! I'm here to tell you about {self.resume_data['personal_info']['name']}'s skills and experience.",
            f"Hello! I'm excited to share information about {self.resume_data['personal_info']['name']}. What interests you?"
        ]
        return random.choice(greetings)
    
    def get_skills_response(self) -> str:
        """Generate skills response"""
        skills = self.resume_data.get('skills', {})
        
        name = self.resume_data.get('personal_info', {}).get('name', 'I')
        response = f"{name} is skilled in:\n\n"
        response += "🎨 **Frontend Technologies:**\n"
        response += f"• {', '.join(skills.get('frontend', []))}\n\n"
        response += "⚙️ **Backend Technologies:**\n"
        response += f"• {', '.join(skills.get('backend', []))}\n\n"
        response += "🗄️ **Database Technologies:**\n"
        response += f"• {', '.join(skills.get('database', []))}\n\n"
        response += "🛠️ **Tools & Languages:**\n"
        tools = skills.get('tools', [])
        languages = skills.get('languages', [])
        response += f"• {', '.join(tools + languages)}\n\n"
        response += "He's particularly strong in Python, web development, and database management!"
        
        return response
    
    def get_experience_response(self) -> str:
        """Generate experience response"""
        exp = self.resume_data.get('experience', {})
        
        name = self.resume_data.get('personal_info', {}).get('name', 'I')
        edu = self.resume_data.get('education', {})
        response = f"{name} is currently a {edu.get('degree', '')} student at {edu.get('institution', '')}.\n\n"
        response += f"📊 **Experience Level:** {exp.get('level', '')}\n"
        response += f"🎯 **Focus Area:** {exp.get('focus', '')}\n"
        response += f"📜 **Certificates Completed:** {exp.get('certificates', '')}\n"
        response += f"💼 **Projects Completed:** {exp.get('projects_completed', '')}\n\n"
        response += "He's passionate about software development and problem-solving, with hands-on experience through academic projects and self-learning initiatives."
        
        return response
    
    def get_education_response(self) -> str:
        """Generate education response"""
        edu = self.resume_data.get('education', {})
        
        name = self.resume_data.get('personal_info', {}).get('name', 'I')
        response = f"{name} is pursuing {edu.get('degree', '')} at {edu.get('institution', '')}.\n\n"
        response += f"🎓 **Current Status:** {edu.get('status', '')}\n"
        response += f"📚 **Focus Areas:** {', '.join(edu.get('focus_areas', []))}\n\n"
        response += "He's passionate about technology and continuous learning, with a strong foundation in computer science fundamentals and modern development practices."
        
        return response
    
    def get_contact_response(self) -> str:
        """Generate contact response"""
        contact = self.resume_data.get('personal_info', {})
        
        response = f"You can reach {contact.get('name', 'me')} through:\n\n"
        response += f"📧 **Email:** {contact.get('email', '')}\n"
        response += f"📱 **Phone:** {contact.get('phone', '')}\n"
        response += f"📍 **Location:** {contact.get('location', '')}\n"
        response += f"🔗 **LinkedIn:** {contact.get('linkedin', '')}\n"
        response += f"💻 **GitHub:** {contact.get('github', '')}\n\n"
        response += "He's available for freelance work and full-time opportunities!"
        
        return response
    
    def get_projects_response(self) -> str:
        """Generate projects response"""
        projects = self.resume_data.get('projects', [])
        
        name = self.resume_data.get('personal_info', {}).get('name', 'I')
        response = f"{name} has worked on various projects:\n\n"
        
        for i, project in enumerate(projects, 1):
            response += f"**{i}. {project.get('name', '')}**\n"
            response += f"📝 {project.get('description', '')}\n"
            response += f"🛠️ Technologies: {', '.join(project.get('technologies', []))}\n"
            response += f"📂 Type: {project.get('type', '')}\n\n"
        
        response += "He's particularly interested in creating user-friendly and efficient solutions!"
        
        return response
    
    def get_certificates_response(self) -> str:
        """Generate certificates response"""
        certificates = self.resume_data.get('certificates', [])
        
        name = self.resume_data.get('personal_info', {}).get('name', 'I')
        response = f"{name} has completed several certifications:\n\n"
        
        for cert in certificates:
            response += f"🏆 **{cert.get('name', '')}**\n"
            response += f"📜 Issuer: {cert.get('issuer', '')}\n"
            response += f"📅 Date: {cert.get('date', '')}\n"
            if cert.get('url') and cert.get('url') != '#':
                response += f"🔗 Verify: {cert.get('url')}\n"
            response += "\n"
        
        response += "These certifications demonstrate his commitment to continuous learning and skill development!"
        
        return response
    
    def get_personal_info_response(self) -> str:
        """Generate personal info response"""
        personal = self.resume_data.get('personal_info', {})
        
        response = f"**{personal.get('name', '')}**\n"
        response += f"🎯 {personal.get('title', '')}\n\n"
        response += f"📍 Based in {personal.get('location', '')}\n"
        response += f"📧 {personal.get('email', '')}\n"
        response += f"📱 {personal.get('phone', '')}\n\n"
        response += "He's a passionate Computer Science student with a keen interest in software development and innovative solutions!"
        
        return response
    
    def get_help_response(self) -> str:
        """Generate help response"""
        response = "I can help you learn about:\n\n"
        response += "👤 **Personal Information** - Ask about who I am\n"
        response += "🎓 **Education** - Learn about my academic background\n"
        response += "🛠️ **Skills** - Discover my technical expertise\n"
        response += "💼 **Experience** - Understand my background\n"
        response += "📁 **Projects** - See my completed work\n"
        response += "🏆 **Certificates** - View my achievements\n"
        response += "📞 **Contact** - Get my contact information\n\n"
        response += "Just ask me about any of these topics!"
        
        return response
    
    def get_unknown_response(self) -> str:
        """Generate response for unknown intent"""
        responses = [
            "I'm not sure I understood that. Could you ask me about my skills, experience, education, projects, or contact information?",
            "That's an interesting question! I can tell you about my technical skills, background, or how to contact me.",
            "I'd be happy to help! Try asking about my skills, experience, education, or contact details.",
            "I'm here to share information about my portfolio. You can ask about my skills, projects, or how to reach me!"
        ]
        return random.choice(responses)
    
    def get_conversation_history(self) -> List[Dict]:
        """Get conversation history"""
        return self.conversation_history
    
    def clear_history(self):
        """Clear conversation history"""
        self.conversation_history = []
    
    def save_conversation(self, filename: str = "conversation_history.json"):
        """Save conversation history to file"""
        try:
            with open(filename, 'w') as f:
                json.dump(self.conversation_history, f, indent=2)
            logger.info(f"Conversation saved to {filename}")
        except Exception as e:
            logger.error(f"Error saving conversation: {e}")

# Flask API for web integration
from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

chatbot = SIDDUChatbot()

@app.route('/api/resume', methods=['GET'])
def get_resume():
    """Return full resume JSON used by the chatbot"""
    try:
        return jsonify(chatbot.resume_data)
    except Exception as e:
        logger.error(f"Resume endpoint error: {e}")
        return jsonify({'error': 'Unable to fetch resume data'}), 500

@app.route('/api/chat', methods=['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'])
def chat():
    """API endpoint for chatbot interaction"""
    try:
        # Handle different HTTP methods
        if request.method == 'GET':
            # For GET requests, try to get message from query parameters
            user_message = request.args.get('message', '')
        else:
            # For other methods, try to get message from JSON body
            data = request.get_json() or {}
            user_message = data.get('message', '')
        
        if not user_message:
            return jsonify({'error': 'No message provided'}), 400
        
        response = chatbot.get_response(user_message)
        
        return jsonify({
            'response': response,
            'timestamp': datetime.now().isoformat(),
            'method': request.method
        })
    
    except Exception as e:
        logger.error(f"API error: {e}")
        return jsonify({'error': 'Internal server error'}), 500

@app.route('/api/chat/history', methods=['GET'])
def get_history():
    """Get conversation history"""
    return jsonify(chatbot.get_conversation_history())

@app.route('/api/chat/clear', methods=['POST'])
def clear_history():
    """Clear conversation history"""
    chatbot.clear_history()
    return jsonify({'message': 'History cleared'})

if __name__ == '__main__':
    print("🤖 SIDDU Portfolio Chatbot Starting...")
    print("📝 Resume data loaded successfully!")
    print("🌐 API server starting on http://localhost:5000")
    print("📡 Available endpoints:")
    print("   POST /api/chat - Send message")
    print("   GET  /api/chat/history - Get conversation history")
    print("   POST /api/chat/clear - Clear history")
    print("\n💡 Test the chatbot:")
    print("   curl -X POST http://localhost:5000/api/chat")
    print("   -H 'Content-Type: application/json'")
    print("   -d '{\"message\": \"Hello\"}'")
    
    app.run(debug=True, host='0.0.0.0', port=5000)
