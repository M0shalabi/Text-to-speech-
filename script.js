import React, { useState } from 'react';

function TextToSpeech() {
  const [text, setText] = useState('');
  const [voice, setVoice] = useState('ar-EG-Standard-A'); // صوت عربي مصري

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const handleVoiceChange = (event) => {
    setVoice(event.target.value);
  };

  const handleSubmit = async () => {
    // ... (بناء الطلب وإرساله إلى API)
  };

  return (
    <div>
      <textarea value={text} onChange={handleTextChange} />
      <select value={voice} onChange={handleVoiceChange}>
        {/* خيارات الأصوات */}
      </select>
      <button onClick={handleSubmit}>تحويل</button>
      <audio controls>
        <source src={audioUrl} />
      </audio>
    </div>
  );
}
