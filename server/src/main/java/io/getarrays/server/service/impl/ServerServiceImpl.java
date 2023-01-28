package io.getarrays.server.service.impl;

import io.getarrays.server.enums.Status;
import io.getarrays.server.model.Server;
import io.getarrays.server.repo.ServerRepository;
import io.getarrays.server.service.ServerService;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.io.IOException;
import java.net.InetAddress;
import java.util.Collection;

@Service
@Transactional
@RequiredArgsConstructor
@Slf4j
public class ServerServiceImpl implements ServerService {

    private final ServerRepository repository;

    @Override
    public Server save(Server server) {
        log.info("Saving a new server {}", server.getName());
        return repository.save(server);
    }

    @Override
    public Collection<Server> list() {
        log.info("Fetching all servers");
        return repository.findAll();
    }

    @Override
    public Server get(Long id) {
        log.info("Fetching server by ID: {}", id);
        return repository.findById(id).orElseThrow();
    }

    @Override
    public Boolean delete(Long id) {
        log.info("Deleting server by ID: {}", id);
        repository.deleteById(id);
        return Boolean.TRUE;
    }

    @Override
    public Server ping(String ipAddress) throws IOException {
        log.info("Pinging the IP Address: {}", ipAddress);
        Server server = repository.findByIpAddress(ipAddress).orElseThrow();
        InetAddress address = InetAddress.getByName(ipAddress);
        server.setStatus(address.isReachable(1000)? Status.SERVER_UP: Status.SERVER_DOWN);
        return repository.save(server);
    }
}
