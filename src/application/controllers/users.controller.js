let usersService = {
    getInventories: (req, res) => {
        let sql = "SELECT pi.id, p.idProducto, p.nombre, p.marca, p.precio, pi.cantidad, pi.fechaDeCarga FROM productoXinventario pi inner join Producto p on p.idProducto = pi.fkProducto where pi.fkInventario = 1;";
        let query = conn.query(sql, (err, results) => {
            if (err) throw err;
            return res.status(200).json({ "error": false, "response": results });
        });
    },

}

module.exports = usersService;