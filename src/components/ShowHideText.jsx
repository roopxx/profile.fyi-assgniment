import { useState } from "react";

function ShowHideText({ heading, para }) {
  const [showText, setShowText] = useState(false);

  return (
    <section className="rounded-md border-2 border-black">
      <button
        onDoubleClick={() => setShowText(!showText)}
        className={`w-full p-3 text-left text-xl font-bold hover:text-red-700 md:text-3xl ${showText ? "text-red-700" : ""} bg-red-200 md:text-center`}
      >
        {heading}
      </button>
      {showText && (
        <h1
          className="overflow-hidden bg-red-200 pb-4 pl-4 text-lg font-bold md:px-4 md:text-2xl"
          style={{ whiteSpace: "pre-wrap", overflowWrap: "break-word" }}
        >
          {para.split(" ").map((char, index) => (
            <p
              className="inline-block animate-text-reveal break-keep [animation-fill-mode:backwards]"
              key={`${char}-${index}`}
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {char + " "}
            </p>
          ))}
        </h1>
      )}
    </section>
  );
}

export default ShowHideText;
