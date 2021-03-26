import axios from '../custom-axios/axios';

const BibliothecService = {
    fetchBooks: () => {
        return axios.get("/books");
    },
    fetchCategories: () => {
        return axios.get("/categories");
    },
    fetchCountries: () => {
        return axios.get("/countries");
    },
    fetchAuthors: () => {
        return axios.get("/authors");
    },
    deleteBook: (id) => {
        return axios.delete(`/books/delete/${id}`);
    },
    addBook: (name,category, author,availableCopies) => {
        return axios.post("/books/add", {
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies": availableCopies
        });
    },

    editBook: (id,name,category, author,availableCopies) => {
        return axios.put(`/books/edit/${id}`,{
            "name" : name,
            "category" : category,
            "author" : author,
            "availableCopies": availableCopies
        })
    },

    getBook: (id) => {
        return axios.get(`/books/${id}`)
    },
    markAsTakenBook: (id) => {
        return axios.post(`/books/taken/${id}`);
    }
}

export default BibliothecService;