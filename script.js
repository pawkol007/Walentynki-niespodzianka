document.addEventListener('DOMContentLoaded', () => {
    console.log("Strona załadowana! 🚀");

    // ==========================================
    // 1. LICZNIK CZASU (TUTAJ ZMIEŃ DATĘ!)
    // ==========================================
    const startDate = new Date("2024-10-17"); // <--- WPISZ WASZĄ DATĘ ROK-MIESIĄC-DZIEŃ

    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;

        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);

            const daysEl = document.getElementById('days');
            const hoursEl = document.getElementById('hours');
            const minutesEl = document.getElementById('minutes');

            if(daysEl) daysEl.innerText = days;
            if(hoursEl) hoursEl.innerText = hours;
            if(minutesEl) minutesEl.innerText = minutes;
        }
    }
    // Uruchamiamy licznik
    setInterval(updateTimer, 1000);
    updateTimer();

    // --- TWOJA BAZA CYTATÓW ---
    // Możesz tu dopisywać własne teksty w cudzysłowiu, po przecinku
    const quotes = [
        "I love you 3000. ❤️ (Iron Man)",
        "Jesteś moim powodem do uśmiechu nr 1.",
        "Świat jest okrutny, ale też piękny... bo Ty w nim jesteś. (AoT)",
        "Nawet Entity nie rozdzieliłoby naszego Duo w DbD.",
        "Kocham Cię bardziej niż Anakin nienawidzi piasku.",
        "Jesteś moją ulubioną postacią w tej grze zwanej życiem.",
        "Shinzou wo Sasageyo! Oddaję Ci moje serce! ✊",
        "Moc jest w nas silna.",
        "Wyglądasz dziś pięknie (wiem to, nawet nie widząc Cię teraz).",
        "Daily Quest: Przytul mnie jak najszybciej.",
        "Jesteś moim domem.",
        "Dziękuję, że jesteś moją Walentynką.",
        "Buff na dziś: +100 do pewności siebie dla mojej dziewczyny.",
        "Wolałbym spędzić z tobą jedno życie, niż samotnie stawić czoła wszystkim wiekom tego świata.",
        "Jeśli wiem, czym jest miłość, to właśnie dzięki tobie.",
        "Oto jest miłość. Dwoje ludzi spotyka się przypadkiem, a okazuje się, że czekali na siebie całe życie.",
        "Z tobą każdy dzień jest piękniejszy.",
        "Moja miłość do Ciebie nie ma głębi, jej granice wiecznie rozszerzają się.",
        "I nagle wszystkie piosenki o miłości były o tobie.",
        "Podoba mi się sposób, w jaki twoje oczy błyszczą, gdy się uśmiechasz.",
        "Jesteś dziełem sztuki, które mógłbym podziwiać bez końca."
    ];

    const quoteText = document.getElementById('daily-quote');
    const drawBtn = document.getElementById('drawBtn');
    const showContentBtn = document.getElementById('showContentBtn');
    const hiddenContent = document.getElementById('hidden-content');

    // Losowanie cytatu
    drawBtn.addEventListener('click', () => {
        quoteText.style.opacity = 0;
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * quotes.length);
            quoteText.innerText = quotes[randomIndex];
            quoteText.style.opacity = 1;
            createMiniConfetti(drawBtn);
        }, 300);
    });

    // Pokazywanie reszty
    showContentBtn.addEventListener('click', () => {
        hiddenContent.classList.add('visible');
        hiddenContent.scrollIntoView({ behavior: 'smooth' });
        showContentBtn.style.display = 'none';
    });

    // Konfetti
    function createMiniConfetti(el) {
        const colors = ['#ff4d6d', '#ff8fa3', '#fff'];
        for(let i=0; i<20; i++) {
            const bit = document.createElement('div');
            bit.classList.add('confetti-bit');
            bit.style.backgroundColor = colors[Math.floor(Math.random()*colors.length)];
            bit.style.left = el.offsetLeft + el.offsetWidth/2 + 'px';
            bit.style.top = el.offsetTop + 'px';
            const angle = Math.random() * Math.PI * 2;
            const velocity = 5 + Math.random() * 10;
            bit.style.setProperty('--tx', `${Math.cos(angle) * velocity * 10}px`);
            bit.style.setProperty('--ty', `${Math.sin(angle) * velocity * 10 - 50}px`);
            document.body.appendChild(bit);
            setTimeout(() => bit.remove(), 1000);
        }
    }

    // Tło serca
    function createHeart() {
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        const emojis = ['❤️', '💖', '💕', '🌹', '🐻', '✨', '😻'];
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        document.getElementById('hearts-container').appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 500);

    // Animacja wjazdu elementów
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible-el');
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

function useCoupon(element) {
    if (element.classList.contains('used')) return;

    if(confirm("Czy na pewno chcesz użyć tego kuponu? 🎟️")) {
        element.classList.add('used');
        const icon = element.querySelector('.coupon-icon');
        if(icon) icon.innerText = "✅";
        alert("Kupon Aktywowany! 📸 Zrób teraz screena i wyślij mi go!");
    }
}

// --- PROSTE HASŁO ---
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('error-msg');
    
    // 👇 TUTAJ USTAW SWOJE HASŁO (np. data poznania albo imię psa)
    const secret = "17.10.2024"; 

    if (password.toLowerCase() === secret) {
        document.getElementById('login-overlay').style.display = 'none'; // Ukryj blokadę
        // Opcjonalnie: Zagraj muzykę jeśli masz
    } else {
        errorMsg.style.display = 'block';
        errorMsg.innerText = "Złe hasło! Spróbuj jeszcze raz. 🔒";
    }
}