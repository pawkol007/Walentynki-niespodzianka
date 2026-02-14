document.addEventListener('DOMContentLoaded', () => {
    console.log("Strona załadowana! 🚀");

    // ==========================================
    // 1. DANE (TWOJE CYTATY I POWODY)
    // ==========================================
    
    // Lista Cytatów Dnia
    window.quotes = [
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
        "Jesteś dziełem sztuki, które mógłbym podziwiać bez końca.",
        "W tym multiwersum wybrałbym Ciebie w każdej linii czasu.",
        "Nasze Duo > każdy S-tier build w DbD.",
        "Jeśli życie to RPG, to Ty jesteś moim legendary dropem.",
        "Z Tobą nawet ranked w życiu nie jest straszny.",
        "Jesteś moim checkpointem po każdym ciężkim dniu.",
        "Respawnowałbym się tysiąc razy, żeby znów na Ciebie trafić.",
        "Plot twist mojego życia? Ty.",
        "W moim Tier Liście jesteś jedynką bez dyskusji.",
        "Miłość do Ciebie? Permanent buff, bez cooldownu.",
        "Z Tobą nawet najciemniejszy rozdział kończy się happy endem.",
        "Jesteś moim światłem jak latarnia w Midwich.",
        "W Dead by Daylight? Zawsze bym Cię odbił z haka.",
        "Even if we were in different factions, I’d still choose you.",
        "Gdybym miał Kamienie Nieskończoności, i tak wybrałbym Ciebie.",
        "You’re my Player 2 for life.",
        "Critical hit: zakochałem się bez ratunku.",
        "Oddałbym wszystkie BP, żeby tylko zobaczyć Twój uśmiech.",
        "Z Tobą każda mapa jest do przejścia.",
        "Nasza historia > najlepszy lore w Marvelu.",
        "Jesteś moją ulubioną teorią, która okazała się prawdą.",
        "Gdyby miłość była perkiem, miałbym ją na poziomie max — dzięki Tobie.",
        "Z Tobą nawet najgorszy dzień dostaje patch naprawiający.",
        "You are my safe zone.",
        "W każdej galaktyce wybrałbym Ciebie po ciemnej i jasnej stronie.",
        "Jesteś moim spokojem jak nocna farma bloodpointów.",
        "Jeśli to symulacja, to jesteś moim najpiękniejszym bugiem.",
        "Nasze Duo ma synergy +1000.",
        "Z Tobą nawet survival horror zamienia się w love story.",
        "Mój ulubiony quest? Budować przyszłość z Tobą.",
        "You’re not a side quest. You’re the main storyline.",
        "Każdy mój plan na przyszłość zaczyna się od Ciebie.",
        "Gdyby życie było anime — Ty byłabyś moją jedyną ending theme.",
        "Z Tobą każdy sezon ma 10/10 ocen.",
        "Nasz team? Nierozdzielny jak najlepszy duo w rankingu.",
        "Jesteś moim \"gg well played\" po każdym dniu.",
        "Miłość do Ciebie nie ma limitu znaków.",
        "Z Tobą nawet cisza brzmi jak soundtrack do szczęścia.",
        "Jesteś moją ulubioną powiadomką.",
        "Z Tobą nawet AFK nie istnieje — zawsze wracam do Ciebie.",
        "W świecie pełnym chaosu jesteś moim stable FPS.",
        "Ty + ja = najlepszy crossover w historii.",
        "Nie potrzebuję trybu hardcore, skoro mam Ciebie.",
        "You’re my forever lobby.",
        "Jeśli mam oddać serce — to tylko Tobie.",
        "Gdybym mógł przeżyć swoje życie jeszcze raz, szybciej odnalazłbym Ciebie.",
        "W każdym wszechświecie i każdej rzeczywistości — wybieram Ciebie.",
        "Jesteś moją definicją słowa \"miłość\".",
        "Jeśli życie to podróż, chcę iść przez nie trzymając Cię za rękę.",
        "Z Tobą nawet zwykłe \"dzień dobry\" brzmi jak obietnica szczęścia.",
        "Nie muszę patrzeć w gwiazdy, bo moja najjaśniejsza świeci obok mnie.",
        "Kocham Cię w sposób spokojny, pewny i na zawsze.",
        "Jesteś odpowiedzią na pytania, których jeszcze nie zdążyłem zadać.",
        "Przy Tobie świat przestaje być głośny.",
        "Twoje imię brzmi jak mój ulubiony wers piosenki.",
        "Gdyby miłość miała twarz, miałaby Twoje oczy.",
        "Z Tobą przyszłość nie jest straszna — jest ekscytująca.",
        "Nie wyobrażam sobie swojej historii bez Ciebie w każdym rozdziale.",
        "Jesteś moim spokojem po burzy.",
        "Z Tobą nawet milczenie jest pełne znaczenia.",
        "Kiedy mówisz moje imię, brzmi ono lepiej niż kiedykolwiek.",
        "Jesteś moim \"na zawsze\", nie tylko \"na teraz\".",
        "Nie potrzebuję bajek, skoro mam Ciebie.",
        "Gdy patrzę na Ciebie, rozumiem dlaczego wszystko wcześniej nie wyszło.",
        "Z Tobą chcę się zestarzeć.",
        "Jesteś moją codzienną dawką szczęścia.",
        "Twoje serce to najpiękniejsze miejsce, jakie znam.",
        "Miłość do Ciebie rośnie szybciej niż moje plany na przyszłość.",
        "Z Tobą chcę przeżyć wszystkie zwykłe dni, bo one są najważniejsze.",
        "Jesteś moją najbezpieczniejszą przystanią i największą przygodą jednocześnie.",
        "Każde Twoje przytulenie to mój ulubiony moment dnia.",
        "Gdy się uśmiechasz, świat robi się lżejszy.",
        "Nie potrzebuję ideału — potrzebuję Ciebie.",
        "Jesteś moją najpiękniejszą teraźniejszością.",
        "Kocham Cię w sposób, którego nie da się zmierzyć ani opisać.",
        "Z Tobą nawet przyszłe trudności wydają się do przejścia.",
        "Twoja obecność to mój największy komfort.",
        "Jeśli szczęście istnieje, to ma Twoje imię.",
        "Wystarczy, że jesteś obok — to już wszystko.",
        "Z Tobą chcę budzić się przez resztę życia.",
        "Jesteś moim ulubionym \"wracaj bezpiecznie\" i \"dobranoc\".",
        "Miłość do Ciebie jest najpewniejszą rzeczą w moim życiu.",
        "Nie chcę świata bez Ciebie w nim.",
        "Twoje szczęście jest dla mnie priorytetem.",
        "Z Tobą czuję, że jestem dokładnie tam, gdzie powinienem być.",
        "Kocham Cię nie za coś — tylko za to, że jesteś.",
        "Jesteś moim sercem poza moim ciałem.",
        "Gdyby ktoś zapytał mnie o sens życia, wskazałbym na Ciebie.",
        "Z Tobą nawet wieczność wydaje się za krótka.",
        "Nie boję się jutra, jeśli jesteś w nim Ty."
    ];

    // Lista Powodów Miłości (Globalna - dostępna dla funkcji showReason)
    window.reasons = [
        "Bo przy Tobie czuję się jak w domu 🏡",
        "Bo patrzysz na mnie tak, jakby świat nie istniał 👀",
        "Bo masz najpiękniejszy uśmiech, jaki znam 😁",
        "Bo umiesz mnie uspokoić jak nikt inny 🤍",
        "Bo wspierasz mnie nawet wtedy, kiedy sam w siebie nie wierzę 💪",
        "Bo jesteś mega mądra 🧠",
        "Bo mogę z Tobą rozmawiać godzinami i nigdy się nie nudzi 💬",
        "Bo jesteś moją najlepszą duo w grach 🎮",
        "Bo nawet jak mnie pokonasz, to i tak chcę grać tylko z Tobą 😅",
        "Bo wciągnęłaś się w moje uniwersa i przeżywasz je razem ze mną 🌌",
        "Bo pięknie rysujesz i masz w sobie ogromny talent ✏️",
        "Bo jesteś silniejsza, niż Ci się wydaje 🖤",
        "Bo potrafisz być słodka i groźna jednocześnie 😏",
        "Bo Twoje przytulanie resetuje mi cały dzień 🤗",
        "Bo śmiejesz się w ten sposób, który od razu poprawia mi humor 😂",
        "Bo jesteś moją bezpieczną przystanią ⚓",
        "Bo mogę być przy Tobie w 100% sobą 🫂",
        "Bo znasz moje słabości i mimo to zostajesz ❤️",
        "Bo troszczysz się o mnie bardziej, niż powinienem na to zasługiwać 🥹",
        "Bo jesteś ambitna i walczysz o swoje 🎓",
        "Bo mamy swoje inside jokes, których nikt nie rozumie 🤫",
        "Bo potrafisz mnie ustawić do pionu, kiedy trzeba 😌",
        "Bo jesteś czuła, kiedy najbardziej tego potrzebuję 🌙",
        "Bo rozumiesz mnie nawet wtedy, kiedy nic nie mówię 🤍",
        "Bo z Tobą nawet zwykły spacer jest przygodą 🌆",
        "Bo jesteś moją ulubioną osobą na całym świecie 🌍",
        "Bo przy Tobie chcę być lepszym człowiekiem 📈",
        "Bo kiedy się śmiejesz, wszystko ma sens ✨",
        "Bo jesteś piękna — nie tylko z wyglądu 😍",
        "Bo Twoje oczy mają w sobie coś, co mnie hipnotyzuje 👁️",
        "Bo czuję dumę, że jesteś właśnie moja 🥰",
        "Bo nasze wieczory są lepsze niż najlepsze filmy 🎬",
        "Bo potrafisz słuchać, a nie tylko słyszeć 🎧",
        "Bo jesteś cierpliwa, nawet kiedy jestem uparty 🙃",
        "Bo Twoja obecność daje mi spokój 🌿",
        "Bo wierzysz w nas 💞",
        "Bo tworzymy team, który ogarnia życie razem 🤝",
        "Bo jesteś moją codziennością, którą chcę mieć na zawsze 🗓️",
        "Bo kochasz mnie w sposób, którego zawsze potrzebowałem 🤍",
        "Bo z Tobą przyszłość przestaje mnie przerażać 🔮",
        "Bo jesteś moim największym wsparciem i największym szczęściem jednocześnie ❤️",
        "Bo przy Tobie moje serce bije spokojniej ❤️",
        "Bo jesteś moim spełnionym marzeniem, o którym kiedyś nawet nie wiedziałem ✨",
        "Bo każdy dzień z Tobą jest lepszy niż poprzedni 🌅",
        "Bo kiedy trzymasz mnie za rękę, czuję że mogę wszystko 🤝",
        "Bo jesteś najpiękniejszą historią, jaka mi się przydarzyła 📖",
        "Bo Twoje \"kocham Cię\" brzmi jak najpiękniejsza melodia 🎶",
        "Bo przy Tobie nawet cisza jest wyjątkowa 🤍",
        "Bo sprawiasz, że świat ma więcej kolorów 🌈",
        "Bo jesteś moim spokojem w chaosie 🌊",
        "Bo Twój głos potrafi naprawić mój najgorszy dzień 🎧",
        "Bo kiedy się przytulamy, czas przestaje istnieć ⏳",
        "Bo jesteś osobą, z którą chcę dzielić wszystkie \"pierwsze razy\" 🌟",
        "Bo przy Tobie uczę się kochać jeszcze mocniej 💞",
        "Bo jesteś moim ulubionym miejscem na ziemi 🏡",
        "Bo Twoje szczęście jest dla mnie ważniejsze niż moje własne 🥹",
        "Bo potrafisz spojrzeć na mnie tak, że zapominam jak się oddycha 😳",
        "Bo jesteś moją teraźniejszością i przyszłością jednocześnie 🔮",
        "Bo z Tobą zwykłe chwile stają się wspomnieniami na całe życie 📸",
        "Bo przy Tobie czuję się kochany tak naprawdę 🤍",
        "Bo Twoje serce jest najpiękniejsze jakie znam 💗",
        "Bo jesteś moim domem, nawet jeśli jesteśmy daleko 🫂",
        "Bo Twoje \"wszystko będzie dobrze\" naprawdę działa 🌙",
        "Bo kiedy się uśmiechasz, zakochuję się od nowa 😍",
        "Bo jesteś moim największym szczęściem w najmniejszych chwilach 🌸",
        "Bo z Tobą chcę budzić się każdego dnia ☀️",
        "Bo Twoja obecność daje mi poczucie, że niczego więcej nie potrzebuję 🤍",
        "Bo jesteś moją najbezpieczniejszą przystanią na świecie ⚓",
        "Bo przy Tobie czuję, że jestem dokładnie tam, gdzie powinienem być 🧭",
        "Bo Twoja miłość daje mi siłę, o której nie wiedziałem 💪",
        "Bo jesteś powodem, dla którego wierzę w \"na zawsze\" ♾️",
        "Bo kiedy patrzę w Twoje oczy, widzę swoją przyszłość 👁️",
        "Bo jesteś najpiękniejszą częścią mojego życia 🌹",
        "Bo kochanie Ciebie jest najłatwiejszą rzeczą na świecie ❤️",
        "Bo jesteś moją najlepszą decyzją 🫶",
        "Bo z Tobą nawet zwykłe \"dobranoc\" brzmi wyjątkowo 🌌",
        "Bo jesteś moim szczęściem zapisanym w ludzkiej postaci 🥰",
        "Bo przy Tobie nauczyłem się, czym jest prawdziwa bliskość 🤍",
        "Bo jesteś wszystkim tym, czego zawsze szukałem 💫"
    ];
});

// ==========================================
// 2. FUNKCJA UNIKALNEGO LOSOWANIA (MÓZG 🧠)
// ==========================================
function getUniqueRandomIndex(storageKey, totalItems) {
    // 1. Pobierz listę zużytych numerków
    let available = JSON.parse(localStorage.getItem(storageKey));

    // 2. Jeśli lista pusta, resetujemy (wszystko wylosowane)
    if (!available || available.length === 0) {
        available = [];
        for (let i = 0; i < totalItems; i++) available.push(i);
    }

    // 3. Losujemy z dostępnych
    const randomIdx = Math.floor(Math.random() * available.length);
    const actualValue = available[randomIdx];

    // 4. Usuwamy wylosowany i zapisujemy
    available.splice(randomIdx, 1);
    localStorage.setItem(storageKey, JSON.stringify(available));

    return actualValue;
}

document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // 3. OBSŁUGA STRONY (Licznik, Cytaty, Efekty)
    // ==========================================

    // --- LICZNIK CZASU ---
    const startDate = new Date("2024-10-17");
    function updateTimer() {
        const now = new Date();
        const diff = now - startDate;
        if (diff > 0) {
            const days = Math.floor(diff / (1000 * 60 * 60 * 24));
            const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
            const minutes = Math.floor((diff / 1000 / 60) % 60);
            
            const d = document.getElementById('days');
            const h = document.getElementById('hours');
            const m = document.getElementById('minutes');
            if(d) d.innerText = days;
            if(h) h.innerText = hours;
            if(m) m.innerText = minutes;
        }
    }
    setInterval(updateTimer, 1000);
    updateTimer();

    // --- LOSOWANIE CYTATU DNIA (UNIKALNE) ---
    const quoteText = document.getElementById('daily-quote');
    const drawBtn = document.getElementById('drawBtn');
    
    if(drawBtn) {
        drawBtn.addEventListener('click', () => {
            quoteText.style.opacity = 0;
            setTimeout(() => {
                // Używamy klucza 'seenQuotes', żeby pamiętać cytaty
                const idx = getUniqueRandomIndex('seenQuotes', window.quotes.length);
                quoteText.innerText = window.quotes[idx];
                quoteText.style.opacity = 1;
                createMiniConfetti(drawBtn);
            }, 300);
        });
    }

    // --- POKAZYWANIE UKRYTEJ TREŚCI ---
    const showContentBtn = document.getElementById('showContentBtn');
    const hiddenContent = document.getElementById('hidden-content');
    if(showContentBtn) {
        showContentBtn.addEventListener('click', () => {
            hiddenContent.classList.add('visible');
            hiddenContent.scrollIntoView({ behavior: 'smooth' });
            showContentBtn.style.display = 'none';
        });
    }

    // --- KONFETTI I TŁO ---
    // Funkcja przeniesiona poniżej, aby była globalna

    function createHeart() {
        const container = document.getElementById('hearts-container');
        if(!container) return;
        const heart = document.createElement('div');
        heart.classList.add('bg-heart');
        const emojis = ['❤️', '💖', '💕', '🌹', '🐻', '✨', '😻'];
        heart.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
        heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 6000);
    }
    setInterval(createHeart, 500);

    // Animacja wjazdu
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('visible-el');
        });
    });
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// --- KONFETTI: Jasne czerwone serca ---
function createMiniConfetti(el) {
    for(let i=0; i<40; i++) {
        const bit = document.createElement('div');
        bit.classList.add('confetti-bit');
        bit.innerHTML = '❤️';
        bit.style.fontSize = '22px';
        bit.style.background = 'none';
        bit.style.left = el.offsetLeft + el.offsetWidth/2 + 'px';
        bit.style.top = el.offsetTop + 'px';
        const angle = Math.random() * Math.PI * 2;
        const velocity = 5 + Math.random() * 12;
        bit.style.setProperty('--tx', `${Math.cos(angle) * velocity * 14}px`);
        bit.style.setProperty('--ty', `${Math.sin(angle) * velocity * 14 - 70}px`);
        document.body.appendChild(bit);
        setTimeout(() => bit.remove(), 1800);
    }
}

// ==========================================
// 4. FUNKCJE GLOBALNE (Dostępne dla HTML)
// ==========================================

/* --- LOSOWANIE POWODU (UNIKALNE!) --- */
function showReason() {
    const reasonElement = document.getElementById('love-reason');
    if (!reasonElement) return;

    reasonElement.style.opacity = 0;
    reasonElement.style.transition = "opacity 0.3s";
    
    setTimeout(() => {
        const idx = getUniqueRandomIndex('seenReasons', window.reasons.length);
        reasonElement.innerText = window.reasons[idx];
        reasonElement.style.opacity = 1;
        // Dodaj efekt serduszkowego konfetti
        createMiniConfetti(reasonElement);
    }, 300);
}

/* --- KUPONY --- */
function useCoupon(element) {
    if (element.classList.contains('used')) return;
    if(confirm("Czy na pewno chcesz użyć tego kuponu? 🎟️")) {
        element.classList.add('used');
        const icon = element.querySelector('.coupon-icon');
        if(icon) icon.innerText = "✅";
        alert("Kupon Aktywowany! 📸 Zrób teraz screena i wyślij mi go!");
    }
}

/* --- HASŁO --- */
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const errorMsg = document.getElementById('error-msg');
    // Hasło zakodowane base64: "17.10.2024" => "MTcuMTAuMjAyNA=="
    const secretHash = "MTcuMTAuMjAyNA==";
    function b64(str) {
        return window.btoa(unescape(encodeURIComponent(str)));
    }
    if (b64(password.toLowerCase()) === secretHash) {
        document.getElementById('login-overlay').style.display = 'none';
    } else {
        errorMsg.style.display = 'block';
        errorMsg.innerText = "Złe hasło! Spróbuj jeszcze raz. 🔒";
    }
}


/* ==========================================
   9. ENHANCEMENTS: DAILY, GIFTS, ADMIN JSON, DISCORD
========================================== */
(function () {
    const STORAGE = {
        dailyQuote: 'dailyQuoteV1',
        usedCoupons: 'usedCouponsV1',
        dailyLoginPing: 'dailyLoginPingV1',
        dailyGiftDate: 'dailyGiftDateV1'
    };

    const dailyGifts = [
    "🎮 Perk: Dzisiaj gramy w co Ty chcesz i jak długo chcesz (DbD, Marvel, cokolwiek)!",
    "🎞️ Movie Night: Ty wybierasz film na nasz wspólny seans!",
    "💌 Snail Mail: Wyślę Ci tradycyjny list lub małą niespodziankę pocztą!",
    "📸 Selfie Request: Wyślę Ci moje zdjęcie zrobione specjalnie dla Ciebie w tej chwili!",
    "🎤 Voice Message: Wyślę Ci nagranie, na którym mówię Ci coś miłego na dobranoc!",
    "⏳ Skip Time: Ten kupon skraca czas do naszego spotkania o dużo xD",
    "💆‍♂️ Rezerwacja: 1h masażu plecków do wykorzystania natychmiast po moim przyjeździe!",
    "🧠 Psychologiczny Deep Talk: 30 minut rozmowy tylko o Twoich przemyśleniach – słucham bez przerywania!",
    "🎮 Killer’s Mercy: W DbD chronię Cię za wszelką cenę – bodyblock, flashlight save, full simp mode!",
    "🖤 Analizator mode: Wybierasz temat do analizy psychologicznej i rozkminiamy go razem!",
    "🎲 RNG Blessing: Dzisiaj wszystkie decyzje podejmuję monetą xD",
    "💞 Love Buff: Cały dzień komplementów co godzinę – bez limitu cringe.",
    "📱 Priority Queue: Odpowiadam Ci w max 2 minuty przez cały dzień.",
    "🛡️ Emotional Shield: Masz immunitet na moje marudzenie przez 24h.",
    "🔥 Training Arc: Robimy razem mini challenge (np. 50 przysiadów, nauka czegoś nowego, itp.).",
    "🎥 Reaction Cam: Nagrywam reakcję na coś, co mi wyślesz (memik, filmik, Twoje rysunki).",
    "🌙 Goodnight Ultimate: 5-minutowa personalizowana wiadomość na dobranoc tylko dla Ciebie.",
    "🏆 Queen’s Rule: Przez 24h mówisz mi, co mam robić (w granicach rozsądku 😳).",
    "🍿 Serial Marathon Token: 2 odcinki pod rząd.",
    "💌 Secret Drop: Dostajesz niespodziankę!"
    ];

    const DEFAULT_CONFIG = {
        extraQuotes: [],
        extraReasons: [],
        albumSections: [],
        specialDays: [
            { date: '02-14', title: 'Walentynki', message: 'Specjalny tryb milosci wlaczony.' },
            { date: '10-17', title: 'Nasza Rocznica', message: 'Dzisiaj swietujemy nasz dzien.' }
        ],
        discord: {
            enabled: false,
            webhookUrl: '',
            username: 'DailyGift Bot'
        }
    };

    window.__appConfig = { ...DEFAULT_CONFIG };
    window.__appConfigReady = Promise.resolve(window.__appConfig);

    function todayKey(date = new Date()) {
        const y = date.getFullYear();
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${y}-${m}-${d}`;
    }

    function monthDayKey(date = new Date()) {
        const m = String(date.getMonth() + 1).padStart(2, '0');
        const d = String(date.getDate()).padStart(2, '0');
        return `${m}-${d}`;
    }

    function readJson(key, fallbackValue) {
        try {
            const raw = localStorage.getItem(key);
            return raw ? JSON.parse(raw) : fallbackValue;
        } catch {
            return fallbackValue;
        }
    }

    function writeJson(key, value) {
        localStorage.setItem(key, JSON.stringify(value));
    }

    function mergeConfig(input) {
        return {
            ...DEFAULT_CONFIG,
            ...input,
            extraQuotes: Array.isArray(input?.extraQuotes) ? input.extraQuotes : [],
            extraReasons: Array.isArray(input?.extraReasons) ? input.extraReasons : [],
            albumSections: Array.isArray(input?.albumSections) ? input.albumSections : [],
            specialDays: Array.isArray(input?.specialDays) ? input.specialDays : DEFAULT_CONFIG.specialDays,
            discord: {
                ...DEFAULT_CONFIG.discord,
                ...(input?.discord || {})
            }
        };
    }

    async function loadConfig() {
        try {
            const res = await fetch('./admin-panel.json', { cache: 'no-store' });
            if (!res.ok) throw new Error(`HTTP ${res.status}`);
            const json = await res.json();
            window.__appConfig = mergeConfig(json);
        } catch {
            window.__appConfig = mergeConfig({});
        }

        if (Array.isArray(window.quotes) && window.__appConfig.extraQuotes.length) {
            window.quotes.push(...window.__appConfig.extraQuotes);
        }
        if (Array.isArray(window.reasons) && window.__appConfig.extraReasons.length) {
            window.reasons.push(...window.__appConfig.extraReasons);
        }

        renderAlbumSections(window.__appConfig.albumSections);
        return window.__appConfig;
    }

    function renderAlbumSections(sections) {
        if (!sections?.length) return;

        const albumRoot = document.querySelector('section.photo-album');
        if (!albumRoot) return;

        sections.forEach((section, idx) => {
            const items = Array.isArray(section?.items) ? section.items : [];
            if (!items.length) return;

            const card = document.createElement('div');
            card.className = 'theme-card glass-panel fade-in';

            const details = document.createElement('details');
            const summary = document.createElement('summary');
            summary.className = 'theme-header';
            summary.textContent = section.title || `Nowa sekcja ${idx + 1}`;
            details.appendChild(summary);

            const grid = document.createElement('div');
            grid.className = 'gallery-grid';

            items.forEach((item) => {
                if (!item?.src) return;
                const tile = document.createElement('div');
                tile.className = 'grid-item';

                const img = document.createElement('img');
                img.loading = 'lazy';
                img.decoding = 'async';
                img.src = item.src;
                img.alt = item.alt || item.caption || 'Wspomnienie';

                const cap = document.createElement('p');
                cap.textContent = item.caption || '';

                tile.appendChild(img);
                tile.appendChild(cap);
                grid.appendChild(tile);
            });

            details.appendChild(grid);

            if (section.footer) {
                const footer = document.createElement('p');
                footer.className = 'caption';
                footer.textContent = section.footer;
                details.appendChild(footer);
            }

            card.appendChild(details);
            albumRoot.appendChild(card);
        });
    }

    async function notifyDiscord(type, payload = {}) {
        const cfg = window.__appConfig?.discord;
        if (!cfg?.enabled || !cfg?.webhookUrl) return;

        const labels = {
            daily_login: 'Daily login',
            daily_gift: 'Daily gift'
        };

        const lines = [
            `Event: ${labels[type] || type}`,
            `Date: ${todayKey()}`,
            payload.gift ? `Gift: ${payload.gift}` : null
        ].filter(Boolean);

        try {
            await fetch(cfg.webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    username: cfg.username || 'DailyGift Bot',
                    content: lines.join('\n')
                })
            });
        } catch (err) {
            console.warn('Discord webhook error', err);
        }
    }

    function pingDailyLoginOnce() {
        const key = todayKey();
        const lastPing = localStorage.getItem(STORAGE.dailyLoginPing);
        if (lastPing === key) return;
        localStorage.setItem(STORAGE.dailyLoginPing, key);
        notifyDiscord('daily_login', { date: key });
    }

    function ensureDailyLockButton(drawBtn) {
        let lockBtn = document.getElementById('dailyLockBtn');
        if (!lockBtn) {
            lockBtn = document.createElement('button');
            lockBtn.id = 'dailyLockBtn';
            lockBtn.className = 'secondary-btn';
            lockBtn.style.marginLeft = '12px';
            lockBtn.style.display = 'none';
            lockBtn.innerText = 'Losuj ponownie jutro';
            lockBtn.addEventListener('click', () => {
                alert('Nowa wiadomosc bedzie dostepna jutro.');
            });
            drawBtn.insertAdjacentElement('afterend', lockBtn);
        }
        return lockBtn;
    }

    function getDailyState() {
        return readJson(STORAGE.dailyQuote, null);
    }

    function setDailyState(state) {
        writeJson(STORAGE.dailyQuote, state);
    }

    function refreshDailyUI() {
        const drawBtn = document.getElementById('drawBtn');
        const lockBtn = document.getElementById('dailyLockBtn');
        if (!drawBtn) return;

        drawBtn.disabled = false;
        drawBtn.innerText = 'Losuj wiadomosc';
        if (lockBtn) lockBtn.style.display = 'none';
    }

    function drawDailyQuote() {
        const drawBtn = document.getElementById('drawBtn');
        const quoteText = document.getElementById('daily-quote');
        if (!drawBtn || !quoteText) return;

        quoteText.style.opacity = 0;
        setTimeout(() => {
            const idx = getUniqueRandomIndex('seenQuotes', window.quotes.length);
            quoteText.innerText = window.quotes[idx];
            quoteText.style.opacity = 1;
            createMiniConfetti(drawBtn);
            refreshDailyUI();
        }, 300);
    }

    function attachDailyDrawHandler() {
        const oldBtn = document.getElementById('drawBtn');
        if (!oldBtn) return;

        const newBtn = oldBtn.cloneNode(true);
        oldBtn.replaceWith(newBtn);

        newBtn.addEventListener('click', drawDailyQuote);
        refreshDailyUI();
    }

    function initCouponsPersistence() {
        const usedCoupons = readJson(STORAGE.usedCoupons, []);
        const usedSet = new Set(usedCoupons);

        document.querySelectorAll('.coupon').forEach((coupon, index) => {
            if (!coupon.dataset.couponId) {
                coupon.dataset.couponId = `coupon-${index + 1}`;
            }
            const icon = coupon.querySelector('.coupon-icon');
            if (icon && !icon.dataset.originalIcon) {
                icon.dataset.originalIcon = icon.innerText;
            }
            if (usedSet.has(coupon.dataset.couponId)) {
                coupon.classList.add('used');
                if (icon) icon.innerText = 'OK';
            }
        });
    }

    function activateSpecialDayMode() {
        const today = todayKey();
        const md = monthDayKey();
        const event = (window.__appConfig.specialDays || []).find((item) => item.date === today || item.date === md);
        if (!event) return;

        const container = document.querySelector('.container');
        if (!container) return;

        const banner = document.createElement('section');
        banner.className = 'glass-panel text-center';
        banner.style.border = '2px solid #ff4d6d';
        banner.style.animation = 'bounce 0.8s ease';
        banner.innerHTML = `<h2>${event.title || 'Specjalny dzien'}</h2><p>${event.message || 'Tryb specjalny wlaczony.'}</p>`;
        container.prepend(banner);

        createMiniConfetti(banner);
    }

    window.claimGift = function () {
        const giftText = document.getElementById('gift-text');
        const giftIcon = document.getElementById('gift-icon');
        const giftStatus = document.getElementById('gift-status');
        if (!giftText || !giftIcon || !giftStatus) return;

        const today = todayKey();
        const lastClaimed = localStorage.getItem(STORAGE.dailyGiftDate);

        if (lastClaimed === today) {
            giftIcon.innerText = '📭';
            giftText.style.display = 'block';
            giftText.innerText = 'Dzisiaj prezent juz byl odebrany. Wroc jutro.';
            giftStatus.innerText = 'Nastepny drop: jutro';
            return;
        }

        const randomIdx = Math.floor(Math.random() * dailyGifts.length);
        const reward = dailyGifts[randomIdx];

        giftIcon.style.transform = 'scale(1.2) rotate(10deg)';
        setTimeout(() => {
            giftIcon.innerText = '🎁';
            giftText.style.display = 'block';
            giftText.innerText = reward;
            giftStatus.innerText = 'Prezent odebrany dzisiaj';
            giftIcon.style.transform = 'scale(1)';
            localStorage.setItem(STORAGE.dailyGiftDate, today);
            createMiniConfetti(giftIcon);
            notifyDiscord('daily_gift', { gift: reward });
        }, 400);
    };

    window.useCoupon = function (element) {
        if (!element || element.classList.contains('used')) return;

        if (confirm('Czy na pewno chcesz uzyc tego kuponu?')) {
            element.classList.add('used');
            const icon = element.querySelector('.coupon-icon');
            if (icon) icon.innerText = 'OK';

            const couponId = element.dataset.couponId;
            const usedCoupons = readJson(STORAGE.usedCoupons, []);
            if (couponId && !usedCoupons.includes(couponId)) {
                usedCoupons.push(couponId);
                writeJson(STORAGE.usedCoupons, usedCoupons);
            }

            alert('Kupon aktywowany. Zrob screena i wyslij.');
        }
    };

    window.__dailyDebug = {
        resetDailyQuoteLimit() {
            localStorage.removeItem(STORAGE.dailyQuote);
            refreshDailyUI();
            return 'OK: daily quote reset';
        },
        resetCoupons() {
            localStorage.removeItem(STORAGE.usedCoupons);
            document.querySelectorAll('.coupon.used').forEach((coupon) => {
                coupon.classList.remove('used');
                const icon = coupon.querySelector('.coupon-icon');
                if (icon) {
                    const original = icon.dataset.originalIcon;
                    if (original) icon.innerText = original;
                }
            });
            return 'OK: coupons reset';
        },
        resetDailyLoginPing() {
            localStorage.removeItem(STORAGE.dailyLoginPing);
            return 'OK: daily login ping reset';
        },
        resetDailyGift() {
            localStorage.removeItem(STORAGE.dailyGiftDate);
            const giftText = document.getElementById('gift-text');
            const giftIcon = document.getElementById('gift-icon');
            const giftStatus = document.getElementById('gift-status');
            if (giftText) {
                giftText.style.display = 'none';
                giftText.innerText = '';
            }
            if (giftIcon) giftIcon.innerText = '📦';
            if (giftStatus) giftStatus.innerText = 'Dostepna nowa paczka!';
            return 'OK: daily gift reset';
        },
        sendTestGift(message = 'TEST gift from debug mode') {
            notifyDiscord('daily_gift', { gift: message });
            return 'OK: test gift sent';
        }
    };

    window.checkPassword = function () {
        const passwordInput = document.getElementById('passwordInput');
        const errorMsg = document.getElementById('error-msg');
        if (!passwordInput || !errorMsg) return;

        const secretHash = 'MTcuMTAuMjAyNA==';
        const password = passwordInput.value;
        const b64 = (str) => window.btoa(unescape(encodeURIComponent(str)));

        if (b64(password.toLowerCase()) === secretHash) {
            const overlay = document.getElementById('login-overlay');
            if (overlay) overlay.style.display = 'none';

            Promise.resolve(window.__appConfigReady).finally(() => {
                pingDailyLoginOnce();
            });
        } else {
            errorMsg.style.display = 'block';
            errorMsg.innerText = 'Zle haslo! Sprobuj jeszcze raz.';
        }
    };

    document.addEventListener('DOMContentLoaded', async () => {
        await (window.__appConfigReady = loadConfig());
        initCouponsPersistence();
        activateSpecialDayMode();
    });
})();
