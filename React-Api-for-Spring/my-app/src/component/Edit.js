import React from 'react';
import {useFetch} from "../useFetch";
import {useState} from 'react';
import {useParams} from "react-router";
import SimpleInput from "./SimpleInput";

const Edit = () => {
    const [error, setError] = useState("");

    const {id: eid} = useParams();
    console.log(eid);
    const url = `http://localhost:8080/students/${eid}`;

    const [userList, setUserList] = useState({name: "", classNum: ""});
    useFetch(url, setUserList);

    async function update() {
        console.log(userList);
        // if (name === "" || classNum === "") {
        //     setError("Please fill up all the fields");
        // } else {
        //     setName(userList.name);
        //     setClassNum(userList.classNum);
        let result = await fetch(`http://localhost:8080/students/${eid}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json",
                "Accept": 'application/json',
                "Access-Control-Allow-Origin": "*"
            },
            body: JSON.stringify(userList)
        });
        result = await result.json();
        localStorage.setItem("user-info", JSON.stringify(result));
        const message = localStorage.getItem('user-info')
        JSON.parse(message);
        alert(message);
        // }
    }

    let x = 0;

    const handleOnChangeSimpleInput = (fieldName, val) => {
        if (fieldName == "classNum") {
            if (val < 0 || val > 10) {
                x = 1;//flag value to check error
                setError("please input a value from 1-10")
            }
        }
        if(x==0) {
            setUserList({...userList, [fieldName]: val})
        }
    }
    // const handleOnChangeNumberInput = (fieldName, val) => {
    //     if(val>=0 && val<=10 ){
    //         setUserList({...userList, [fieldName]: val})
    //     }
    //     else {
    //         setError("please input a value from 1-10")
    //     }
    // }

    return (
        <div>
            <h1>Edit</h1>
            <div align="center">
                <fieldset>
                    <table>
                        <tbody>
                        <tr>
                            <td>
                                <input type="text"
                                       name="id"
                                       id="id"
                                       value={userList.id}
                                       disabled

                                />
                            </td>

                            <td>

                            </td>
                        </tr>
                        <tr>
                            <td>
                                <SimpleInput
                                    fieldName="name"
                                    onChange={handleOnChangeSimpleInput}
                                    fieldValue={userList.name}
                                />

                                <SimpleInput
                                    fieldName="classNum"
                                    onChange={handleOnChangeSimpleInput}
                                    fieldValue={userList.classNum}
                                />
                            </td>
                        </tr>

                        <tr>
                            <td>
                                <button onClick={update}>Update</button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    {error}
                </fieldset>
            </div>
        </div>
    );
};

export default Edit;