import React from "react";
import Avatar from "./Avatar";
import Detail from "./Detail";

//kalo mau pecah2 jadi komponen mulai dari komponen utama kemudian copas2 jadi komponen kecil
//contohnya dari Avatar dan Detail, tentukan dulu className yg mau dijadikan props apa
//nanti digunakan utk props di masing2 komponen -- sambil cek di React Dev Tools

function Card(props) {
  return (
    <div className="card">
      <div className="top">
        <p>{props.id}</p>
        <h2 className="name">{props.name}</h2>
        <Avatar img={props.img} />
      </div>
      <div className="bottom">
        <Detail info={props.tel} />
        <Detail info={props.email} />
        {/* <p className="info">{props.email}</p> */}
      </div>
    </div>
  );
}

export default Card;
