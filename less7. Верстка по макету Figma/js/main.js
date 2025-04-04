/* #region Инициализация sidenav */
// https://materializecss.com/sidenav.html

document.addEventListener('DOMContentLoaded', function () {
    var sidenav = document.querySelectorAll('.sidenav');
    var instances_sidenav = M.Sidenav.init(sidenav, {});
});

// Initialize collapsible (uncomment the lines below if you use the dropdown variation)
// var collapsibleElem = document.querySelector('.collapsible');
// var collapsibleInstance = M.Collapsible.init(collapsibleElem, options);
/* #endregion */

/* #region Инициализация Modals */
document.addEventListener('DOMContentLoaded', function () {
    var modal = document.querySelectorAll('.modal');
    var instances_modal = M.Modal.init(modal);
});
/* #endregion */

/* #region Инициализация Portfolio (8 картинок) */
var gallery = document.querySelectorAll('.materialboxed');
var instances_gallery = M.Materialbox.init(gallery);
/* #endregion */
