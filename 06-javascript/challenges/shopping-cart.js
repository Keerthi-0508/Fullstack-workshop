function createShoppingCart() {
    let items = [];
    let discount = 0;

    return {
        addItem(product) {
            let found = false;

            for (let i = 0; i < items.length; i++) {
                if (items[i].id === product.id) {
                    items[i].quantity += product.quantity;
                    found = true;
                    break;
                }
            }

            if (!found) {
                items.push({ ...product });
            }
        },

        removeItem(id) {
            items = items.filter(item => item.id !== id);
        },

        updateQuantity(id, qty) {
            for (let item of items) {
                if (item.id === id) {
                    item.quantity = qty;
                    break;
                }
            }
        },

        getItems() {
            return items;
        },

        getTotal() {
            let total = 0;
            for (let item of items) {
                total += item.price * item.quantity;
            }
            return +(total - (total * discount / 100)).toFixed(2);
        },

        getItemCount() {
            let count = 0;
            for (let item of items) {
                count += item.quantity;
            }
            return count;
        },

        isEmpty() {
            return items.length === 0;
        },

        applyDiscount(code, percent) {
            if (code) {
                discount = percent;
            }
        },

        clear() {
            items = [];
            discount = 0;
        }
    };
}
const cart = createShoppingCart();
