const header= document.querySelector("header")

window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY>0);
});

const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
});
document.addEventListener('DOMContentLoaded', function() {
    const searchIcon = document.querySelector('.ri-search-line'); 
    const searchBar = document.getElementById('search-bar');

    if (searchIcon && searchBar) {
        searchIcon.addEventListener('click', function() {
          
            if (searchBar.style.display === 'block') {
                searchBar.style.display = 'none';
            } else {
                searchBar.style.display = 'block';
            }
        });
    } else {
        console.error('Search icon or search bar not found');
    }
});

