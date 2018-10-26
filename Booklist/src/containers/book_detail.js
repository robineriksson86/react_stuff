import React,{ Component } from 'react';
import { connect } from 'react-redux';

class BookDetail extends Component {
	render(){
		if(!this.props.book){
			return <div>Välj en bok ifrån listan</div>
		}
		return(
			<div>
				<h3>Vald bok:</h3>
				<div>Titel: {this.props.book.title}</div>
				<div>Antal sidor: {this.props.book.sidor}</div>
			</div>
		);
	}
}

function mapStateToProps(state) {
	return{
		book: state.activeBook
	};
}

export default connect(mapStateToProps) (BookDetail);