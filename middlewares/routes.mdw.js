import AdminRoute from "../routes/admin.route.js";
import DoiTacRoute from "../routes/doitac.route.js";
import KhachhangRoute from "../routes/khachhang.route.js";
import NhanvienRoute from "../routes/nhanvien.route.js";
import TaixeRoute from "../routes/taixe.route.js";
import AccountRoute from "../routes/account.route.js";
import authWithRequiredPermission from "./auth.mdw.js";
import DoitacService from "../services/doitac.service.js";
import NhanvienService from "../services/nhanvien.service.js";
import TaixeService from "../services/taixe.service.js";
import KhachhangService from "../services/khachhang.service.js";
import AdminService from "../services/admin.service.js";

export default function (app) {
  app.get('/', function (req, res) {
    res.render('home', {
      layout: 'mainHome'
    })
  })

  app.use('/account', AccountRoute)
  app.use('/admin',authWithRequiredPermission(4), AdminRoute)
  app.use('/doitac', authWithRequiredPermission(2), DoiTacRoute)
  app.use('/khachhang', authWithRequiredPermission(0), KhachhangRoute)
  app.use('/nhanvien', authWithRequiredPermission(1), NhanvienRoute)
  app.use('/taixe', authWithRequiredPermission(3), TaixeRoute)


// assuming you have an API endpoint that receives the MADT value
// and returns the corresponding MATDDA data in JSON format
  // ĐỐI TÁC---------------------------------------------------------
  app.get('/api/matdda', async function (req, res) {
    const {madt} = req.query;
    const list = await DoitacService.findAllMaThucDon(madt);
    res.send(list);
  });
  app.get('/api/mama', async function (req, res) {
    const {matdda} = req.query;
    const list1 = await DoitacService.findAllMonAn_doitac(matdda);
    res.send(list1);
  });
  app.get('/api/monan', async function (req, res) {
    const {mama, matd} = req.query;
    const list2 = await DoitacService.findAllMonAn(mama, matd);
    res.send(list2);
  });
  app.get('/api/themmonan', async function (req, res) {
    const matd = req.query.matd;

    const mama = req.query.mama;

    const tenma = req.query.tenma;

    const gia = req.query.gia;
    const mieuta = req.query.mieuta
    const list = []
    await DoitacService.themMonAn(matd,mama,tenma,mieuta,gia);
    res.send(list);
  });
  app.get('/api/capnhatmonan', async function (req, res) {
    const matd = req.query.matd;

    const mama = req.query.mama;

    const tenma = req.query.tenma;

    const gia = req.query.gia;

    const list = []
    await DoitacService.CapNhatMonAn(tenma,mama,matd,gia);
    // console.log(list)
    res.send(list);
  });
  // NHÂN VIÊN ---------------------------------------------------------

  app.get('/api/ddky', async function (req, res) {
    const {maddk} = req.query;
    const list = await NhanvienService.findAllHopDongChuaKyTheoMa(maddk);
    res.send(list);
  });
  app.get('/api/allddky', async function (req, res) {
    const {maddk} = req.query;
    const list = await NhanvienService.findAllHopDongChuaKy();
    res.send(list);
  });

  app.get('/api/nv', async function (req, res) {
    const {manv} = req.query;
    const list = await NhanvienService.findAllNhanVienTheoMa(manv);
    res.send(list);
  });
  app.get('/api/allnv', async function (req, res) {
    const {manv} = req.query;
    const list = await NhanvienService.findAllNhanVien();
    res.send(list);
  });


  // TÀI XẾ---------------------------------------------------------

  app.get('/api/dh', async function (req, res) {
    const {madh} = req.query;
    const list = await TaixeService.findAllDonHangTheoMa(madh);
    res.send(list);
  });
  app.get('/api/alldh', async function (req, res) {
    const {madh} = req.query;
    const list = await TaixeService.findAllDonHang();
    res.send(list);
  });

  // KHÁCH HÀNG ---------------------------------------------------------

  app.get('/api/tinhtrang', async function (req, res) {
    const madh = req.query.madh;
    const tinhtrang = await KhachhangService.findAllDonHang(madh);
    res.json({ TINHTRANG: tinhtrang });
  });

  // ADMIN ---------------------------------------------------------

  app.get('/api/themnhanvien', async function (req, res) {
    const manv = req.query.manv;

    const tennv = req.query.tennv;
    console.log(manv)
    const list = []
    await AdminService.themNhanVien(manv,tennv);
    res.send(list);
  });
}