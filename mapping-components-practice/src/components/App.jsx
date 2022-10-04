import React from "react";
import Emoji from "../emojipedia";
import EmojiApp from "./EmojiApp";

//Coba breakdown dulu setelah lihat UI dan sebelum bikin project:
//1. Create Components : liat pattern yg reusabledi function App
//2. Create Props di Components - gabungkan dengan data
//3. Import dulu array -> Map through data array and Render
// Tips : kasih satu contoh yg bener build dari bawah ke atas - BIAR MUDAH DEBUG

//buat fungsi utk entry emoji element
//isinya adalah EmojiApp.jsx
//ini digabung jadi satu (fungsi mapping data dan fungsi UI) kemudian dimasukkan ke dalam App.jsx
//Di dalam <EmojiApp /> tidak perlu koma kayak dictionary krn basicnya styling CSS
function entryEmoji(OneEmoji) {
  return (
    <EmojiApp
      key={OneEmoji.id}
      emoji={OneEmoji.emoji}
      name={OneEmoji.name}
      meaning={OneEmoji.meaning}
    />
  );
}

//kalo sudah sampai function App
//isinya gak pake jsx tapi map
//:::{JSON.map(function)}:::
function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>
      <dl className="dictionary">{Emoji.map(entryEmoji)}</dl>

      {/* <EmojiApp
        emoji={Emoji[0].emoji}
        name={Emoji[0].name}
        meaning={Emoji[0].meaning}
      /> */}
    </div>
  );
}

// DEBUG di ReactDevTools itu kalo undefined berarti ada value yg belum masuk,
// bisa jadi salah nama props atau fungsi mapping yg gak bekerja
export default App;
