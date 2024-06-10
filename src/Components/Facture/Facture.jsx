import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../../Styles/Facture.css';
import { MdDelete, MdEdit } from "react-icons/md";

function Facture() {
    const [data, setData] = useState([]);
    const [formData, setFormData] = useState({
        date: '',
        prix: '',
        numeroTransaction: '',
        typeFacture: ''
    });
    const [editIndex, setEditIndex] = useState(null);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (editIndex !== null) {
            const newData = [...data];
            newData[editIndex] = formData;
            setData(newData);
            setEditIndex(null);
        } else {
            setData([...data, formData]);
        }
        setFormData({
            date: '',
            prix: '',
            numeroTransaction: '',
            typeFacture: ''
        });
    };

    const handleDelete = (index) => {
        const newData = [...data];
        newData.splice(index, 1);
        setData(newData);
    };

    const handleModify = (index) => {
        setFormData(data[index]);
        setEditIndex(index);
    };

    return (
        <div className=' container Fact-div'>
            <div className="row">
                <h2 className='Txt-Fact'>Ajouter une Facture</h2>
                <div className="col-12 d-flex">
                    <form onSubmit={handleSubmit} className='form-fact'>
                        <div className='div-inpt'>
                            <label>
                                Date:
                                <input type="date" name="date" value={formData.date} onChange={handleChange} required />
                            </label>
                            <label>
                                Prix:
                                <input type="number" name="prix" value={formData.prix} onChange={handleChange} required />
                            </label>
                            <label>
                                Numéro de transaction:
                                <input type="text" name="numeroTransaction" value={formData.numeroTransaction} onChange={handleChange} required />
                            </label>
                            <label>
                                Type de facture:
                                <input type="text" name="typeFacture" value={formData.typeFacture} onChange={handleChange} required />
                            </label>
                        </div>
                        <button type="submit" className='btn-Fact rounded-pill'>{editIndex !== null ? 'Modifier' : 'Ajouter'}</button>
                    </form>
                </div>
                <div className="tab-contenu d-flex">
                    <table className='tab-Fact'>
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Prix</th>
                                <th>Numéro de transaction</th>
                                <th>Type de facture</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.date}</td>
                                    <td>{item.prix}</td>
                                    <td>{item.numeroTransaction}</td>
                                    <td>{item.typeFacture}</td>
                                    <td>
                                        <button onClick={() => handleModify(index)} className='btn btn-sm btn-primary mr-1'><MdEdit /></button>
                                        <button onClick={() => handleDelete(index)} className='btn btn-sm btn-danger'><MdDelete /></button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    );
}

export default Facture;
