import sqlConnect from "../utils/sql.js";

export const login = async (req, res) => {
    const pool = await sqlConnect();
    const data = await pool
    .request()
}

export const getLogin = async(req, res) => {
    const { id } = req.params;
    if(id) {
        const data = await sqlConnect(`SELECT * FROM test.login WHERE id = ${id}`);
        res.send(data);
        return data;
    } else {
        const data = await sqlConnect("SELECT * FROM test.login");
        res.send(data);
        return data;
    }
}

export const signUp = async(req, res) => {
    if(!req.body) {
        return res.status(400).send("Please provide a name and a price");
    }
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).send("Please provide a name and a price");
    }
    const data = await sqlConnect(`INSERT INTO test.login (email, password) VALUES ('${email}', '${password}')`);
    res.send(data);
    return data;
}

export const deleteLogin = async(req, res) => {
    const pool = await sqlConnect();
    const data = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query(`DELETE FROM test.login WHERE id = @id`);
    res.send(data);
}

export const putLogin = async(req, res) => {
    const { id } = req.params;
    if(!id) {
        return res.status(400).send("Please provide an id");
    }
    const { email, password } = req.body;
    if(!email || !password) {
        return res.status(400).send("Please provide a name and a price");
    }
    const data = await sqlConnect(`UPDATE test.login SET email = '${email}', password = '${password}' WHERE id = ${id}`);
    res.send(data);
    return data;
}