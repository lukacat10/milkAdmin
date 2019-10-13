package com.sectorgamer.sharkiller.milkAdmin.webserver.pages;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class IndexPage extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        if(req.getSession() == null
                || req.getSession().getAttribute("loggedin") == null
                || req.getSession().getAttribute("loggedin").equals(false)){
            resp.sendRedirect("/login");
            return;
        }
        resp.setContentType("text/html");
        RequestDispatcher dispatcher = req.getRequestDispatcher("/index.included");
        if(dispatcher == null)
            System.out.println("ERROR ERROR !");
        dispatcher.include(req, resp);
    }
}
