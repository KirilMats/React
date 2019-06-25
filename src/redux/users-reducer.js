const [SUBMIT_FOLLOWING, SUBMIT_UNFOLLOWING] = ['SUBMIT-FOLLOWING', 'SUBMIT-UNFOLLOWING'];


// usersData
const initialState =  { 
    userMainInfo: [
        { id: 1, isFollowed: true, name: 'Jon', status: 'wdwef1f2f', location: {city: 'Dragstone', country: 'Westeros'}, img_src: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/jon-snow-rhaegar-targaryen-1554321615.jpg?crop=0.482xw:0.962xh;0,0&resize=480:*' },
        { id: 2, isFollowed: true, name: 'Sansa', status: '1212!f1 fewwef ', location: {city: 'Winterfell', country: 'Westeros'}, img_src: 'https://s3.r29static.com//bin/entry/4ca/720x864,85/2160612/youre-probably-going-to-need-2160612.webp' },
        { id: 3, isFollowed: false, name: 'Cersei', status: '21e 12 21e 21', city: 'Kyiv', location: {city: 'Casterly Rock', country: 'Westeros'}, img_src: 'https://pixel.nymag.com/imgs/fashion/daily/2019/04/29/29-cersei.w700.h700.jpg' },
        { id: 3, isFollowed: true, name: 'Daenerys', status: '21e 12 21e 21', city: 'Kyiv', location: {city: 'Dragstone', country: 'Westeros'}, img_src: 'https://www.telegraph.co.uk/content/dam/fashion/2017/06/19/TELEMMGLPICT000131421802_trans_NvBQzQNjv4BqkUE_BTgBOQu3VWKvpDGX9fr7sARQy7EgBjwPUzvqL_M.jpeg?imwidth=450' },
        { id: 3, isFollowed: false, name: 'Jaime', status: '211e 12 21e 21', city: 'Kyiv', location: {city: 'Casterly Rock', country: 'Westeros'}, img_src: 'https://www.playerprofiler.com/wp-content/uploads/2017/07/Jaime-Lannister-1.png'} 
    ]
}
//

const usersReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUBMIT_FOLLOWING:
            return {
                ...state,
                userMainInfo: [...state.userMainInfo].map( (u) => {
                    if(u.id === action.id) {
                        return {...u, isFollowed: true}
                    }
                    return u;
                })
            }
        case SUBMIT_UNFOLLOWING: 
                return {
                    ...state,
                    userMainInfo: [...state.userMainInfo].map( (u) => {
                        if(u.id === action.id) {
                            return {...u, isFollowed: false}
                        }
                        return u;
                    })
                }
        default: return state;
    }
}

//ACTIONS 
export const submitFollowingAC = (isFollowed, index) => ({type: SUBMIT_FOLLOWING, isFollowed: isFollowed, id: index});
export const submitUnfollowingAC = (isFollowed, index) => ({type: SUBMIT_UNFOLLOWING, isFollowed: isFollowed, id: index});

export default usersReducer;