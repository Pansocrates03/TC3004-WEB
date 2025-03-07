import sql from "mssql"

const config = {
  user: 'sa',
  password: 'estebansierrabaccio',
  server: 'localhost\\SQLEXPRESS', // Puedes usar 'localhost\\instance' si es una instancia nombrada
  database: 'master',
  options: {
      encrypt: true, // Cambia a true si usas Azure
      trustServerCertificate: true // Usa esto si no tienes un certificado
  }
};


const sqlConnect = async () => {
  return await sql.connect("workstation id=tc3004b.mssql.somee.com;packet size=4096;user id=Pansocrates03_SQLLogin_2;pwd=ria5pohdck;data source=tc3004b.mssql.somee.com;persist security info=False;initial catalog=tc3004b;TrustServerCertificate=True");
}
export default sqlConnect;