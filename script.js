
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

let TON_TO_UZS = 21147; // резервный курс (Telegram TON, не биржевой)
const TON_ADDRESS = 'UQBPBHpxKZ57TfqidkU7L6Z_aYTBvcgi936J9qdx80g9fxH3';

// ===== АВТООБНОВЛЕНИЕ КУРСА TELEGRAM TON =====
// Telegram внутренний курс примерно в 3.67 раз ниже биржевого TON.
// Коэффициент рассчитан из реального курса: 21147 UZS/TON на 09.06.2026.
const TELEGRAM_TON_COEFFICIENT = 3.67;

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
            TON_TO_UZS = Math.round((tonUsd / TELEGRAM_TON_COEFFICIENT) * usdUzs);
            console.log(`[Telegram TON] Рынок: $${tonUsd} | ЦБ USD: ${usdUzs} | Telegram TON: ${TON_TO_UZS} UZS`);
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

        // Calculate and format TON price
        const tonPrice = (total / TON_TO_UZS).toFixed(2);
        cartTotalTon.textContent = `~${tonPrice} TON`;

        // Update TON Wallet pay button link
        // Comment format: "Покупка: [items]. Telegram: @"
        const itemsList = cart.map(item => item.name).join(', ');
        const commentText = `Покупка: ${itemsList}. Telegram: @`;
        const nanotons = Math.round(parseFloat(tonPrice) * 1000000000);

        tonWalletPayBtn.href = `ton://transfer/${TON_ADDRESS}?amount=${nanotons}&text=${encodeURIComponent(commentText)}`;
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

    // Pulse animation on cart button
    const cartBtn = document.getElementById('cartBtn');
    cartBtn.style.animation = 'none';
    cartBtn.offsetHeight; // trigger reflow
    cartBtn.style.animation = 'cartPulse 0.5s ease';
}

function removeFromCart(index) {
    const item = cart[index];
    cart.splice(index, 1);
    updateCartUI();
}

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

// ===== FORMAT PRICE =====
function formatPrice(price) {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
}

// ===== RENDER CARDS =====
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

// ===== TOGGLE ALL NUMBERS =====
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

// ===== SCROLL ANIMATIONS =====
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
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    elements.forEach(el => observer.observe(el));
}

// ===== HEADER SCROLL =====
function initHeaderScroll() {
    const header = document.getElementById('header');
    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.scrollY;
        if (currentScroll > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        lastScroll = currentScroll;
    }, { passive: true });
}

// ===== ACTIVE NAV LINK =====
function initActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    window.addEventListener('scroll', () => {
        let current = '';
        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            if (window.scrollY >= sectionTop) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === '#' + current) {
                link.classList.add('active');
            }
        });
    }, { passive: true });
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    menu.classList.toggle('active');
    btn.classList.toggle('active');
}

function closeMobileMenu() {
    const menu = document.getElementById('mobileMenu');
    const btn = document.getElementById('mobileMenuBtn');
    menu.classList.remove('active');
    btn.classList.remove('active');
}

// ===== FAQ =====
function toggleFaq(el) {
    const item = el.parentElement;
    const isActive = item.classList.contains('active');

    // Close all
    document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('active'));

    if (!isActive) {
        item.classList.add('active');
    }
}

// ===== CHAT =====
let chatOpen = false;
function toggleChat() {
    const window_ = document.getElementById('chatWindow');
    chatOpen = !chatOpen;
    window_.classList.toggle('active', chatOpen);

    if (chatOpen) {
        document.querySelector('.chat-badge').style.display = 'none';
    }
}

function sendChat() {
    const input = document.getElementById('chatInput');
    const messages = document.getElementById('chatMessages');
    const text = input.value.trim();

    if (!text) return;

    // User message
    const userMsg = document.createElement('div');
    userMsg.className = 'chat-msg user';
    userMsg.innerHTML = `<span>${text}</span>`;
    messages.appendChild(userMsg);
    input.value = '';
    messages.scrollTop = messages.scrollHeight;

    // Bot reply
    setTimeout(() => {
        const botMsg = document.createElement('div');
        botMsg.className = 'chat-msg bot';
        const replies = [
            'Спасибо за ваш вопрос! Наш специалист свяжется с вами в ближайшее время. 😊',
            'Добрый день! Все товары выдаются автоматически после оплаты. Если нужна помощь — мы здесь!',
            'Мы работаем 24/7! Напишите подробнее и мы поможем вам.',
            'Отличный выбор! Оплата принимается через UzCard, Humo, Visa и MasterCard.',
            'Номера выдаются мгновенно! Выберите нужную страну и нажмите «Купить».'
        ];
        botMsg.innerHTML = `<span>${replies[Math.floor(Math.random() * replies.length)]}</span>`;
        messages.appendChild(botMsg);
        messages.scrollTop = messages.scrollHeight;
    }, 1000);
}

function handleChatKey(e) {
    if (e.key === 'Enter') sendChat();
}

// ===== TOAST NOTIFICATION =====
let toastTimeout;
function showToast(title, desc) {
    const toast = document.getElementById('toastNotification');
    document.getElementById('toastTitle').textContent = title;
    document.getElementById('toastDesc').textContent = desc;

    toast.classList.add('active');
    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
        toast.classList.remove('active');
    }, 3000);
}

// ===== AUTO PURCHASE NOTIFICATIONS =====
function initAutoNotifications() {
    let index = 0;
    setInterval(() => {
        const purchase = recentPurchases[index % recentPurchases.length];
        showToast(purchase.title, purchase.desc);
        index++;
    }, 15000);
}

// ===== PARALLAX / TILT EFFECT =====
function initParallaxTilt() {
    const isMobile = 'ontouchstart' in window;

    if (isMobile) {
        // Mobile: use device orientation for parallax
        initMobileParallax();
    } else {
        // Desktop: mouse-based tilt on cards
        initDesktopTilt();
    }
}

function initDesktopTilt() {
    const cards = document.querySelectorAll('[data-tilt]');

    cards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;

            const rotateX = (y - centerY) / centerY * -5;
            const rotateY = (x - centerX) / centerX * 5;

            card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(800px) rotateX(0) rotateY(0) translateY(0)';
        });
    });
}

function initMobileParallax() {
    // Gyroscope parallax for mobile
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (e) => {
            const beta = e.beta || 0; // -180 to 180 (front/back tilt)
            const gamma = e.gamma || 0; // -90 to 90 (left/right tilt)

            const david = document.getElementById('davidImg');
            if (david) {
                const moveX = gamma * 0.3;
                const moveY = (beta - 45) * 0.2;
                david.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }

            const bgText = document.querySelector('.hero-bg-text');
            if (bgText) {
                bgText.style.transform = `translate(calc(-50% + ${gamma * 0.1}px), calc(-50% + ${(beta - 45) * 0.1}px))`;
            }
        }, { passive: true });
    }

    // Scroll-based parallax for cards
    let ticking = false;
    window.addEventListener('scroll', () => {
        if (!ticking) {
            requestAnimationFrame(() => {
                const scrollY = window.scrollY;
                const cards = document.querySelectorAll('[data-tilt]');

                cards.forEach(card => {
                    const rect = card.getBoundingClientRect();
                    const windowHeight = window.innerHeight;

                    if (rect.top < windowHeight && rect.bottom > 0) {
                        const progress = (windowHeight - rect.top) / (windowHeight + rect.height);
                        const translateY = (progress - 0.5) * 10;
                        card.style.transform = `translateY(${translateY}px)`;
                    }
                });

                ticking = false;
            });
            ticking = true;
        }
    }, { passive: true });
}

// ===== DESKTOP SCROLL PARALLAX (hero elements) =====
function initDesktopScrollParallax() {
    const isMobile = window.innerWidth < 768;
    if (isMobile) return;

    window.addEventListener('scroll', () => {
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;

            const david = document.getElementById('davidImg');
            if (david && scrollY < window.innerHeight) {
                david.style.transform = `translateY(${scrollY * 0.15}px)`;
            }

            const bgText = document.querySelector('.hero-bg-text');
            if (bgText && scrollY < window.innerHeight) {
                bgText.style.transform = `translate(-50%, calc(-50% + ${scrollY * 0.1}px))`;
                bgText.style.opacity = Math.max(0, 0.03 - scrollY * 0.00005);
            }
        });
    }, { passive: true });
}

// ===== SMOOTH REVEAL ON SCROLL FOR CARDS =====
function initCardRevealOnScroll() {
    const allCards = document.querySelectorAll('.number-card, .star-card, .premium-card, .advantage-card');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, i) => {
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

// ===== CART PULSE ANIMATION =====
const style = document.createElement('style');
style.textContent = `
    @keyframes cartPulse {
        0% { transform: scale(1); }
        30% { transform: scale(1.15); }
        60% { transform: scale(0.95); }
        100% { transform: scale(1); }
    }
`;
document.head.appendChild(style);

// ===== HERO LIGHTNING =====
function initHeroLightning() {
    const hero = document.getElementById('hero');
    if (!hero) return;

    const canvas = document.createElement('canvas');
    canvas.id = 'lightningCanvas';
    hero.appendChild(canvas);

    const ctx = canvas.getContext('2d');

    function resize() {
        canvas.width = hero.offsetWidth;
        canvas.height = hero.offsetHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function generateBolt(x1, y1, x2, y2, roughness, depth) {
        if (depth === 0) return [[x1, y1], [x2, y2]];
        const mx = (x1 + x2) / 2 + (Math.random() - 0.5) * roughness;
        const my = (y1 + y2) / 2 + (Math.random() - 0.5) * roughness;
        const left = generateBolt(x1, y1, mx, my, roughness * 0.6, depth - 1);
        const right = generateBolt(mx, my, x2, y2, roughness * 0.6, depth - 1);
        return [...left, ...right];
    }

    function drawBolt(points, alpha, width, color) {
        if (points.length < 2) return;
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1]);
        ctx.strokeStyle = color;
        ctx.globalAlpha = alpha;
        ctx.lineWidth = width;
        ctx.shadowColor = '#ff0000';
        ctx.shadowBlur = 18;
        ctx.lineCap = 'round';
        ctx.lineJoin = 'round';
        ctx.stroke();
        // white spine
        ctx.beginPath();
        ctx.moveTo(points[0][0], points[0][1]);
        for (let i = 1; i < points.length; i++) ctx.lineTo(points[i][0], points[i][1]);
        ctx.strokeStyle = '#ffffff';
        ctx.globalAlpha = alpha * 0.5;
        ctx.lineWidth = width * 0.3;
        ctx.shadowBlur = 6;
        ctx.stroke();
        ctx.restore();
    }

    const bolts = [];

    function spawnBolt() {
        const w = canvas.width;
        const h = canvas.height;
        const side = Math.random();
        let x1, y1, x2, y2;
        if (side < 0.5) {
            x1 = Math.random() * w;
            y1 = 0;
            x2 = x1 + (Math.random() - 0.5) * 200;
            y2 = h * (0.3 + Math.random() * 0.5);
        } else if (side < 0.75) {
            x1 = 0;
            y1 = Math.random() * h * 0.7;
            x2 = w * (0.3 + Math.random() * 0.4);
            y2 = y1 + (Math.random() - 0.5) * 200;
        } else {
            x1 = w;
            y1 = Math.random() * h * 0.7;
            x2 = w * (0.3 + Math.random() * 0.4);
            y2 = y1 + (Math.random() - 0.5) * 200;
        }

        const roughness = 80 + Math.random() * 80;
        const points = generateBolt(x1, y1, x2, y2, roughness, 7);

        const branches = [];
        if (Math.random() > 0.4 && points.length > 4) {
            const idx = Math.floor(points.length * (0.3 + Math.random() * 0.4));
            branches.push(generateBolt(
                points[idx][0], points[idx][1],
                points[idx][0] + (Math.random() - 0.5) * 150,
                points[idx][1] + Math.random() * 120,
                50, 5
            ));
        }

        bolts.push({
            points, branches,
            alpha: 0,
            phase: 'in',
            holdTimer: 0,
            holdMax: 3 + Math.floor(Math.random() * 4),
            speed: 0.08 + Math.random() * 0.08,
            width: 1 + Math.random() * 1.5,
            color: Math.random() > 0.5 ? '#ff2222' : '#ff6666',
        });
    }

    // IntersectionObserver — молнии работают только когда hero видно
    let heroVisible = true;
    const observer = new IntersectionObserver(entries => {
        heroVisible = entries[0].isIntersecting;
    }, { threshold: 0.01 });
    observer.observe(hero);

    // Непрерывный spawn каждые 0.5–1.2 сек
    function scheduleNextBolt() {
        setTimeout(() => {
            if (heroVisible) spawnBolt();
            scheduleNextBolt();
        }, 500 + Math.random() * 700);
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (heroVisible) {
            for (let i = bolts.length - 1; i >= 0; i--) {
                const b = bolts[i];
                if (b.phase === 'in') {
                    b.alpha += b.speed;
                    if (b.alpha >= 1) { b.alpha = 1; b.phase = 'hold'; }
                } else if (b.phase === 'hold') {
                    b.holdTimer++;
                    b.alpha = 0.7 + Math.random() * 0.3;
                    if (b.holdTimer >= b.holdMax) b.phase = 'out';
                } else {
                    b.alpha -= b.speed * 1.5;
                    if (b.alpha <= 0) { bolts.splice(i, 1); continue; }
                }
                drawBolt(b.points, b.alpha, b.width, b.color);
                b.branches.forEach(br => drawBolt(br, b.alpha * 0.5, b.width * 0.6, b.color));
            }
        }

        requestAnimationFrame(animate);
    }

    spawnBolt();
    setTimeout(() => spawnBolt(), 600);
    scheduleNextBolt();
    animate();
}

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
    renderNumbers();
    renderStars();
    renderPremium();
    updateCartUI();

    initScrollAnimations();
    initHeaderScroll();
    initActiveNav();
    initHeroLightning();

    // Delay tilt/parallax slightly for performance
    setTimeout(() => {
        initParallaxTilt();
        initDesktopScrollParallax();
        initCardRevealOnScroll();
    }, 500);
});
