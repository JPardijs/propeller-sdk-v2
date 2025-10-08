"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CartService = void 0;
const BaseService_1 = require("./BaseService");
const Cart_1 = require("../type/Cart");
const CartResponse_1 = require("../type/CartResponse");
const type_1 = require("../type");
/**
 Service class for Cart-related GraphQL operations
 */
class CartService extends BaseService_1.BaseService {
    /**
     Fetches a single cart by ID
     * @param variables
     * - id: string - Cart ID to fetch
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The cart data
     */
    async getCart(variables) {
        const result = await this.executeQuery('cart', variables);
        return new Cart_1.Cart(result.data.cart);
    }
    /**
     Fetches a list of carts with search criteria
     * @param input Cart search input parameters
     * @returns Promise<CartResponse> The carts response data
     */
    async getCarts(input) {
        const variables = { input };
        const result = await this.executeQuery('carts', variables);
        return new CartResponse_1.CartResponse(result.data.carts);
    }
    /**
     Starts a new cart
     * @param variables
     * - input: CartStartInput - Cart start input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The started cart
     */
    async startCart(variables) {
        const result = await this.executeMutation('cartStart', variables);
        return new Cart_1.Cart(result.data.cartStart);
    }
    /**
     Adds an item to a cart
     * @param variables
     * - id: string - Cart ID to add item to
     * - input: CartAddItemInput - Cart add item input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The updated cart
     */
    async addItemToCart(variables) {
        const result = await this.executeMutation('cartAddItem', variables);
        return new Cart_1.Cart(result.data.cartAddItem);
    }
    /**
     Updates an item in a cart
     * @param variables
     * - id: string - Cart ID to update item in
     * - itemId: string - Item ID to update in the cart
     * - input: CartUpdateItemInput - Cart update item input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The updated cart
     */
    async updateCartItem(variables) {
        const result = await this.executeMutation('cartUpdateItem', variables);
        return new Cart_1.Cart(result.data.cartUpdateItem);
    }
    /**
     Deletes an item from a cart
     * @param variables
     * - id: string - Cart ID to delete item from
     * - input: CartDeleteItemInput - Cart delete item input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The updated cart
     */
    async deleteCartItem(variables) {
        const result = await this.executeMutation('cartDeleteItem', variables);
        return new Cart_1.Cart(result.data.cartDeleteItem);
    }
    /**
     Updates a cart
     * @param variables
     * - id: string - Cart ID to update
     * - input: CartUpdateInput - Cart update input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The updated cart
     */
    async updateCart(variables) {
        const result = await this.executeMutation('cartUpdate', variables);
        return new Cart_1.Cart(result.data.cartUpdate);
    }
    /**
     Updates a cart address
     * @param variables
     * - id: string - Cart ID to update address for
     * - input: CartUpdateAddressInput - Cart update address input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The updated cart
     */
    async updateCartAddress(variables) {
        const result = await this.executeMutation('cartUpdateAddress', variables);
        return new Cart_1.Cart(result.data.cartUpdateAddress);
    }
    /**
     Adds a bundle to a cart
     * @param variables
     * - id: string - Cart ID to add bundle to
     * - input: CartAddBundleInput - Cart add bundle input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The updated cart
     */
    async addBundleToCart(variables) {
        const result = await this.executeMutation('cartAddBundle', variables);
        return new Cart_1.Cart(result.data.cartAddBundle);
    }
    /**
     Sets the customer for a cart
     * @param input Cart set customer input data
     * @returns Promise<Cart> The updated cart
     */
    async setCartCustomer(input) {
        const variables = { input };
        const result = await this.executeMutation('cartSetCustomer', variables);
        return new Cart_1.Cart(result.data.cartSetCustomer);
    }
    /**
     Sets the contact for a cart
     * @param input Cart set contact input data
     * @returns Promise<Cart> The updated cart
     */
    async setCartContact(input) {
        const variables = { input };
        const result = await this.executeMutation('cartSetContact', variables);
        return new Cart_1.Cart(result.data.cartSetContact);
    }
    /**
     Sets the user for a cart
     * @param input Cart set user input data
     * @returns Promise<Cart> The updated cart
     */
    async setCartUser(input) {
        const variables = { input };
        const result = await this.executeMutation('cartSetUser', variables);
        return new Cart_1.Cart(result.data.cartSetUser);
    }
    /**
     Processes a cart (checkout)
     * @param variables
     * - id: string - Cart ID to process
     * - input: CartProcessInput - Cart process input data
     * @returns Promise<CartProcessResponse> The processed cart
     */
    async processCart(variables) {
        const result = await this.executeMutation('cartProcess', variables);
        return new type_1.CartProcessResponse(result.data.cartProcess);
    }
    /**
     Deletes a cart
     * @param variables
     * - id: string - Cart ID to delete
     * @returns Promise<boolean> Success status
     */
    async deleteCart(variables) {
        const result = await this.executeMutation('cartDelete', variables);
        return result.data.cartDelete;
    }
    /**
     Adds an action code to a cart
     * @param variables
     * - id: string - Cart ID to add action code to
     * - input: CartActionCodeInput - Cart action code input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The updated cart
     */
    async addActionCodeToCart(variables) {
        const result = await this.executeMutation('cartAddActionCode', variables);
        return new Cart_1.Cart(result.data.cartAddActionCode);
    }
    /**
     Removes an action code from a cart
     * @param variables
     * - id: string - Cart ID to remove action code from
     * - input: CartActionCodeInput - Cart action code input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The updated cart
     */
    async removeActionCodeFromCart(variables) {
        const result = await this.executeMutation('cartRemoveActionCode', variables);
        return new Cart_1.Cart(result.data.cartRemoveActionCode);
    }
    /**
     Bulk updates cart items
     * @param variables
     * - input: CartItemBulkInput - Cart item bulk input data
     * @returns Promise<Cart> The updated cart
     */
    async bulkUpdateCartItems(variables) {
        const result = await this.executeMutation('cartItemBulk', variables);
        return new Cart_1.Cart(result.data.cartItemBulk);
    }
    /**
     Requests purchase authorization for a cart
     * @param variables
     * - input: CartPurchaseAuthorizationRequestInput - Cart purchase authorization request input data
     * @returns Promise<Cart> The updated cart
     */
    async requestPurchaseAuthorization(variables) {
        const result = await this.executeMutation('cartRequestPurchaseAuthorization', variables);
        return new Cart_1.Cart(result.data.cartRequestPurchaseAuthorization);
    }
    /**
     Accepts a purchase authorization request for a cart
     * @param variables
     * - id: string - Cart ID to accept purchase authorization for
     * - input: CartAcceptPurchaseAuthorizationRequestInput - Cart accept purchase authorization input data
     * - language: string - Language for localized content
     * - imageSearchFilters: MediaImageProductSearchInput - Image search filters
     * - imageVariantFilters: TransformationsInput - Image transformation filters
     * @returns Promise<Cart> The updated cart
     */
    async acceptPurchaseAuthorizationRequest(variables) {
        const result = await this.executeMutation('cartAcceptPurchaseAuthorizationRequest', variables);
        return new Cart_1.Cart(result.data.cartAcceptPurchaseAuthorizationRequest);
    }
    /**
     Initializes the service by preloading common fragments
     */
    async initializeService() {
    }
}
exports.CartService = CartService;
//# sourceMappingURL=CartService.js.map