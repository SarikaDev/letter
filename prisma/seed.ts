import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  await prisma.chat.createMany({
    data: [
      { name: "Alice", lastMessage: "Hey there!" },
      { name: "Bob", lastMessage: "How are you?" },
      { name: "Alice", lastMessage: "I am fine." },
    ],
  });
}

main()
  .then(() => prisma.$disconnect())
  .catch((e) => {
    console.error(e);
    prisma.$disconnect();
    process.exit(1);
  });
