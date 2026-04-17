import { Decimal } from "decimal.js";

/**
 * Calculates the total price of the cart with high precision using Decimal.js.
 * Handles edge cases like empty arrays, missing prices, or invalid tax rates.
 * @param {Array<{price: number|string}>} items - List of course objects.
 * @param {number} [taxRate=0] - Percentage (e.g., 0.05 for 5%).
 * @returns {{subtotal: string, tax: string, total: string}} Formatted currency strings.
 */
export const calculateCartTotal = (items, taxRate = 0) => {
    if (!Array.isArray(items)) {
        return { subtotal: "0.00", tax: "0.00", total: "0.00" };
    }

    let subtotal = new Decimal(0);
    const safeTaxRate = Math.max(0, taxRate); // Prevent negative tax math

    items.forEach(item => {
        const price = new Decimal(item?.price || 0);
        subtotal = subtotal.plus(price);
    });

    const tax = subtotal.times(new Decimal(safeTaxRate));
    const total = subtotal.plus(tax);

    return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        total: total.toFixed(2)
    };
};