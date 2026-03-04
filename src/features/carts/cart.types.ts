/**
 * @example
 * {
 *  "id": 1,
 *  "products": [Product],
 *  "total": 4794.8,
 *  "discountedTotal": 4288.95,
 *  "userId": 142,
 *  "totalProducts": 5,
 *  "totalQuantity": 20
 * }
 */
export interface Cart {
  id: string;
  products: Product[];
  total: number;
  discountedTotal: number;
  userId: string;
  totalProducts: number;
  totalQuantity: number;
}

/**
 * @example
 * {
 * "id": 144,
 * "title": "Cricket Helmet",
 * "price": 44.99,
 * "quantity": 4,
 * "total": 179.96,
 * "discountPercentage": 11.47,
 * "discountedTotal": 159.32,
 * "thumbnail": "https://cdn.dummyjson.com/products/images/sports-accessories/Cricket%20Helmet/thumbnail.png"
 */
export interface Product {
  id: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

/**
 * @description Response schema for carts list
 * @example
 * {
 *  "carts": [Cart],
 *  "total": 100,
 *  "skip": 0,
 *  "limit": 10
 * }
 */
export interface CartsResponse {
  carts: Cart[];
  total: number;
  skip: number;
  limit: number;
}
