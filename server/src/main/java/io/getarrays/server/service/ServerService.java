package io.getarrays.server.service;

import io.getarrays.server.model.Server;

import java.io.IOException;
import java.util.Collection;

public interface ServerService {
    Server save(Server server);
    Collection<Server> list();
    Server get(Long id);
    Boolean delete(Long id);

    Server ping(String ipAddress) throws IOException;
}
