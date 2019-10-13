package com.sectorgamer.sharkiller.milkAdmin.webserver.pages;

import com.sectorgamer.sharkiller.milkAdmin.Debugger;
import com.sectorgamer.sharkiller.milkAdmin.MilkAdmin;
import com.sectorgamer.sharkiller.milkAdmin.util.NoSavePropertiesFile;
import com.sectorgamer.sharkiller.milkAdmin.util.PropertiesFile;
import org.bukkit.entity.Player;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.File;
import java.io.IOException;
import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class InfoDataJsonPage extends HttpServlet {
    private final String BackupPath = "Backups [milkAdmin]";
    private MilkAdmin milkAdminInstance;
    private PropertiesFile BukkitProperties = new PropertiesFile("server.properties");
    private String levelname;

    private void load_settings() throws IOException {
        final NoSavePropertiesFile serverProperties = new NoSavePropertiesFile("server.properties");
        levelname = serverProperties.getString("level-name");
    }

    public InfoDataJsonPage(MilkAdmin milkAdminInstance){
        this.milkAdminInstance = milkAdminInstance;
        try {
            load_settings();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    @Override
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
        if(req.getSession() == null
                || req.getSession().getAttribute("loggedin") == null
                || req.getSession().getAttribute("loggedin").equals(false)){
            resp.setStatus(403);
            return;
        }
        resp.getWriter().print(infoData());
    }

    private String infoProperties() throws IOException {
        BukkitProperties.load();
        final String ip = BukkitProperties.getString("server-ip", "");
        final String port = BukkitProperties.getString("server-port", "25565");
        final String maxplayers = BukkitProperties.getString("max-players", "10");
        final String viewdistance = BukkitProperties.getString("view-distance", "10");
        final String holdmessage = BukkitProperties.getString("hold-message", "");
        final boolean allownether = BukkitProperties.getBoolean("allow-nether", true);
        final boolean spawnmonsters = BukkitProperties.getBoolean("spawn-monsters", false);
        final boolean spawnanimals = BukkitProperties.getBoolean("spawn-animals", false);
        final boolean onlinemode = BukkitProperties.getBoolean("online-mode", false);
        final boolean pvp = BukkitProperties.getBoolean("pvp", false);
        final boolean flight = BukkitProperties.getBoolean("allow-flight", false);
        final boolean whitelist = BukkitProperties.getBoolean("white-list", false);

        return "{\"ip\":\"" + ip + "\"," +
                "\"port\":\"" + port + "\"," +
                "\"maxplayers\":\"" + maxplayers + "\"," +
                "\"viewdistance\":\"" + viewdistance + "\"," +
                "\"holdmessage\":\"" + holdmessage + "\"," +
                "\"levelname\":\"" + levelname + "\"," +
                "\"allownether\":\"" + allownether + "\"," +
                "\"spawnmonsters\":\"" + spawnmonsters + "\"," +
                "\"spawnanimals\":\"" + spawnanimals + "\"," +
                "\"onlinemode\":\"" + onlinemode + "\"," +
                "\"pvp\":\"" + pvp + "\"," +
                "\"flight\":\"" + flight + "\"," +
                "\"whitelist\":\"" + whitelist + "\"}";
    }

    private String infoData() {
        String data = "";
        String build = "???";
        String freespace = "1";
        String totalspace = "1";
        String usedspace = "0";
        try {
            final String version = milkAdminInstance.getServer().getVersion();
            final Matcher result = Pattern.compile("b([0-9]+)jnks").matcher(version);
            result.find();
            try {
                build = result.group(1);
            } catch (final IllegalStateException ignored) {
            }
            final String totmem = String.valueOf(Runtime.getRuntime().totalMemory() / 1024 / 1024);
            final String maxmem = String.valueOf(Runtime.getRuntime().maxMemory() / 1024 / 1024);
            final String freemem = String.valueOf(Runtime.getRuntime().freeMemory() / 1024 / 1024);
            final String usedmem = String.valueOf((Runtime.getRuntime().totalMemory() - Runtime.getRuntime().freeMemory()) / 1024 / 1024);
            final File Disk = new File(BackupPath);
            try {
                if (!Disk.exists())
                    Disk.mkdir();
                final double fs = (double) (Disk.getFreeSpace() / 1024 / 1024) / 1024;
                final double ts = (double) (Disk.getTotalSpace() / 1024 / 1024) / 1024;
                final double us = ts - fs;
                freespace = String.format("%.2f%n", fs).trim();
                totalspace = String.format("%.2f%n", ts).trim();
                usedspace = String.format("%.2f%n", us).trim();
            } catch (final SecurityException e) {
                Debugger.debug("Security Exception in Space Data");
            }

            StringBuilder users = new StringBuilder("[]");
            final String amountusers = String.valueOf(milkAdminInstance.getServer().getOnlinePlayers().size());
            if (milkAdminInstance.getServer().getOnlinePlayers().size() > 0) {
                users = new StringBuilder("[");
                final Player[] p = (Player[]) milkAdminInstance.getServer().getOnlinePlayers().toArray();
                for (int i = 0; i < p.length; i++) {
                    users.append("\"").append(p[i].getName()).append("\"");
                    if (i < p.length - 1) {
                        users.append(", ");
                    }
                }
                users.append("]");
            }
            final boolean usingrtk = milkAdminInstance.UsingRTK;
            data = "{\"lastrestart\":\"" + MilkAdmin.initTime + "\"," +
                    "\"version\":\"" + version + "\"," +
                    "\"build\":\"" + build + "\"," +
                    "\"totmem\":\"" + totmem + "\"," +
                    "\"maxmem\":\"" + maxmem + "\"," +
                    "\"freemem\":\"" + freemem + "\"," +
                    "\"usedmem\":\"" + usedmem + "\"," +
                    "\"freespace\":\"" + freespace + "\"," +
                    "\"totalspace\":\"" + totalspace + "\"," +
                    "\"usedspace\":\"" + usedspace + "\"," +
                    "\"amountusers\":\"" + amountusers + "\"," +
                    "\"users\":" + users + "," +
                    "\"usingrtk\":" + usingrtk + "," +
                    "\"properties\":" + infoProperties() + "}";
        } catch (final Exception e) {
            Debugger.debug("ERROR in infoData(): " + e.getMessage());
        }
        return data;
    }
}
