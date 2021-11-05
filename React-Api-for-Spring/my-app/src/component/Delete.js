import React from 'react';
import { useParams } from "react-router";
import { useHistory } from 'react-router';

const Delete = () => {

    const { id: eid } = useParams();
    const history = useHistory();

    async function DeleteProduct() {
        let result = await fetch(`http://localhost:8080/students/${eid}`, {
            method: 'DELETE',
        });

        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        const message = localStorage.getItem('user-info')
        JSON.parse(message);
        alert(message);
        history.push(`/show-student`)
    }
    function No() {
        history.push(`/show-student`)
    }

    return (
        <div>
            <h1>Are you sure you want to delete?</h1>
            <button onClick={DeleteProduct}>Yes</button>
            <button onClick={No}>No</button>
        </div>
    );
};

export default Delete;