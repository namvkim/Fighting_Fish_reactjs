import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Contacted(props) {
    const [results, setResults] = useState([]);

    const get = () => {
        axios({
            method: 'get',
            url: 'http://localhost:8000/api/contact',
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    const del = (id) => {
        axios({
            method: 'delete',
            url: 'http://localhost:8000/api/contact/' + id,
        })
            .then((res) => {
                setResults(res.data);
            })
            .catch((err) => {
                alert(err);
            });
    }

    useEffect(() => {
        get();
    }, [])

    let i = 1;
    return (
        <table className="admin_table">
            <thead><tr className="admin_table_header">
                <th>No.</th>
                <th>Name</th>
                <th>Email</th>
                <th>Title</th>
                <th>Message</th>
                <th>Created at</th>
                <th>Fix</th>
            </tr></thead>
            <tbody>
                {results.map((result, index) => {
                    return <tr key={index}>
                        <td>{i++}</td>
                        <td>{result.name}</td>
                        <td>{result.email}</td>
                        <td>{result.title}</td>
                        <td>{result.message}</td>
                        <td>{result.created_at}</td>
                        <td><button onClick={() => del(result.id)}>delete</button></td>
                    </tr>
                })}
            </tbody>
        </table>
    );
}

export default Contacted;