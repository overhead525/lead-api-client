import * as Faker from "faker";
import * as React from "react";
import "./styles.css";

import LeadCard from "./components/LeadCard";

interface Lead {
  firstName: string;
  emailAddress: string;
  id: string;
}

export default function App() {
  const tempLeads = [
    {
      firstName: "Ezekiel",
      emailAddress: "ezek35@gmail.com",
      id: "10004"
    },
    {
      firstName: "Marcus",
      emailAddress: "marc78@aol.com",
      id: "10382"
    },
    {
      firstName: "Monkey",
      emailAddress: "luffyblue@one.com",
      id: "10034"
    }
  ];

  const fetchLeads = () => {};

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <div className="lead__container">
        {tempLeads.map((lead, index) => {
          return (
            <LeadCard
              key={index}
              firstName={lead.firstName}
              emailAddress={lead.emailAddress}
              id={lead.id}
              avatar={Faker.image.avatar()}
            />
          );
        })}
      </div>
    </div>
  );
}
