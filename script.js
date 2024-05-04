document.addEventListener("DOMContentLoaded", function () {
    const keys = document.querySelectorAll('.key');

    function playSound(key) {
        switch (key) {
            case 'a':
                new Audio('tunes/a.wav').play();
                break;
            case 'w':
                new Audio('tunes/w.wav').play();
                break;
            case 's':
                new Audio('tunes/s.wav').play();
                break;
            case 'e':
                new Audio('tunes/e.wav').play();
                break;
            case 'd':
                new Audio('tunes/d.wav').play();
                break;
            case 'f':
                new Audio('tunes/f.wav').play();
                break;
            case 't':
                new Audio('tunes/t.wav').play();
                break;
            case 'g':
                new Audio('tunes/g.wav').play();
                break;
            case 'y':
                new Audio('tunes/y.wav').play();
                break;
            case 'h':
                new Audio('tunes/h.wav').play();
                break;
            case 'u':
                new Audio('tunes/u.wav').play();
                break;
            case 'j':
                new Audio('tunes/j.wav').play();
                break;
            case 'k':
                new Audio('tunes/k.wav').play();
                break;
            case 'o':
                new Audio('tunes/o.wav').play();
                break;
            case 'l':
                new Audio('tunes/l.wav').play();
                break;
            case 'p':
                new Audio('tunes/p.wav').play();
                break;
            case ';':
                new Audio('tunes/;.wav').play();
                break;
            // Add additional cases for other keys
            default:
                console.log('Key does not have an associated sound');
        }
    }

    function addAndRemoveClass(keyElement, className) {
        keyElement.classList.add(className);
        setTimeout(() => {
            keyElement.classList.remove(className);
        }, 150);
    }

    keys.forEach(key => {
        key.addEventListener('click', function () {
            playSound(this.getAttribute('data-key'));
            addAndRemoveClass(this, 'active');
        });
    });

    window.addEventListener('keydown', function (e) {
        const key = document.querySelector(`.key[data-key="${e.key}"]`);
        if (!key) return;
        playSound(e.key);
        addAndRemoveClass(key, 'playing');
    });
});
