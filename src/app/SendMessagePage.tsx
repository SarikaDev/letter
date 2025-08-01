"use client";

import { useSendMessage } from "@/hooks/useSendMessage";
import { useState } from "react";

export default function SendMessagePage() {
  const [chatId, setChatId] = useState("1");
  const [text, setText] = useState("");

  const { mutate: sendMessage, isPending, error, data } = useSendMessage();

  const handleSend = () => {
    if (!chatId || !text) return;
    sendMessage({ chatId, text });
    setText("");
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <h2 className="text-xl mb-4 font-semibold">Send a Message</h2>

      <input
        className="border border-gray-300 rounded p-2 w-full mb-2"
        placeholder="Chat ID"
        value={chatId}
        onChange={(e) => setChatId(e.target.value)}
      />

      <input
        className="border border-gray-300 rounded p-2 w-full mb-2"
        placeholder="Your Message"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
        onClick={handleSend}
        disabled={!text || isPending}
      >
        {isPending ? "Sending..." : "Send"}
      </button>

      {error && <p className="text-red-500 mt-2">Failed to send message.</p>}

      {data && (
        <pre className="mt-4 bg-gray-100 p-2 rounded text-sm">
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}
