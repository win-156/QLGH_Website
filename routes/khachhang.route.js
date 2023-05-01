import express from "express";
import AdminService from "../services/khachhang.service.js";
import KhachhangService from "../services/khachhang.service.js";
import DoitacService from "../services/doitac.service.js";

const router = express.Router();

router.get('/signin', function (req, res) {
    res.render('vwKhachHang/signin', {
        layout: 'KhachHang/main'
    })
})

router.post('/signin', function (req, res) {
    const username = req.body.username
    const password = req.body.password

    // Check dang nhap


    res.redirect("/khachhang/home")
})
router.get('/home', function (req, res) {
    res.render('vwKhachHang/home', {
        layout: 'KhachHang/main1'
    })
})
router.get('/theodoidonhang', async function (req, res) {
    const list = await KhachhangService.findAllDonHang()
    res.render('vwKhachHang/follow', {
        layout: 'KhachHang/main1',
        list: list
    })
})
router.get('/timkiem', async function (req, res) {
    const list = await KhachhangService.findAllDoitac()
    const list1 = await KhachhangService.findAllMaThucDon()
    const list2 = await KhachhangService.findAllMonAn()


    console.log(list)
    res.render('vwKhachHang/news', {
        layout: 'KhachHang/main1',
        // empty: list.length === 0,
        list : list,
        list1: list1,
        list2: list2


    })
})
router.get('/danhgiadonhang', function (req, res) {
    res.render('vwKhachHang/rate', {
        layout: 'KhachHang/main1'
    })
})

export default router