import React, { useState } from "react";
import axios from "axios";

export default function TeamDetails() {
  const people = [
    {
      name: "Sk. Shabana",
      college: "Narasaraopeta Engineering College",
      email: "shabana@gmail.com",
      phone: "1234567890",
    },
    {
      name: "M.lakshmi gayathri",
      college: "Narasaraopeta Engineering College",
      email: "gaayi@gmail.com",
      phone: "9876543210",
    },
   
    {
      name: "G.Pravallika",
      college: "Narasaraopeta Engineering College",
      email: "pavi@gmail.com",
      phone: "1234567890",
    },
  ];

  const [selectedPerson, setSelectedPerson] = useState(null);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [submittedMessages, setSubmittedMessages] = useState({});
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleSelectPerson = (person) => {
    setSelectedPerson(person);
    setMessage("");
    setSuccessMessage("");
    setIsEditing(false);
    setEditIndex(null);
  };

  const handleSendMessage = async () => {
    if (message.trim() === "") {
      setSuccessMessage("Please type a message before sending!");
      return;
    }

    try {
      await axios.post("http://localhost:5000/contact", {
        name: selectedPerson.name,
        email: selectedPerson.email,
        phone: selectedPerson.phone,
        message: message,
      });

      setSuccessMessage("Message sent successfully!");

      setSubmittedMessages((prev) => {
        const updated = { ...prev };
        const key = selectedPerson.phone;
        if (!updated[key]) updated[key] = [];
        updated[key].push(message);
        return updated;
      });

      setMessage("");
      setIsEditing(false);
      setEditIndex(null);

      setTimeout(() => setSuccessMessage(""), 3000);
    } catch (err) {
      console.error(err);
      setSuccessMessage("Error submitting message!");
      setTimeout(() => setSuccessMessage(""), 3000);
    }
  };

  const handleEdit = (index) => {
    const messages = submittedMessages[selectedPerson.phone] || [];
    setMessage(messages[index]);
    setIsEditing(true);
    setEditIndex(index);
    setSuccessMessage("");
  };

  const handleUpdate = () => {
    if (editIndex === null) return;

    setSubmittedMessages((prev) => {
      const updated = { ...prev };
      const key = selectedPerson.phone;
      if (updated[key] && updated[key][editIndex] !== undefined) {
        updated[key][editIndex] = message;
      }
      return updated;
    });

    setSuccessMessage("Message updated successfully!");
    setMessage("");
    setIsEditing(false);
    setEditIndex(null);

    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleDelete = (index) => {
    setSubmittedMessages((prev) => {
      const updated = { ...prev };
      const key = selectedPerson.phone;
      if (updated[key]) {
        updated[key] = updated[key].filter((_, i) => i !== index);
      }
      return updated;
    });

    if (isEditing && editIndex === index) {
      setMessage("");
      setIsEditing(false);
      setEditIndex(null);
    }
    setSuccessMessage("Message deleted.");
    setTimeout(() => setSuccessMessage(""), 3000);
  };

  const handleClear = () => {
    setMessage("");
    setSuccessMessage("");
    setIsEditing(false);
    setEditIndex(null);
  };

  // Styles
  const containerStyle = {
    minHeight: "100vh",
    backgroundColor: "#CAF0F8",
    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",
    fontFamily: "'Poppins', sans-serif",
    padding: "40px 15px",
    gap: "20px",
  };

  const leftBoxStyle = {
    backgroundColor: "#B3E5FC",
    padding: "15px",
    borderRadius: "16px",
    width: "200px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    alignItems: "center",
    border: "1px solid #81D4FA",
  };

  const rightSectionStyle = {
    display: "flex",
    flexDirection: "row",
    gap: "20px",
  };

  const rightBoxStyle = {
    backgroundColor: "#B3E5FC",
    padding: "20px",
    borderRadius: "16px",
    width: "400px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    border: "1px solid #81D4FA",
  };

  const messageListStyle = {
    backgroundColor: "#B3E5FC",
    padding: "20px",
    borderRadius: "16px",
    width: "350px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
    border: "1px solid #81D4FA",
    color: "#01579B",
    fontSize: "14px",
    maxHeight: "300px",
    overflowY: "auto",
  };

  const buttonStyle = {
    backgroundColor: "#0288D1",
    color: "white",
    padding: "10px",
    border: "none",
    borderRadius: "10px",
    cursor: "pointer",
    fontWeight: "600",
    width: "100%",
    fontSize: "14px",
    transition: "0.3s",
    textAlign: "center",
  };

  const detailBoxStyle = {
    padding: "10px",
    backgroundColor: "#E1F5FE",
    color: "#01579B",
    borderRadius: "12px",
    border: "1px solid #81D4FA",
    fontSize: "13px",
  };

  const textAreaStyle = {
    width: "100%",
    minHeight: "60px",
    borderRadius: "8px",
    border: "1.5px solid #90CAF9",
    padding: "6px",
    fontSize: "13px",
    resize: "none",
    outline: "none",
    backgroundColor: "#E1F5FE",
    color: "#01579B",
    boxSizing: "border-box",
  };

  const sendButtonStyle = {
    backgroundColor: "#0288D1",
    color: "white",
    border: "none",
    borderRadius: "50px",
    padding: "8px 18px",
    fontWeight: "600",
    cursor: "pointer",
    fontSize: "13px",
  };

  const successMsgStyle = {
    color: successMessage.toLowerCase().includes("success")
      ? "#00796B"
      : "#D32F2F",
    fontWeight: "600",
    fontSize: "12px",
    textAlign: "center",
    marginTop: "5px",
  };

  const messageButtonStyle = {
    marginLeft: "8px",
    fontSize: "11px",
    backgroundColor: "#E1F5FE",
    border: "1px solid #0288D1",
    color: "#01579B",
    padding: "2px 6px",
    borderRadius: "6px",
    cursor: "pointer",
  };

  return (
    <div style={containerStyle}>
      {/* Left Side: Team Members */}
      <div style={leftBoxStyle}>
        <h3 style={{ color: "#01579B", fontWeight: "700", fontSize: "16px" }}>
          Our Team
        </h3>
        {people.map((person) => (
          <button
            key={person.phone}
            style={buttonStyle}
            onClick={() => handleSelectPerson(person)}
            onMouseOver={(e) => (e.target.style.backgroundColor = "#0277BD")}
            onMouseOut={(e) => (e.target.style.backgroundColor = "#0288D1")}
          >
            {person.name}
          </button>
        ))}
      </div>

      {/* Right Side: Form + Messages */}
      {selectedPerson && (
        <div style={rightSectionStyle}>
          {/* Contact Form */}
          <div style={rightBoxStyle}>
            <h3 style={{ color: "#01579B", fontWeight: "700", fontSize: "16px" }}>
              Contact {selectedPerson.name}
            </h3>

            <div style={detailBoxStyle}>
              <p>
                <strong>College:</strong> {selectedPerson.college}
              </p>
              <p>
                <strong>Email:</strong> {selectedPerson.email}
              </p>
              <p>
                <strong>Phone:</strong> {selectedPerson.phone}
              </p>
            </div>

            <label
              style={{ fontWeight: "600", color: "#01579B", fontSize: "13px" }}
            >
              Your Message:
            </label>
            <textarea
              style={textAreaStyle}
              placeholder={`Type your message to ${selectedPerson.name}...`}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />

            <div
              style={{
                display: "flex",
                gap: "8px",
                justifyContent: "flex-end",
                marginTop: "6px",
              }}
            >
              {!isEditing && (
                <button style={sendButtonStyle} onClick={handleSendMessage}>
                  Submit
                </button>
              )}
              {isEditing && (
                <button style={sendButtonStyle} onClick={handleUpdate}>
                  Update
                </button>
              )}
              <button style={sendButtonStyle} onClick={handleClear}>
                Clear
              </button>
            </div>

            {successMessage && (
              <p style={successMsgStyle}>{successMessage}</p>
            )}
          </div>

          {/* Messages List */}
          <div style={messageListStyle}>
            <h4 style={{ marginBottom: "8px", fontSize: "15px" }}>
              Previous Messages
            </h4>
            <ul style={{ paddingLeft: "15px", margin: 0 }}>
              {(submittedMessages[selectedPerson.phone] || []).map(
                (msg, idx) => (
                  <li
                    key={idx}
                    style={{
                      marginBottom: "10px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      backgroundColor: "#E1F5FE",
                      padding: "6px 10px",
                      borderRadius: "10px",
                      fontSize: "13px",
                    }}
                  >
                    <span style={{ flex: 1, wordBreak: "break-word" }}>
                      {msg}
                    </span>
                    <div>
                      <button
                        style={messageButtonStyle}
                        onClick={() => handleEdit(idx)}
                        title="Edit"
                      >
                        Edit
                      </button>
                      <button
                        style={{ ...messageButtonStyle, marginLeft: "4px" }}
                        onClick={() => handleDelete(idx)}
                        title="Delete"
                      >
                        Delete
                      </button>
                    </div>
                  </li>
                )
              )}
              {(submittedMessages[selectedPerson.phone] || []).length === 0 && (
                <li style={{ fontSize: "13px", color: "#666" }}>
                  No messages yet.
                </li>
              )}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
