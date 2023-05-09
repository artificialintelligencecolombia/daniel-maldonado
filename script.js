document.querySelector('.profile-photo').addEventListener('mouseover', function() {
    document.querySelector('.nav-links').style.display = 'block';
});

document.querySelector('.profile-photo').addEventListener('mouseout', function() {
    document.querySelector('.nav-links').style.display = 'none';
});

document.querySelectorAll('.nav-links a').forEach(function(link) {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('content-area').innerText = 'Displaying ' + this.dataset.content;
    });
});
