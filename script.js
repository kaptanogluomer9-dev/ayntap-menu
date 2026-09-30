const menuItems = [
    {
        id: 1,
        title: "Ayntap Özel Kebap",
        category: "kebap",
        price: "320 TL",
        desc: "Özel baharatlı zırh kıyması, közlenmiş biber ve domates ile.",
        img: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500"
    },
    {
        id: 2,
        title: "Ali Nazik Kebap",
        category: "kebap",
        price: "350 TL",
        desc: "Süzme yoğurtlu köz patlıcan yatağında özel kuzu eti.",
        img: "https://images.unsplash.com/photo-1544025162-d76694265947?w=500"
    },
    {
        id: 3,
        title: "Gaziantep Baklavası",
        category: "tatli",
        price: "180 TL",
        desc: "Boz fıstıklı, saf tereyağlı 4 kat çıtır baklava.",
        img: "https://images.unsplash.com/photo-1519676867240-f03562e64548?w=500"
    },
    {
        id: 4,
        title: "Künefe",
        category: "tatli",
        price: "160 TL",
        desc: "Hakiki Hatay peynirli, sıcak şerbetli künefe.",
        img: "https://images.unsplash.com/photo-1579372786545-d24232daf58c?w=500"
    },
    {
        id: 5,
        title: "Yayık Ayranı",
        category: "icecek",
        price: "40 TL",
        desc: "Bol köpüklü, ev yapımı taze ayran.",
        img: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=500"
    }
];

function displayMenu(items) {
    const container = document.getElementById("menu-list");
    container.innerHTML = items.map(item => `
        <div class="menu-card">
            <img src="${item.img}" alt="${item.title}">
            <div class="menu-info">
                <div>
                    <h3>${item.title}</h3>
                    <p>${item.desc}</p>
                </div>
                <div class="price">${item.price}</div>
            </div>
        </div>
    `).join('');
}

function filterMenu(category) {
    const buttons = document.querySelectorAll('.cat-btn');
    buttons.forEach(btn => btn.classList.remove('active'));
    event.target.classList.add('active');

    if (category === 'all') {
        displayMenu(menuItems);
    } else {
        const filtered = menuItems.filter(item => item.category === category);
        displayMenu(filtered);
    }
}

window.onload = () => {
    displayMenu(menuItems);
};
