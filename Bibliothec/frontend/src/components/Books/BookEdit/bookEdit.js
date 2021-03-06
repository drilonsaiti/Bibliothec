import React from 'react';
import {useHistory} from 'react-router-dom';

const BookEdit = (props) => {

    const history = useHistory();
    const [formData, updateFormData] = React.useState({
        name: "",
        category: 0,
        author: 0,
        availableCopies: 0
    })

    const handleChange = (e) => {
        updateFormData({
            ...formData,
            [e.target.name]: e.target.value.trim()
        })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();
        const name = formData.name !== "" ? formData.name : props.books.name;
        const category = formData.category !== 0 ? formData.category : props.books.category
        const author = formData.author !== 0 ? formData.author : props.books.author.id;
        const availableCopies = formData.availableCopies !== 0 ? formData.availableCopies : props.books.availableCopies;;


        props.onEditBook(props.books.id, name, category, author,availableCopies);
        history.push("/books");
    }

    return(
        <div className="row mt-5">
            <div className="col-md-5">
                <form onSubmit={onFormSubmit}>
                    <div className="form-group">
                        <label htmlFor="name">Book name</label>
                        <input type="text"
                               className="form-control"
                               id="name"
                               name="name"
                               placeholder={props.books.name}
                               onChange={handleChange}
                        />
                    </div>

                    <div className="form-group">
                        <label>Category</label>
                        <select name="category" className="form-control" onChange={handleChange}>
                            {props.categories.map((term) => {
                                if(props.books.category !== undefined &&
                                    props.books.category === term)
                                    return <option selected={props.books.category} value={term}>{term}</option>
                                else return <option value={term}>{term}</option>
                            })}
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Authors</label>
                        <select name="authors" className="form-control" onChange={handleChange}>
                            {props.authors.map((term) => {
                                if(props.books.author !== undefined &&
                                    props.books.author.id === term.id)
                                    return <option selected={props.books.author.id} value={term.id}>{term.name + " " + term.surname}</option>
                                else return <option value={term.id}>{term.name + " " + term.surname}</option>
                            })}
                        </select>
                    </div>

                    <div className="form-group">
                        <label htmlFor="availableCopies">Available Copies</label>
                        <input type="text"
                               className="form-control"
                               id="availableCopies"
                               name="availableCopies"
                               placeholder={props.books.availableCopies}
                               onChange={handleChange}/>
                    </div>
                    <button id="submit" type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default BookEdit;