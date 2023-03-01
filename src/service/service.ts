import client from './client'
type User = {
    name:string,
    email:string,
    password:string
}
async function getaccounts(user:User){
    let sql = 'INSERT INTO getaccounts(name,email, password) VALUES ($1,$2,$3)'
    await client.query(sql,[user.name,user.email,user.password])
}

export default {
    getaccounts
}