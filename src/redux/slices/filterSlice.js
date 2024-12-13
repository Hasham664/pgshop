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
    count: 10,
    brand: "Apple",
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
    brand: "Microsoft",
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
    brand: "Symphony",
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
    brand: "Dell",
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
    brand: "Sony",
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
    brand: "LG",
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
    brand: "One Plus",
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
    brand: "Google",
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
    brand: "Samsung",
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
    brand: "HP",
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
    id: 11,
    brand: "Xiaomi",
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
    id: 12,
    brand: "Panasonic",
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
    id: 13,
    brand: "Intel",
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
    id: 14,
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
    id: 15,
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
    id: 16,
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
    id: 17,
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
  products: products,
  filteredProducts: products,
  selectedCategory: "all",
  selectedBrands: [],
  searchText: "",
  minPrice: 0,
  maxPrice: 1000,
  activeFilters: {
    category: null,
    brands: [],
    price: [],
  },
};

const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProducts = action.payload;
    },
    setSearchText: (state, action) => {
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
    setSelectedBrands: (state, action) => {
      state.selectedBrands = action.payload;
    },
    applyFilters: (state) => {
      const {
        products,
        selectedCategory,
        selectedBrands,
        searchText,
        minPrice,
        maxPrice,
      } = state;

      const isCategoryMatch = (product) =>
        selectedCategory === "all" || product.category === selectedCategory;

      const isBrandMatch = (product) =>
        selectedBrands.length === 0 || selectedBrands.includes(product.brand);

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
          isBrandMatch(product) &&
          isSearchMatch(product) &&
          isPriceMatch(product)
      );
      state.activeFilters = {
        category: selectedCategory !== "all" ? selectedCategory : null,
        brands: selectedBrands.length > 0 ? selectedBrands : null,
        price: minPrice > 0 || maxPrice < 1000 ? [minPrice, maxPrice] : null,
      };
    },
  },
});

export const {
  setProducts,
  setSearchText,
  setSelectedCategory,
  setMinPrice,
  setMaxPrice,
  setSelectedBrands,
  applyFilters,
} = filterSlice.actions;
export const selectActiveFilters = (state) => state.filters.activeFilters;
export const selectFilteredCount = (state) =>
  state.filters.filteredProducts.length;

export default filterSlice.reducer;
