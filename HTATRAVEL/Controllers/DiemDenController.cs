using HTATRAVEL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Controllers
{
    public class DiemDenController : Controller
    {
        private HTATravelEntities db = new HTATravelEntities();
        // GET: SanPham
        public ActionResult _HeaderCT()
        {
            return View();
        }
        public ActionResult VNCT(string MaVN)
        {
            ViewBag.MaVN = MaVN;
            return View();
        }
        public ActionResult QTCT(string MaQT)
        {
            ViewBag.MaQT = MaQT;
            return View();
        }
        
        public JsonResult GetTourVNCT(int MaVN)
        {
            List<Tour> ToursList = db.Tour.Where(x => x.IsDeleted == false).ToList();
            var list = db.Tour.Select(a => new
            {
                MaVN = a.MaVN,
                TenVN = a.TenVN,
                Anh1 = a.Anh1,
                Anh2 = a.Anh2,
                Anh3 = a.Anh3,
                Anh4 = a.Anh4,
                Anh5 = a.Anh5,
                Giasale = a.Giasale,
                Giagoc = a.Giagoc,
                Luotxem = a.Luotxem,
                Chuongtrinh = a.Chuongtrinh,
            }).SingleOrDefault(x => x.MaVN == MaVN);
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetTourQTCT(int MaQT)
        {
            List<TourQT> TourQTsList = db.TourQT.Where(x => x.IsDeleted == false).ToList();
            var list = db.TourQT.Select(a => new
            {
                MaQT = a.MaQT,
                TenQT = a.TenQT,
                Anh1 = a.Anh1,
                Anh2 = a.Anh2,
                Anh3 = a.Anh3,
                Anh4 = a.Anh4,
                Anh5 = a.Anh5,
                Giasale = a.Giasale,
                Giagoc = a.Giagoc,
                Luotxem = a.Luotxem,
                Chuongtrinh = a.Chuongtrinh,
            }).SingleOrDefault(x => x.MaQT == MaQT);
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetXemNhieu()
        {
            var list = db.Tour.OrderByDescending(x => x.Luotxem).Select(a => new
            {
                MaVN = a.MaVN,
                TenVN = a.TenVN,
                Anh1 = a.Anh1,
                Giasale = a.Giasale,
                Giagoc = a.Giagoc,
            }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
        public JsonResult GetXemNhieuQT()
        {
            var list = db.TourQT.OrderByDescending(x => x.Luotxem).Select(a => new
            {
                MaQT = a.MaQT,
                TenQT = a.TenQT,
                Anh1 = a.Anh1,
                Giasale = a.Giasale,
                Giagoc = a.Giagoc,
            }).ToList();
            return Json(list, JsonRequestBehavior.AllowGet);
        }
    }
}