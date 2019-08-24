var formDivInSearchBar = true;
function DropDownMenu(idElement) {

    if (SmallScreen()) { //if small screen then:
        
        var menu = document.getElementById(idElement);
        var header = document.getElementById("header");
        
        if (menu.className === idElement) {
            menu.className += " responsive";
            header.className += " responsive";
        }else{
            menu.className = idElement;
            header.className = "header";

            MoveElement("form_search_bar", "search_bar");
            formDivInSearchBar = true;
            var searchBar = document.getElementById("search_bar");
                searchBar.className = searchBar.id;
            }
        
    }

}
function DropDownSubMenu(idHeadLine) {
    if (SmallScreen()) { //if small screen then:
        var subMenu = document.getElementById(idHeadLine);

            if (subMenu.className === "mainNav_link") {
                //Close opened subMenu
                var opendSubMenu =  document.getElementsByClassName("mainNav_link responsive");
                if(opendSubMenu.length){
                        opendSubMenu[0].className = "mainNav_link";

                    }
                //Open selected submenu
                subMenu.className += " responsive";
                subMenu.scrollIntoView({behavior:"smooth"});
            }else{
                subMenu.className = "mainNav_link";
            }
    }
}

function SmallScreen() {
    return window.matchMedia("(max-width:767px)").matches;
}
function ShowSearchBar() {
    var searchBar = document.getElementById("search_bar");
    
    if (searchBar.className == searchBar.id) {
        searchBar.className += " responsive";
        //move the search bar out of the header container to fill the width screen
        MoveElement("form_search_bar", "search_bar_show_container");
        formDivInSearchBar = false;
        
    }else{
        searchBar.className = searchBar.id;
        //move the search bar to it's initial position for the desktop 
        MoveElement("form_search_bar", "search_bar");
        formDivInSearchBar = true;
    }
}
function MoveElement(elmntId, targetParentId) {
    var elmnt = document.getElementById(elmntId);
    var targetParent = document.getElementById(targetParentId);
    
    targetParent.append(elmnt);
}

//On resize screen
function ResizeScreen(){
    if (!SmallScreen()) {//if Desktop screen
        //if search bar form is out of the search bar reposition it        
        if (!formDivInSearchBar) {
            MoveElement("form_search_bar", "search_bar");
            var searchBar = document.getElementById("search_bar");
            searchBar.className = "search_bar";
            formDivInSearchBar = true;
        } 

        //Return the main nav to the desktop display
        var mainNav = document.getElementById("mainNav");
        if(mainNav.className != "mainNav")
            mainNav.className = "mainNav";
    }else{//if mobile screen

    }
}