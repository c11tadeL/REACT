function copyToClipboard(text) {
    if (navigator.clipboard && window.isSecureContext) {
        return navigator.clipboard.writeText(text);
    } else {
    const textArea = document.createElement('textarea');
    textArea.value = text;

    textArea.style.position = 'fixed';
    textArea.style.left = '-999999px';
    textArea.style.top = '-999999px';
    document.body.appendChild(textArea);

    textArea.focus();
    textArea.select();

    return new Promise((resolve, reject) => {
    try {
        const successful = document.execCommand('copy');
        document.body.removeChild(textArea);
        if (successful) {
        resolve();
        } else {
        reject('Unable to copy to clipboard');
        }
    } catch (err) {
        document.body.removeChild(textArea);
        reject(err);
    }
    });
}
}

export default copyToClipboard;