//Active navbar base url
setNavigation();

function setNavigation() {
    var path = window.location.pathname;
    path = path.replace(/\/$/, "");
    path = decodeURIComponent(path);
    console.log(path);

    $("li.menu-item a").each(function () {
        var href = $(this).attr('href');
        console.log(href.length);
        if (path.substring(0, href.length) === href&&href.length>1) {
            $(this).closest('li').addClass('active');
        }
        if(path===''){
            $("#dashboard-menu-item").addClass('active');
        }
    });
};