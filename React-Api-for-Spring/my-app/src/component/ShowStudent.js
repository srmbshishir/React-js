import React from 'react';
import {useFetch} from "../useFetch";
import {useState} from 'react';
import {Link} from "react-router-dom";

const ShowStudent = () => {
    const url = `http://localhost:8080/students`;
    const [userList, setUserList] = useState([]);
    useFetch(url, setUserList);
    console.log(userList);

    return (
        <div>
            <h1>Show User Page</h1>
            <table>
                <tbody>
                    <tr>
                        <td>Id</td>
                        <td>Name</td>
                        <td>Class</td>
                    </tr>
                    {
                        userList.map((item) =>
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.name}</td>
                                <td>{item.classNum}</td>
                                <td>
                                    <Link to={`student/edit/${item.id}`}> EDIT</Link>
                                </td>
                                <td>
                                    <Link to={`student/delete/${item.id}`}> Delete</Link>
                                </td>
                            </tr>

                        )
                    }
                </tbody>
            </table>
            <Link to={`create-student`}>Create student</Link>
        </div>
    )
};

export default ShowStudent;