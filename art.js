const template = document.querySelector('#card_template');
const content = document.querySelector('.content');

const list_all = {
    "":"",
    "Blackhole - 1" : "A 3D render of blackhole",
    "Blackhole - 2" : "A 3D render of blackhole",
    "Blackhole - 3" : "A 3D render of blackhole",
    "Hornet from Hollow Knight" : "A 3D render of Hornet from Hollow Knight",
    "Mechanical keyboard" : "A 3d render of a mechanical keyboard",
    "A plant" : "A 3D render of a plant",
    "viewport plant" : "A 3D viewport of a plant",
    "A bedroom" : "A 3D render of a bedroom",
    "Viewport bedroom" : "A 3D viewport of a bedroom",
    "Old Computer with cellshading" : "A 3D render of computer with cellshading",
    "Livimg room with cellshading" : "A 3D render of a livimg room with cellshading",
    "A livingroom" : "A 3D render of a livingroom",
    "Crusader helment - 1" : "A 3D render of crusader helment",
    "cursader helment - 2" : "A 3D render of cursader helment",
    "Heart" : "A pencil drawing of heart",
    "Pelvic girdle" : "A pencil drawing of the pelvic girdle",
    "Kitchen - 1" : "A 3D render of a kitchen",
    "Kitchen - 2" : "A 3D render of a kitchen",
    "Kitchen - 3" : "A 3D render of a kitchen",
    "Kitchen - 4" : "A 3D render of a kitchen",
    " ":" "
}

const title_text = Object.keys(list_all); 
const alt_text = Object.values(list_all); 

const total_images = title_text.length;


for (let i = 0; i < total_images; i++) {
    content.innerHTML += template.innerHTML;
}

let l = 0;
document.querySelectorAll('.image').forEach(img => {
    img.src = `Images/${l}.png`;
    img.alt = alt_text[l];
    l++;
});
l=0;
document.querySelectorAll('.title').forEach(title => {
    title.textContent = title_text[l];
    l++;
});
l=0;
const all_cards = document.querySelectorAll('.card');
all_cards[0].style.opacity = "0";
all_cards[21].style.opacity = "0";
if (window.innerWidth <= 700) {
    all_cards[0].remove() 
}