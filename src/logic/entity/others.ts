//todo remove later
export interface DeliveredProduct {
    id: number
    delivery_id: number
    product_id: number
    count: number
}

export interface ProductInDish {
    id: number
    dish_id: number
    product_id: number
    count: number
}

export interface DishInOrder {
    id: number
    dish_id: number
    order_id: number
    count: number
}

export interface DishInMenu {
    id: number
    dish_id: number
    menu_id: number
}