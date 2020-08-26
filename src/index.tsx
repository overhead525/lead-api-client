import * as React from "react";
import { render } from "react-dom";

import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";
import { gql } from "@apollo/client";

import App from "./App";

const client = new ApolloClient({
  /*
  link: createHttpLink({
    uri: "ec2-184-72-167-24.compute-1.amazonaws.com"
  }),
  */
  uri: "https://ec2-184-72-167-24.compute-1.amazonaws.com",
  cache: new InMemoryCache()
});

client
  .query({
    query: gql`
      query getLeads {
        leads {
          firstName
          emailAddress
          id
        }
      }
    `
  })
  .then((data) => console.log(data))
  .catch((error) => console.error(error));

const rootElement = document.getElementById("root");
render(<App />, rootElement);
