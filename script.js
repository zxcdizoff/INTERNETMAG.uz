// ===== DATA =====
const countries = [
    { name: 'Узбекистан', code: '+998', flag: '🇺🇿', price: 40000 },
    { name: 'Россия', code: '+7', flag: '🇷🇺', price: 40000 },
    { name: 'США', code: '+1', flag: '🇺🇸', price: 40000 },
    { name: 'Великобритания', code: '+44', flag: '🇬🇧', price: 40000 },
    { name: 'Казахстан', code: '+7', flag: '🇰🇿', price: 40000 },
    { name: 'Германия', code: '+49', flag: '🇩🇪', price: 40000 },
    { name: 'Франция', code: '+33', flag: '🇫🇷', price: 40000 },
    { name: 'Турция', code: '+90', flag: '🇹🇷', price: 40000 },
    // Additional popular countries (hidden initially)
    { name: 'Индия', code: '+91', flag: '🇮🇳', price: 40000, hidden: true },
    { name: 'Китай', code: '+86', flag: '🇨🇳', price: 40000, hidden: true },
    { name: 'Япония', code: '+81', flag: '🇯🇵', price: 40000, hidden: true },
    { name: 'Южная Корея', code: '+82', flag: '🇰🇷', price: 40000, hidden: true },
    { name: 'Канада', code: '+1', flag: '🇨🇦', price: 40000, hidden: true },
    { name: 'Италия', code: '+39', flag: '🇮🇹', price: 40000, hidden: true },
    { name: 'Испания', code: '+34', flag: '🇪🇸', price: 40000, hidden: true },
    { name: 'Бразилия', code: '+55', flag: '🇧🇷', price: 40000, hidden: true },
    { name: 'Австралия', code: '+61', flag: '🇦🇺', price: 40000, hidden: true },
    { name: 'ОАЭ', code: '+971', flag: '🇦🇪', price: 40000, hidden: true },
    { name: 'Польша', code: '+48', flag: '🇵🇱', price: 40000, hidden: true },
    { name: 'Украина', code: '+380', flag: '🇺🇦', price: 40000, hidden: true },
    { name: 'Таджикистан', code: '+992', flag: '🇹🇯', price: 40000, hidden: true },
    { name: 'Кыргызстан', code: '+996', flag: '🇰🇬', price: 40000, hidden: true },
    { name: 'Грузия', code: '+995', flag: '🇬🇪', price: 40000, hidden: true },
    { name: 'Азербайджан', code: '+994', flag: '🇦🇿', price: 40000, hidden: true },
    { name: 'Беларусь', code: '+375', flag: '🇧🇾', price: 40000, hidden: true },
    { name: 'Нидерланды', code: '+31', flag: '🇳🇱', price: 40000, hidden: true },
    { name: 'Швеция', code: '+46', flag: '🇸🇪', price: 40000, hidden: true },
    { name: 'Португалия', code: '+351', flag: '🇵🇹', price: 40000, hidden: true },
    { name: 'Мексика', code: '+52', flag: '🇲🇽', price: 40000, hidden: true },
    { name: 'Аргентина', code: '+54', flag: '🇦🇷', price: 40000, hidden: true },
    { name: 'Таиланд', code: '+66', flag: '🇹🇭', price: 40000, hidden: true },
    { name: 'Индонезия', code: '+62', flag: '🇮🇩', price: 40000, hidden: true },
    { name: 'Малайзия', code: '+60', flag: '🇲🇾', price: 40000, hidden: true },
    { name: 'Филиппины', code: '+63', flag: '🇵🇭', price: 40000, hidden: true },
    { name: 'Вьетнам', code: '+84', flag: '🇻🇳', price: 40000, hidden: true },
    { name: 'Египет', code: '+20', flag: '🇪🇬', price: 40000, hidden: true },
    { name: 'Нигерия', code: '+234', flag: '🇳🇬', price: 40000, hidden: true },
    { name: 'Саудовская Аравия', code: '+966', flag: '🇸🇦', price: 40000, hidden: true },
    { name: 'Израиль', code: '+972', flag: '🇮🇱', price: 40000, hidden: true },
    { name: 'Швейцария', code: '+41', flag: '🇨🇭', price: 40000, hidden: true },
    { name: 'Австрия', code: '+43', flag: '🇦🇹', price: 40000, hidden: true },
    { name: 'Чехия', code: '+420', flag: '🇨🇿', price: 40000, hidden: true },
    { name: 'Румыния', code: '+40', flag: '🇷🇴', price: 40000, hidden: true },
    { name: 'Молдова', code: '+373', flag: '🇲🇩', price: 40000, hidden: true },
    { name: 'Армения', code: '+374', flag: '🇦🇲', price: 40000, hidden: true },
    { name: 'Туркменистан', code: '+993', flag: '🇹🇲', price: 40000, hidden: true },
    { name: 'Сингапур', code: '+65', flag: '🇸🇬', price: 40000, hidden: true },
];

const starPackages = [
    { amount: 100, price: 25399 },
    { amount: 250, price: 61000 },
    { amount: 500, price: 118000 },
    { amount: 1000, price: 236000 },
    { amount: 2500, price: 585000 },
    { amount: 5000, price: 1165000 },
    { amount: 10000, price: 2320000 },
];

const premiumPackages = [
    { duration: '1 МЕСЯЦ', label: 'PREMIUM', price: 36999, months: 1 },
    { duration: '3 МЕСЯЦА', label: 'PREMIUM', price: 101999, months: 3 },
    { duration: '6 МЕСЯЦЕВ', label: 'PREMIUM', price: 191999, months: 6 },
    { duration: '12 МЕСЯЦЕВ', label: 'PREMIUM', price: 351999, months: 12 },
];

const recentPurchases = [
    { icon: '🇺🇿', title: '+998 90***345', desc: 'Купил номер Узбекистан', time: '2 сек. назад' },
    { icon: '🇷🇺', title: '+7 912****678', desc: 'Купил номер Россия', time: '4 сек. назад' },
    { icon: '⭐', title: '@user***', desc: 'Купил 1000 ⭐', time: '6 сек. назад' },
    { icon: '💎', title: '@premium***', desc: 'Купил Premium 3 месяца', time: '8 сек. назад' },
    { icon: '🇺🇸', title: '+1 305***123', desc: 'Купил номер США', time: '10 сек. назад' },
    { icon: '⭐', title: '@star_buyer', desc: 'Купил 5000 ⭐', time: '15 сек. назад' },
    { icon: '🇬🇧', title: '+44 78***901', desc: 'Купил номер Великобритания', time: '20 сек. назад' },
    { icon: '💎', title: '@tg_user***', desc: 'Купил Premium 12 месяцев', time: '25 сек. назад' },
];

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('cart') || '[]');

let TON_TO_UZS = 75000; // Резервный курс TON
const TON_ADDRESS = 'UQBPBHpxKZ57TfqidkU7L6Z_aYTBvcgi936J9qdx80g9fxH3';

// ===== АВТООБНОВЛЕНИЕ КУРСА TON =====
async function fetchTonRate() {
    try {
        const [tonRes, uzsRes] = await Promise.all([
            fetch('https://api.coingecko.com/api/v3/simple/price?ids=the-open-network&vs_currencies=usd'),
            fetch('https://cbu.uz/oz/arkhiv-kursov-valyut/json/')
        ]);
        const tonData = await tonRes.json();
        const uzsData = await uzsRes.json();

        const tonUsd = tonData?.['the-open-network']?.usd;
        const usdEntry = uzsData.find(c => c.Ccy === 'USD');
        const usdUzs = usdEntry ? parseFloat(usdEntry.Rate) : null;

        if (tonUsd && usdUzs) {
            TON_TO_UZS = Math.round(tonUsd * usdUzs);
            console.log(`[Реальный TON] Курс обновлен: 1 TON = ${TON_TO_UZS} UZS`);
            updateCartUI();
        }
    } catch (e) {
        console.warn('[TON Rate] Ошибка, резервный курс:', TON_TO_UZS, e);
    }
}

fetchTonRate();
setInterval(fetchTonRate, 5 * 60 * 1000);

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartFooter = document.getElementById('cartFooter');
    const cartTotal = document.getElementById('cartTotal');
    const cartTotalTon = document.getElementById('cartTotalTon');
    const tonWalletPayBtn = document.getElementById('tonWalletPayBtn');

    cartCount.textContent = cart.length;

    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="cart-empty" id="cartEmpty">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>
                <p>Корзина пуста</p>
            </div>`;
        cartFooter.style.display = 'none';
    } else {
        let html = '';
        cart.forEach((item, index) => {
            html += `
            <div class="cart-item">
                <div class="cart-item-icon">${item.icon}</div>
                <div class="cart-item-info">
                    <div class="cart-item-name">${item.name}</div>
                    <div class="cart-item-price">${formatPrice(item.price)} сум</div>
                </div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})" title="Удалить">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
            </div>`;
        });
        cartItems.innerHTML = html;
        cartFooter.style.display = 'block';

        const total = cart.reduce((sum, item) => sum + item.price, 0);
        cartTotal.textContent = formatPrice(total) + ' сум';

        // Расчет цены в TON со скрытой надбавкой 2000 сум за каждый товар
        const markupPerItem = 2000; 
        const totalWithMarkup = total + (cart.length * markupPerItem);

        // Переводим в TON и округляем вверх
        const tonPrice = (Math.ceil((totalWithMarkup / TON_TO_UZS) * 100) / 100).toFixed(2);
        cartTotalTon.textContent = `~${tonPrice} TON`;

        // Ссылка для кошельков с понятным указанием для ввода юзернейма
        const itemsList = cart.map(item => item.name).join(', ');
        const commentText = `Покупка: ${itemsList}. Telegram: @username`;
        const nanotons = Math.round(parseFloat(tonPrice) * 1000000000);

        tonWalletPayBtn.href = `ton://transfer/${TON_ADDRESS}?amount=${nanotons}&text=${encodeURIComponent(commentText)}`;

        // Убираем текст "В разработке" у крипто-кнопки, если она заблокирована в HTML
        if (tonWalletPayBtn) {
            tonWalletPayBtn.classList.remove('disabled');
            // Если текст внутри кнопки содержал "в разработке", меняем его на чистый
            if (tonWalletPayBtn.textContent.includes('разработ')) {
                tonWalletPayBtn.innerHTML = `Оплатить через TON (~${tonPrice} TON)`;
            }
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
}

function copyTonAddress() {
    const address = TON_ADDRESS;
    navigator.clipboard.writeText(address).then(() => {
        const btn = document.getElementById('tonCopyBtn');
        const originalHTML = btn.innerHTML;
        btn.innerHTML = `✓ Скопировано`;
        btn.style.color = '#00ff88';
        showToast('Адрес скопирован', 'TON адрес сохранен в буфер обмена.');
        setTimeout(() => {
            btn.innerHTML = originalHTML;
            btn.style.color = '';
        }, 2000);
    }).catch(err => {
        console.error('Ошибка копирования:', err);
    });
}

function addToCart(item) {
    cart.push(item);
    updateCartUI();
    showToast('Добавлено в корзину', item.name);

    const cartBtn = document.getElementById('cartBtn');
    cartBtn.style.animation = 'none';
    cartBtn.offsetHeight;
    cartBtn.style.animation = 'cartPulse 0.5s ease';
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    updateCartUI();
}

// Убрал лишние дубли функций, оставил только важный код
function clearCart() {
    cart = [];
    updateCartUI();
}

function toggleCart() {
    const sidebar = document.getElementById('cartSidebar');
    const overlay = document.getElementById('cartOverlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
    document.body.style.overflow = sidebar.classList.contains('active') ? 'hidden' : '';
}

function checkout() {
    if (cart.length === 0) return;
    alert('Спасибо за заказ! Итого: ' + formatPrice(cart.reduce((s, i) => s + i.price, 0)) + ' сум\n\nОплата будет обработана автоматически.');
    clearCart();
    toggleCart();
}

function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

function renderNumbers() {
    const grid = document.getElementById('numbersGrid');
    let html = '';
    countries.forEach((country, i) => {
        const hiddenClass = country.hidden ? ' hidden-card' : '';
        html += `
        <div class="number-card parallax-tilt${hiddenClass}" data-tilt>
            <div class="number-flag">${country.flag}</div>
            <div class="number-country">${country.name}</div>
            <div class="number-code">${country.code}</div>
            <div class="number-price">${formatPrice(country.price)} сум</div>
            <button class="buy-btn" onclick="addNumberToCart(${i}, this)">КУПИТЬ</button>
        </div>`;
    });
    grid.innerHTML = html;
}

function addNumberToCart(index, btn) {
    const country = countries[index];
    addToCart({
        icon: country.flag,
        name: `Номер ${country.name} (${country.code})`,
        price: country.price
    });

    btn.classList.add('added');
    btn.textContent = '✓ ДОБАВЛЕНО';
    setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = 'КУПИТЬ';
    }, 1500);
}

function renderStars() {
    const grid = document.getElementById('starsGrid');
    let html = '';
    starPackages.forEach((pkg, i) => {
        html += `
        <div class="star-card parallax-tilt" data-tilt>
            <div class="star-card-content">
                <div class="star-amount">${formatPrice(pkg.amount)} <span class="star-emoji">⭐</span></div>
                <div class="star-price">${formatPrice(pkg.price)} сум</div>
                <button class="buy-btn" onclick="addStarToCart(${i}, this)">КУПИТЬ</button>
            </div>
        </div>`;
    });
    grid.innerHTML = html;
}

function addStarToCart(index, btn) {
    const pkg = starPackages[index];
    addToCart({
        icon: '⭐',
        name: `${formatPrice(pkg.amount)} Telegram Stars`,
        price: pkg.price
    });

    btn.classList.add('added');
    btn.textContent = '✓ ДОБАВЛЕНО';
    setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = 'КУПИТЬ';
    }, 1500);
}

function renderPremium() {
    const grid = document.getElementById('premiumGrid');
    let html = '';
    premiumPackages.forEach((pkg, i) => {
        html += `
        <div class="premium-card parallax-tilt" data-tilt>
            <div class="premium-icon">💎</div>
            <div class="premium-duration">${pkg.duration}</div>
            <div class="premium-label">${pkg.label}</div>
            <div class="premium-price">${formatPrice(pkg.price)} сум</div>
            <button class="buy-btn" onclick="addPremiumToCart(${i}, this)">КУПИТЬ</button>
        </div>`;
    });
    grid.innerHTML = html;
}

function addPremiumToCart(index, btn) {
    const pkg = premiumPackages[index];
    addToCart({
        icon: '💎',
        name: `Telegram Premium ${pkg.duration}`,
        price: pkg.price
    });

    btn.classList.add('added');
    btn.textContent = '✓ ДОБАВЛЕНО';
    setTimeout(() => {
        btn.classList.remove('added');
        btn.textContent = 'КУПИТЬ';
    }, 1500);
}

function renderRecentPurchases() {
    const list = document.getElementById('recentList');
    let html = '';
    recentPurchases.forEach(item => {
        html += `
        <div class="recent-item">
            <div class="recent-item-icon">${item.icon}</div>
            <div class="recent-item-info">
                <strong>${item.title}</strong>
                <span>${item.desc}</span>
            </div>
            <div class="recent-item-time">${item.time}</div>
        </div>`;
    });
    list.innerHTML = html;
}

let showingAll = false;
function toggleAllNumbers(e) {
    e.preventDefault();
    const grid = document.getElementById('numbersGrid');
    const link = document.getElementById('seeAllNumbers');
    showingAll = !showingAll;

    if (showingAll) {
        grid.classList.add('show-all');
        link.textContent = 'Скрыть ←';
    } else {
        grid.classList.remove('show-all');
        link.textContent = 'Смотреть все номера →';
    }
}

function initScrollAnimations() {
    const elements = document.querySelectorAll('.scroll-animate');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.dataset.delay || 0;
                setTimeout(() => {
                    entry.target.classList.add('visible');
                }, parseInt(delay));
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    elements.forEach(el => observer.observe(el));
}

function initHeaderScroll() {
    const header = document.getElementById('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) header.classList.add('scrolled');
        else header.classList.remove('scrolled');
    }, { passive: true });
}

function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            if (window.scrollY >= section.offsetTop - 100) current = section.getAttribute('id');
        });
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) link.classList.add('active');
        });
    }, { passive: true });
}

function toggleMobileMenu() {
    document.getElementById('mobileMenu').classList.toggle('active');
    document.getElementById('mobileMenuBtn').classList.toggle('active');
}

function closeMobileMenu() {
    document.getElementById('mobileMenu').classList.remove('active');
    document.getElementById('mobileMenuBtn').classList.remove('active');
}

function toggleFaq(el) {
    const item = el.parentElement;
    const isActive = item.classList.contains('active');
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));
    if (!isActive) item.classList.add('active');
}

let chatOpen = false;
function toggleChat() {
    chatOpen = !chatOpen;
    document.getElementById('chatWindow').classList.toggle('active', chatOpen);
    if (chatOpen) document.querySelector('.chat-badge').style.display = 'none';
}

function sendChat() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const text = input.value.trim();
    if (!text) return;

    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<span>${text}</span>`;
    messages.appendChild(userMsg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-msg bot';
        const replies = [
            'Спасибо за ваш вопрос! Наш специалист свяжется с вами в ближайшее время. 😊',
            'Добрый день! Все товары выдаются автоматически после оплаты.',
            'Мы работаем 24/7! Напишите подробнее и мы поможем вам.'
        ];
        botMsg.innerHTML = `<span>${replies[Math.floor(Math.random() * replies.length)]}</span>`;
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
}

function handleChatKey(e) {
    if (e.key === 'Enter') sendChat();
}

let toastTimeout;
function showToast(title, desc) {
    const toast = document.getElementById('toastNotification');
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastDesc').textContent = desc;
    toast.classList.add('active');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => toast.classList.remove('active'), 3000);
}

function initAutoNotifications() {
    let index = 0;
    setInterval(() => {
        const purchase = recentPurchases[index % recentPurchases.length];
        showToast(purchase.title, purchase.desc);
        index++;
    }, 15000);
}

function initParallaxTilt() {
    if ('ontouchstart' in window) initMobileParallax();
    else initDesktopTilt();
}

function initDesktopTilt() {
    document.querySelectorAll('[data-tilt]').forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const rotateX = (y - rect.height / 2) / (rect.height / 2) * -5;
            const rotateY = (x - rect.width / 2) / (rect.width / 2) * 5;
            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

function initMobileParallax() {
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (e) => {
            const david = document.getElementById('davidImg');
            if (david) david.style.transform = `translate(${(e.gamma || 0) * 0.3}px, ${((e.beta || 0) - 45) * 0.2}px)`;
        }, { passive: true });
    }
}

function initDesktopScrollParallax() {
    if (window.innerWidth < 768) return;
    window.addEventListener('scroll', () => {
        const david = document.getElementById('davidImg');
        if (david && window.scrollY < window.innerHeight) {
            david.style.transform = `translateY(${window.scrollY * 0.15}px)`;
        }
    }, { passive: true });
}

function initCardRevealOnScroll() {
    const allCards = document.querySelectorAll('.number-card, .star-card, .premium-card, .advantage-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                const idx = Array.from(allCards).indexOf(entry.target);
                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, (idx % 8) * 60);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.05 });
    allCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

const style = document.createElement('style');
style.textContent = `@keyframes cartPulse { 0% { transform: scale(1); } 30% { transform: scale(1.15); } 60% { transform: scale(0.95); } 100% { transform: scale(1); } }`;
document.head.appendChild(style);

function initHeroLightning() {
    const hero = document.getElementById('hero');
    if (!hero) return;
    const canvas = document.createElement('canvas');
    canvas.id = 'lightningCanvas';
    hero.appendChild(canvas);
    const ctx = canvas.getContext('2d');

    function resize() { canvas.width = hero.offsetWidth; canvas.height = hero.offsetHeight; }
    resize();
    window.addEventListener('resize', resize);

    // Упрощенный триггер для анимации холста молний
    let heroVisible = true;
    const observer = new IntersectionObserver(entries => { heroVisible = entries[0].isIntersecting; }, { threshold: 0.01 });
    observer.observe(hero);

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        requestAnimationFrame(animate);
    }
    animate();
}

// ===== ИНИЦИАЛИЗАЦИЯ ВСЕХ КОМПОНЕНТОВ =====
document.addEventListener('DOMContentLoaded', () => {
    renderNumbers();
    renderStars();
    renderPremium();
    updateCartUI();

    initScrollAnimations();
    initHeaderScroll();
    initActiveNav();
    initHeroLightning();

    setTimeout(() => {
        initParallaxTilt();
        initDesktopScrollParallax();
        initCardRevealOnScroll();
    }, 500);

    // Дополнительный авто-фикс кнопки при первой загрузке (на случай, если корзина пустая)
    const cryptoBtn = document.getElementById('tonWalletPayBtn');
    if (cryptoBtn) {
        cryptoBtn.classList.remove('disabled');
        if (cryptoBtn.textContent.includes('разработ')) {
            cryptoBtn.innerHTML = `Оплатить через TON`;
        }
    }
});
