// ! NAV

let nav = document.createElement("nav")
nav.classList.add("grid")
let menu = document.createElement("ul")
menu.classList.add("menu")

data.nav.links.forEach(link => {
    let listItem = document.createElement("li")
    listItem.classList.add("menu__item");
    listItem.innerHTML = `<a href="${link.linkURL}" class="menu__link">${link.linkname}</a>`
    menu.append(listItem)
});



let some = document.createElement("ul")
some.classList.add("some")

data.nav.some.forEach(link => {
    let listItem = document.createElement("li")
    listItem.classList.add("some__item");
    listItem.innerHTML = `<a href="${link.linkURL}" class="some__link"><i class="${link.icon}"></i></a>`
    some.append(listItem)
});

nav.append(menu, some);
header.append(nav);
