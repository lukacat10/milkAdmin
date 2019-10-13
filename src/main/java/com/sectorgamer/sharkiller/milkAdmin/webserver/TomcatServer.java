package com.sectorgamer.sharkiller.milkAdmin.webserver;

import com.sectorgamer.sharkiller.milkAdmin.MilkAdmin;
import com.sectorgamer.sharkiller.milkAdmin.webserver.pages.*;
import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.Wrapper;
import org.apache.catalina.loader.WebappLoader;
import org.apache.catalina.startup.Tomcat;
import org.apache.jasper.servlet.JspServlet;
import org.apache.tomcat.util.descriptor.web.ErrorPage;

public class TomcatServer {
    public static void start(int port, MilkAdmin milkAdmin){
        System.out.println("STARTED");
        Tomcat tomcat = new Tomcat();

        try {
            tomcat.setBaseDir("tempo");

            tomcat.setPort(port);

            String contextPath = "/";
            String docBase = "";//new File(".").getAbsolutePath();

            Context context = tomcat.addContext(contextPath, docBase);





            tomcat.addServlet(contextPath, "PingPage", new PingPage());
            context.addServletMappingDecoded("/ping", "PingPage");


            tomcat.addServlet(contextPath, "LoginPage", new LoginPage());
            context.addServletMappingDecoded("/login", "LoginPage");

            tomcat.addServlet(contextPath, "ServerLoginEndpoint", new ServerLoginEndpoint());
            context.addServletMappingDecoded("/server/login", "ServerLoginEndpoint");

            tomcat.addServlet(contextPath, "InfoData", new InfoDataJsonPage(milkAdmin));
            context.addServletMappingDecoded("/info/data.json", "InfoData");

            tomcat.addServlet(contextPath, "Index", new IndexPage());
            context.addServletMappingDecoded("/index", "Index");

            tomcat.addServlet(contextPath, "Default", new ModifiedDefaultServlet());

            JspServlet serv = new JspServlet();


            tomcat.addServlet(contextPath, "NotFound", new NotFoundErrorPage());
            context.addServletMappingDecoded("/NotFoundError", "NotFound");
            ErrorPage e404e = new ErrorPage();
            e404e.setErrorCode(404);
            e404e.setLocation("/NotFoundError");
            context.addErrorPage(e404e);


            //StringManager sm = StringManager.getManager("org.apache.catalina.loader");
            String name = "org.apache.jasper.servlet.JspServlet";

            SecurityManager securityManager = System.getSecurityManager();
            try {
                int i = name.lastIndexOf(46);
                if(securityManager == null)
                    System.out.println("YES NULL");
                else
                    securityManager.checkPackageAccess(name.substring(0, i));
            } catch (SecurityException var12) {
                //String error = sm.getString("webappClassLoader.restrictedPackage", new Object[]{name});
                //log.info(error, var12);
                System.out.println("SECURITY ISSUE!");
                //throw new ClassNotFoundException(error, var12);
            }catch (Exception e){
                e.printStackTrace();
            }
            System.out.println("NO PROBLEM!");


            //tomcat.addWebapp(contextPath, docBase);

            String[] DEFAULT_MIME_MAPPINGS = new String[]{"abs", "audio/x-mpeg", "ai", "application/postscript", "aif", "audio/x-aiff", "aifc", "audio/x-aiff", "aiff", "audio/x-aiff", "aim", "application/x-aim", "art", "image/x-jg", "asf", "video/x-ms-asf", "asx", "video/x-ms-asf", "au", "audio/basic", "avi", "video/x-msvideo", "avx", "video/x-rad-screenplay", "bcpio", "application/x-bcpio", "bin", "application/octet-stream", "bmp", "image/bmp", "body", "text/html", "cdf", "application/x-cdf", "cer", "application/pkix-cert", "class", "application/java", "cpio", "application/x-cpio", "csh", "application/x-csh", "css", "text/css", "dib", "image/bmp", "doc", "application/msword", "dtd", "application/xml-dtd", "dv", "video/x-dv", "dvi", "application/x-dvi", "eps", "application/postscript", "etx", "text/x-setext", "exe", "application/octet-stream", "gif", "image/gif", "gtar", "application/x-gtar", "gz", "application/x-gzip", "hdf", "application/x-hdf", "hqx", "application/mac-binhex40", "htc", "text/x-component", "htm", "text/html", "html", "text/html", "ief", "image/ief", "jad", "text/vnd.sun.j2me.app-descriptor", "jar", "application/java-archive", "java", "text/x-java-source", "jnlp", "application/x-java-jnlp-file", "jpe", "image/jpeg", "jpeg", "image/jpeg", "jpg", "image/jpeg", "js", "application/javascript", "jsf", "text/plain", "jspf", "text/plain", "kar", "audio/midi", "latex", "application/x-latex", "m3u", "audio/x-mpegurl", "mac", "image/x-macpaint", "man", "text/troff", "mathml", "application/mathml+xml", "me", "text/troff", "mid", "audio/midi", "midi", "audio/midi", "mif", "application/x-mif", "mov", "video/quicktime", "movie", "video/x-sgi-movie", "mp1", "audio/mpeg", "mp2", "audio/mpeg", "mp3", "audio/mpeg", "mp4", "video/mp4", "mpa", "audio/mpeg", "mpe", "video/mpeg", "mpeg", "video/mpeg", "mpega", "audio/x-mpeg", "mpg", "video/mpeg", "mpv2", "video/mpeg2", "nc", "application/x-netcdf", "oda", "application/oda", "odb", "application/vnd.oasis.opendocument.database", "odc", "application/vnd.oasis.opendocument.chart", "odf", "application/vnd.oasis.opendocument.formula", "odg", "application/vnd.oasis.opendocument.graphics", "odi", "application/vnd.oasis.opendocument.image", "odm", "application/vnd.oasis.opendocument.text-master", "odp", "application/vnd.oasis.opendocument.presentation", "ods", "application/vnd.oasis.opendocument.spreadsheet", "odt", "application/vnd.oasis.opendocument.text", "otg", "application/vnd.oasis.opendocument.graphics-template", "oth", "application/vnd.oasis.opendocument.text-web", "otp", "application/vnd.oasis.opendocument.presentation-template", "ots", "application/vnd.oasis.opendocument.spreadsheet-template ", "ott", "application/vnd.oasis.opendocument.text-template", "ogx", "application/ogg", "ogv", "video/ogg", "oga", "audio/ogg", "ogg", "audio/ogg", "spx", "audio/ogg", "flac", "audio/flac", "anx", "application/annodex", "axa", "audio/annodex", "axv", "video/annodex", "xspf", "application/xspf+xml", "pbm", "image/x-portable-bitmap", "pct", "image/pict", "pdf", "application/pdf", "pgm", "image/x-portable-graymap", "pic", "image/pict", "pict", "image/pict", "pls", "audio/x-scpls", "png", "image/png", "pnm", "image/x-portable-anymap", "pnt", "image/x-macpaint", "ppm", "image/x-portable-pixmap", "ppt", "application/vnd.ms-powerpoint", "pps", "application/vnd.ms-powerpoint", "ps", "application/postscript", "psd", "image/vnd.adobe.photoshop", "qt", "video/quicktime", "qti", "image/x-quicktime", "qtif", "image/x-quicktime", "ras", "image/x-cmu-raster", "rdf", "application/rdf+xml", "rgb", "image/x-rgb", "rm", "application/vnd.rn-realmedia", "roff", "text/troff", "rtf", "application/rtf", "rtx", "text/richtext", "sh", "application/x-sh", "shar", "application/x-shar", "sit", "application/x-stuffit", "snd", "audio/basic", "src", "application/x-wais-source", "sv4cpio", "application/x-sv4cpio", "sv4crc", "application/x-sv4crc", "svg", "image/svg+xml", "svgz", "image/svg+xml", "swf", "application/x-shockwave-flash", "t", "text/troff", "tar", "application/x-tar", "tcl", "application/x-tcl", "tex", "application/x-tex", "texi", "application/x-texinfo", "texinfo", "application/x-texinfo", "tif", "image/tiff", "tiff", "image/tiff", "tr", "text/troff", "tsv", "text/tab-separated-values", "txt", "text/plain", "ulw", "audio/basic", "ustar", "application/x-ustar", "vxml", "application/voicexml+xml", "xbm", "image/x-xbitmap", "xht", "application/xhtml+xml", "xhtml", "application/xhtml+xml", "xls", "application/vnd.ms-excel", "xml", "application/xml", "xpm", "image/x-xpixmap", "xsl", "application/xml", "xslt", "application/xslt+xml", "xul", "application/vnd.mozilla.xul+xml", "xwd", "image/x-xwindowdump", "vsd", "application/vnd.visio", "wav", "audio/x-wav", "wbmp", "image/vnd.wap.wbmp", "wml", "text/vnd.wap.wml", "wmlc", "application/vnd.wap.wmlc", "wmls", "text/vnd.wap.wmlsc", "wmlscriptc", "application/vnd.wap.wmlscriptc", "wmv", "video/x-ms-wmv", "wrl", "model/vrml", "wspolicy", "application/wspolicy+xml", "Z", "application/x-compress", "z", "application/x-compress", "zip", "application/zip"};
            Wrapper servlet = Tomcat.addServlet(context, "default", "org.apache.catalina.servlets.DefaultServlet");
            servlet.setLoadOnStartup(1);
            servlet.setOverridable(true);
            servlet = Tomcat.addServlet(context, "jsp", new JspServlet());
            servlet.addInitParameter("fork", "false");
            servlet.setLoadOnStartup(3);
            servlet.setOverridable(true);
            context.addServletMappingDecoded("/", "Default");
            //context.addServletMappingDecoded("*.jsp", "jsp");
//            context.addServletMappingDecoded("*.jspx", "jsp");
//            context.addServletMappingDecoded("*.html", "AccessDenied");
//            context.addServletMappingDecoded("*.htm", "AccessDenied");
//            context.addServletMappingDecoded("*.jsp", "AccessDenied");
//            context.addServletMappingDecoded("*.jspx", "AccessDenied");
            context.setSessionTimeout(30);
            int i = 0;

            while(i < DEFAULT_MIME_MAPPINGS.length) {
                context.addMimeMapping(DEFAULT_MIME_MAPPINGS[i++], DEFAULT_MIME_MAPPINGS[i++]);
            }
//
//            context.addWelcomeFile("index.html");
//            context.addWelcomeFile("index.htm");
//            context.addWelcomeFile("index.jsp");





            WebappLoader loader = new WebappLoader(Thread.currentThread().getContextClassLoader());
            context.setLoader(loader);

            tomcat.getConnector();
            tomcat.start();
            tomcat.getServer().await();
        } catch (LifecycleException e) {
            e.printStackTrace();
        }
    }
}
