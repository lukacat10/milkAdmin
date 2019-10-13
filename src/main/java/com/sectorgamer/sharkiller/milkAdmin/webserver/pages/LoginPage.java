package com.sectorgamer.sharkiller.milkAdmin.webserver.pages;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class LoginPage extends HttpServlet {

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if(req.getSession() != null
                &&req.getSession().getAttribute("loggedin") != null
                && req.getSession().getAttribute("loggedin").equals(true)){
            resp.sendRedirect("/");
            return;
        }
        RequestDispatcher dispatcher = req.getRequestDispatcher("/login.html");
        if(dispatcher == null)
            System.out.println("ERROR ERROR !");
        dispatcher.include(req, resp);

        //super.doGet(req, resp);
    }

    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        resp.getWriter().println("WTF");
    }
}
