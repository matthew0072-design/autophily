import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'


export interface Product {
    name: string,
    id: number,
    price: string,
    productImage: string,
    quantity: number
}


interface State  {

    cart: Product[]
    
}

interface Actions {

    addToCart: (Item: Product) => void
    removeAllItems: () => void
    updateQuantity: (productId: number, action: 'increase' | 'decrease' ) => void
    
}



export const useCartStore = create (persist<State & Actions> ((set, get) => ({

        cart: [],
    

        updateQuantity: (productId: number, action: 'increase' | 'decrease') => {
            const cart = get().cart;
            const updatedCart = cart.map((product) => {
              if (product.id === productId) {
                let newQuantity = product.quantity!;
                if (action === 'increase') {
                  newQuantity += 1;
                } else if (action === 'decrease' && newQuantity > 1) {
                  newQuantity -= 1;
                }
                return { ...product, quantity: newQuantity };
              }
              return product;
            });
            set({ cart: updatedCart });
          },
          
    
   
    // updateQuantity: (productId: number, action: 'increase' | 'decrease') => {
    //     const cart = get().cart;
    //     const findProduct = cart.find(p => p.id === productId);
    //     if (findProduct) {
    //         if (action === 'decrease') {
    //             findProduct.quantity = findProduct.quantity! > 1 ? findProduct.quantity! - 1 : findProduct.quantity!;
    //         } else {
    //             findProduct.quantity! += 1;
    //         }
    //     }
    //     set({ cart });
    // },
    
    



    removeAllItems: () => set({cart: [] } ),

    addToCart: (product: Product) => {
        const cart = get().cart;
        const existingProductIndex = cart.findIndex((p) => p.id === product.id);

        if(existingProductIndex !==  -1 ) {
            const updatedCart = [...cart]
            updatedCart[existingProductIndex] = {
                ...updatedCart[existingProductIndex],
                quantity: updatedCart[existingProductIndex].quantity + 1,
              };

              set({ cart: updatedCart });
        } else {
            set({ cart: [...cart, { ...product, quantity: 1 }] });
        }


    },
   
    
    
}),

{
    name: "audiophile-Storage",
    storage: createJSONStorage(() => sessionStorage)
}

)
)