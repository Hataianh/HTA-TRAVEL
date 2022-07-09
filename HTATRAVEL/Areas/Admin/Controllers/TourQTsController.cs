using HTATRAVEL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Areas.Admin.Controllers
{
    public class TourQTsController : Controller
    {
        private HTATravelEntities db = new HTATravelEntities();
        // GET: Admin/TourQTs
        public ActionResult Index()
        {
            return View();
        }
        public JsonResult GetAllData(string searchString)
        {
            List<TourQT> TourQTsList = db.TourQT.Where(x => x.IsDeleted == false).ToList();
            if (string.IsNullOrEmpty(searchString))
            {
                return Json(TourQTsList, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var model = TourQTsList.Where(x => x.TenQT.ToLower().Contains(searchString.ToLower())).ToList();
                return Json(model, JsonRequestBehavior.AllowGet);
            }
        }
        Random random = new Random();
        public string InsertData(TourQT tourQT)
        {
            if (tourQT != null)
            {
                tourQT.MaQT = random.Next();
                tourQT.IsDeleted = false;
                db.TourQT.Add(tourQT);
                db.SaveChanges();
                return "Thêm thành công";
            }
            else
            {
                return "Thêm không thành công";
            }
        }
        public string UpdateData(TourQT tourQT)
        {
            if (tourQT != null)
            {

                var _TourQT = db.Entry(tourQT);
                TourQT Obj = db.TourQT.Where(x => x.MaQT == tourQT.MaQT).FirstOrDefault();
                Obj.TenQT = tourQT.TenQT;
                Obj.Anh1 = tourQT.Anh1;
                Obj.Anh2 = tourQT.Anh2;
                Obj.Anh3 = tourQT.Anh3;
                Obj.Anh4 = tourQT.Anh4;
                Obj.Anh5 = tourQT.Anh5;
                Obj.Giasale = tourQT.Giasale;
                Obj.Giagoc = tourQT.Giagoc;
                Obj.Luotxem = tourQT.Luotxem;
                Obj.Chuongtrinh = tourQT.Chuongtrinh;
                Obj.IsDeleted = false;
                db.SaveChanges();
                return "Update thành công";
            }
            else
            {
                return "Update không thành công";
            }
        }
        public string DeleteData(TourQT tourQT)
        {
            if (tourQT != null)
            {
                TourQT Obj = db.TourQT.Where(x => x.TenQT == tourQT.TenQT).FirstOrDefault();
                Obj.IsDeleted = true;
                db.SaveChanges();
                return "Xóa thành công";
            }
            else
            {
                return "Xóa không thành công";
            }
        }
    }
}