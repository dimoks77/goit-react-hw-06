import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { addContact, deleteContact } from '../redux/contactsSlice';
import { setSearchFilter } from "../redux/filtersSlice";
import ContactForm from "./ContactForm/ContactForm";
import ContactList from "./ContactList/ContactList";
import SearchBox from "./SearchBox/SearchBox";

const initialContacts = [
  { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
  { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
  { id: "id-3", name: "Eden Clements", number: "645-17-79" },
  { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
];

const App = () => {
    const dispatch = useDispatch();
    const contacts = useSelector(state => state.contacts.items);

    console.log("Contacts in App:", contacts);

    useEffect(() => {
        console.log("Inside useEffect 1");
        const storedContacts = JSON.parse(localStorage.getItem('storedContacts'));
        if (storedContacts) {
            dispatch(addContact(storedContacts));
        } else {
            dispatch(addContact(initialContacts));
        }
    }, [dispatch]);

    useEffect(() => {
        console.log("Inside useEffect 2");
        localStorage.setItem('storedContacts', JSON.stringify(contacts));
    }, [contacts]);

    const handleAddContact = (contact) => {
        console.log("Adding contact:", contact);
        dispatch(addContact(contact));
    };

    const handleDeleteContact = (id) => {
        console.log("Deleting contact with ID:", id);
        dispatch(deleteContact(id));
    };

    const handleSearchChange = (value) => {
        console.log("Setting search filter to:", value);
        dispatch(setSearchFilter(value));
    };

    if (!contacts) {
        console.log("Loading.....");
        return <div>Loading...</div>;
    }

    console.log("Rendering App...");
    
    return (
        <>
            <h1>PhoneBook</h1>
            <ContactForm onAdd={handleAddContact} />
            <SearchBox onChange={handleSearchChange} />
            <ContactList onDelete={handleDeleteContact} />
        </>
    );
};

export default App;
