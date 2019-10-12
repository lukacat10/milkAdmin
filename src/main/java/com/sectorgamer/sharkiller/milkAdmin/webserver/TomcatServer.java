package com.sectorgamer.sharkiller.milkAdmin.webserver;

import com.sectorgamer.sharkiller.milkAdmin.webserver.pages.PingPage;
import org.apache.catalina.Context;
import org.apache.catalina.LifecycleException;
import org.apache.catalina.connector.Connector;
import org.apache.catalina.startup.Tomcat;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.io.PrintWriter;

public class TomcatServer {
    public static void start(int port){
        System.out.println("STARTED");
        Tomcat tomcat = new Tomcat();
        tomcat.setConnector(new Connector());
        tomcat.getConnector().setPort(port);
        try {
            tomcat.setBaseDir("temp");

            tomcat.setPort(port);

            String contextPath = "/";
            String docBase = new File(".").getAbsolutePath();

            Context context = tomcat.addContext(contextPath, docBase);



            tomcat.addServlet(contextPath, "PingPage", new PingPage());
            context.addServletMappingDecoded("/ping", "PingPage");

            tomcat.start();
            tomcat.getServer().await();
        } catch (LifecycleException e) {
            e.printStackTrace();
        }
    }
}
