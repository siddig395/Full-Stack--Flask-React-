import {useState} from "react";

const ContactFrom = ({existingContanct = {}, updateCallback}) => {
    const [firstName, setFirstName] = useState(existingContanct.firstName || "");
    const [lastName, setLastName] = useState(existingContanct.lastName || "");
    const [email, setEmail] = useState(existingContanct.email || "");

    const updating = Object.entries(existingContanct).length !== 0

    const onSubmit = async (e) => {
        e.preventDefault()

        const data = {
            firstName,
            lastName,
            email
        }
        const url = "http://127.0.0.1:5000/" + (updating ? `update_contact/${existingContact.id}` : "create_contact")
        const options = {
            method: updating ? "PATCH" : "POST",
            headers: {
                "Contecnt-Type": "application/json"
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, options)
        if (response.status !== 201 && response.status !== 200) {
            const data = await response.jason()
            alert(data.message)
        }
        else {
            updateCallback()
        }
    }

    return( 
    <form onSubmit={onSubmit}>
        <div>
            <label htmlFor="firstName">First Name:</label>
            <input
             type="text" id="firstName" 
             value={firstName} 
             onChange={(e) => setFirstName(e.target.value)}
             />
        </div>
        <div>
            <label htmlFor="lasttName">Last Name:</label>
            <input
             type="text" id="lastName" 
             value={lastName} 
             onChange={(e) => setLastName(e.target.value)}
             />
        </div>
        <div>
            <label htmlFor="email">Email:</label>
            <input
             type="text" id="email" 
             value={email} 
             onChange={(e) => setEmail(e.target.value)}
             />
        </div>
        <button type="submit">{updating ? "Update" : "Create"}</button>
    </form>
    );
};

export default ContactFrom