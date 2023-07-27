const PRODUCTOS = [
    {
        id: 1,
        tipo: "iPhone",
        modelo: "13 Pro Max",
        precio: 1700,
        detalle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore earum, quod vero maxime ipsa voluptatum exercitationem fugiat minima illum. Ipsum rerum, sed omnis atque provident incidunt dolorem veniam commodi.",
        img: "https://itechstore.com.ar/wp-content/uploads/2022/06/iphone-13-pro-max-green-select.png",
    },

    {
        id: 2,
        tipo: "Apple Watch",
        modelo: "Serie 7 45mm",
        precio: 495,
        detalle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore earum, quod vero maxime ipsa voluptatum exercitationem fugiat minima illum. Ipsum rerum, sed omnis atque provident incidunt dolorem veniam commodi.",
        img: "https://ar.oneclickstore.com/wp-content/uploads/2022/10/AWS7_GPS_45mm_Starlight_Aluminum_Starlight_Sport_Band_PDP_Image_Position-1_COES.jpg",
    },

    {
        id: 3,
        tipo: "MacBook",
        modelo: "Imac 24 M1 8Core",
        precio: "1580",
        detalle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit labore earum, quod vero maxime ipsa voluptatum exercitationem fugiat minima illum. Ipsum rerum, sed omnis atque provident incidunt dolorem veniam commodi.",
        img: "https://www.macstoreuk.com/wp-content/uploads/2021/06/Screenshot-2021-06-17-at-14.48.38-1024x705.png",
    },
]

export const getProducts = (id) => {

    const _productos = id
    ? PRODUCTOS.filter((producto) => producto.tipo.toLowerCase() === id)
    : PRODUCTOS;

    return new Promise((res) => {
        res(_productos) 
    });
};

export const getProduct = (id) => {

    const producto = PRODUCTOS.filter((producto) => producto.id === id)[0];

    return new Promise((res) => {
        res(producto);
    });
};