const template = document.querySelector('#card_template');
const content = document.querySelector('.content');
const list = {
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

let text = Object.values(list);
for (let i of text) {
    content.innerHTML += template.innerHTML;
}

let l = 1;
document.querySelectorAll('.image').forEach(img => {
    img.src = `Images/${l}.png`;
    img.alt = text[l-1];
    l++;
})
l=0;
document.querySelectorAll('.title').forEach(title => {
    title.textContent = text[l];
    l++;
})