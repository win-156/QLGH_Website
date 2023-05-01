import express from "express";
import NhanvienService from "../services/nhanvien.service.js";
import TaixeService from "../services/taixe.service.js";

const router = express.Router();

router.get('/signin', function (req, res) {
    res.render('vwTaiXe/signin', {
        layout: 'TaiXe/main'
    })
})
router.get('/home', function (req, res) {
    res.render('vwTaiXe/home', {
        layout: 'TaiXe/main1'
    })
})
router.get('/DonHang', async function (req, res) {
    const list = await TaixeService.findAllDonHang()

    res.render('vwTaiXe/DonHang', {
        layout: 'TaiXe/main1',
        list:list
    })

})
export default router