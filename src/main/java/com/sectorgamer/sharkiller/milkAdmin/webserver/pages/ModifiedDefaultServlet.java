package com.sectorgamer.sharkiller.milkAdmin.webserver.pages;

import org.apache.catalina.servlets.DefaultServlet;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ModifiedDefaultServlet extends DefaultServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        System.out.println("hello");
        System.out.println(req.getContextPath());
        System.out.println(req.getServletPath());


        if(req.getServletPath().equals("/") || req.getServletPath().equals("/index.html")){
//            resp.sendRedirect("/index");
//            new IndexPage().doGet(req, resp);
            RequestDispatcher dispatcher = req.getRequestDispatcher("/index");
            if(dispatcher == null)
                System.out.println("ERROR ERROR !");
            dispatcher.forward(req, resp);
            return;
        }

        if(req.getServletPath().endsWith(".html")){
            RequestDispatcher dispatcher = req.getRequestDispatcher("/NotFoundError");
            if(dispatcher == null)
                System.out.println("ERROR ERROR !");
            dispatcher.forward(req, resp);
            return;
        }

        this.serveResource(req, resp, true, this.fileEncoding);
    }
}
