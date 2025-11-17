# 🟩 Real-Time Collaborative Whiteboard

A real-time collaborative whiteboard application built using **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**.  
It allows multiple users to draw, erase, edit, and collaborate simultaneously with **smooth real-time updates** and **persistent canvas storage**.

---

## 🚀 Live Demo

🔗 **Frontend (Vercel):** [https://your-frontend-vercel-link.com](#)  
🔗 **Backend (Render):** [https://your-backend-render-link.com](#)

---

## 🖼️ Project Preview

> *(Add your screenshot here — replace the image link below)*

![Whiteboard Screenshot](./screenshot.png)

---

## ✨ Features

- 🎨 **Real-time drawing & editing** using WebSockets (Socket.IO)  
- 👥 **Multi-user collaboration** with sub-second latency  
- 🔐 **JWT Authentication** for secure access  
- 💾 **Persistent whiteboard sessions** stored in MongoDB  
- ✏️ Tools: pencil, line, rectangle, freehand, eraser, colors, etc.  
- 🔄 **Autosave support** for seamless collaboration  
- 📁 **Create / Edit / Delete boards**  
- 🚀 **Deployed frontend + backend** for public use  
- 📱 Responsive UI for all devices  

---

## 🏗️ Tech Stack

### **Frontend**
- React.js  
- CSS Modules  
- RoughJS (Sketch-style drawing)  
- Perfect Freehand  
- Axios  
- Socket.IO Client  

### **Backend**
- Node.js  
- Express.js  
- MongoDB (with Mongoose ODM)  
- JWT Authentication  
- Socket.IO (rooms + event handling)  

### **Deployment**
- **Frontend And Backend → Vercel**

---

## 🔌 WebSocket Events (Socket.IO)

| Event Name          | Description |
|--------------------|-------------|
| `draw`             | Broadcasts drawing data to all users |
| `erase`            | Erases strokes across all clients |
| `save-canvas`      | Saves board to MongoDB |
| `load-canvas`      | Loads an existing board |
| `join-room`        | User joins a whiteboard room |
| `disconnect`       | Handles user disconnect |

---

## 💡 Optimizations

- Indexed MongoDB collections for faster CRUD performance  
- Reduced WebSocket bandwidth with efficient stroke-bundling  
- Implemented debouncing for heavy operations  
- Optimized REST API to achieve **30% improvement** in response times  

---

## 🤝 Contributing

Pull requests are welcome!  
For major changes, please open an issue first to discuss what you want to improve.

---

## 📄 License

MIT License © 2025 Srajan Seth


