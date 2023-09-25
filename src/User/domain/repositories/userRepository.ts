import { User } from "../entities/user";

export interface UserRepository{
    //agregar un usuario
    //se toma como parametro el nombre y devuelve una promesa
    addUser(name:String, passwordpassword:String, email:String, status:string ): Promise<User>|null;

    deleteUser(userId:string): Promise<boolean>;

    //listar todos los usuarios 
    listAllUsers(): Promise<User[]>;

    //listar por un usuario
    getUserById(id:number): Promise<User | null>

    //actualizar contraseña
    updatePassword(id: number, newPassword: string): Promise<User | null>;

    //actualizar usuairo 
    updateUser(id: number,
        newUser?: { name?: string; password?: string; email?: string; status?: string }
      ): Promise<User | null>;

      activeUser(id: number): Promise<User | null>;

      listUserInactive(): Promise<User[] | User | null>;
    
}