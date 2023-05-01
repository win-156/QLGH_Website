import db from '../utils/db.js';

export default {
    async findAllDoitac() {
        const sql = `select * from DOITAC`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllMonAn_doitac(matdda) {
        const sql = `select * from MONAN where MATD_DA = '${matdda}'`
        try {
            const list1 = await db.raw(sql)
            return list1
        } catch (error) {
            console.log(error);
        }
    },
    async findAllMaThucDon(madt) {
        const sql = `select * from THUCDON_DA where MADT = '${madt}'`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllMonAn(mama,matd) {
        const sql = `select GIA,MIEUTA,TENMA from MONAN where MAMA = '${mama}' and MATD_DA='${matd}'`
        try {
            const list1 = await db.raw(sql)
            return list1
        } catch (error) {
            console.log(error);
        }
    },
    async findAllDonHang(madh) {
        const sql = `select TINHTRANG from DONHANG where MADH = '${madh}'`

        try {
            const list = await db.raw(sql);
            return list
        } catch (error) {
            console.log(error);
        }
    }
}
