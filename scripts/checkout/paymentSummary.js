import { cart } from '../../data/cart.js';
import { getProduct } from '../../data/products.js';
import { getDeliveryOption } from '../../data/deliveryOptions.js';
import { formatCurrency } from '../utils/money.js';


export function renderPaymentSummary(){

    let productPriceCents = 0;
    let shippingPriceCents = 0;

    cart.forEach((cartItem) => {
      const product = getProduct(cartItem.productId);
      productPriceCents += product.priceCents * cartItem.quantity;

      const deliveryOption = getDeliveryOption(cartItem.deliveryOptionId);
      shippingPriceCents += deliveryOption.priceCents;
    });

    
    const totalCents = productPriceCents + shippingPriceCents;

    const paymentSummaryHTML = `
            <div class="payment-summary-title">
                Order Summary
            </div>

            <div class="payment-summary-row">
                <div>Subtotal</div>
                <div class="payment-summary-money">
                  R${formatCurrency(productPriceCents)}
                </div>
            </div>

            <div class="payment-summary-row">
                <div>Estimated Delivery & Handling</div>
                 <div class="payment-summary-money">
                  R${formatCurrency(shippingPriceCents)}
                </div>
            </div>

            

            

            <div class="payment-summary-row total-row">
                <div>Total:</div>
                 <div class="payment-summary-money">
                   R${formatCurrency(totalCents)}
                 </div>
            </div>

            <button class="place-order-button">
                Place your order
            </button>
          `;

    document.querySelector('.js-payment-summary')
    .innerHTML = paymentSummaryHTML;
}