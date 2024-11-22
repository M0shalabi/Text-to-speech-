// التبديل بين الوضع الليلي والعادي
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// تحويل النص إلى صوت
const convertButton = document.getElementById('convert-btn');
const audioPlayer = document.getElementById('audio-player');
const downloadButton = document.getElementById('download-btn');

convertButton.addEventListener('click', async () => {
  const text = document.getElementById('text').value;
  const language = document.getElementById('language').value;
  const voice = document.getElementById('voice').value;
  const emotion = document.getElementById('emotion').value;

  if (!text) {
    alert('Please enter some text!');
    return;
  }

  try {
    // استدعاء واجهة API لتحويل النص إلى صوت (مثال باستخدام خدمة Google Cloud)
    const response = await fetch('https://api.example.com/text-to-speech', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ text, language, voice, emotion })
    });

    if (!response.ok) throw new Error('Failed to generate audio');

    const blob = await response.blob();
    const audioURL = URL.createObjectURL(blob);

    // تشغيل الصوت
    audioPlayer.src = audioURL;
    audioPlayer.style.display = 'block';

    // إعداد زر التحميل
    downloadButton.href = audioURL;
    downloadButton.download = 'speech.mp3';
    downloadButton.style.display = 'block';

  } catch (error) {
    console.error(error);
    alert('An error occurred while converting text to speech.');
  }
});
