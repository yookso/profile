// Chặn chuột phải
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    alert('có cái đầu buồi');
});

// Chặn F12 và một số phím tắt DevTools
document.addEventListener('keydown', (e) => {
    if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'C' || e.key === 'J'))) {
        e.preventDefault();
        alert('có cái đầu buồi');
    }
});

// Xử lý autoplay nhạc sau 1 giây
const audio = document.getElementById('background-music');
function enableAutoplay() {
    setTimeout(() => {
        audio.muted = false;
        audio.play().catch(e => {
            console.log("Autoplay failed:", e);
            document.addEventListener('click', () => {
                audio.play().catch(err => console.log("Error playing audio:", err));
            }, { once: true });
        });
    }, 1000);
}

window.onload = enableAutoplay;

// Hiệu ứng sao và sao băng
function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = `${Math.random() * 3 + 1}px`;
    star.style.height = star.style.width;
    star.style.left = `${Math.random() * 100}vw`;
    star.style.animationDuration = `${Math.random() * 4 + 2}s`;
    document.querySelector('.stars').appendChild(star);
    setTimeout(() => star.remove(), 6000);
}

function createMeteor() {
    const meteor = document.createElement('div');
    meteor.classList.add('meteor');
    meteor.style.left = `${Math.random() * 100}vw`;
    meteor.style.animationDuration = `${Math.random() * 2 + 1}s`;
    document.querySelector('.stars').appendChild(meteor);
    setTimeout(() => meteor.remove(), 3000);
}

setInterval(createStar, 200);
setInterval(createMeteor, 1000);

// Hiệu ứng click
document.addEventListener('click', (e) => {
    const clickEffect = document.createElement('div');
    clickEffect.classList.add('click-effect');
    clickEffect.style.left = `${e.clientX - 25}px`;
    clickEffect.style.top = `${e.clientY - 25}px`;
    document.body.appendChild(clickEffect);
    setTimeout(() => clickEffect.remove(), 500);
});

// Hiển thị và đóng QR Modal
function showQR() {
    document.getElementById('qrModal').style.display = 'flex';
}

function closeQR() {
    document.getElementById('qrModal').style.display = 'none';
}