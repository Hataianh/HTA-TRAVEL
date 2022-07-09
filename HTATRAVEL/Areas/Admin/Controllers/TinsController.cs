using HTATRAVEL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Areas.Admin.Controllers
{
    public class TinsController : Controller
    {
        private HTATravelEntities db = new HTATravelEntities();
        // GET: Admin/Tins
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
            List<Tin> TinsList = db.Tin.Where(x => x.IsDeleted == false).ToList();
            if (string.IsNullOrEmpty(searchString))
            {
                return Json(TinsList, JsonRequestBehavior.AllowGet);
            }
            else
            {
                var model = TinsList.Where(x => x.Tieude.ToLower().Contains(searchString.ToLower())).ToList();
                return Json(model, JsonRequestBehavior.AllowGet);
            }
        }
        Random random = new Random();
        public string InsertData(Tin tin)
        {
            if (tin != null)
            {
                tin.MaTin = random.Next();
                tin.IsDeleted = false;
                db.Tin.Add(tin);
                db.SaveChanges();
                return "Thêm thành công";
            }
            else
            {
                return "Thêm không thành công";
            }
        }
        public string UpdateData(Tin tin)
        {
            if (tin != null)
            {

                var _Tin = db.Entry(tin);
                Tin Obj = db.Tin.Where(x => x.MaTin == tin.MaTin).FirstOrDefault();
                Obj.Tieude = tin.Tieude;
                Obj.Anh1 = tin.Anh1;
                Obj.Anh2 = tin.Anh2;
                Obj.Anh3 = tin.Anh3;
                Obj.Anh4 = tin.Anh4;
                Obj.Anh5 = tin.Anh5;
                Obj.Ngaydang = DateTime.Now;
                Obj.Luotxem = tin.Luotxem;
                Obj.Noidung = tin.Noidung;
                Obj.IsDeleted = false;
                db.SaveChanges();
                return "Update thành công";
            }
            else
            {
                return "Update không thành công";
            }
        }
        public string DeleteData(Tin tin)
        {
            if (tin != null)
            {
                Tin Obj = db.Tin.Where(x => x.Tieude == tin.Tieude).FirstOrDefault();
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