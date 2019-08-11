package com.sectorgamer.sharkiller.milkAdmin;

import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.DataOutputStream;
import java.io.File;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.FileWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.RandomAccessFile;
import java.io.UnsupportedEncodingException;
import java.net.InetAddress;
import java.net.ServerSocket;
import java.net.Socket;
import java.net.URLDecoder;
import java.net.UnknownHostException;
import java.nio.channels.FileChannel;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.util.*;
import java.util.logging.Logger;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.bukkit.Bukkit;
import org.bukkit.Location;
import org.bukkit.Material;
import org.bukkit.World;
import org.bukkit.entity.Player;
import org.bukkit.inventory.ItemStack;
import org.bukkit.plugin.InvalidDescriptionException;
import org.bukkit.plugin.InvalidPluginException;
import org.bukkit.plugin.Plugin;
import org.bukkit.plugin.PluginDescriptionFile;
import org.bukkit.plugin.UnknownDependencyException;

import com.sectorgamer.sharkiller.milkAdmin.rtk.RTKInterface;
import com.sectorgamer.sharkiller.milkAdmin.rtk.RTKListener;
import com.sectorgamer.sharkiller.milkAdmin.util.Configuration;
import com.sectorgamer.sharkiller.milkAdmin.util.MilkAdminLog;
import com.sectorgamer.sharkiller.milkAdmin.util.NoSavePropertiesFile;
import com.sectorgamer.sharkiller.milkAdmin.util.PropertiesFile;

/**
 * Simple <code>WebServer</code> All-In-One.
 *
 * @author Sharkiller
 */
@SuppressWarnings({"ResultOfMethodCallIgnored", "UnusedReturnValue", "ConstantConditions", "deprecation"})
public class WebServer extends Thread implements RTKListener {
    private int WebServerMode;
    private MilkAdmin milkAdminInstance;
    private Socket WebServerSocket;
    private ServerSocket rootSocket = null;
    private boolean Debug;
    private static InetAddress Ip = null;
    private int Port;
    private int consoleLines;
    private String BannedString;
    private String KickedString;
    private String levelname;
    private String PluginDir = "plugins/milkAdmin/";
    private String BackupPath = "Backups [milkAdmin]";
    private String ExternalUrl = "";
    private Configuration Settings = new Configuration(new File(PluginDir + "settings.yml"));
    private Configuration Worlds = new Configuration(new File(PluginDir + "worlds.yml"));
    private PropertiesFile BukkitProperties = new PropertiesFile("server.properties");
    String bannedplayers = "banned-players.txt";
    ArrayList<String> bannedPlayers = new ArrayList<>();
    String bannedips = "banned-ips.txt";
    ArrayList<String> bannedIps = new ArrayList<>();
    private NoSavePropertiesFile adminList = new NoSavePropertiesFile(PluginDir + "admins.ini");
    private PropertiesFile saveAdminList = new PropertiesFile(PluginDir + "admins.ini");
    private PropertiesFile LoggedIn = new PropertiesFile(PluginDir + "loggedin.ini");

    /**
     * Create the socket and listens for a connection.
     *
     * @param i milkAdmin instance.
     */
    WebServer(final MilkAdmin i) {
        WebServerMode = 0;
        milkAdminInstance = i;
        start();
    }

    /**
     * Process the GET request.
     *
     * @param i milkAdmin instance.
     * @param s Socket with the request.
     */
    private WebServer(final MilkAdmin i, final Socket s) {
        WebServerMode = 1;
        milkAdminInstance = i;
        WebServerSocket = s;
        start();
    }

    private void debug(final String text) {
        if (Debug)
            MilkAdminLog.debug(text);
    }

    private String readFileAsString(final String filePath)
            throws java.io.IOException {
        final StringBuilder fileData = new StringBuilder(65536);
        try {
            final BufferedReader reader = new BufferedReader(new FileReader(filePath));
            final char[] buf = new char[65536];
            int length;

            while ((length = reader.read(buf)) > -1) {
                fileData.append(String.valueOf(buf, 0, length).replaceAll("_ExternalUrl_", ExternalUrl));
            }
            reader.close();
        } catch (final Exception e) {
            debug("ERROR in readFileAsString(): " + e.getMessage());
        }
        return fileData.toString();
    }

    private void readFileAsBinary(final String path, final String type)
            throws java.io.IOException {
        readFileAsBinary(path, type, false);
    }

    private void readFileAsBinary(final String path, final String type, final boolean replace)
            throws java.io.IOException {
        try {
            final File archivo = new File(path);
            StringBuilder StringData = new StringBuilder(new String(""));
            long lengthData;
            if (archivo.exists()) {
                final FileInputStream file = new FileInputStream(archivo);
                final byte[] fileData = new byte[65536];
                int length;

                if (replace) {
                    while ((length = file.read(fileData)) > 0) {
                        final String aux = new String(fileData, 0, length);
                        StringData.append(aux.replaceAll("_ExternalUrl_", ExternalUrl));
                    }
                    lengthData = StringData.length();
                } else {
                    lengthData = archivo.length();
                }

                final DataOutputStream out = new DataOutputStream(WebServerSocket.getOutputStream());
                out.writeBytes("HTTP/1.1 200 OK\r\n");
                if (type != null)
                    out.writeBytes("Content-Type: " + type + "; charset=utf-8\r\n");
                out.writeBytes("Content-Length: " + lengthData + "\r\n");
                out.writeBytes("Cache-Control: no-cache, must-revalidate\r\n");
                out.writeBytes("Server: milkAdmin Webserver\r\n");
                out.writeBytes("Connection: Close\r\n\r\n");

                if (replace) {
                    out.writeBytes(StringData.toString());
                } else {
                    while ((length = file.read(fileData)) > 0)
                        out.write(fileData, 0, length);
                }
                out.flush();

                file.close();
                out.close();
            } else {
                httperror("404 Not Found");
            }
        } catch (final Exception e) {
            debug("ERROR in readFileAsBinary(): " + e.getMessage());
        }
    }

    public void onRTKStringReceived(final String s) {
        debug("From wrapper: " + s);
    }

    private void consoleCommand(final String cmd) {
        if(!Thread.currentThread().getName().equals("Server thread") || !Bukkit.getServer().isPrimaryThread()){
            Bukkit.getServer().getScheduler().runTask(this.milkAdminInstance, new Runnable() {
                @Override
                public void run() {
                    milkAdminInstance.getServer().dispatchCommand(Bukkit.getConsoleSender(), cmd);
                }
            });
        }else
            milkAdminInstance.getServer().dispatchCommand(Bukkit.getConsoleSender(), cmd);
    }

    private String readConsole() {
        StringBuilder console = new StringBuilder();
        String line = "";
        try {
            final File f = new File("logs/latest.log");
            final RandomAccessFile randomFile = new RandomAccessFile(f, "r");
            final long numberOfLines = (long) consoleLines;
            final long fileLength = randomFile.length();
            long startPosition = fileLength - (numberOfLines * 100);
            if (startPosition < 0)
                startPosition = 0;
            randomFile.seek(startPosition);
            while ((line = randomFile.readLine()) != null) {
                console.append(line).append("\n");
            }
            randomFile.close();
        } catch (final Exception e) {
            debug("ERROR in readConsole(): " + e.getMessage());
        }
        return console.toString();
    }

    public String lastConsoleLine() {
        String console = "";
        String lastline = "";
        try {
            final File f = new File("logs/latest.log");
            final RandomAccessFile randomFile = new RandomAccessFile(f, "r");
            final long fileLength = randomFile.length();
            long startPosition = fileLength - 200;
            if (startPosition < 0)
                startPosition = 0;
            randomFile.seek(startPosition);
            while ((lastline = randomFile.readLine()) != null) {
                console = lastline;
            }
            randomFile.close();
        } catch (final Exception e) {
            debug("ERROR in lastConsoleLine(): " + e.getMessage());
        }
        return console;
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
                debug("Security Exception in Space Data");
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
            debug("ERROR in infoData(): " + e.getMessage());
        }
        return data;
    }

    public void readLine(final String path, final ArrayList<String> save) {
        try {
            save.clear();
            final File banlist = new File(path);
            if (banlist.exists()) {
                final BufferedReader in = new BufferedReader(new FileReader(banlist));
                String data;
                while ((data = in.readLine()) != null) {
                    //Checking for blank lines
                    if (data.length() > 0) {
                        save.add(data);
                    }
                }
                in.close();
            }
        } catch (final IOException e) {
            debug("ERROR in readLine(): " + e.getMessage());
        }
    }

    private List<String> loadWhitelist() {
        String line;
        BufferedReader fin;
        final List<String> players = new ArrayList<>();

        try {
            fin = new BufferedReader(new FileReader("white-list.txt"));
        } catch (final FileNotFoundException e) {
            debug("ERROR in loadWhitelist(): " + e.getMessage());
            return new ArrayList<>();
        }
        try {
            while ((line = fin.readLine()) != null)
                if (!line.equals(""))
                    players.add(line.trim());

        } catch (final Exception e) {
            debug("ERROR in loadWhitelist(): " + e.getMessage());
            return new ArrayList<>();
        } finally {
            try {
                fin.close();
            } catch (final IOException e) {
                debug("ERROR in loadWhitelist(): " + e.getMessage());
            }
        }
        return players;
    }

    private boolean saveWhitelist(final List<String> players) {
        final String newLine = System.getProperty("line.separator");
        try {
            final BufferedWriter writer = new BufferedWriter(new FileWriter("white-list.txt"));
            for (final String player : players)
                writer.write(player + newLine);
            writer.flush();
            writer.close();
            return true;
        } catch (final Exception e) {
            debug("ERROR in saveWhitelist(): " + e.getMessage());
            return false;
        }
    }

    private void addToWhitelist(final String user) {
        final File file = new File("white-list.txt");
        try {
            final FileWriter writer = new FileWriter(file, true);
            writer.write(user + System.getProperty("line.separator"));
            writer.flush();
            writer.close();
        } catch (final IOException e) {
            debug("ERROR in saveWhitelist(): " + e.getMessage());
        }
    }

    private void listBans() {
        //[{"players":[{"name":"pepito"},{"name":"sharkale31"}]},{"ips":[{"ip":"127.0.0.1"},{"ip":"127.0.0.2"}]}]
        StringBuilder listban = new StringBuilder();
        Iterator<Map.Entry<String, String>> i;
        Map.Entry<String, String> e;
        try {
            debug("Writing listbans.");
            // names
            final Map<String, String> banNames = milkAdminInstance.BL.banListName.returnMap();
            i = banNames.entrySet().iterator();
            listban = new StringBuilder("[{\"players\":[");
            while (i.hasNext()) {
                e = i.next();
                listban.append("{\"name\":\"").append(e.getKey()).append("\",\"cause\":\"").append(e.getValue()).append("\"}");
                if (i.hasNext()) listban.append(",");
            }
            listban.append("]},");
            // ips
            final Map<String, String> banIps = milkAdminInstance.BL.banListIp.returnMap();
            i = banIps.entrySet().iterator();
            listban.append("{\"ips\":[");
            while (i.hasNext()) {
                e = i.next();
                listban.append("{\"ip\":\"").append(e.getKey()).append("\",\"cause\":\"").append(e.getValue()).append("\"}");
                if (i.hasNext()) listban.append(",");
            }
            listban.append("]}]");
        } catch (final Exception err) {
            debug("ERROR in listBans(): " + err.getMessage());
        }
        debug("Banlist - Sending JSON lenght: " + listban.length());
        print(listban.toString(), "application/json");
    }

    private static void copyFolder(final File src, final File dest)
            throws IOException {

        if (src.isDirectory()) {
            if (!dest.exists()) {
                dest.mkdir();
            }

            if (!src.exists()) {
                MilkAdminLog.info("Directory does not exist.");
                return;
            }
            final String[] files = src.list();

            for (final String file : files) {
                final File srcFile = new File(src, file);
                final File destFile = new File(dest, file);
                copyFolder(srcFile, destFile);
            }
        } else {

            if (!dest.exists()) {
                dest.createNewFile();
            }

            try (FileChannel source = new FileInputStream(src).getChannel(); FileChannel destination = new FileOutputStream(dest).getChannel()) {
                destination.transferFrom(source, 0, source.size());
            }
        }
    }

    private static boolean deleteDirectory(final File path) {
        if (path.exists()) {
            final File[] files = path.listFiles();
            for (File file : files) {
                if (file.isDirectory()) {
                    deleteDirectory(file);
                } else {
                    file.delete();
                }
            }
        }
        return (path.delete());
    }

    private String sha512me(String message) {
        MessageDigest md;
        try {
            md = MessageDigest.getInstance("SHA-512");
            md.update(message.getBytes());
            final byte[] mb = md.digest();
            StringBuilder out = new StringBuilder();
            for (final byte temp : mb) {
                StringBuilder s = new StringBuilder(Integer.toHexString(temp));
                while (s.length() < 2) {
                    s.insert(0, "0");
                }
                s = new StringBuilder(s.substring(s.length() - 2));
                out.append(s);
            }
            message = out.toString();

        } catch (final NoSuchAlgorithmException e) {
            debug("ERROR in sha512me(): " + e.getMessage());
        }
        return message;
    }

    private void print(final String data, final String MimeType) {
        try {
            final DataOutputStream out = new DataOutputStream(WebServerSocket.getOutputStream());
            out.writeBytes("HTTP/1.1 200 OK\r\n");
            out.writeBytes("Content-Type: " + MimeType + "; charset=utf-8\r\n");
            out.writeBytes("Cache-Control: no-cache, must-revalidate\r\n");
            out.writeBytes("Content-Length: " + data.length() + "\r\n");
            out.writeBytes("Server: milkAdmin Server\r\n");
            out.writeBytes("Connection: Close\r\n\r\n");
            out.writeBytes(data);
            out.flush();
            out.close();
        } catch (final Exception e) {
            debug("ERROR in print(): " + e.getMessage());
        }
    }

    private void httperror(final String error) {

        try {
            final DataOutputStream out = new DataOutputStream(WebServerSocket.getOutputStream());
            out.writeBytes("HTTP/1.1 " + error + "\r\n");
            out.writeBytes("Server: milkAdmin Server\r\n");
            out.writeBytes("Connection: Close\r\n\r\n");
            out.flush();
            out.close();
        } catch (final Exception e) {
            debug("ERROR in httperror(): " + e.getMessage());
        }
    }

    private void load_settings() throws IOException {
        Settings.load();
        LoggedIn.load();
        BackupPath = Settings.getString("Backup.Path", "Backups [milkAdmin]");
        String banListDir = Settings.getString("Settings.BanListDir", "plugins/milkAdmin");
        ExternalUrl = Settings.getString("Settings.ExternalUrl", "http://www.sharkale.com.ar/milkAdmin");
        Debug = Settings.getBoolean("Settings.Debug", false);
        final String ipaux = Settings.getString("Settings.Ip", null);
        if (ipaux != null && !ipaux.equals("")) {
            try {
                Ip = InetAddress.getByName(ipaux);
            } catch (final UnknownHostException e) {
                debug("ERROR UnknownHostException - Ip: " + ipaux + " - Message: " + e.getMessage());
            }
        }
        Port = Settings.getInt("Settings.Port", 64712);
        consoleLines = Settings.getInt("Settings.ConsoleLines", 13);
        BannedString = Settings.getString("Strings.Banned", "Banned from this server");
        KickedString = Settings.getString("Strings.Kicked", "Kicked!");
        final NoSavePropertiesFile serverProperties = new NoSavePropertiesFile("server.properties");
        levelname = serverProperties.getString("level-name");
    }

    private String getParam(final String param, final String URL) {
        final Pattern regex = Pattern.compile("[?&]" + param + "=([^&#]*)");
        final Matcher result = regex.matcher(URL);
        if (result.find()) {
            try {
                final String resdec = URLDecoder.decode(result.group(1), "UTF-8");
                if (!param.equals("password")) debug(" - getParam: " + param + " - Value: " + resdec);
                return resdec;
            } catch (final UnsupportedEncodingException e) {
                debug("ERROR in getParam(): " + e.getMessage());
                return "";
            }
        } else
            return "";
    }

    @Override
    public void run() {
        try {
            load_settings();
            if (WebServerMode == 0) {
                if (Ip == null) {
                    rootSocket = new ServerSocket(Port);
                    MilkAdminLog.info("WebServer listening on port " + Port);
                } else {
                    rootSocket = new ServerSocket(Port, 50, Ip);
                    MilkAdminLog.info("WebServer listening on " + Ip + ":" + Port);
                }
                while (!rootSocket.isClosed()) {
                    final Socket requestSocket = rootSocket.accept();
                    new WebServer(milkAdminInstance, requestSocket);
                }
            } else {
                long timeDebug = System.currentTimeMillis();
                String urlDebug = "";
                final BufferedReader in = new BufferedReader(new InputStreamReader(WebServerSocket.getInputStream()));
                try {
                    String l;
                    String g;
                    String url = "";
                    String param = "";
                    StringBuilder json;
                    final String htmlDir = "./plugins/milkAdmin/html";
                    boolean flag = true;
                    while ((l = in.readLine()) != null && flag) {
                        if (l.startsWith("GET")) {
                            flag = false;
                            g = (l.split(" "))[1];
                            final Pattern regex = Pattern.compile("([^?]*)([^#]*)");
                            final Matcher result = regex.matcher(g);
                            if (result.find()) {
                                url = result.group(1);
                                param = result.group(2);
                            }
                            final String HostAddress = WebServerSocket.getInetAddress().getHostAddress();
                            debug(HostAddress + " - " + url);
                            urlDebug = url;
                            debug(" - ContainsKey: " + LoggedIn.containsKey(HostAddress) + " - keyExists: " + LoggedIn.keyExists(HostAddress));
                            if (url.contains("./")) {
                                httperror("403 Access Denied");
                            } else if (url.startsWith("/ping")) {
                                if (!LoggedIn.containsKey(HostAddress)) {
                                    json = new StringBuilder("login");
                                } else {
                                    json = new StringBuilder("pong");
                                }
                                print(json.toString(), "text/plain");
                            } else if (url.startsWith("/server/login")) {
                                final String username = getParam("username", param);
                                final String password = getParam("password", param);
                                if (username.length() > 0 && password.length() > 0) {
                                    if (adminList.containsKey(username)) {
                                        final String login = adminList.getString(username, password);
                                        if (login.contentEquals(sha512me(password))) {
                                            debug(" - " + username + " logged in from " + HostAddress);
                                            LoggedIn.setString(HostAddress, username);
                                            json = new StringBuilder("ok");
                                        } else {
                                            json = new StringBuilder("error");
                                        }
                                    } else {
                                        json = new StringBuilder("error");
                                    }
                                } else {
                                    json = new StringBuilder("error");
                                }
                                print(json.toString(), "text/plain");
                            } else if (!LoggedIn.containsKey(HostAddress)) {
                                debug(" - No logged.");
                                if (url.equals("/") || url.equals("/login.html")) {
                                    readFileAsBinary(htmlDir + "/login.html", "text/html", true);
                                } else if (url.startsWith("/js/lang/")) {
                                    readFileAsBinary(htmlDir + url, "text/javascript");
                                } else if (url.startsWith("/js/")) {
                                    readFileAsBinary(htmlDir + url, "text/javascript", true);
                                } else if (url.startsWith("/css/")) {
                                    readFileAsBinary(htmlDir + url, "text/css", true);
                                } else if (url.startsWith("/images/")) {
                                    readFileAsBinary(htmlDir + url, null);
                                }
                                //OTHERWISE LOAD PAGES
                                else {
                                    httperror("403 Access Denied");
                                }
                            } else {
                                if (adminList.containsKey("admin")) {
                                    if (url.equals("/register.html")) {
                                        readFileAsBinary(htmlDir + "/register.html", "text/html", true);
                                    } else if (url.startsWith("/js/lang/")) {
                                        readFileAsBinary(htmlDir + url, "text/javascript");
                                    } else if (url.startsWith("/js/")) {
                                        readFileAsBinary(htmlDir + url, "text/javascript", true);
                                    } else if (url.startsWith("/css/")) {
                                        readFileAsBinary(htmlDir + url, "text/css", true);
                                    } else if (url.startsWith("/images/")) {
                                        readFileAsBinary(htmlDir + url, null);
                                    } else if (url.startsWith("/server/account_create")) {
                                        final String username = getParam("username", param);
                                        final String password = getParam("password", param);
                                        if (username.length() > 0 && password.length() > 0) {
                                            saveAdminList.setString(username, sha512me(password));
                                            saveAdminList.removeKey("admin");
                                            json = new StringBuilder("ok:accountcreated");
                                        } else
                                            json = new StringBuilder("error:badparameters");
                                        print(json.toString(), "text/html");
                                    } else {
                                        readFileAsBinary(htmlDir + "/register.html", "text/html", true);
                                    }
                                }
                                //FINISHED LOGIN

                                //SERVER
                                //AREA
                                else if (url.startsWith("/server/account_create")) {
                                    final String username = getParam("username", param);
                                    final String password = getParam("password", param);
                                    if (username.length() > 0 && password.length() > 0) {
                                        saveAdminList.setString(username, sha512me(password));
                                        json = new StringBuilder("ok:accountcreated");
                                    } else
                                        json = new StringBuilder("error:badparameters");
                                    print(json.toString(), "text/plain");
                                } else if (url.equals("/server/logout")) {
                                    LoggedIn.removeKey(HostAddress);
                                    json = new StringBuilder("ok");
                                    print(json.toString(), "text/plain");
                                } else if (url.equals("/save")) {
                                    consoleCommand("save-all");
                                    json = new StringBuilder("ok:worldsaved");
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/server/say")) {
                                    final String text = getParam("message", param);
                                    if (text.length() > 0) {
                                        if (text.startsWith("/")) {
                                            final String command = text.replace("/", "");
                                            consoleCommand(command);
                                        } else {
                                            consoleCommand("say " + text);
                                        }
                                        json = new StringBuilder("ok:messagesent");
                                    } else
                                        json = new StringBuilder("error:messageempty");
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/server/broadcast_message")) {
                                    final String text = getParam("message", param);
                                    if (text.length() > 0) {
                                        milkAdminInstance.getServer().broadcastMessage(text);
                                        json = new StringBuilder("ok:broadcastedmessage");
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.equals("/stop")) {
                                    json = new StringBuilder("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\">");
                                    json.append("<head><script type=\"text/javascript\">tourl = './';</script>").append(readFileAsString(htmlDir + "/wait.html"));
                                    print(json.toString(), "text/html");
                                    try {
                                        Thread.sleep(1000);
                                    } catch (final InterruptedException e) {
                                        debug("ERROR in Stop: " + e.getMessage());
                                    }
                                    milkAdminInstance.RTKapi.executeCommand(RTKInterface.CommandType.HOLD_SERVER, null);
                                } else if (url.equals("/reload_server")) {
                                    milkAdminInstance.getServer().reload();
                                    json = new StringBuilder("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\">");
                                    json.append("<head><script type=\"text/javascript\">tourl = './';</script>").append(readFileAsString(htmlDir + "/wait.html"));
                                    print(json.toString(), "text/html");
                                } else if (url.equals("/restart_server")) {
                                    try {
                                        milkAdminInstance.RTKapi.executeCommand(RTKInterface.CommandType.RESTART, null);
                                    } catch (final IOException e) {
                                        debug("ERROR in restart_server: " + e.getMessage());
                                    }
                                    json = new StringBuilder("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\">");
                                    json.append("<head><script type=\"text/javascript\">tourl = './';</script>").append(readFileAsString(htmlDir + "/wait.html"));
                                    print(json.toString(), "text/html");
                                } else if (url.equals("/force_stop")) {
                                    json = new StringBuilder("ok:forcestop");
                                    print(json.toString(), "text/plain");
                                    System.exit(1);
                                } else if (url.equals("/server/get_plugins.json")) {
                                    final Plugin[] p = milkAdminInstance.getServer().getPluginManager().getPlugins();
                                    json = new StringBuilder("[");
                                    final int cant = p.length;
                                    for (int i = 0; i < cant; i++) {
                                        final PluginDescriptionFile pdf = p[i].getDescription();
                                        json.append("{\"name\":\"").append(pdf.getName()).append("\", \"version\":\"").append(pdf.getVersion()).append("\",\"enabled\":").append(p[i].isEnabled()).append("}");
                                        if (i < (cant) - 1) json.append(",");
                                    }
                                    json.append("]");
                                    print(json.toString(), "application/json");
                                } else if (url.startsWith("/server/plugin_latest.json")) {
                                    final String plugin = getParam("plugin", param);
                                    if (plugin.length() > 0) {
                                        json = new StringBuilder(milkAdminInstance.PU.getLatest(plugin));
                                    } else {
                                        json = new StringBuilder("[{\"error\":\"badparameters\"}]");
                                    }
                                    // TODO: Change to "application/json"
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/server/disable_plugin")) {
                                    final String plugin = getParam("plugin", param);
                                    if (plugin.length() > 0) {
                                        if (milkAdminInstance.getServer().getPluginManager().isPluginEnabled(plugin)) {
                                            milkAdminInstance.getServer().getPluginManager().disablePlugin(milkAdminInstance.getServer().getPluginManager().getPlugin(plugin));
                                            json = new StringBuilder("ok:plugindisabled:_NAME_," + plugin);
                                        } else {
                                            json = new StringBuilder("ok:pluginnotenabled");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/server/enable_plugin")) {
                                    final String plugin = getParam("plugin", param);
                                    if (plugin.length() > 0) {
                                        milkAdminInstance.getServer().getPluginManager().enablePlugin(milkAdminInstance.getServer().getPluginManager().getPlugin(plugin));
                                        json = new StringBuilder("ok:pluginenabled:_NAME_," + plugin);
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/server/reload_plugin")) {
                                    final String plugin = getParam("plugin", param);
                                    if (plugin.length() > 0) {
                                        if (milkAdminInstance.getServer().getPluginManager().isPluginEnabled(plugin)) {
                                            milkAdminInstance.getServer().getPluginManager().disablePlugin(milkAdminInstance.getServer().getPluginManager().getPlugin(plugin));
                                            milkAdminInstance.getServer().getPluginManager().enablePlugin(milkAdminInstance.getServer().getPluginManager().getPlugin(plugin));
                                            json = new StringBuilder("ok:pluginreloaded:_NAME_," + plugin);
                                        } else {
                                            json = new StringBuilder("ok:pluginnotenabled");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/server/load_plugin")) {
                                    final String plugin = getParam("plugin", param);
                                    if (plugin.length() > 0) {
                                        final File pluginFile = new File(new File("plugins"), plugin + ".jar");
                                        if (pluginFile.isFile()) {
                                            try {
                                                final Plugin newPlugin = milkAdminInstance.getServer().getPluginManager().loadPlugin(pluginFile);
                                                if (newPlugin != null) {
                                                    final String pluginName = newPlugin.getDescription().getName();
                                                    milkAdminInstance.getServer().getPluginManager().enablePlugin(newPlugin);
                                                    if (newPlugin.isEnabled()) {
                                                        MilkAdminLog.info("Plugin loaded and enabled [" + pluginName + "]");
                                                        json = new StringBuilder("ok:pluginloaded:_NAME_," + pluginName);
                                                    } else {
                                                        json = new StringBuilder("error:pluginloadfailed");
                                                    }
                                                } else {
                                                    json = new StringBuilder("error:pluginloadfailed");
                                                }
                                            } catch (final UnknownDependencyException | InvalidPluginException ex) {
                                                json = new StringBuilder("error:pluginnotplugin");
                                            } catch (final InvalidDescriptionException ex) {
                                                json = new StringBuilder("error:plugininvalid");
                                            }
                                        } else {
                                            json = new StringBuilder("error:pluginnotexist");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.equals("/server/console")) {
                                    print(readConsole(), "text/plain");
                                } else if (url.startsWith("/server/properties_edit")) {
                                    final String property = getParam("property", param);
                                    final String value = getParam("value", param);
                                    if (property.length() > 0 && value.length() > 0) {
                                        BukkitProperties.setString(property, value);
                                        json = new StringBuilder("ok:editedproperty");
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }

                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/page/change_lang")) {
                                    final String lang = getParam("lang", param);
                                    if (lang.length() > 0) {
                                        if (new File(htmlDir + "/js/lang/" + lang, "default.js").exists()) {
                                            final File src = new File(htmlDir + "/js/lang/" + lang, "default.js");
                                            final File dest = new File(htmlDir + "/js/lang", "default.js");
                                            copyFolder(src, dest);
                                            json = new StringBuilder("ok:langchanged");
                                        } else
                                            json = new StringBuilder("error:langnotfound");
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }

                                    print(json.toString(), "text/plain");
                                } else if (url.equals("/backup")) {
                                    Worlds.load();
                                    //Worlds.setHeader("# milkAdmin - INTERNAL USE DO NOT MODIFY");
                                    final List<World> worlds = milkAdminInstance.getServer().getWorlds();
                                    final List<String> wstr = new ArrayList<>();
                                    if (worlds.size() > 0) {
                                        for (final World world : worlds) {
                                            wstr.add(world.getName());
                                        }
                                    }
                                    Worlds.setProperty("Worlds", wstr);
                                    Worlds.save();
                                    json = new StringBuilder("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\">");
                                    json.append("<head><script type=\"text/javascript\">tourl = '/backup';</script>").append(readFileAsString(htmlDir + "/wait.html"));
                                    print(json.toString(), "text/html");
                                    try {
                                        Thread.sleep(1000);
                                    } catch (final InterruptedException e) {
                                        debug("ERROR in backup: " + e.getMessage());
                                    }
                                    milkAdminInstance.RTKapi.executeCommand(RTKInterface.CommandType.HOLD_SERVER, null);
                                } else if (url.startsWith("/restore")) {
                                    final String id = getParam("id", param);
                                    final String clear = getParam("clear", param);
                                    if (id.length() > 0) {
                                        json = new StringBuilder("<!DOCTYPE html PUBLIC \"-//W3C//DTD XHTML 1.0 Transitional//EN\" \"http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd\"><html xmlns=\"http://www.w3.org/1999/xhtml\">");
                                        json.append("<head><script type=\"text/javascript\">tourl = '/restore?id=").append(id).append("&clear=").append(clear).append("';</script>").append(readFileAsString(htmlDir + "/wait.html"));
                                        print(json.toString(), "text/html");
                                    } else
                                        readFileAsBinary(htmlDir + "/index.html", "text/html");
                                    try {
                                        Thread.sleep(1000);
                                    } catch (final InterruptedException e) {
                                        debug("ERROR in backup: " + e.getMessage());
                                    }
                                    milkAdminInstance.RTKapi.executeCommand(RTKInterface.CommandType.HOLD_SERVER, null);
                                } else if (url.startsWith("/delete")) {
                                    final String id = getParam("id", param);
                                    if (id.length() > 0) {
                                        deleteDirectory(new File(BackupPath + "/" + id));
                                        json = new StringBuilder("ok:deletebackup");
                                    } else
                                        json = new StringBuilder("error:badparameters");
                                    print(json.toString(), "text/plain");
                                } else if (url.equals("/info/list_backups.json")) {
                                    final File dir = new File(BackupPath);
                                    final String[] children = dir.list();
                                    StringBuilder listbu;
                                    if (children == null) {
                                        listbu = new StringBuilder("[]");
                                    } else {
                                        listbu = new StringBuilder("[");
                                        int i = 0;
                                        while (i < (children.length)) {
                                            final String filename = children[i];
                                            final String filenamechanged = filename.replace(".", "/").replace("_", " ").replace("-", ":");
                                            listbu.append("{\"optionValue\":\"").append(filename).append("\", \"optionDisplay\":\"").append(filenamechanged).append("\"}");
                                            if (i < (children.length) - 1) {
                                                listbu.append(",");
                                            }
                                            i++;
                                        }
                                        listbu.append("]");
                                    }
                                    print(listbu.toString(), "application/json");
                                }
                                /////////////
                                //INFO AREA
                                /////////////
                                else if (url.equals("/info/data.json")) {
                                    print(infoData(), "application/json");
                                }
                                /////////////////////////
                                //CUSTOM WHITELIST AREA
                                /////////////////////////
				/*else if ( url.equals("/customwl/get.json") ){
									List<String> players = loadWhitelist();
									String wl = "[";
									for(String p: players){
										if(wl.length() > 1)
											wl+= ",";
										wl+= "\""+p+"\"";
									}
									wl+= "]";
									print(wl, "application/json");
								}*/
                                else if (url.equals("/customwl/add.php")) {
                                    final String user = getParam("user", param);
                                    if (user.length() > 0) {
                                        json = new StringBuilder(milkAdminInstance.WL.addDefaultPlayer(user));
                                    } else {
                                        json = new StringBuilder("Invalid User");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.equals("/customwl/remove.php")) {
                                    final String user = getParam("user", param);
                                    if (user.length() > 0) {
                                        json = new StringBuilder(milkAdminInstance.WL.removePlayer(user));
                                    } else {
                                        json = new StringBuilder("Invalid User");
                                    }
                                    print(json.toString(), "text/plain");
                                }
                                //////////////////
                                //WHITELIST AREA
                                //////////////////
                                else if (url.equals("/whitelist/get.json")) {
                                    final List<String> players = loadWhitelist();
                                    StringBuilder wl = new StringBuilder("[");
                                    for (final String p : players) {
                                        if (wl.length() > 1)
                                            wl.append(",");
                                        wl.append("\"").append(p).append("\"");
                                    }
                                    wl.append("]");
                                    print(wl.toString(), "application/json");
                                } else if (url.equals("/whitelist/add")) {
                                    final String user = getParam("user", param);
                                    if (user.length() > 0) {
                                        addToWhitelist(user);
                                        json = new StringBuilder("ok");
                                    } else {
                                        json = new StringBuilder("error");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.equals("/whitelist/save")) {
                                    final String usersP = getParam("users", param);
                                    final List<String> usersL = new ArrayList<>();
                                    if (usersP.length() > 0) {
                                        final String[] users = usersP.split(",");
                                        Collections.addAll(usersL, users);
                                    }
                                    if (saveWhitelist(usersL)) {
                                        json = new StringBuilder("ok");
                                    } else {
                                        json = new StringBuilder("error");
                                    }
                                    print(json.toString(), "text/plain");
                                }
                                ////////////////
                                //PLAYER AREA
                                ////////////////
                                else if (url.startsWith("/player/kick")) {
                                    final String user = getParam("user", param);
                                    final String cause = getParam("cause", param);
                                    if (user.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            String kickString = KickedString;
                                            if (cause.length() > 0)
                                                kickString = cause;
                                            p.kickPlayer(kickString);
                                            json = new StringBuilder("ok:kickplayer:_NAME_," + user);
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/give_item")) {
                                    final String user = getParam("user", param);
                                    final String item = getParam("item", param);
                                    final String amount = getParam("amount", param);
                                    if (user.length() > 0 && amount.length() > 0 && item.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            p.getInventory().addItem(new ItemStack(Material.getMaterial(item), Integer.valueOf(amount)));
                                            json = new StringBuilder("ok:itemsgiven:_NAME_," + user + ",_AMOUNT_," + amount + ",_ITEM_," + Material.getMaterial(item));
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }

                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/remove_item")) {
                                    final String user = getParam("user", param);
                                    final String item = getParam("item", param);
                                    final String amount = getParam("amount", param);
                                    if (user.length() > 0 && amount.length() > 0 && item.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            p.getInventory().removeItem(new ItemStack(Material.getMaterial(item), Integer.valueOf(amount)));
                                            json = new StringBuilder("ok:itemsremoved:_NAME_," + user + ",_AMOUNT_," + amount + ",_ITEM_," + Material.getMaterial(item));
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/get_health")) {
                                    final String user = getParam("user", param);
                                    if (user.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            json = new StringBuilder("ok:" + p.getHealth());
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/set_health")) {

                                    final String user = getParam("user", param);
                                    final String amount = getParam("amount", param);
                                    if (user.length() > 0 && amount.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            try {
                                                final int health = Integer.parseInt(amount, 10);
                                                if (health >= 0 && health <= 20) {
                                                    p.setHealth(health);
                                                    if (health == 0) {
                                                        json = new StringBuilder("ok:playerkilled:_NAME_," + user);
                                                    } else {
                                                        json = new StringBuilder("ok:healthchanged:_NAME_," + user + ",_AMOUNT_," + amount);
                                                    }
                                                } else {
                                                    json = new StringBuilder("error:badparameters");
                                                }
                                            } catch (final NumberFormatException err) {
                                                json = new StringBuilder("error:badparameters");
                                            }
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/ban_player")) {
                                    final String user = getParam("user", param);
                                    final String cause = getParam("cause", param);
                                    if (user.length() > 0) {
                                        String banstring = BannedString;
                                        if (cause.length() > 0)
                                            banstring = cause;
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            milkAdminInstance.BL.banListName.setString(p.getName(), banstring);
                                            p.kickPlayer(banstring);
                                            MilkAdminLog.info(p.getName() + " banned for: " + banstring);
                                        } else {
                                            milkAdminInstance.BL.banListName.setString(user, banstring);
                                        }
                                        json = new StringBuilder("ok:playerbanned:_NAME_," + user);
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/ban_ip")) {
                                    final String ip = getParam("ip", param);
                                    final String cause = getParam("cause", param);
                                    if (ip.length() > 0) {
                                        String banstring = BannedString;
                                        if (cause.length() > 0)
                                            banstring = cause;
                                        final Player p = milkAdminInstance.getServer().getPlayer(ip);
                                        if (p != null && p.isOnline()) {
                                            milkAdminInstance.BL.banListIp.setString(String.valueOf(p.getAddress()).split("/")[1].split(":")[0], banstring);
                                            p.kickPlayer(banstring);
                                            MilkAdminLog.info(p.getName() + " banned for: " + banstring);
                                        } else {
                                            milkAdminInstance.BL.banListIp.setString(ip, banstring);
                                        }
                                        json = new StringBuilder("ok:ipbanned:_IP_," + ip);
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/unban_player")) {
                                    final String user = getParam("user", param);
                                    if (user.length() > 0) {
                                        if (milkAdminInstance.BL.banListName.keyExists(user)) {
                                            milkAdminInstance.BL.banListName.removeKey(user);
                                            json = new StringBuilder("ok:playerunbanned:_NAME_," + user);
                                        } else {
                                            json = new StringBuilder("error:playernotbanned");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/unban_ip")) {
                                    final String ip = getParam("user", param);
                                    if (ip.length() > 0) {
                                        if (milkAdminInstance.BL.banListIp.keyExists(ip)) {
                                            milkAdminInstance.BL.banListIp.removeKey(ip);
                                            json = new StringBuilder("ok:ipunbanned:_IP_," + ip);
                                        } else {
                                            json = new StringBuilder("error:ipnotbanned");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.equals("/player/banlist.json")) {
                                    listBans();
                                } else if (url.startsWith("/player/shoot_arrow")) {
                                    final String user = getParam("user", param);
                                    final int amount = Integer.parseInt(getParam("amount", param));
                                    if (user.length() > 0 && amount > 0 && amount < 1000) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            for (int i = 0; i < amount; i++)
                                                p.launchProjectile(org.bukkit.entity.Arrow.class);
                                            json = new StringBuilder("ok:arrowshooted");
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/shoot_fireball")) {
                                    final String user = getParam("user", param);
                                    final int amount = Integer.parseInt(getParam("amount", param));
                                    if (user.length() > 0 && amount > 0 && amount < 1000) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            for (int i = 0; i < amount; i++)
                                                p.launchProjectile(org.bukkit.entity.Fireball.class);

                                            json = new StringBuilder("ok:fireballshooted");
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/throw_snowball")) {
                                    final String user = getParam("user", param);
                                    final int amount = Integer.parseInt(getParam("amount", param));
                                    if (user.length() > 0 && amount > 0 && amount < 1000) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            for (int i = 0; i < amount; i++)
                                                p.launchProjectile(org.bukkit.entity.Snowball.class);

                                            json = new StringBuilder("ok:throwsnowball");
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/throw_egg")) {
                                    final String user = getParam("user", param);
                                    final int amount = Integer.parseInt(getParam("amount", param));
                                    if (user.length() > 0 && amount > 0 && amount < 1000) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            for (int i = 0; i < amount; i++)
                                                p.launchProjectile(org.bukkit.entity.Egg.class);

                                            json = new StringBuilder("ok:throwegg");
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/throw_bomb")) {
                                    final String user = getParam("user", param);
                                    final int amount = Integer.parseInt(getParam("amount", param));
                                    if (user.length() > 0 && amount > 0 && amount < 1000) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            for (int i = 0; i < amount; i++)
                                                p.launchProjectile(org.bukkit.entity.SmallFireball.class);

                                            json = new StringBuilder("ok:throwegg");
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/change_display_name")) {
                                    final String user = getParam("user", param);
                                    final String name = getParam("name", param);
                                    if (user.length() > 0 && name.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            p.setDisplayName(name);
                                            json = new StringBuilder("ok:changename:_OLD_," + user + ",_NEW_," + name);
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/teleport_to_player")) {
                                    final String user = getParam("user", param);
                                    final String touser = getParam("to_user", param);
                                    if (user.length() > 0 && touser.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        final Player p2 = milkAdminInstance.getServer().getPlayer(touser);
                                        if (p != null && p2 != null && p.isOnline() && p2.isOnline()) {
                                            p.teleport(p2);
                                            json = new StringBuilder("ok:playerteleported");
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/teleport_to_location")) {
                                    final String user = getParam("user", param);
                                    final String x = getParam("x", param);
                                    final String y = getParam("y", param);
                                    final String z = getParam("z", param);
                                    if (user.length() > 0 && x.length() > 0 && y.length() > 1 && y.length() < 128 && z.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            p.teleport(new Location(p.getWorld(), Integer.valueOf(x), Integer.valueOf(y), Integer.valueOf(z)));
                                            json = new StringBuilder("ok:playerteleported");
                                        } else {
                                            json = new StringBuilder("error:playernotconnected");
                                        }
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/is_online")) {
                                    final String user = getParam("user", param);
                                    if (user.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline())
                                            json = new StringBuilder("ok:" + p.isOnline());
                                        else
                                            json = new StringBuilder("ok:false");
                                    } else {
                                        json = new StringBuilder("error:badparameters");
                                    }
                                    print(json.toString(), "text/plain");
                                } else if (url.startsWith("/player/get_ip_port.json")) {
                                    final String user = getParam("user", param);
                                    if (user.length() > 0) {
                                        final Player p = milkAdminInstance.getServer().getPlayer(user);
                                        if (p != null && p.isOnline()) {
                                            final String ip_port = String.valueOf(p.getAddress()).split("/")[1];
                                            json = new StringBuilder("{\"status\":\"ok\",\"ip\":\"" + ip_port.split(":")[0] + "\",\"port\":\"" + ip_port.split(":")[1] + "\"}");
                                        } else {
                                            json = new StringBuilder("{\"status\":\"error\", \"error\":\"playernotconnected\"}");
                                        }
                                    } else {
                                        json = new StringBuilder("{\"status\":\"error\", \"error\":\"badparameters\"}");
                                    }
                                    print(json.toString(), "application/json");
                                } else if (url.equals("/") || url.equals("/index.html")) {
                                    readFileAsBinary(htmlDir + "/index.html", "text/html", true);
                                } else if (url.startsWith("/js/lang/")) {
                                    readFileAsBinary(htmlDir + url, "text/javascript");
                                } else if (url.startsWith("/js/")) {
                                    readFileAsBinary(htmlDir + url, "text/javascript", true);
                                } else if (url.startsWith("/css/")) {
                                    readFileAsBinary(htmlDir + url, "text/css", true);
                                } else if (url.startsWith("/images/")) {
                                    readFileAsBinary(htmlDir + url, null);
                                } else
                                    readFileAsBinary(htmlDir + "/index.html", "text/html", true);
                            }
                        }
                    }
                } catch (final IOException ignored) {
                } catch (final Exception e) {
                    debug("ERROR in ServerParser: " + e);
                }
                timeDebug = System.currentTimeMillis() - timeDebug;
                debug(" - Took " + timeDebug + "ms to process: " + urlDebug);
            }
        } catch (final IOException e) {
            debug("ERROR in ServerInitialize: " + e.getMessage());
        }
    }

    void stopServer() throws IOException {
        if (rootSocket != null)
            rootSocket.close();
    }
}