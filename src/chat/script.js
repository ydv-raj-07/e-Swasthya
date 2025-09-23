// document.addEventListener("DOMContentLoaded", function () {
//   const chatbotContainer = document.getElementById("chatbot-container");
//   const sendBtn = document.getElementById("send-btn");
//   const chatbotInput = document.getElementById("chatbot-input");
//   const chatbotMessages = document.getElementById("chatbot-messages");
//   const chatbotIcon = document.getElementById("chatbot-icon");
//   const closeButton = document.getElementById("close-btn");

//   // Open chatbot
//   chatbotIcon.addEventListener("click", function () {
//     chatbotContainer.classList.remove("hidden");
//     chatbotIcon.style.display = "none";
//   });

//   // Close chatbot
//   closeButton.addEventListener("click", function () {
//     chatbotContainer.classList.add("hidden");
//     chatbotIcon.style.display = "flex";
//   });

//   // Send button & Enter key
//   sendBtn.addEventListener("click", sendMessage);
//   chatbotInput.addEventListener("keypress", function (e) {
//     if (e.key === "Enter") sendMessage();
//   });

//   // Send user message
//   function sendMessage() {
//     const userMessage = chatbotInput.value.trim();
//     if (userMessage) {
//       appendMessage("user", userMessage);
//       chatbotInput.value = "";
//       getBotResponse(userMessage);
//     }
//   }

//   // Append messages to chat window
//   function appendMessage(sender, message) {
//     const messageElement = document.createElement("div");
//     messageElement.classList.add("message", sender);
//     messageElement.textContent = message;
//     chatbotMessages.appendChild(messageElement);
//     chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
//   }

//   // Get response from backend
//   async function getBotResponse(userMessage) {
//     try {
//       const response = await fetch("http://localhost:5000/api/chat", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify({ message: userMessage }),
//       });

//       const data = await response.json();

//       if (response.ok && data.choices && data.choices.length > 0) {
//         const botMessage = data.choices[0].message.content;
//         appendMessage("bot", botMessage);
//       } else {
//         appendMessage(
//           "bot",
//           data.error?.message || "⚠️ Sorry, I couldn’t process your request."
//         );
//       }
//     } catch (error) {
//       console.error("Error fetching bot response:", error);
//       appendMessage("bot", "⚠️ Server error. Please try again.");
//     }
//   }
// });

document.addEventListener("DOMContentLoaded", function () {
  const chatbotContainer = document.getElementById("chatbot-container");
  const sendBtn = document.getElementById("send-btn");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotIcon = document.getElementById("chatbot-icon");
  const closeButton = document.getElementById("close-btn");

  // Open chatbot
  chatbotIcon.addEventListener("click", function () {
    chatbotContainer.classList.remove("hidden");
    chatbotIcon.style.display = "none";
  });

  // Close chatbot
  closeButton.addEventListener("click", function () {
    chatbotContainer.classList.add("hidden");
    chatbotIcon.style.display = "flex";
  });

  // Send button & Enter key
  sendBtn.addEventListener("click", sendMessage);
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendMessage();
  });

  // Send user message
  function sendMessage() {
    const userMessage = chatbotInput.value.trim();
    if (userMessage) {
      appendMessage("user", userMessage);
      chatbotInput.value = "";
      getBotResponse(userMessage);
    }
  }

  // Append messages to chat window
  function appendMessage(sender, message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("message", sender);
    messageElement.textContent = message;
    chatbotMessages.appendChild(messageElement);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // Get response from backend
  async function getBotResponse(userMessage) {
    try {
      const response = await fetch("http://localhost:5000/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });

      const data = await response.json();

      if (response.ok && data.reply) {
        appendMessage("bot", data.reply);
      } else {
        appendMessage("bot", data.error || "⚠️ Sorry, I couldn’t process your request.");
      }
    } catch (error) {
      console.error("Error fetching bot response:", error);
      appendMessage("bot", "⚠️ Server error. Please try again.");
    }
  }
});
