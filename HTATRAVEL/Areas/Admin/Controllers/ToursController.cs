using HTATRAVEL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Areas.Admin.Controllers
{
    public class ToursController : Controller
    {
        private HTATravelEntities db = new HTATravelEntities();
        // GET: Admin/Tours
        public ActionResult Index()
        {
            return View();
        }
        public ActionResult Create()
        {
            return View();
        }
        public JsonResult GetAllData(string searchString)
        {
            List<Tour> ToursList = db.Tour.Where(x => x.IsDeleted == false).ToList();
            if (string.IsNullOrEmpty(searchString))
            {
                return Json(ToursList, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var model = ToursList.Where(x => x.TenVN.ToLower().Contains(searchString.ToLower())).ToList();
                return Json(model, JsonRequestBehavior.AllowGet);
            }
        }
        Random random = new Random();
        public string InsertData(Tour tour)
        {
            if (tour != null)
            {
                tour.MaVN = random.Next();
                tour.IsDeleted = false;
                db.Tour.Add(tour);
                db.SaveChanges();
                return "Thêm thành công";
            }
            else
            {
                return "Thêm không thành công";
            }
        }
        public string UpdateData(Tour tour)
        {
            if (tour != null)
            {

                var _tour = db.Entry(tour);
                Tour Obj = db.Tour.Where(x => x.MaVN == tour.MaVN).FirstOrDefault();
                Obj.TenVN = tour.TenVN;
                Obj.Anh1 = tour.Anh1;
                Obj.Anh2 = tour.Anh2;
                Obj.Anh3 = tour.Anh3;
                Obj.Anh4 = tour.Anh4;
                Obj.Anh5 = tour.Anh5;
                Obj.Giasale = tour.Giasale;
                Obj.Giagoc = tour.Giagoc;
                Obj.Luotxem = tour.Luotxem;
                Obj.Chuongtrinh = tour.Chuongtrinh;
                Obj.IsDeleted = false;
                db.SaveChanges();
                return "Update thành công";
            }
            else
            {
                return "Update không thành công";
            }
        }
        public string DeleteData(Tour tour)
        {
            if (tour != null)
            {
                Tour Obj = db.Tour.Where(x => x.TenVN == tour.TenVN).FirstOrDefault();
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