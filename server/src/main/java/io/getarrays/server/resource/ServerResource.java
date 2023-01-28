package io.getarrays.server.resource;

import io.getarrays.server.model.Response;
import io.getarrays.server.model.Server;
import io.getarrays.server.service.ServerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Map;

import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/server")
@RequiredArgsConstructor
public class ServerResource {


    private final ServerService service;

    @GetMapping("/list")
    @ResponseStatus(OK)
    public Response getServers() {
        return responseBuilder("Servers retrieved")
                .data(Map.of("servers", service.list()))
                .build();
    }

    @PostMapping
    @ResponseStatus(OK)
    public Response saveServer(@RequestBody Server server) {
        Server savedServer = service.save(server);
        return responseBuilder("Saving")
                .data(Map.of("server", savedServer))
                .build();
    }

    @GetMapping("/ping/{ipAddress}")
    @ResponseStatus(OK)
    public Response pingIpAddress(@PathVariable String ipAddress) throws IOException {
        Server server = service.ping(ipAddress);
        return responseBuilder("Servers retrieved")
                .data(Map.of("server", server))
                .build();
    }

    private Response.ResponseBuilder<?, ?> responseBuilder(String message) {
        return Response.builder()
                .timestamp(LocalDateTime.now())
                .status(OK)
                .statusCode(OK.value())
                .message(message);
    }

}
