$('.collapse').on('show.bs.collapse', function () {
    $('.collapse.in').each(function () {
        $(this).collapse('hide');
    });
});


// < 992px slide menu show出 , >992px btn控制 , 預設menu close 

const mediaQuery = window.matchMedia("(min-width: 992px)");
var openmenu = document.getElementById('slidemenucontent');


function togglemenu(mediaQuery) {
    if (mediaQuery.matches) {
        openmenu.classList.add("show");

    } else {
        openmenu.classList.remove("show");
    }
}

mediaQuery.addListener(togglemenu);
togglemenu(mediaQuery);
