// app/page.tsx
"use client"; // Thêm dòng này để đánh dấu component là Client Component

import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [username, setUsername] = useState('');

  return (
    <div>
      <h1>Welcome to Simple Chat</h1>
      <input
        type="text"
        placeholder="Enter your name"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Link href={`/chat?name=${username}`}>
        <button>Join Chat</button>
      </Link>
    </div>
  );
}
