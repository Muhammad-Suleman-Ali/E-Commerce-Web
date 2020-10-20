const INITIAL_STATE = {
    sections:[
        {
        title:'Hats',
        imageUrl:'https://i.ibb.co/cvpntL1/hats.png',
        id:1,
        linkurl:'shop/hats'
        },
        {
        title:'Sneaker',
        imageUrl:'https://i.ibb.co/px2tCc3/jackets.png',
        id:2,
        linkurl:'shop/sneakers'
        },
        {
        title:'Jackets',
        imageUrl:'https://i.ibb.co/0jqHpnp/sneakers.png',
        id:3,
        linkurl:'shop/jackets'
        },
        {
        title:'Men',
        imageUrl:'https://i.ibb.co/GCCdy8t/womens.png',
        size:'large',
        id:4,
        linkurl:'shop/mens'
        },
        {
        title:'Women',
        imageUrl:'https://i.ibb.co/R70vBrQ/men.png',
        size:'large',
        id:5,
        linkurl:'shop/womens'
        }]
};

const directoryReducer =( state=INITIAL_STATE,action)=>{
    switch(action.type){
        default:
            return state;
    }
}
export default directoryReducer ;