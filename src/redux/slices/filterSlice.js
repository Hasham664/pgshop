// slices/filterSlice.js
import { createSlice } from "@reduxjs/toolkit";
import deal1 from "../../assets/shirt2.png";
import deal2 from "../../assets/cap2.png";
import deal3 from "../../assets/deal1.png";
import deal4 from "../../assets/deal2.png";

import {
  CursorIcon,
  TruckIcon,
  HeartIcon,
  CartIcon,
  EyeIcon,
} from "../../components/Home/Icons";
const products = [
  {
    id: 1,
    category: "headwear",
    img: deal1,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops1",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 2,
    category: "promotion",
    img: deal2,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops2",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 3,
    category: "clothing",
    img: deal3,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops3",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 4,
    category: "promotion2",
    img: deal4,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops4",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 5,
    category: "headwear2",
    img: deal1,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops5",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 6,
    category: "clothing2",
    img: deal2,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops6",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 7,
    category: "promotion3",
    img: deal3,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops7",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 8,
    category: "promotion3",
    img: deal4,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $200.78 to $500",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },

  {
    id: 9,
    img: deal1,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $3.78 to $885.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 10,
    img: deal2,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $21.78 to $25.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 12,
    img: deal3,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $13.78 to $51.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 13,
    img: deal4,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 14,
    img: deal1,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $1.78 to $5.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 15,
    img: deal2,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $1.78 to $1005.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 17,
    img: deal3,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $3.78 to $35.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 18,
    img: deal4,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $7.78 to $15.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
  {
    id: 19,
    img: deal4,
    off: "32% OFF",
    hot: "HOT",
    name: "Custom Shirts & Tops",
    code: "Code: CB009",
    price: "From $9.78 to $115.25",
    stock: "50 Minimum",
    icon: CursorIcon,
    free: "Free Delivery",
    truck: TruckIcon,
    delivery: "Rush Order",
    heart: HeartIcon,
    cart: CartIcon,
    button: "Add to cart",
    eye: EyeIcon,
  },
];

const initialState = {
  products: products, // All products
  filteredProducts: products, // Products after applying filters
  selectedCategory: "all",
  searchText: "",
  minPrice: 0,
  maxPrice: 1000,
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload; // Initially, all products are shown
    },
    setSearchText: (state, action) => {
      console.log(state.searchText,"state");
      
      state.searchText = action.payload;
    },
    setSelectedCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
    setMinPrice: (state, action) => {
      state.minPrice = action.payload;
    },
    setMaxPrice: (state, action) => {
      state.maxPrice = action.payload;
    },
    applyFilters: (state) => {
      const { products, selectedCategory, searchText, minPrice, maxPrice } =
        state;

      const isCategoryMatch = (product) =>
        
        selectedCategory === "all" || product.category === selectedCategory

      const isSearchMatch = (product) =>
        product.name.toLowerCase().includes(searchText.toLowerCase());

      const isPriceMatch = (product) => {
        const [minProductPrice, maxProductPrice] = product.price
          .match(/\d+(\.\d+)?/g)
          .map(Number);

        return maxProductPrice >= minPrice && minProductPrice <= maxPrice;
      };

      state.filteredProducts = products.filter(
        (product) =>
          isCategoryMatch(product) &&
          isSearchMatch(product) &&
          isPriceMatch(product)
      );
    },
  },
});

export const {
  setProducts,
  setSearchText,
  setSelectedCategory,
  setMinPrice,
  setMaxPrice,
  applyFilters,
  isSearchMatch
} = filterSlice.actions;

export default filterSlice.reducer;
