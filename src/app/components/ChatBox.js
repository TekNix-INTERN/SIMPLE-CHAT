// components/ChatWindow.tsx
"use client"; // Thêm dòng này để đánh dấu component là Client Component

import { useState, useEffect } from 'react';
import Message from './Message';

export default function ChatWindow() {
  const [chat, setChat] = useState([]);

  useEffect(() => {
    // Lắng nghe tin nhắn từ server và cập nhật danh sách chat
  }, []);

  return (
    <div>
      {chat.map((msg, index) => (
        <Message key={index} message={msg} />
      ))}
    </div>
  );
}
