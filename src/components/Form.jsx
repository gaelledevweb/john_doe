import React, { useState } from "react";
import "../styles/Form.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        nom: "",
        email: "",
        telephone: "",
        sujet: "",
        message: ""
    });

    const [errors, setErrors] = useState({});

    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState, [name]: value,
        }));
        setErrors(prevErrors => ({
            ...prevErrors, [name]: " "
        }));
    };

    // gestion des erreurs

    const validate = () => {
        let tempErrors = {};
        let isValid = true;

        if (!formData.nom.trim()) {
            tempErrors.nom = "Merci de renseigner votre nom.";
            isValid = false;
        }

        if (!formData.email.trim()) {
            tempErrors.email = "Adresse mail obligatoire.";
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            tempErrors.email = "Format email invalide.";
            isValid = false;
        }

        if (!formData.telephone.trim()) {
            tempErrors.telephone = "Merci de renseigner votre numéro.";
            isValid = false;
        }

        if (!formData.sujet.trim()) {
            tempErrors.sujet = "Merci de renseigner le sujet de votre message.";
            isValid = false;
        }

        if (!formData.message.trim()) {
            tempErrors.message = "Message obligatoire.";
            isValid = false;
        }

        setErrors(tempErrors);
        return isValid;
    };

    // soumission du formulaire

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitted(false);

        if (validate()) {
            console.log("données de formulaire valides");
        }
    };

    return (
        <form onSubmit={handleSubmit} noValidate>
            {isSubmitted && <p style={{ color: "green" }}>
                Votre message a été envoyé</p>}

            <div>
                <label htmlFor="nom"></label>
                <input type="text" id="nom" name="nom"
                    value={formData.nom}
                    onChange={handleChange} placeholder="Votre Nom" required></input>
                {errors.nom && <p style={{ color: "red" }}>{errors.nom}</p>}
            </div>

            <div>
                <label htmlFor="email"></label>
                <input type="email" id="email" name="email"
                    value={formData.email}
                    onChange={handleChange} placeholder="Votre adresse email" required></input>
                {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="tel"></label>
                <input type="tel" id="tel" name="telephone"
                    value={formData.telephone}
                    onChange={handleChange} placeholder="Votre numéro de téléphone" required></input>
                {errors.telephone && <p style={{ color: "red" }}>{errors.telephone}</p>}
            </div>

            <div>
                <label htmlFor="sujet"></label>
                <input type="text" id="sujet" name="sujet"
                    value={formData.sujet}
                    onChange={handleChange} placeholder="Sujet" required></input>
                {errors.sujet && <p style={{ color: "red" }}>{errors.sujet}</p>}
            </div>

            <div>
                <label htmlFor="message"></label>
                <textarea type="tel" id="message" name="message" rows="6"
                    value={formData.message}
                    onChange={handleChange} placeholder="Votre message" required></textarea>
                {errors.message && <p style={{ color: "red" }}>{errors.message}</p>}
            </div>

            <button className="btnform" type="submit">Envoyer</button>
        </form>
    );
}

export default ContactForm;