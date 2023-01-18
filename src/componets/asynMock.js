const products =[
    {
    "id":1,
    "nombre":"Harry potter, la piedra filosofal",
    "category": "pelicula",
    "cantidad":1,
    "precio":1200,
    "img": "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/styles/1200/public/media/image/2016/12/harry-potter-piedra-filosofal.jpg?itok=1_pqQxcN"
    },
    {
    "id":2,
    "nombre":"Harry Potter, la carama secreta",
    "category": "libro",
    "cantidad":1,
    "precio":1200,
    "img": "https://contrapunto.cl/13100/harry-potter-y-la-camara-secreta.jpg"
    },
    {
    "id":3,
    "nombre":"Harry Ppotter, el prisionero de azkaban",
    "category": "pelicula",
    "cantidad":1,
    "precio":1400,
    "img": "https://es.web.img2.acsta.net/pictures/14/04/30/11/36/185120.jpg"
    },
    {
    "id":4,
    "nombre":"Harry Potter, el caliz de fuego",
    "category": "libro",
    "cantidad":1,
    "precio":1300,
    "img": "https://www.libreriadelgam.cl/imagenes/9788498/978849838662.JPG"
    } ,
    {
    "id":5,
    "nombre":"Harry Potter, la orden del felíx",
    "category": "pelicula",
    "cantidad":1,
    "precio":1300,
    "img": "https://es.web.img3.acsta.net/medias/nmedia/18/71/59/76/20051490.jpg"
    },
    {
    "id":6,
    "nombre":"Harry Potter, el misterio del principe",
    "category": "",
    "cantidad":1,
    "precio":1300,
    "img": "https://static.wikia.nocookie.net/esharrypotter/images/9/93/HP6_portada_espa%C3%B1ol_de_bolsillo_2020.jpg/revision/latest?cb=20200606233253"
    },
]

export const getProducts = () =>{
return new Promise((resolve) =>{
    setTimeout(() =>{
        resolve (products)
    }, 1000)
})
}


export const getProductsByCategory = (categoryId) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.filter(prod => prod.category === categoryId))
    }, 500)
})
}

export const getProductById = (id) => {
return new Promise((resolve) => {
    setTimeout(() => {
        resolve(products.find(prod => prod.id === id))
    }, 500)
})
}