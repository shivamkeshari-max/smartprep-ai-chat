// Simple script to handle topic generation

const generateBtn = document.getElementById('generateBtn');
const resultsDiv = document.getElementById('results');

generateBtn.addEventListener('click', async () => {
    const topic = document.getElementById('topic').value.trim();
    if (!topic) {
        alert('Please enter a topic.');
        return;
    }

    resultsDiv.innerHTML = '<p>Loading...</p>';

    try {
        // Placeholder API call - users should replace with real endpoint
        const response = await fetch('https://api.example.com/smartprep', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ topic }),
        });
        const data = await response.json();

        // expected data: { summary, questions, quiz }
        resultsDiv.innerHTML = generateHTML(data);
    } catch (err) {
        console.error(err);
        resultsDiv.innerHTML = '<p>Error generating content. See console for details.</p>';
    }
});

function generateHTML(data) {
    if (!data) return '<p>No data returned.</p>';

    let html = '';
    if (data.summary) {
        html += `<h2>Summary</h2><p>${data.summary}</p>`;
    }
    if (data.questions && data.questions.length) {
        html += '<h2>Important Questions</h2><ul>' +
            data.questions.map(q => `<li>${q}</li>`).join('') +
            '</ul>';
    }
    if (data.quiz && data.quiz.length) {
        html += '<h2>Quiz</h2><ol>' +
            data.quiz.map(item => {
                let options = item.options.map(opt => `<li>${opt}</li>`).join('');
                return `<li><strong>${item.question}</strong><ul>${options}</ul></li>`;
            }).join('') +
            '</ol>';
    }
    return html;
}
