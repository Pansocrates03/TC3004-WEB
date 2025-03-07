import sql from "mssql"
import sqlConnect from "../utils/sql.js";

export const getItems = async(req,res) => {
    try {
        const pool = await sqlConnect();
        console.log("Conexión exitosa");
        const data = await pool.request().query("SELECT * FROM test.items");
        console.log("Consulta exitosa");
        res.json(data.recordset);
    }
    catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getItem = async(req,res) => {
    const pool = await sqlConnect();
    const data = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .query(`SELECT * FROM test.items WHERE id = @id`);
    res.json(data.recordset);
}


export const postItem = async(req, res) => {
    if(!req.body.name || !req.body.price) {
        return res.status(400).json({ error: "Bad request" });   
    }
    const pool = await sqlConnect();
    await pool
        .request()
        .input("name", sql.VarChar, req.body.name)
        .input("price", sql.Decimal, req.body.price)
        .query(`INSERT INTO test.items (name, price) VALUES (@name, @price)`);
    const data = await pool.request()
        .input('name', sql.VarChar, req.body.name)
        .query('SELECT * FROM test.items WHERE name = @name');
    res.status(200).json({ operation: true, insertedData: data.recordset });
}

export const deleteItem = async(req, res) => {
    const pool = await sqlConnect();
    const data = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query(`DELETE FROM test.items WHERE id = @id`);
    res.status(200).json({ operation: true });
}

export const putItem = async(req, res) => {
    const pool = await sqlConnect();
    const data = await pool
        .request()
        .input("id", sql.Int, req.params.id)
        .input("name", sql.VarChar, req.body.name)
        .input("price", sql.Decimal, req.body.price)
        .query(`UPDATE test.items SET name = @name, price = @price WHERE id = @id`);
    res.status(200).json({ operation: true });
}