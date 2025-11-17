# 🟩 Real-Time Collaborative Whiteboard

A real-time collaborative whiteboard application built using **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**.  
It allows multiple users to draw, erase, edit, and collaborate simultaneously with **smooth real-time updates** and **persistent canvas storage**.

---

## 🖼️ Project Preview

<img width="958" height="559" alt="image" src="https://github.com/user-attachments/assets/ed537919-fade-4953-994e-31c338f123e0" />

<img width="452" height="307" alt="image" src="https://github.com/user-attachments/assets/ab9f67a8-6aa8-4dad-b212-df67bcdeb9b0" />

<img width="383" height="312" alt="image" src="https://github.com/user-attachments/assets/7e95c5a7-ce28-410d-888d-5c2bcdcfdc35" />

<img width="957" height="546" alt="image" src="https://github.com/user-attachments/assets/0e03148e-b020-4909-b0ae-27d3ebb290b1" />

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


