export const cart = [
    {
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity:2,
    },{
        productId:'e43638ce-6aa0-4b85-b27f-e1d07eb678c8',
        quantity:2
    }
];

export function addToCart(productId){
    let matchingItem;

    cart.forEach((item) => {
        if(productId === item.productId){
            matchingItem = item;
        }
    });

    if(matchingItem){
        matchingItem.quantity +=1;
    }else{
        cart.push({
            productId: productId,
            quantity: 1
        });
    }
}