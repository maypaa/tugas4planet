import pkg from "pg";
const { Client } = pkg;

export const client = new Client({
 host: "db.nrzdarzbyvwjufxmmidu.supabase.co",
 user: "postgres",
 password: "maypadea123456i",
 port: 5432,
 database: "postgres",
});

await client.connect();
console.log("server berjalan");
