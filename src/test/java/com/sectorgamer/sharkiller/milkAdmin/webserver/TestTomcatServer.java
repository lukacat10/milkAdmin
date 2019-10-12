package com.sectorgamer.sharkiller.milkAdmin.webserver;

import org.junit.jupiter.api.Test;

public class TestTomcatServer {
    @Test
    public void testTomcatServer(){
        TomcatServer.start(8085);
    }
}
