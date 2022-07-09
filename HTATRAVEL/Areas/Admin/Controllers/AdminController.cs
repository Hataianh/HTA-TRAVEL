using HTATRAVEL.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace HTATRAVEL.Areas.Admin.Controllers
{
    public class AdminController : Controller
    {
        private HTATravelEntities db = new HTATravelEntities();
        // GET: Admin
        public ActionResult Index()
        {

            return View();

        }
        public ActionResult LogOut()
        {
            Session["user"] = null;
            return RedirectToAction("Login", "Admin");
        }
        public ActionResult Login()
        {
            return View();
        }
        public JsonResult AjaxLogin(string TaiKhoan, string MatKhau)
        {
            try
            {
                var user = db.Users.SingleOrDefault(x => x.TaiKhoan == TaiKhoan && x.MatKhau == MatKhau);
                if (user != null)
                {
                    Session["user"] = user;
                }
                return Json(new { ok = 1 }, JsonRequestBehavior.AllowGet);
            }
            catch
            {
                return Json(new { ok = 0 }, JsonRequestBehavior.AllowGet);
            }

        }
    }
}