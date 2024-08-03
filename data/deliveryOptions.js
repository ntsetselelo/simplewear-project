export const deliveryOptions = [{
    id:'1',
    deliveryDays: 7,
    priceCents:15000
}];

export function getDeliveryOption(deliveryOptionId){
    let deliveryOption;

    deliveryOptions.forEach((option) => {
        if(option.id === deliveryOptionId){
            deliveryOption = option;
        } 
    });
    return deliveryOption;
}