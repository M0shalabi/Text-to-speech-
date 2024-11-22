// التبديل بين الوضع الليلي والعادي
const darkModeToggle = document.getElementById('dark-mode-toggle');
darkModeToggle.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// تحويل النص إلى صوت باستخدام Web Speech API
const convertButton = document.getElementById('convert-btn');
const audioPlayer = document.getElementById('audio-player');
const downloadButton = document.getElementById('download-btn'); // غير مستخدم هنا لأن Web Speech API لا تدعم التحميل مباشرة

convertButton.addEventListener('click', () => {
  const text = document.getElementById('text').value;
  const language = document.getElementById('language').value;

  if (!text) {
    alert('Please enter some text!');
    return;
  }

  // إنشاء كائن SpeechSynthesisUtterance
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = language;

  // تغيير خصائص الصوت (اختياري)
  const voiceSelect = document.getElementById('voice');
  const selectedVoice = voiceSelect.value;
  const voices = window.speechSynthesis.getVoices();

  if (voices.length > 0) {
    const matchingVoice = voices.find((voice) => voice.name.includes(selectedVoice));
    if (matchingVoice) {
      utterance.voice = matchingVoice;
    }
  }

  // تشغيل الصوت
  window.speechSynthesis.speak(utterance);
});
