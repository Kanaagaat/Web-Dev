function createNote(text) {
    if (!text.trim()) return;

    const listItem = document.createElement('li');
    listItem.innerHTML = `
        <input type="checkbox" onchange="toggleComplete(this)">
        <span>${escapeHtml(text)}</span>
        <button onclick="deleteTask(this)" title="Delete">
            <svg class="trash" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"/>
            </svg>
        </button>
    `;

    document.querySelector(".list").appendChild(listItem);
    document.getElementById('input').value = '';
    document.getElementById('input').focus();
}

function toggleComplete(checkbox) {
    const li = checkbox.closest('li');
    const span = checkbox.nextElementSibling;
    const text = span.textContent || span.innerHTML.replace(/<s>|<\/s>/g, '');

    if (checkbox.checked) {
        span.innerHTML = `<s>${text}</s>`;
        li.classList.add('completed');
    } else {
        span.textContent = text;
        li.classList.remove('completed');
    }
}

function deleteTask(button) {
    button.closest('li').remove();
}

function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Enter key support
document.getElementById('input').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        createNote(this.value);
    }
});
