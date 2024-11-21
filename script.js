// تعريف المتغيرات الأساسية
const form = document.getElementById('textToSpeechForm');
const results = document.getElementById('results');
const audioResult = document.getElementById('audioResult');
const downloadBtn = document.getElementById('downloadBtn');

// إضافة الحدث للنموذج
form.addEventListener('submit', function (e) {
    e.preventDefault();

    // الحصول على النص المدخل
    const text = document.getElementById('text').value;

    if (text.trim() === "") {
        alert("يرجى إدخال نص للتحويل.");
        return;
    }

    // إرسال النص إلى API (مثال توضيحي)
    fetch('https://api.example.com/convert', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: text })
    })
    .then(response => response.json())
    .then(data => {
        // عرض الصوت الناتج
        results.style.display = 'block';
        audioResult.src = data.audioUrl; // رابط الصوت الناتج
        downloadBtn.href = data.audioUrl; // رابط تحميل الصوت
        downloadBtn.download = "converted-audio.mp3"; // اسم الملف
    })
    .catch(error => {
        alert("حدث خطأ أثناء تحويل النص إلى صوت. يرجى المحاولة لاحقًا.");
        console.error(error);
    });
});