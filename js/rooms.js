// ! ROOMS

let roomsSection = document.createElement("section")
roomsSection.classList.add("rooms");

let roomsContent = document.createElement("div");
roomsContent.classList.add("rooms__content", "grid");

let roomsHeader = document.createElement("header");
roomsHeader.classList.add("rooms__header")

roomsHeader.innerHTML = `
    <h2 class="rooms__headline">${highLightText(data.rooms.headline, "Rooms")}</h2>
    <p class="rooms__text">${data.rooms.text}</p>

`
roomsContent.append(roomsHeader)


data.rooms.roomtypes.forEach(room => {
    let roomCard = document.createElement("div");
    roomCard.classList.add("rooms__card");

    roomCard.innerHTML = `
    <div class="rooms__img">
        <img src="${room.image}" alt="">
        <div class="rooms__info">
        <p class="rooms__guests"><i class="fa-solid fa-bed"></i> ${room.guests} Guests</p>
        <p class="rooms__sqm"><i class="fa-regular fa-square"></i>${room.size}</p>
        </div>
        
    </div>
    <h3 class="rooms__title">
        ${room.type}
    </h3>
    <p class="rooms__price">${room.price}Kr</p>
    <p class="rooms__description">${room.description}</p>
    <a href="#" class="rooms__booking">Booking</a>
    `
    roomsContent.append(roomCard)
});





roomsSection.append(roomsContent)
main.append(roomsSection);