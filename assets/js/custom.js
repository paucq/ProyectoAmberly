$(document).ready(function () {

    /* =========================
       FILTRO DE CATEGORÍAS
    ========================= */

    var $grid = $('#product-grid');
    var $items = $grid.find('.product-item');
    var $links = $('#category-filter .category-link');
    var $topAll = $('#filter-all-top');

    function filterProducts(category) {
        if (category === 'all') {
            $items.fadeIn(300);
        } else {
            $items.each(function () {
                var $item = $(this);
                if ($item.data('category') === category) {
                    $item.fadeIn(300);
                } else {
                    $item.fadeOut(200);
                }
            });
        }

        $links.removeClass('active');
        $links.filter('[data-filter="' + category + '"]').addClass('active');
    }

    // Click en sidebar
    $links.on('click', function (e) {
        e.preventDefault();
        var category = $(this).data('filter');
        filterProducts(category);
        history.replaceState(null, '', 'shop.html' + (category !== 'all' ? '?cat=' + category : ''));
    });

    // Click en "Todos" arriba
    $topAll.on('click', function (e) {
        e.preventDefault();
        filterProducts('all');
        history.replaceState(null, '', 'shop.html');
    });

    // Leer URL param al cargar
    var params = new URLSearchParams(window.location.search);
    var catParam = params.get('cat');
    if (catParam) {
        filterProducts(catParam);
    }

});
