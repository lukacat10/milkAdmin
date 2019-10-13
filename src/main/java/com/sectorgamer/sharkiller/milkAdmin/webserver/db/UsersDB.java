package com.sectorgamer.sharkiller.milkAdmin.webserver.db;

public class UsersDB {
    public static boolean checkUserAccount(String username, String password){
        if(username.equals("admin") && password.equals("admin"))
            return true;
        return false;
    }
}
