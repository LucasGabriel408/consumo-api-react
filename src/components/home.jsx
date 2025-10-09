import React, { useEffect, useMemo, useCallback, useState, memo } from 'react';
import axios from 'axios';
import Form from './form';

const Home = () => {

    const [notas, setNotas] = useState([]);

    const fetchNotas = useCallback(() => {
        axios.get('http://127.0.0.1:8081/notas')
            .then(response => {
                setNotas(response.data);
            })
            .catch(error => {
                console.log(error);
            })
    }, []);

    useEffect(() => {
        fetchNotas();
    }, []);

    return (
        <div>
            <h1>Bem-vindo ao sistema de gestão de notas.</h1>
            <p>Aqui você pode gerenciar suas notas de forma eficiente e organizada.</p>

            <br />
            <br />
            <Form onCreated={fetchNotas} />

            <table className="table card">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Titulo</th>
                        <th>Descrição</th>
                    </tr>
                </thead>
                <NotasBody notas={notas} />
            </table>

        </div>
    )
}

export default Home;

const NotasBody = memo(({ notas }) => {
    return (
        <tbody>
            {notas.map(nota => (
                <tr key={nota.id}>
                    <td>{nota.id}</td>
                    <td>{nota.titulo}</td>
                    <td>{nota.descricao}</td>
                </tr>
            ))}
        </tbody>
    )
});