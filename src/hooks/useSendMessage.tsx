import { useMutation } from "@tanstack/react-query";
import { graphqlFetcher } from "@/lib/graphqlClient";

const SEND_MESSAGE = `
  mutation SendMessage($chatId: ID!, $text: String!) {
    sendMessage(chatId: $chatId, text: $text) {
      id
      text
      sender
    }
  }
`;

export function useSendMessage() {
  return useMutation({
    mutationFn: (variables: { chatId: string; text: string }) =>
      graphqlFetcher({ query: SEND_MESSAGE, variables }),
  });
}
