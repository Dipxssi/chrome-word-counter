function countWordInSelectedParagraph() {
    let selectedText = window.getSelection().toString().trim(); // Trim spaces
    if (!selectedText) {
        alert("Please select a paragraph.");
        return;
    }
    let wordCount = selectedText.split(/\s+/).length; // Count words
    alert(`Selected paragraph contains ${wordCount} words.`);
}

countWordInSelectedParagraph();
