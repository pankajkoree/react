import conf from "../conf/conf";

import { Client, Account, ID } from "appwrite";

export class AuthService {
    client = new Client()
    account =  new Account()
    
}

const authservice = new AuthService();

export default authservice;
