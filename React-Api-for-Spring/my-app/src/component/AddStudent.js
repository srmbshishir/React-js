import React from 'react';
import {useState} from "react";
// import {Button} from "bootstrap";
function AddUser() {
    const [name, setName] = useState("");
    const [classNum, setClassNum] = useState("");
    const [error,setError] = useState("");

    async function add() {
        if (name === "" || classNum === "") {
            setError("Please fill up all the fields");
        }
        else{
            console.log(name,classNum);
            let result = await fetch("http://localhost:8080/students", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                    "Accept": 'application/json',
                    "Access-Control-Allow-Origin" : "*"
                },
                body: JSON.stringify({name, classNum})
            });
            result = await result.json();
            localStorage.setItem("user-info", JSON.stringify(result));
            const message = localStorage.getItem('user-info')
            JSON.parse(message);
            alert(message);
        }
    }
    return (
        <div>
            <h1 style={{ textAlign: 'center' }}>Add Student</h1>
            <br></br>
            <div align="center">
                <fieldset>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <input type="text"
                                       name="name"
                                       id="name"
                                       placeholder="Name"
                                       className="form-control"
                                       onChange={(e) => setName(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                <input type="text"
                                       name="classNum"
                                       id="classNum"
                                       placeholder="Class"
                                       className="form-control"
                                       onChange={(e) => setClassNum(e.target.value)} />
                            </td>
                        </tr>
                        <tr>
                            <td><button variant="outline-success" onClick={add}>Add User</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {error}
                </fieldset>
            </div>
        </div >
    );
};

export default AddUser;