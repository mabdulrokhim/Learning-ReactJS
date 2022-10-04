import React from "react";
import Card from "./Card";
import Contact from "../contacts";
import Avatar from "./Avatar";

function createCard(contact) {
  return (
    <Card
      key={contact.id}
      id={contact.id}
      name={contact.name}
      img={contact.imgURL}
      tel={contact.phone}
      email={contact.email}
    />
  );
}

function App() {
  return (
    <div>
      <h1 className="heading">My Contacts</h1>
      <Avatar img="http://www.asianagri.com/wp-content/uploads/2019/03/Asian_Agri_Tyto_Alba_-_Natural_Pest_Management_1.jpg" />
      {Contact.map(createCard)}
    </div>
  );
}

export default App;
