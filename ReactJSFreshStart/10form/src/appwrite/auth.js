import { Client, Account } from "appwrite";
import conf from "../components/conf";

export class AuthorizationFeatures {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);
    this.account = new Account(this.client);
  }

  async login({ email, password }) {
    console.log(email, password);
    try {
      return await this.account.createEmailPasswordSession(email, password);
    } catch (error) {
      throw error;
    }
  }
}

const AF = new AuthorizationFeatures();
export default AF;
