import React from "react"

const ContactList = ({contacts, updateContact, updateCallback }) => {
    const onDelete = (id) => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(`http://127.0.0.1:5000/delete_contact/${(id)}`, options)
            if (response.status === 200) {
                updateCallback()
            } else {
                console.error("Failed to delete")
            }
        } catch (error){
            alert(error)
        }
    }
    return <div>
        <h2>Contacts</h2>
        <table>
            <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                {contacts.map((contacts) => (
                 <tr key={contacts.id}>
                    <td>{contacts.firstName}</td>
                    <td>{contacts.lastName}</td>
                    <td>{contacts.email}</td>
                    <td>
                        <button onClick={() => updateContact(contacts)}>Update</button>
                        <button onClick={() => onDelete(contacts.id)}>Delete</button>
                    </td>
                 </tr>
                ))}
            </tbody>
        </table>
    </div>

}

export default ContactList