//State är inte application state utan state för vad denna reducer är ansvarig för
// tex state += 1 
export default function(state = null, action){
	switch(action.type){
	case 'BOOK_SELECTED':
		return action.payload;
	}

	return state;
}