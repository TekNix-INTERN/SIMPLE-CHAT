// app/chat/page.tsx

import ChatBox from "../components/ChatBox";
import ChatWindow from "../components/ChatWindow";


export default function ChatPage() {
  return (
    <div>
      <ChatWindow />
      <ChatBox />
    </div>
  );
}
