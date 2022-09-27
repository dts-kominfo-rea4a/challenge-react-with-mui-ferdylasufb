// Form dapat dibuat dengan TextField
// https://mui.com/material-ui/react-text-field/#basic-textfield
// dan Card
// https://mui.com/material-ui/react-card/#basic-card

import { Button, Card, CardActions, CardContent, FormControl, TextField } from "@mui/material";
import { useState } from "react";

const ContactForm = ({fnTambahKontak}) => {
    // Form berisi name, phone, email, dan photo url
    // Buatlah state newContact berupa objek sesuai dengan data yang ada

    const formState = {
    name: '',
    phone: '',
    email: '',
    photo: '',
    };

    const [newContact, setNewContact] = useState(formState);

    const handleChange = (name, value) => {
        setNewContact({...newContact, [name] : value})
    }

    const handlerSubmit = (event) => {
        event.preventDefault();
        fnTambahKontak(newContact);
        setNewContact(formState)
    } 

    return (
    <>
        <Card
        sx={{ maxWidth: 600, margin: 'auto', backgroundColor: '#f6f0f7' }}
        >
        <form onSubmit={handlerSubmit}>
            <CardContent>
                <FormControl fullWidth margin='normal'>
                    <TextField
                    helperText='Input your name'
                    required
                    id='outlined-required'
                    label='Name'
                    name='name'
                    value={newContact.name}
                    onChange={(event) => handleChange('name', event.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth margin='normal'>
                    <TextField 
                    inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                    helperText= 'Input your phone number: [0-9]'
                    required
                    id='outlined-required'
                    label='Phone'
                    name='phone'
                    value={newContact.phone}
                    onChange={(event) => handleChange('phone', event.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth margin='normal'>
                    <TextField
                    helperText= 'Input your email address'
                    required
                    id='outlined-required'
                    label='Email'
                    name='email'
                    value={newContact.email}
                    onChange={(event) => handleChange('email', event.target.value)}
                    />
                </FormControl>
                <FormControl fullWidth margin='normal'>
                    <TextField
                    helperText= 'Input your picture'
                    required
                    id='outlined-required'
                    label='Photo Url'
                    name='photo'
                    value={newContact.photo}
                    onChange={(event) => handleChange('photo', event.target.value)}
                    />
                </FormControl>
            </CardContent>
                <CardActions>
                    <Button size='small' type="submit">ADD NEW</Button>
                </CardActions>
        </form>
        </Card>
    </>
    );
}

export default ContactForm;