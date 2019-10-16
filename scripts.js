function showContactAlert() {
    alert('Kamil Szustak - 123 123 123');
}

function showAboutUsAlert() {
    alert('This is a new website, created by Kamil Szustak');
}

function changeVideoFrameVisibility() {
    let videoFrame = document.getElementById('video_frame');
    let isVisible = videoFrame.style.display != 'none';

    if (isVisible)
        videoFrame.style.display = 'none'
    else
        videoFrame.style.display = 'block'
}

function showEasterEgg() {
    for (var i = 0; i < 10; i++) {
        createLink();
    }
}

function createLink() {
    let div = document.createElement('div');
    div.style.marginTop = '32px';
    let link = document.createElement('a');
    link.classList.add('radius_border_box');
    link.href = 'https://www.youtube.com/watch?v=wZZ7oFKsKzY';
    link.text = 'Do not click it!';
    link.style.color = 'red';
    link.style.fontSize = '16px';
    link.style.fontWeight = 'bold';
    div.appendChild(link);
    document.body.appendChild(div);
}

function onHeaderClick() {
    let header = document.getElementById('site_header');
    header.style.transform = "rotate(1deg)";
}