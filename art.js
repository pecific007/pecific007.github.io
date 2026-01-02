const template = document.querySelector('#card_template');
const content = document.querySelector('.content');

const total_images = 20;

const title_text = {
    1: "Blackhole - 1",
    2: "Blackhole - 2",
    3: "Blackhole - 3",
    4: "Hornet from Hollow Knight",
    5: "Mechanical keyboard",
    6: "A plant",
    7: "viewport plant",
    8: "A bedroom",
    9: "Viewport bedroom",
    10: "Old Computer with cellshading",
    11: "Livimg room with cellshading",
    12: "A livingroom",
    13: "Crusader helment - 1",
    14: "cursader helment",
    15: "Heart",
    16: "Pelvic girdle",
    17: "Kitchen - 1",
    18: "Kitchen - 2",
    19: "Kitchen - 3",
    20: "Kitchen - 4"
};

const alt_text = {
    1: "A 3D render of blackhole",
    2: "A 3D render of blackhole",
    3: "A 3D render of blackhole",
    4: "A 3D render of Hornet from Hollow Knight",
    5: "A 3d render of a keyboard",
    6: "A 3D render of a plant",
    7: "A 3D viewport of a plant",
    8: "A 3D render of a bedroom",
    9: "A 3D viewport of a bedroom",
    10: "A 3D render of computer with cellshading",
    11: "A 3D render of a livimg room with cellshading",
    12: "A 3D render of a livingroom",
    13: "A 3D render of crusader helment",
    14: "A 3D render of cursader helment",
    15: "A pencil drawing of heart",
    16: "A pencil drawing of the pelvic girdle",
    17: "A 3D render of a kitchen",
    18: "A 3D render of a kitchen",
    19: "A 3D render of a kitchen",
    20: "A 3D render of a kitchen"
};

let text_alt = Object.values(alt_text);
let text_title = Object.values(title_text);

for (let i = 0; i < total_images; i++) {
    content.innerHTML += template.innerHTML;
}

let l = 1;
document.querySelectorAll('.image').forEach(img => {
    img.src = `Images/${l}.png`;
    img.alt = text_alt[l-1];
    l++;
})
l=0;
document.querySelectorAll('.title').forEach(title => {
    title.textContent = text_title[l];
    l++;
})