document.addEventListener('DOMContentLoaded', () => {

    /* ── Категории ── */
    const navContainer = document.querySelector('.categories-container');
    if (navContainer) {
        navContainer.addEventListener('click', (e) => {
            const clicked = e.target.closest('.cat-link');
            if (!clicked) return;
            e.preventDefault();
            navContainer.querySelectorAll('.cat-link').forEach(l => l.classList.remove('active'));
            clicked.classList.add('active');
        });
    }

    /* ── Город ── */
    const locationWrapper = document.querySelector('.location-wrapper');
    if (locationWrapper) {
        locationWrapper.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            document.getElementById('cityDropdown').classList.toggle('show');
        });

        document.querySelectorAll('.city-option').forEach(option => {
            option.addEventListener('click', (e) => {
                e.stopPropagation();
                document.querySelector('.current-city').textContent = option.dataset.city;
                document.getElementById('cityDropdown').classList.remove('show');
            });
        });
    }

    /* ── Сортировка ── */
    const sortButton = document.querySelector('.sort-button');
    if (sortButton) {
        sortButton.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('sortDropdown').classList.toggle('show');
        });

        document.querySelectorAll('.sort-option').forEach(option => {
            option.addEventListener('click', () => {
                document.getElementById('currentSort').textContent = option.textContent;
                document.getElementById('sortDropdown').classList.remove('show');
            });
        });
    }

    /* ── Меню аккаунта ── */
    const accountWrapper = document.querySelector('.account-wrapper');
    if (accountWrapper) {
        accountWrapper.addEventListener('click', (e) => {
            e.stopPropagation();
            document.getElementById('accountDropdown').classList.toggle('show');
        });
    }

    /* ── Закрытие всех дропдаунов по клику вне ── */
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.location-wrapper')) {
            document.getElementById('cityDropdown')?.classList.remove('show');
        }
        if (!e.target.closest('.sort-button') && !e.target.closest('.sort-dropdown')) {
            document.getElementById('sortDropdown')?.classList.remove('show');
        }
        if (!e.target.closest('.account-wrapper')) {
            document.getElementById('accountDropdown')?.classList.remove('show');
        }
    });

    /* ── Фильтр цены ── */
    const fromInput = document.getElementById('price-from');
    const toInput   = document.getElementById('price-to');
    if (fromInput && toInput) {
        fromInput.addEventListener('input', function () {
            toInput.min = this.value;
            if (toInput.value && parseFloat(toInput.value) < parseFloat(this.value)) {
                toInput.value = this.value;
            }
        });
    }

    /* ── Избранное ── */
    document.querySelectorAll('.favorite-button').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            btn.classList.toggle('favorite-product');
        });
    });

    /* ── Мобильный фильтр: показать/скрыть сайдбар ── */
    const filterToggle = document.getElementById('filter-toggle');
    const sidebar      = document.querySelector('.sidebar');
    if (filterToggle && sidebar) {
        filterToggle.addEventListener('click', () => {
            sidebar.classList.toggle('sidebar--open');
            filterToggle.setAttribute(
                'aria-expanded',
                sidebar.classList.contains('sidebar--open')
            );
        });
    }

    /* ── Форматирование просмотров ── */
    const formatter = new Intl.NumberFormat('ru-RU', {
        notation: 'compact',
        maximumFractionDigits: 1,
    });
    document.querySelectorAll('.product-views [data-views]').forEach(el => {
        const val = parseInt(el.dataset.views, 10);
        if (!isNaN(val)) el.textContent = formatter.format(val).toLowerCase();
    });

});