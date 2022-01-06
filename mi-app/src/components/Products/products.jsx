export const products = [
    {
        id: '1',
        name: 'Pipas',
        price: 300,
        stock: 5,
        img: 'https://i.pinimg.com/564x/b5/74/72/b57472e19afc76d234d65938827b4793.jpg',
    },
    {
        id: '2',
        name: 'Platitos',
        price: 300,
        stock: 5,
        img: 'https://i.pinimg.com/originals/cf/2a/bf/cf2abf397fcf24b5ebeb3be19c844c71.jpg',
    },
    {
        id: '3',
        name: 'Velas',
        price: 300,
        stock: 5,
        img: 'https://i.pinimg.com/originals/5e/ba/9c/5eba9cbb4e96eb8f679b3187ab6f52aa.jpg',
    },
    {
        id: '4',
        name: 'Combo platito + cenicero + pipa',
        price: 300,
        stock: 5,
        img: 'https://i.pinimg.com/564x/ad/fc/ea/adfcea149a6df277cd018ac757cbb7ef.jpg',
    },
];

export const traerProductos = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(products);
    }, 2000);
});