import { Client } from 'pg';

export async function getClient() {
    const conn1 = "postgres://postgres:Gagan@931079@localhost:5432/power"; 
    const client = new Client({connectionString: conn1});
    await client.connect();
    return client;
}