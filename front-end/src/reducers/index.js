import { ADD_ADDRESS, CHANGED_ITEM_IN_CART,CHANGE_ORDER_CART, EMPTY_CART, INIT_CART, INIT_PRODUCTS, INIT_USER, PLACE_ORDER, REMOVE_ITEM, SET_SHIP_ADDRESS } from "../actions";

const initialStateProducts={
    products :[]
  };

  const initialStateCart={
    items:[]
  }
  const productReducer=(state=initialStateProducts,action)=>{
    switch(action.type){
      case INIT_PRODUCTS:
        return{...state,products:action.payload}
      default:
        return state;
    }
    
  }
  const initialStateOrder={
    item :[],
    shipping_charges : 50,
    discount_in_percent : 10,
    shipping_address: '',
    total_items:0,
    total_cost:0
  }

  const initialStateUser={
    name :'John',
    email : 'John@example.com',
    addresses :[],
    orders:[]
  }

  const cartReducer=(state=initialStateCart,action)=>{
    switch(action.type){
      case INIT_CART:
        return {
          ...state,
          items:action.payload.items,
          userId: action.payload.userId
        };
      case CHANGED_ITEM_IN_CART:
        return {
          ...state,
          items:action.payload.items,
        };
      
      default:
        return state;
    }
  }

  const orderReducer=(state=initialStateOrder,action)=>{
    switch(action.type){
      case CHANGE_ORDER_CART:
        const items=action.payload;
        const total_items=items?.reduce((total,item)=>total+(item.quantity*1),0)
        const total_cost=items?.reduce((total,item)=>total+item.price*item.quantity,0)
        return {...state,items:action.payload,total_items,total_cost}
      case SET_SHIP_ADDRESS:
        return {...state,shipping_address:action.payload}
      default:
        return state;
    }
  }

  const userReducer=(state=initialStateUser,action)=>{
    switch(action.type){
      case INIT_USER:
        return action.payload
      case ADD_ADDRESS:
        return {...state,addresses:[...state.addresses,action.payload]}
      case PLACE_ORDER:
        return {...state,orders:[...state.orders,action.payload]}
      default:
        return state;
    }
  }
  export {productReducer,cartReducer,orderReducer,userReducer};