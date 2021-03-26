import React from "react";
import {Link} from 'react-router-dom';


const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name + " " + props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td>
                <a title={"Delete"} className={"btn btn-danger"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-info ml-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                &nbsp;&nbsp;

                <a title={"Mark As Taken"} className={"btn  btn-success "}
                   onClick={() => props.onTake(props.term.id)}>
                    Mark As Taken
                </a>
            </td>
        </tr>
    )
}

export default bookTerm;
