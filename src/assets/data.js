import wine1 from "./images/wine1.webp";
import wine2 from "./images/wine2.webp";
import wine3 from "./images/wine3.webp";
import wine4 from "./images/wine4.webp";
import wine5 from "./images/wine5.webp";
import wine6 from "./images/wine6.webp";
import wine7 from "./images/wine7.webp";
import wine8 from "./images/wine8.webp";
import wine9 from "./images/wine9.webp";
import wine10 from "./images/wine10.webp";

const data = [
  { 
    name: "Crimson Ranch Cabernet Sauvignon",
    id: 'SKU1386',
    image1: wine1,
    image2: wine10,
    price: 20.99,
    type: "Red",
    year: 1999,
    descrip: `California- This dry yet fruit forward Cabernet showcases lovely aromas and flavors of blackberries, 
    red fruit, oak, and spice. Smooth tannins provide structure all the way through to the wine's delicate and expressive finish.
     Crafted by The Michael Mondavi Family.`,
    country: "",
    size: 750,
    ABV: 13.5,
  },
  {
    name: "TULI Pinot Noir Sonoma County, 2021",
    id: "SKU1380",
    image1: wine2,
    image2: wine1,
    price: 80.99,
    type: "Red",
    year: 1893,
    descrip: `Wine Enthusiast-California - Sonoma County - This medium-bodied wine is nicely fruity, nicely dry, showing moderate 
    tannins and good acid balance. The wine will be a great dinner pour, easily pairing with a wide variety of dishes without overwhelming them`,
    country: "France",
    size: 750,
    ABV: 14.6,
  },
  {
    name: "Mascota Vineyards Unanime Cabernet, 2018",
    id: "SKU13845",
    image1: wine3,
    image2: wine2,
    price: 25.99,
    type: "Red",
    year: 2018,
    descrip: `Mendoza, Argentina- Unanime has an intense cherry-red color, elegant aromas of chocolate and tobacco,
    with a touch of black pepper and some fleshy notes. Well structured, with round tannins that blend nicely with its fresh, juicy acidity.`,
    country: "",
    size: 750,
    ABV: 18.9,
  },
  {
    name: "Butter Knife Chardonnay",
    id: "SKU6789",
    image1: wine4,
    image2: wine2,
    price: 15.99,
    type: "White",
    year: 2018,
    descrip: `California- A slice of Chardonnay heaven! With silky pear, baked apple and toasted spice,
     Chardonnay lovers will definitely make Butter Knife their go to wine. Pairs with poultry, white creamy sauces on pasta or seafood.`,
    country: "",
    size: 750,
    ABV: 16.4,
  },
  {
    name: "Mascota Vineyards Unanime Chardonnay, 2021",
    id: "SKU7890",
    image1: wine5,
    image2: wine4,
    price: 17.99,
    type: "White",
    year: 2021,
    descrip: `James Suckling-Mendoza, Argentina - "Dried pineapple, apricot, grilled pear, lemon pie, caramel, pastries and toasted vanilla on the nose.
     It's full-bodied with a round, opulent and creamy palate. Rich, intense and delicious with a long, buttery finish."`,
    country: "Argentinia",
    size: 750,
    ABV: 15.6,
  },
  {
    name: "Laudato Pinot Grigio",
    id: "SKU12349",
    image1: wine6,
    image2: wine5,
    price: "31.98",
    type: "White",
    year: 2008,
    descrip: `Veneto, Italy - Bottled by Santa Margherita - A dry wine with bright citrus and apple flavors. Framed by a crisp acidity that leads to a clean, smooth finish.
     Loved for its flexible taste profile, including medium body and fresh unoaked fruit flavors. Only 105 calories per serving`,
    country: "Italy",
    size: 750,
    ABV: 14.7,
  },
  {
    name: "Alma Brut Sparkling Wine",
    id: "SKU19732",
    image1: wine7,
    image2: wine6,
    price: 19.99,
    type: "Sparkling",
    year: 2019,
    descrip: `Brazil - This refreshing Sparkling wine is bursting with flavors of green apple and citrus intermingled with aromas
     of toasted bread. Light-bodied and dry, this wine would be a great addition for any occasion!`,
    country: "France",
    size: 750,
    ABV: 16,
  },
  {
    name: "Borrasca Prosecco DOCG",
    id: "SKU027834",
    image1: wine8,
    image2: wine7,
    price: 25.99,
    type: "Sparkling",
    year: 2019,
    descrip: `Beverage Dynamics-Veneto, Italy - "White flowers, Bartlett pears, and almonds layer and show the elevated quality of this Prosecco.
     The wine is rich while keeping a fruit forward soft side present giving a nice texture on the mid-pallet and finish."`,
    country: "Oregon",
    size: 750,
    ABV: 17.3,
  },
  {
    name: "Armani Prosecco DOCG",
    id: "SKU712922",
    image1: wine9,
    image2: wine8,
    price: 32.65,
    type: "Sparkling",
    year: 2020,
    descrip: `Wine Enthusiast-Veneto, Italy - "This wine offers aromas of spring blossom, white stone-fruit flesh and a hint of wet stone.
     The creamy, refreshing palate brings white peach, Golden Delicious apple and candied tangerine before a white-almond close."`,
    country: "California",
    size: 750,
    ABV: 15.9,
  },
  {
    name: " Guy Mousset Cotes Du Rhone Rose",
    id: "SKU82032",
    image1: wine10,
    image2: wine9,
    price: 16.99,
    type: "Rose",
    year: 2018,
    descrip: `Cotes du Rhone, Rhone, France- This delightful and crisp Rose offers fresh flavors of strawberry and cherry. Made primarily from Grenache,
     with small amounts of Cinsault and Carignan to finish the blend, this dry and clean rose is nicely balanced with a refreshingly long finish.`,
    country: "France",
    size: 750,
    ABV: 14.9,
  },
  
  
];



export default data;