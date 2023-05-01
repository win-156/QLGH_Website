import db from '../utils/db.js';
import knex from 'knex'
import bcrypt from 'bcryptjs';

export default {
    async findAllHopDongDaKy() {
        const sql = `select * from HOPDONG`
        try {
            const list = await db.raw(sql)
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllHopDongChuaKy() {
        const sql = `select * from DON_DK where MANV is NULL`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllHopDongChuaKyTheoMa(maddk) {
        const sql = `select * from DON_DK where MANV is NULL and MADDK = '${maddk}'`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllNhanVien() {
        const sql = `select * from NHANVIEN`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    },
    async findAllNhanVienTheoMa(manv) {
        const sql = `select * from NHANVIEN where  MANV = '${manv}'`
        try {
            const list = await db.raw(sql)
            console.log(list);
            return list
        } catch (error) {
            console.log(error);
        }
    },


    // async login(username,password) {
    //     const [rows, fields] = await conn.execute(
    //         'SELECT MANV, lockaccount, accounttype as permission, pass FROM accounts WHERE MANV = ?',
    //         [username]
    //     );
    //
    //     if (rows.length === 0) {
    //         // Username not found
    //         return null;
    //     }
    //
    //     const user = rows[0];
    //
    //     if (user.lockaccount === 1) {
    //         // Account locked
    //         return null;
    //     }
    //
    //     const validPassword = await bcrypt.compare(password, user.pass);
    //
    //     if (!validPassword) {
    //         // Invalid password
    //         return null;
    //     }
    //
    //     // Remove password from user object
    //     delete user.pass;
    //
    //     await conn.end();
    //
    //     return user;
    //
    // }



}
