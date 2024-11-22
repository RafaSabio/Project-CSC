function search_recipe() {
    var input, filter, ul, li, a;
    input = document.getElementById("searchbar");
    filter = input.value.toUpperCase();
    ul = document.getElementById("recipes_menu");
    li = ul.getElementsByTagName("li");

    for (var i = 0; i < li.length; i++) {
        a = li[i].getElementsByTagName("a")[0];
        if (a.innerHTML.toUpperCase().indexOf(filter) > -1) {
            li[i].style.display = "";
        } else {
            li[i].style.display = "none";
        }
    }
    
    var notFoundMessage = document.getElementById("not-found-message");
    if (!found) {
        if (!notFoundMessage) {
            notFoundMessage = document.createElement("li");
            notFoundMessage.id = "not-found-message";
            notFoundMessage.textContent = "No items found.";
            notFoundMessage.style.color = "red"; // Optional: Add some styling
            notFoundMessage.style.fontWeight = "bold";
            ul.appendChild(notFoundMessage);
        }
    } else {
        if (notFoundMessage) {
            ul.removeChild(notFoundMessage);
        }
    }
}

document.addEventListener("DOMContentLoaded", function() {
    function toggleSearchBarFunction() {
        const searchButton = document.getElementById("search_button");
        const searchInput = document.getElementById("searchbar");
        const foodSearch = document.querySelector(".foodSearch");
        const iconMenu = document.querySelector(".icon_menu");

        searchInput.style.display = "none";

        searchButton.addEventListener("click", function(event) {
            event.stopPropagation();
            
            if (searchInput.style.display === "none" || searchInput.style.display === "") {
                searchInput.style.display = "block";
                searchInput.focus();
            } else {
                searchInput.style.display = "none";
            }

            foodSearch.classList.toggle("active");
            iconMenu.classList.toggle("icon-menu-active");
        });

        document.addEventListener("click", function(event) {
            if (!foodSearch.contains(event.target)) {
                searchInput.style.display = "none"; 
                foodSearch.classList.remove("active"); 
                iconMenu.classList.remove("icon-menu-active"); 
            }
        });
    }
    toggleSearchBarFunction();
});

document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.getElementById("menuToggle");
    const menu = document.querySelector(".opt_menu");
    const closeIcon = document.querySelector(".icon_close");

    function closeMenu() {
        if (menuToggle.checked) {
            menuToggle.checked = false; 
            menu.style.display = "none"; 
        }
    }

    if (closeIcon) {
        closeIcon.addEventListener("click", function (event) {
            event.stopPropagation(); 
            closeMenu();
            menuToggle.checked = true;
        });
    }

    menuToggle.addEventListener("change", function() {
        menu.style.display = menuToggle.checked ? "block" : "none";
    });

    document.addEventListener("click", function (event) {
        const isClickInsideMenu = menu.contains(event.target);
        const isClickOnMenuToggle = menuToggle.contains(event.target);

        if (!isClickInsideMenu && !isClickOnMenuToggle) {
            closeMenu();
        }
    });
});


