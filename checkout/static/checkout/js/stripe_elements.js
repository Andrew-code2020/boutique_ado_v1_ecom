


var stripe_public_key = $('#id_stripe_public_key').text.slice(1,-1);
var client_secret = $('#id_client_secret').text.slice(1,-1);
var stripe = Stripe(stripe_public_key);
var element = stripe.element();
var card = element.create('card');
card.mount('#card-element')
