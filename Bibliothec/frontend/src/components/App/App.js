import './App.css';
import React, {Component} from "react";
import Categories from "../Categories/categories";
import Countries from "../Countries/countries"
import Authors from '../Authors/authors';
import Books from "../Books/BookList/books";
import BookAdd from '../Books/BookAdd/bookAdd'
import BookEdit from "../Books/BookEdit/bookEdit";
import Header from '../Header/header';
import Footer from '../Footer/footer';

import BibliothecService from "../../repository/bibliothecRepository";
import {BrowserRouter as Router, Redirect, Route} from "react-router-dom";


class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
        categories: [],
        countries: [],
        books: [],
        authors:[],
        selectedBook: {}
    }
  }

  render() {
    return (
        <Router>
            <Header/>
          <main>
            <div className={"container"}>

              <Route path={"/categories"} exact render={
                () => <Categories categories={this.state.categories}/>}/>

                <Route path={"/countries"} exact render={
                    () => <Countries countries={this.state.countries}/>}/>

                <Route path={"/authors"} exact render={
                    () => <Authors authors={this.state.authors}/>}/>

                <Route path={"/books"} exact render={() =>
                    <Books books={this.state.books}
                              onDelete={this.deleteBook}
                                onEdit={this.getBook}
                                onTake={this.takeBook}/>}/>

                <Route path={"/books/edit/:id"} exact render={() =>
                    <BookEdit categories={this.state.categories}
                                 authors={this.state.authors}
                                 onEditBook={this.editBook}
                                 books={this.state.selectedBook}/>}/>

                <Route path={"/books/add"} exact render={() =>
                    <BookAdd categories={this.state.categories}
                                authors={this.state.authors}
                                onAddBook={this.addBook}/>}/>
                <Redirect to={"/books"}/>
            </div>
          </main>
            <Footer/>
        </Router>
    );
  }
  loadCategories = () => {
    BibliothecService.fetchCategories()
        .then((data) => {
          this.setState({
            categories: data.data
          })
        });
  }
    loadBooks = () => {
        BibliothecService.fetchBooks()
            .then((data) => {
                this.setState({
                    books: data.data
                })
            });
    }
    loadCountries = () => {
        BibliothecService.fetchCountries()
            .then((data) => {
                this.setState({
                    countries: data.data
                })
            });
    }

    loadAuthors = () => {
        BibliothecService.fetchAuthors()
            .then((data) => {
                this.setState({
                    authors: data.data
                })
            });
    }

    deleteBook = (id) => {
        BibliothecService.deleteBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    takeBook = (id) => {
        BibliothecService.markAsTakenBook(id)
            .then(() => {
                this.loadBooks();
            });
    }

    addBook = (name,category, author,availableCopies) => {
        BibliothecService.addBook(name,category, author,availableCopies)
            .then(() => {
                this.loadBooks();
            });
    }

    getBook = (id) => {
      BibliothecService.getBook(id)
          .then((data) => {
              this.setState({
                  selectedBook: data.data
              })
          })
    }

    editBook = (id,name,category, author,availableCopies) => {
      BibliothecService.editBook(id,name,category, author,availableCopies)
          .then(() => {
              this.loadBooks();
          });
    }

    componentDidMount() {
        this.loadBooks();
        this.loadCategories();
        this.loadCountries();
        this.loadAuthors();
  }

}

export default App;
