let galleries = document.getElementsByClassName('gallery-post');

for (let i = 0; i < galleries.length; i++) {

  galleries[i].id = 'gal' + i;

  lightGallery(document.getElementById('gal' + i), {
    licenseKey: '0000-0000-000-0000',
    speed: 500,
    container: '#gallery-show'
  });

}