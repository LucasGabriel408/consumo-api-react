import React, { useState } from 'react';
import axios from 'axios';

const Form = ({ onCreated }) => {
    const [titulo, setTitulo] = useState('');
    const [descricao, setDescricao] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!titulo.trim() || !descricao.trim()) return;
        setLoading(true);
        try {
            await axios.post('http://127.0.0.1:8081/notas', { titulo, descricao });
            setTitulo('');
            setDescricao('');
            if (onCreated) onCreated();
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="card">
            <h1>Nova Nota</h1>
            <form onSubmit={handleSubmit} className="form">
                <br />
                <input
                    type="text"
                    placeholder="Título"
                    name="titulo"
                    value={titulo}
                    onChange={(e) => setTitulo(e.target.value)}
                />
                <br />
                <br />
                <input
                    type="text"
                    placeholder="Descrição"
                    name="descricao"
                    value={descricao}
                    onChange={(e) => setDescricao(e.target.value)}
                />
                <br />
                <br />
                <button type="submit" className="btn" disabled={loading}>{loading ? 'Salvando...' : 'Salvar'}</button>
            </form>
        </div>
    )
}

export default Form;