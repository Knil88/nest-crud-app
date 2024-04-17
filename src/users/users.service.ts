import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
    //Dichiarazione di una nuova variabile privata atta a memorizzare nuovi utenti

    private users = [
        {
            "id": "1",
            "name": "Yari Narducci",
            "email": "narducciyari@example.com"
        },
        {
            "id": "2",
            "name": "Mario Verdi",
            "email": "marioverdi@example.com"
        },
        {
            "id": "3",
            "name": "Anna Rossi",
            "email": "annarossi@example.com"
        },
    ]
        ;
    private lastId = 0;

    constructor() {

        if (this.users.length > 0) {
            this.lastId = Math.max(...this.users.map(user => parseInt(user.id)))
        }
    }

    //Metodo per creare nuovi utenti

    create(user) {
        // Incrementa l'ultimo ID prima di aggiungere un nuovo utente
        this.lastId++;
        // Assegna l'ID al nuovo utente come stringa
        user.id = String(this.lastId);
        // Aggiunge il nuovo utente alla lista
        this.users.push(user);
        // Restituisci l'ID del nuovo utente e il nuovo utente con ID sopra al nome
        return {
            id: user.id,
            ...user
        };
    }
    //Metodo che restituisce tutti gli utenti

    findAll() {
        return this.users;
    }

    //Metodo che ritrova un utente tramite id

    findOne(id) {

        //Utilizza il metodo find() per cercare un utente tramite id
        //Se trovato restituisce l'utente altrimenti 

        return this.users.find(user => user.id === id);

    }
    //Metodo che aaggiorna un utente

    update(id, updateUser) {
        // Verifica la validità dell'ID
        if (typeof id !== 'string' || id.trim() === '') {
            throw new Error('Invalid user ID');
        }
    
        // Cerca l'utente nell'array
        const userIndex = this.users.findIndex(user => user.id === id);
    
        // Verifica se l'utente è stato trovato
        if (userIndex !== -1) {
            // Verifica la validità dei dati dell'utente da aggiornare
            if (!updateUser || typeof updateUser !== 'object') {
                throw new Error('Invalid user data for update');
            }
    
            // Aggiorna i dati dell'utente
            this.users[userIndex] = { ...this.users[userIndex], ...updateUser };
    
            // Restituisce l'utente aggiornato
            return this.users[userIndex];
        } else {
            throw new Error('User not found');
        }
    }
    
    //Metodo di eliminazione utenti

    delete(id) {
        // Trova l'utente da eliminare
        const userToDelete = this.users.find(user => user.id === id);
        // Filtra l'utente dalla lista e aggiorna la lista degli utenti
        this.users = this.users.filter(user => user.id !== id);
        // Restituisci l'utente eliminato
        return userToDelete;
    }

}
