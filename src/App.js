import React, { useState } from "react";
import "./styles.css";

const emojiDictionary = {
  "👋": "Hello or Goodbye",
  "🤚": "Backhand",
  "🖐️": "Indicate number 5",
  "✋": "STOP",
  "🖖": "Vulcan Salute or Star Trek",
  "👌": "Okay/Correct/Perfect ",
  "🤏": "Small amount or Something small",
  "✌️": "Victory or Peace",
  "🤞": "Good Luck",
  "🤟": "Love-You Gesture",
  "🤘 ": "Rock on",
  "🤙": "Call Me",
  "✊ ": "Celebratory gesture",
  "👊": "Punch",
  "👏": "Applause",
  "🙌": "Hands Raised in Celebration/Banzai",
  "👐": "Hug",
  "🤲": "Dua",
  "🙏": "Namaste or High-five"
};

const emojiList = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  const [value, setValue] = useState("");

  const onChangeInputHandler = (event) => {
    const userEmoji = event.target.value;
    setValue(userEmoji);

    if (userEmoji in emojiDictionary) {
      var newMeaning = emojiDictionary[userEmoji];
    } else {
      newMeaning = "Sorry, we don't have that meaning!!!";
    }

    setMeaning(newMeaning);
  };

  return (
    <div className="App">
      <h1>HAND EMOTICON INTERPRETER</h1>
      <input value={value} onChange={onChangeInputHandler} />
      <p>{meaning}</p>
      <section>
        {emojiList.map((emoji) => (
          <span
            style={{ cursor: "pointer", fontSize: "50px" }}
            onClick={() => {
              var newMeaning = emojiDictionary[emoji];

              setMeaning(newMeaning);
              setValue("");
            }}
            key={emoji}
          >
            {emoji}
          </span>
        ))}
      </section>
    </div>
  );
}
