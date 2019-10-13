package com.sectorgamer.sharkiller.milkAdmin.webserver.pages;

import com.sectorgamer.sharkiller.milkAdmin.webserver.db.UsersDB;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ServerLoginEndpoint extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

        String username = req.getParameter("username");
        String password = req.getParameter("password");
        if(UsersDB.checkUserAccount(username, password)){
            req.getSession().setAttribute("loggedin", true);
            resp.getWriter().print("ok");
            return;
        }
        resp.getWriter().print("error");
        //super.doPost(req, resp);
    }
}
