// script.js
function convertTextToSpeech() {
  const text = document.getElementById('inputText').value;
  const language = document.getElementById('languageSelect').value;

  const apiKey = 'your_api_key'; // استبدل بـ API Key الخاص بك
  const url = `https://texttospeech.googleapis.com/v1/text:synthesize?key=${apiKey}`; // مثال لـ Google Cloud Text-to-Speech

  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      input: { text },
      voice: {
        languageCode: language,
        ssmlGender: 'MALE' // أو FEMALE
      }
    })
  })
  .then(response => response.blob())
  .then(blob => {
    const audioUrl = URL.createObjectURL(blob);
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = audioUrl;
    audioPlayer.play();
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
