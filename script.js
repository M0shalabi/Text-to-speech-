document.getElementById('convert-btn').addEventListener('click', () => {
  const text = document.getElementById('text').value;
  const language = document.getElementById('language').value;

  if (!text) {
    alert('Please enter some text!');
    return;
  }

  // تشغيل النص باستخدام ResponsiveVoice
  responsiveVoice.speak(text, language);
});

// خاصية التنزيل غير مدعومة في ResponsiveVoice.js، ولكن يمكننا استخدام مكتبات أخرى إذا لزم الأمر.
