import React from 'react';
import Modal from 'react-modal';
import { useForm } from "react-hook-form";

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root')

const AppointmentForm = ({ modalIsOpen, closeModal, appointmentOn, date }) => {

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => {
        data.service = appointmentOn;
        data.date = date;
        data.created = new Date();
        
    }


    return (
        <div>

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <h2 className="text-center text-primary">{appointmentOn}</h2>
                <p className="text-secondary text-center"><small>ON {date.toDateString()}</small></p>

                <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                
                    <div className="form-group">
                        <input type="text" {...register("name", { required: true })} name="name" placeholder="Your Name" className="form-control" />
                        {errors.name && <span>This field is required</span>}
                    </div>

                    <div className="form-group mt-3">
                    <input type="text" {...register("phone", { required: true })} name="phone" placeholder="Phone Number" className="form-control"/>
                    {errors.phone && <span>This field is required</span>}
                    </div>

                    <div className="form-group mt-3">
                    <input type="text" {...register("email", { required: true })} name="email" placeholder="Email" className="form-control"/>
                    {errors.email && <span>This field is required</span>}
                    </div>

                    <div className="form-group text- mt-3">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>
            </Modal>
        </div>
    );
}

export default AppointmentForm;