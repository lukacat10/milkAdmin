package com.sectorgamer.sharkiller.milkAdmin.webserver.pages;

import com.sectorgamer.sharkiller.milkAdmin.webserver.TomcatServer;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

public class PingPage extends HttpServlet {
    public PingPage(){
    }
    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        PrintWriter writer = resp.getWriter();
        if(req.getSession() != null
                &&req.getSession().getAttribute("loggedin") != null
                && req.getSession().getAttribute("loggedin").equals(true)){
            writer.println("pong");
            return;
        }
        writer.println("login");
        //super.doGet(req, resp);
    }
}
