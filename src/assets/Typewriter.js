import React, { useState, useEffect } from 'react';

const Typewriter = ({ texts }) => {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      if (texts[index]) {
      setText(texts[index].slice(0, text.length + 1));
      }
    }, 100);

    if (text === texts[index]) {
      clearInterval(interval);

      setTimeout(() => {
        setText('');
        setIndex((index + 1) % texts.length);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [index, text, texts]);

  return (
    <span className="typing-text">{text}</span>
  );
};

export default Typewriter;