import React, {useEffect, useState} from "react";
import * as villaService from "../../../service/facility/villa/villa_service";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";
import {ModalDeleteVilla} from "./ModalDeleteVilla";

export function VillaList() {
    const [villa, setVilla] = useState(null);
    const [villas, setVillas] = useState([]);
    const [typeRent, setTypeRent] = useState({});
    const [isOpen, setIsOpen] = useState(false);
    const [nameSearch,setNameSearch] = useState("");
    const [types,setTypes] = useState([]);

    useEffect(() => {
        getVilla()
        listTypeRent()
    }, [nameSearch,typeRent]);

    const getVilla = async () => {
        const response = await villaService.getAll(nameSearch,typeRent);
        // console.log(response);
        setVillas(response.data);
    }

    const listTypeRent = async () => {
        const response = await villaService.getTypeRent();
        setTypes(response);
    }

    const handleModal = (data) => {
        setIsOpen(true);
        setVilla(data);
    }

    const onCloseModal = () => {
        setIsOpen(false);
        getVilla();
    }

    const handleSubmit = async (id) => {
        console.log(id);
        try {
            const status = await villaService.deleteVilla(id);
            console.log(status)
            if (status === 200){
                toast.success("Delete Success");
            }else {
                toast.warn("Delete Fail");
            }
        }catch (e) {

        }
        onCloseModal();
    }
    return (
        <div className="container" style={{minHeight: "600px"}}>
            <h1 style={{textAlign: "center"}}>Villa List</h1>
            <Link to="/villas/create">
                <button className="btn btn-primary">Create</button>
            </Link>
            <input type="text" onChange={(event) => setNameSearch(event.target.value)} placeholder="Enter name villa"/>
            <select is="select" className='form-control' name="typeRent" style={{
                textAlign: 'center'
            }} onChange={(event) => setTypeRent(event.target.value)}>
                <option className="option" value="">--Type Rent--</option>
                {
                    types.map(type => (
                        <option key={type.id} value={type.name}>{type.name}</option>
                    ))
                }
            </select>

            <div className="row">
                {   villas.length !== 0 ?
                    villas.map(villa => (
                        <div className="col-12 col-sm-6 col-xl-4 mt-4" key={villa.id}>
                            <div className="card size-card">
                                <a href="#">
                                    <img className="size-photo"
                                         src={villa.image}
                                         className="card-img-top" alt="..."/>
                                </a>
                                <div className="card-body">
                                    <p className="card-text">{villa.name}<br/>
                                        Room size: {villa.area}<br/>
                                        Type Rent : {villa.typeRent.name}<br/>
                                        <Link className="btn btn-outline-success"
                                              to={`/villas/update/${villa.id}`}>Update</Link>
                                        {/*<button className="btn btn-outline-danger ms-2"*/}
                                        {/*        onClick={() => handleModal(value)}>Xóa*/}
                                        {/*</button>*/}
                                        <Link style={{marginLeft: "10px"}} to="/villas" className="btn btn-outline-danger"
                                              onClick={() => handleModal(villa)}>
                                            Delete
                                        </Link>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )) :
                    (
                        <td  style={{textAlign: "center", fontSize: "25px"}}> No data</td>
                    )
                }
            </div>
            {isOpen && <ModalDeleteVilla
                isOpen={isOpen}
                villa={villa}
                onCloseModal={onCloseModal}
                handleSubmit={handleSubmit}
            />}
        </div>
    )
}
