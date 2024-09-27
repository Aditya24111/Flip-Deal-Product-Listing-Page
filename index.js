let express = require("express");
let app = express();

let cors = require('cors');
app.use(cors());

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];

app.get('/products/sort/popularity', function (req, res) {
  let sortedProducts = products.sort(function (a, b) {
    return b.rating - a.rating;
  });
  res.json({ products: sortedProducts });
});


app.get('/products/sort/price-high-to-low', function (req, res) {
  let sortedProducts = products.sort(function (a, b) {
    return b.price - a.price;
  });
  res.json({ products: sortedProducts });
});


app.get('/products/sort/price-low-to-high', function (req, res) {
  let sortedProducts = products.sort(function (a, b) {
    return a.price - b.price;
  });
  res.json({ products: sortedProducts });
});

function filterByRam(products, ram) {
  return products.filter(product => product.ram === parseInt(ram, 10));
}

app.get('/products/filter/ram', (req, res) => {
  const ram = req.query.ram; 

  filteredProducts = filterByRam(products, ram);
  res.json({ products: filteredProducts });
});

function filterByRom(products, rom) {
  return products.filter(product => product.rom === parseInt(rom, 10));
}

app.get('/products/filter/rom', (req, res) => {
  const rom = req.query.rom; 

  filteredProducts = filterByRom(products, rom);
  res.json({ products: filteredProducts });
});

function filterByBrand(products, brand) {
  return products.filter(product => product.brand.toLowerCase() === brand.toLowerCase());
}


app.get('/products/filter/brand', (req, res) => {
  const brand = req.query.brand;

  const filteredProducts = filterByBrand(products, brand);
  res.json({ products: filteredProducts });
});

function filterByOs(products, os) {
  return products.filter(product => product.os.toLowerCase() === os.toLowerCase());
}


app.get('/products/filter/os', (req, res) => {
  const os = req.query.os;

  const filteredProducts = filterByOs(products, os);
  res.json({ products: filteredProducts });
});

function filterByPrice(products, price) {
  return products.filter(product => product.price <= parseInt(price, 10));
}

app.get('/products/filter/price', (req, res) => {
  const price = req.query.price; 

  const filteredProducts = filterByPrice(products, price);
  res.json({ products: filteredProducts });
});



let PORT = 3000;
app.listen(PORT, () => {
  console.log("Server is running on https://localhost:" + PORT);
});