// script.js - Единый файл скриптов для всех страниц ТехПром3D

// Данные для главной страницы
const directionsData = [
    { title: "3D-печать", desc: "Изготовление изделий из пластика от одного экземпляра до малых серий." },
    { title: "Крупноформатная печать", desc: "Производство крупногабаритных изделий на промышленных принтерах." },
    { title: "3D-сканирование", desc: "Оцифровка объектов и деталей любой сложности." },
    { title: "Реверс-инжиниринг", desc: "Восстановление деталей по образцу." },
    { title: "Производственная оснастка", desc: "Кондукторы, шаблоны, приспособления." },
    { title: "Гидропонные системы", desc: "Производство гидропонных башен и комплектующих." }
];

const capabilitiesData = [
    { title: "Высокоскоростная FDM-печать", desc: "3 × Bambu Lab P2S — прототипирование, серийное производство, инженерные изделия." },
    { title: "Крупноформатная печать", desc: "3 × OrangeStorm Giga — гидропонные системы, воздуховоды, корпуса." },
    { title: "Многоматериальная печать", desc: "9 экструдеров, печать несколькими материалами и цветами." },
    { title: "Высокоточная фотополимерная печать", desc: "Creality HALOT-R6 — высокая детализация, сложная геометрия." },
    { title: "Постобработка изделий", desc: "Creality UW-03 — мойка и полимеризация." },
    { title: "3D-сканирование", desc: "EinScan Rigil — создание цифровых копий, реверс-инжиниринг." }
];

const materialsData = [
    { name: "PLA", props: "Биопластик, лёгкость печати, экологичность" },
    { name: "PETG", props: "Прочность, химическая стойкость, прозрачность" },
    { name: "ASA", props: "Устойчивость к УФ, погодным условиям" },
    { name: "ABS", props: "Ударопрочность, термостойкость до 100°C" },
    { name: "TPU", props: "Гибкость, резиноподобные свойства" },
    { name: "Фотополимеры", props: "Высокая детализация, гладкая поверхность" }
];

const advantagesData = [
    "Собственное производство", "Локальное изготовление", "Быстрые сроки (от 24 часов)",
    "Изготовление от 1 экземпляра", "Крупноформатная печать до 800 мм",
    "3D-сканирование и реверс-инжиниринг", "Работа с физ. и юр. лицами", "Гарантия качества"
];

// Данные для портфолио
const portfolioData = [
    { title: "Кронштейн подвески", category: "auto", img: "🔧" },
    { title: "Кондуктор для сверления", category: "tooling", img: "🔨" },
    { title: "Гидропонная башня 36 мест", category: "hydra", img: "🌱" },
    { title: "Корпус контроллера", category: "cases", img: "📦" },
    { title: "Воздуховод системы вентиляции", category: "ducts", img: "💨" },
    { title: "Прототип шестерни", category: "prototypes", img: "⚙️" },
    { title: "Шаблон монтажный", category: "tooling", img: "📐" },
    { title: "Башня на 12 мест", category: "hydra", img: "🌿" },
    { title: "Защитный кожух", category: "cases", img: "🛡️" },
    { title: "Переходник воздуховода", category: "ducts", img: "🔄" },
    { title: "Деталь подвески внедорожника", category: "auto", img: "🚙" },
    { title: "Макет корпуса прибора", category: "prototypes", img: "📱" }
];

// Данные для гидропоники
const hydroponicsData = [
    { name: "Башня на 12 посадочных мест", features: "Компактная, для дома и теплиц. Высота: 600 мм", price: "от 4 900 ₽" },
    { name: "Башня на 24 посадочных места", features: "Увеличенная производительность. Высота: 1000 мм", price: "от 7 900 ₽" },
    { name: "Башня на 36 посадочных мест", features: "Промышленная, максимальный урожай. Высота: 1500 мм", price: "от 10 900 ₽" }
];

// Данные для страницы услуг
const servicesFullData = [
    { title: "3D-печать", desc: "FDM и фотополимерная печать. Материалы: PLA, ABS, PETG, ASA, TPU, нейлон, фотополимеры. Прототипирование и серийное производство." },
    { title: "Крупноформатная печать", desc: "Изделия до 800×800×800 мм на принтерах OrangeStorm Giga. Идеально для корпусов, воздуховодов, крупных деталей." },
    { title: "3D-сканирование", desc: "EinScan Rigil — точность до 0.05 мм. Оцифровка деталей любой сложности для последующего производства." },
    { title: "Реверс-инжиниринг", desc: "Восстановление CAD-моделей по сканированным данным. Получение чертежей и 3D-моделей для производства." },
    { title: "Производственная оснастка", desc: "Кондукторы, шаблоны, приспособления, паллеты, держатели. Индивидуальное проектирование под ваш техпроцесс." },
    { title: "Изготовление по образцу", desc: "Нет чертежа? Предоставьте образец. Отсканируем, восстановим геометрию и напечатаем точную копию." }
];

// Функции рендеринга
function renderDirections() {
    const grid = document.getElementById('directionsGrid');
    if (grid) grid.innerHTML = directionsData.map(d => `<div class="card"><h3>${d.title}</h3><p>${d.desc}</p></div>`).join('');
}

function renderCapabilities() {
    const grid = document.getElementById('capabilitiesGrid');
    if (grid) grid.innerHTML = capabilitiesData.map(c => `<div class="capability-card"><h3>${c.title}</h3><p>${c.desc}</p></div>`).join('');
}

function renderMaterials() {
    const grid = document.getElementById('materialsGrid');
    if (grid) grid.innerHTML = materialsData.map(m => `<div class="material-card"><h3>${m.name}</h3><p>${m.props}</p></div>`).join('');
}

function renderAdvantages() {
    const grid = document.getElementById('advantagesGrid');
    if (grid) grid.innerHTML = advantagesData.map(a => `<div class="advantage-card"><i class="fas fa-check-circle" style="color:var(--orange-accent); margin-right:10px;"></i> ${a}</div>`).join('');
}

function renderPortfolioPreview() {
    const grid = document.getElementById('portfolioPreviewGrid');
    if (grid) {
        const previewItems = portfolioData.slice(0, 4);
        grid.innerHTML = previewItems.map(p => `
            <div class="portfolio-item">
                <div class="portfolio-img" style="font-size: 3rem;">${p.img}</div>
                <div class="info"><h4>${p.title}</h4></div>
            </div>
        `).join('');
    }
}

function renderPortfolioFull(filter = 'all') {
    const grid = document.getElementById('portfolioFullGrid');
    if (!grid) return;
    let filtered = portfolioData;
    if (filter !== 'all') filtered = portfolioData.filter(p => p.category === filter);
    grid.innerHTML = filtered.map(p => `
        <div class="portfolio-item">
            <div class="portfolio-img" style="font-size: 3rem;">${p.img}</div>
            <div class="info"><h4>${p.title}</h4></div>
        </div>
    `).join('');
}

function renderServicesFull() {
    const grid = document.getElementById('servicesFullGrid');
    if (grid) grid.innerHTML = servicesFullData.map(s => `<div class="service-card"><h3>${s.title}</h3><p>${s.desc}</p></div>`).join('');
}

function renderHydroponics() {
    const grid = document.getElementById('hydroponicsGrid');
    if (grid) grid.innerHTML = hydroponicsData.map(h => `
        <div class="hydroponic-card">
            <h3>${h.name}</h3>
            <p>${h.features}</p>
            <p style="color:var(--orange-accent); font-weight:bold; margin: 15px 0;">${h.price}</p>
            <a href="contacts.html" class="btn-outline" style="margin-top:12px; display:inline-block;">Получить расчёт</a>
        </div>
    `).join('');
}

// Инициализация фильтров портфолио
function initPortfolioFilters() {
    const btns = document.querySelectorAll('.filter-btn');
    if (btns.length === 0) return;
    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            btns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            renderPortfolioFull(btn.dataset.filter);
        });
    });
}

// Инициализация форм
function initForms() {
    const orderForm = document.getElementById('orderForm');
    if (orderForm) {
        orderForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Спасибо! Ваша заявка принята. Менеджер свяжется в ближайшее время.');
            orderForm.reset();
        });
    }
    
    const contactsForm = document.getElementById('contactsForm');
    if (contactsForm) {
        contactsForm.addEventListener('submit', (e) => {
            e.preventDefault();
            alert('Сообщение отправлено. Мы ответим вам в течение рабочего дня.');
            contactsForm.reset();
        });
    }
    
    const getQuoteBtn = document.getElementById('getQuoteBtn');
    if (getQuoteBtn) {
        getQuoteBtn.addEventListener('click', () => {
            const formSection = document.querySelector('.request-form');
            if (formSection) formSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    const callBtn = document.getElementById('callBtn');
    if (callBtn) {
        callBtn.addEventListener('click', () => {
            alert('📞 Телефон: +7 (999) 123-45-67\n📱 Telegram, WhatsApp: +7 (999) 123-45-67');
        });
    }
}

// Подсветка активного пункта меню
function setActiveNav() {
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        const href = link.getAttribute('href');
        if (href === currentPath) {
            link.classList.add('active');
        } else if (currentPath === 'index.html' && href === 'index.html') {
            link.classList.add('active');
        }
    });
}

// Запуск при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    renderDirections();
    renderCapabilities();
    renderMaterials();
    renderAdvantages();
    renderPortfolioPreview();
    renderServicesFull();
    renderHydroponics();
    renderPortfolioFull('all');
    initPortfolioFilters();
    initForms();
    setActiveNav();
});