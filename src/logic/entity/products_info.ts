export interface Product {
    id: number
    name: string
    count: number
}

export interface Dish {
    id: number
    name: string
    description: string
    price: number
    products: Array<{
        name: string,
        count: number
    }>
}