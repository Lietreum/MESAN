import React, { useState } from 'react';
import { FaArrowLeft, FaPaperPlane, FaSmile } from 'react-icons/fa';

// Gambar superhero sementara
const contacts = [
  { id: 1, name: 'Ibu Kosim', image: 'https://i.pinimg.com/564x/fa/ea/7b/faea7b2e713393e2ad90b2d90ac3c9e3.jpg' },
  { id: 2, name: 'Ibu Sumiyati', image: 'https://i.pinimg.com/564x/4f/30/05/4f3005223e8e76f1821bab10d04a29b1.jpg' },
  { id: 3, name: 'Ibu Afikah', image: 'https://i.pinimg.com/564x/c8/a9/3f/c8a93f2740808241275cafebf7b2cdca.jpg' },
  { id: 4, name: 'Ibu Lin', image: 'https://i.pinimg.com/564x/ae/cc/bb/aeccbb5fb7968f6c32cbea47809bc05c.jpg' },
  { id: 5, name: 'Ibu Irma', image: 'https://i.pinimg.com/736x/f2/22/83/f222834f2141add9d958975ce52810ff.jpg' },
  { id: 6, name: 'Mas Sumandi', image: 'https://i.pinimg.com/564x/c9/b4/61/c9b461ed23de9281e346da861ec4d64b.jpg' },
  { id: 7, name: 'Ibu Enok', image: 'https://i.pinimg.com/564x/20/30/51/203051ac48d4c2b0dc654a40efa7e76d.jpg' },
  { id: 8, name: 'Ibu Lina', image: 'https://i.pinimg.com/564x/9d/d0/de/9dd0ded95f9dff9bffc26d8c049c231b.jpg' },
];

const Messages: React.FC = () => {
  const [selectedContact, setSelectedContact] = useState(contacts[0]);
  const [messages, setMessages] = useState([
    { from: 'them', text: 'Bu saya mau kopi panas good day!', time: '10:05 AM' },
    { from: 'me', text: 'Oke, Ibu buatkan', time: '10:06 AM' },
    { from: 'me', text: 'Siap bu, nanti saya ambil', time: '10:07 AM' },
  ]);
  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    setMessages((prevMessages) => [
      ...prevMessages,
      { from: 'me', text: newMessage, time: currentTime },
    ]);
    setNewMessage('');
  };

  return (
    <div className="flex flex-col md:flex-row h-screen bg-gray-100">
      {/* Sidebar (Contact List) */}
      <div className="w-full md:w-1/3 lg:w-1/4 bg-white p-4 md:p-6 border-r border-gray-200">
        <button className="flex items-center mb-4 text-gray-700 hover:text-gray-900 transition">
          <FaArrowLeft className="mr-2" />
          Back
        </button>
        <ul className="space-y-2">
          {contacts.map((contact) => (
            <li
              key={contact.id}
              onClick={() => setSelectedContact(contact)}
              className={`flex items-center space-x-3 p-3 rounded-lg cursor-pointer transition-transform transform ${
                selectedContact.id === contact.id
                  ? 'bg-blue-50 ring-2 ring-blue-400'
                  : 'bg-white'
              } shadow-sm hover:shadow-lg hover:scale-105`}
            >
              <img
                src={contact.image}
                alt={contact.name}
                className="h-12 w-12 rounded-full object-cover"
              />
              <span className="text-md font-medium text-gray-800">
                {contact.name}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col bg-white">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-6 bg-blue-50 border-b border-gray-200">
          <h2 className="text-2xl font-semibold text-gray-900">
            {selectedContact.name}
          </h2>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 p-6 space-y-4 overflow-y-auto bg-gray-50">
          {messages.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.from === 'me' ? 'justify-end' : 'justify-start'
              }`}
            >
              <div
                className={`${
                  msg.from === 'me' ? 'bg-blue-100' : 'bg-gray-200'
                } p-4 rounded-xl max-w-xs text-sm shadow-lg`}
              >
                <p>{msg.text}</p>
                <span className="text-xs text-gray-500 block mt-1">{msg.time}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Chat Input */}
        <div className=" bottom-0 p-6 bg-white border-t border-white">
          <div className="flex items-center space-x-4">
            {/* Icon for Emoji */}
            <button className="p-2 text-gray-500 hover:text-blue-500 transition">
              <FaSmile className="w-6 h-6" />
            </button>
            <input
              type="text"
              placeholder="Type a message..."
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') sendMessage();
              }}
              className="flex-1 px-4 py-3 rounded-full border border-gray-300 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition bg-slate-300"
            />
            <button
              onClick={sendMessage}
              className="p-3 bg-gradient-to-r from-cyan-700 to-blue-500 rounded-full text-white hover:from-blue-600 hover:to-green-500 transition transform hover:scale-110 shadow-lg"
            >
              <FaPaperPlane />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
