export function init() {
  const list_all = {
    "Blackhole_-_1": "A 3D render of blackhole",
    "Blackhole_-_2": "A 3D render of blackhole",
    "Blackhole_-_3": "A 3D render of blackhole",
    Hornet_from_Hollow_Knight: "A 3D render of Hornet from Hollow Knight",
    Mechanical_keyboard: "A 3d render of a mechanical keyboard",
    A_plant: "A 3D render of a plant",
    Viewport_plant: "A 3D viewport of a plant",
    A_bedroom: "A 3D render of a bedroom",
    Viewport_bedroom: "A 3D viewport of a bedroom",
    Old_Computer_with_cellshading: "A 3D render of computer with cellshading",
    Livimg_room_with_cellshading: "A 3D render of a livimg room with cellshading",
    A_livingroom: "A 3D render of a livingroom",
    "Crusader_helmet_-_1": "A 3D render of crusader helment",
    "Crusader_helmet_-_2": "A 3D render of cursader helment",
    Heart: "A pencil drawing of heart",
    Pelvic_girdle: "A pencil drawing of the pelvic girdle",
    "Kitchen_-_1": "A 3D render of a kitchen",
    "Kitchen_-_2": "A 3D render of a kitchen",
    "Kitchen_-_3": "A 3D render of a kitchen",
    "Kitchen_-_4": "A 3D render of a kitchen",
  };

  const template = document.querySelector("#card_template");
  const content = document.querySelector(".content");

  for (let path in list_all) {
    let el = document.createElement("div");
    el.classList.add("card_all");
    el.innerHTML = template.innerHTML;
    content.appendChild(el);
    let img = el.querySelector("img");
    img.src = `/media/art/${path}.webp`;
    img.alt = list_all[path];
    img.loading = "lazy";
    el.querySelector(".title").textContent = path.replaceAll("_", " ");
  }
}
