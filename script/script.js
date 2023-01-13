document.getElementById('open').addEventListener('click',openNav);

document.getElementById('close').addEventListener('click',closeNav);

function openNav() {
    if (document.getElementById('sideNav').style.width == '0px') {
        document.getElementById('sideNav').style.width = '100%';
    } else {
        document.getElementById('sideNav').style.width = '0px';
    }
    document.getElementById('closeMenu').style.display = '';
}

function closeNav() {
    if (document.getElementById('sideNav').style.width == '0px') {
        document.getElementById('sideNav').style.width = '100%';
    } else {
        document.getElementById('sideNav').style.width = '0px';
    }
}
