document.addEventListener('keydown', function(event) {
    const key = document.querySelector(`.key[data-key="${event.keyCode}"]`);

    if (key) {
        key.classList.add('key-light');
        setTimeout(() => {
            key.classList.remove('key-light');
        }, 300);
    }
});
