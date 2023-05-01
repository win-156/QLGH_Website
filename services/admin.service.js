import db from '../utils/db.js';

export default {
    async findAllNhanVien() {
        const sql = `select * from NHANVIEN`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async themNhanVien(manv,tennv) {
        const sql = `exec P_NHANVIEN '${manv}','N'${tennv}'`
        try {
            await db.raw(sql)
        } catch (error) {
            console.log(error);
        }
    },

}

// module.exports = {
//     async addNhanVien(maNv, tenNv) {
//         const result = await db('NHANVIEN').insert({
//             MANV: maNv,
//             TENNV: tenNv,
//         });
//
//         return result;
//     },
// };

