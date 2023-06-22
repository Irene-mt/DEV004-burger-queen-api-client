import { ProductToOrder } from "./product-to-order";

export interface CreateOrder {
    userId: string,
    client: string,
    products: ProductToOrder[],
    status: string,
    dateEntry: any,
    currentTime: any,
}
