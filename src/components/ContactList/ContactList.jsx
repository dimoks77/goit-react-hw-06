import css from './ContactList.module.css';
import Contact from '../Contact/Contact';
import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from '../../redux/contactsSlice'; 

const ContactList = () => {
    const dispatch = useDispatch();
    const items = useSelector(state => state.contacts.items); 

    const handleDelete = (id) => {
        dispatch(deleteContact(id));
    };

    return (
        <ul className={css.list}>
            {items.map(contact => (
                <li key={contact.id} className={css.listItem}>
                    <Contact contact={contact} onDelete={() => handleDelete(contact.id)} /> 
                </li>
            ))}
        </ul>
    );
};

export default ContactList;
