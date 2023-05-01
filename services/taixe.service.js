import db from "../utils/db.js";

export default {

    async findAllDonHangTheoMa(madh) {
        const sql = `select *
                     from DONHANG
                     where MATX is NULL
                       and MADH = '${madh}'`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllDonHang() {
        const sql = `select * from DONHANG where MATX is NULL`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    }
}
