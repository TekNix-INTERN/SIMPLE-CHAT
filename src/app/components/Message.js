// components/Message.tsx
"use client"; // Nếu bạn sử dụng hooks trong component này (hiện tại không cần, nhưng nên thêm để đảm bảo)

export default function Message({ message }) {
  return <div>{message}</div>;
}
