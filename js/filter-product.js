document.addEventListener('click', function(event) {
    if (event.target.classList.contains('filters__select-categories')) {
        let filterItem = event.target.closest('.filters__select-item.filter-selector');
        let dropdown = filterItem.querySelector('.filter-dropdown');
        if (dropdown.classList.contains('active')) {
            dropdown.classList.remove('active');
            filterItem.classList.remove('active');
        } else {
            document.querySelectorAll('.filter-dropdown.active').forEach(function(dropdown) {
                dropdown.classList.remove('active');
                dropdown.closest('.filters__select-item.filter-selector').classList.remove('active');
            });
            dropdown.classList.add('active');
            filterItem.classList.add('active');
        }
    } else {

        if (!event.target.closest('.filters__select-categories') && !event.target.closest('.filter-dropdown')) {
            document.querySelectorAll('.filter-dropdown.active').forEach(function(dropdown) {
                dropdown.classList.remove('active');
                dropdown.closest('.filters__select-item.filter-selector').classList.remove('active');
            });
        }
    }
});

document.getElementById("sort-cheap-to-expensive").addEventListener("click", function() {
    this.classList.add("active");
    document.getElementById("sort-expensive-to-cheap").classList.remove("active");
});

document.getElementById("sort-expensive-to-cheap").addEventListener("click", function() {
    this.classList.add("active");
    document.getElementById("sort-cheap-to-expensive").classList.remove("active");
});
document.querySelector('.main__filters-btn').addEventListener('click', function() {
    applyFilters();
});
function applyFilters() {
    const selectedFilters = document.querySelectorAll('.filters__checkbox:checked');
    const filtersBlockContent = document.querySelector('.filters__block-content');

    filtersBlockContent.innerHTML = '';

    selectedFilters.forEach(function(filter) {
        const filterName = filter.parentNode.textContent.trim();
        const filterItem = document.createElement('div');
        filterItem.className = 'filters__block-item';
        filterItem.innerHTML = `
            <div class="filters__block-close"> <svg xmlns="http://www.w3.org/2000/svg" width="9" height="9" viewBox="0 0 9 9" fill="none"> <g clip-path="url(#clip0_297_7578)"> <path d="M5.03026 4.49938L8.89021 0.639433C9.03408 0.490473 9.02997 0.253059 8.88101 0.109179C8.73569 -0.0311847 8.50527 -0.0311847 8.35995 0.109179L4.49999 3.96912L0.640048 0.109179C0.491071 -0.0347004 0.253674 -0.0305695 0.109795 0.11839C-0.0305689 0.263711 -0.0305689 0.494112 0.109795 0.639433L3.96974 4.49938L0.109795 8.35932C-0.0365983 8.50576 -0.0365983 8.74314 0.109795 8.88957C0.256241 9.03596 0.49362 9.03596 0.640048 8.88957L4.49999 5.02963L8.35993 8.88957C8.50638 9.03596 8.74376 9.03596 8.89019 8.88957C9.03658 8.74313 9.03658 8.50575 8.89019 8.35932L5.03026 4.49938Z" fill="white"/> </g> <defs> <clipPath id="clip0_297_7578"> <rect width="9" height="9" fill="white"/> </clipPath> </defs> </svg> </div>
            <p class="filters__block-item-name">${filterName}</p>
        `;

        filtersBlockContent.appendChild(filterItem);
    });

    updateFiltersVisibility();
}

document.querySelector('.filters__block-btn').addEventListener('click', function() {
    document.querySelector('.filters__block-content').innerHTML = '';
    updateFiltersVisibility(); 
});

document.querySelector('.filters__block-content').addEventListener('click', function(event) {
    if (event.target.closest('.filters__block-close')) {
        event.target.closest('.filters__block-item').remove();
        updateFiltersVisibility();
    }
});



function updateFiltersVisibility() {
    const filtersBlock = document.querySelector('.filters__block');
    const hasFilters = document.querySelector('.filters__block-content').children.length > 0;

    if (hasFilters) {
        filtersBlock.style.display = '';
    } else {
        filtersBlock.style.display = 'none';
    }
}

updateFiltersVisibility();





function showFilterMobile(e){
    let filterMobile = document.querySelector('.main__filters')
    filterMobile.classList.toggle('active')
    if (filterMobile.classList.contains('active')) {
        body.style.overflow = 'hidden';
    } else {
        body.style.overflow = '';
    }
}





let sortName = document.querySelector('.sort-mob-name');
let sortChose = document.querySelector('.sort-mob-chose');
let sortItems = document.querySelectorAll('.sort-mob-item');
sortName.addEventListener('click', function() {
    sortChose.classList.toggle('active');
    sortName.classList.toggle('active');
});
sortItems.forEach(function(item) {
    item.addEventListener('click', function() {
        sortItems.forEach(function(item) {
            item.classList.remove('active');
        });
        item.classList.add('active');
        sortName.classList.add('active');
        sortName.textContent = item.textContent;
        sortChose.classList.toggle('active');
        sortName.classList.toggle('active');
    });
});

document.addEventListener('click', function(event) {
    let targetElement = event.target;
    if (!sortChose.contains(targetElement) && !sortName.contains(targetElement)) {
        sortChose.classList.remove('active');
        sortName.classList.remove('active');
    }
});







let sortNameM = document.querySelector('.sort-heade-name');
let sortChoseM = document.querySelector('.sort-heade-chose');
let sortItemsM = document.querySelectorAll('.sort-heade-item');
sortNameM.addEventListener('click', function() {
    sortChoseM.classList.toggle('active');
    sortNameM.classList.toggle('active');
});
sortItemsM.forEach(function(item) {
    item.addEventListener('click', function() {
        sortItemsM.forEach(function(item) {
            item.classList.remove('active');
        });
        item.classList.add('active');
        sortNameM.classList.add('active');
        sortNameM.textContent = item.textContent;
        sortChoseM.classList.toggle('active');
        sortNameM.classList.toggle('active');
    });
});

document.addEventListener('click', function(event) {
    let targetElement = event.target;
    if (!sortChoseM.contains(targetElement) && !sortNameM.contains(targetElement)) {
        sortChoseM.classList.remove('active');
        sortNameM.classList.remove('active');
    }
});

