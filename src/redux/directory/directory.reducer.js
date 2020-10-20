const INITIAL_STATE = {
    sections:[
        {title:'Hats',imageUrl:'https://i.ibb.co/cvpntL1/hats.png',id:1,linkurl:'hats'},
        {title:'Sneaker',imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',id:2,linkurl:'sneaker'},
        {title:'Jackets',imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',id:3,linkurl:'jacket'},
        {title:'Men',imageUrl:'https://i.ibb.co/GCCdy8t/womens.png', size:'large',id:4,linkurl:'men'},
        {title:'Women',imageUrl:'https://i.ibb.co/R70vBrQ/men.png',size:'large',id:5,linkurl:'Women'}]
};

const directoryReducer =( state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default directoryReducer ;