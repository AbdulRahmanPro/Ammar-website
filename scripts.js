var btn = document.getElementById('menubtn');
console.log(1)
btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    document.getElementById('Navbar').classList.toggle('active');
});
