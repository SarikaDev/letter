/* eslint-disable @typescript-eslint/no-explicit-any */
// lib/graphqlClient.ts
import axios from "axios";

export const graphqlFetcher = async ({
  query,
  variables,
}: {
  query: string;
  variables?: any;
}) => {
  const response = await axios.post(
    "/api/graphql",
    {
      query,
      variables,
    },
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  // Basic GraphQL error handling
  if (response.data.errors) {
    throw new Error(response.data.errors[0].message);
  }

  return response.data.data;
};
