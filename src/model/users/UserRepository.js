import usuariosRoutes from '../../routes/usuarios.routes.js';
import User from './users/User.js';

class UsersRepository {
    constructor() {
        this.users = [];
    }

    getAllUsers() {
        return this.users;
    }
}