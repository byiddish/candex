using System.Web;
using System.Web.Optimization;

namespace Candex
{
    public class BundleConfig
    {
        // For more information on Bundling, visit http://go.microsoft.com/fwlink/?LinkId=254725
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new ScriptBundle("~/bundles/jquery").Include(
                        "~/Scripts/Libs/Jquery/jquery-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryui").Include(
                        "~/Scripts/Libs/Jquery/jquery-ui-{version}.js"));

            bundles.Add(new ScriptBundle("~/bundles/jqueryval").Include(
                        "~/Scripts/Libs/Jquery/jquery.unobtrusive*",
                        "~/Scripts/Libs/Jquery/jquery.validate*"));

            bundles.Add(new ScriptBundle("~/bundles/knockout").Include(
                       "~/Scripts/Libs/Knockout/knockout-3.4.2.js"));

            bundles.Add(new ScriptBundle("~/bundles/site.ui").Include(
                        "~/Scripts/Site/Site.ui.js"));

            bundles.Add(new ScriptBundle("~/bundles/order").Include(
                        "~/Scripts/Site/Order.js"));

            // Use the development version of Modernizr to develop with and learn from. Then, when you're
            // ready for production, use the build tool at http://modernizr.com to pick only the tests you need.
            bundles.Add(new ScriptBundle("~/bundles/modernizr").Include(
                        "~/Scripts/Libs/modernizr/modernizr-*"));

            bundles.Add(new StyleBundle("~/Content/Site/fonts.css").Include("~/Content/Site/fonts.css"));
            bundles.Add(new StyleBundle("~/Content/Site/site.css").Include("~/Content/Site/site.css"));
            bundles.Add(new StyleBundle("~/Content/Site/order.css").Include("~/Content/Site/order.css"));

            bundles.Add(new StyleBundle("~/Content/themes/base/css").Include(
                        "~/Content/themes/base/jquery.ui.core.css",
                        "~/Content/themes/base/jquery.ui.resizable.css",
                        "~/Content/themes/base/jquery.ui.selectable.css",
                        "~/Content/themes/base/jquery.ui.accordion.css",
                        "~/Content/themes/base/jquery.ui.autocomplete.css",
                        "~/Content/themes/base/jquery.ui.button.css",
                        "~/Content/themes/base/jquery.ui.dialog.css",
                        "~/Content/themes/base/jquery.ui.slider.css",
                        "~/Content/themes/base/jquery.ui.tabs.css",
                        "~/Content/themes/base/jquery.ui.datepicker.css",
                        "~/Content/themes/base/jquery.ui.progressbar.css",
                        "~/Content/themes/base/jquery.ui.theme.css"));
        }
    }
}