import { prisma } from "@/lib/prisma";

export const resolvers = {
  Query: {
    chats: async () => {
      return await prisma.chat.findMany({
        include: {
          messages: true, // Optional: include messages if needed
        },
      });
    },
  },

  Mutation: {
    sendMessage: async (_: unknown, args: { chatId: string; text: string }) => {
      const message = await prisma.message.create({
        data: {
          text: args.text,
          sender: "User", // Hardcoded for now
          chat: {
            connect: { id: parseInt(args.chatId, 10) }, // safer conversion
          },
        },
      });

      return message;
    },
  },
};
