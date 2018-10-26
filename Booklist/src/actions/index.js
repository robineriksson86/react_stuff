export function selectBook(book){
	// selectBook är en ActionCreator och måste skicka tillbaka en action, ett object med ett type property
	return {
		type: 'BOOK_SELECTED',
		payload: book
	};
}