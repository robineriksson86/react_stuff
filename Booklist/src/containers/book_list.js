import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectBook } from '../actions/index';
import { bindActionCreators } from 'redux';

class BookList extends Component{
	renderList() {
		return this.props.books.map((book) => {
			return (
				<li 
				key={book.title} 
				onClick={() => this.props.selectBook(book)}
				className="list-group-item">
				{book.title}
				</li>
			);
		});
	}



	render(){
		return(
			<ul className="list-group col-sm-4">
			{this.renderList()}
			</ul>
		)
	}
}

function mapStateToProps(state){
	//Det som retuneras kommer bli props i Booklist
	return {
		books: state.books
	};

}

//Det som retuneras från denna funktion kommer bli props i BookList container
function mapDispatchToProps (dispatch) {
	//När selectBook körs skickas resultatet till alla reducers
	return bindActionCreators({ selectBook: selectBook}, dispatch)
}

//Promotar Booklist från component till container - behöver veta om den nya dispatch metoden, selectBook. Gör den tillgänglit som porps.
export default connect(mapStateToProps, mapDispatchToProps)(BookList);