package io.getarrays.server.resource;

import io.getarrays.server.enums.Status;
import io.getarrays.server.model.Response;
import io.getarrays.server.model.Server;
import io.getarrays.server.service.ServerService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.io.IOException;
import java.time.LocalDateTime;
import java.util.Map;

import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@CrossOrigin(origins = {"http://localhost:3000", "http://localhost:4200"})
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

    @GetMapping("/{id}")
    @ResponseStatus(OK)
    public Response getServer(@PathVariable Long id){
        return responseBuilder("Server information")
                .data(Map.of("server", service.get(id)))
                .build();
    }


    @DeleteMapping("/{id}")
    @ResponseStatus(OK)
    public Response deleteServer(@PathVariable Long id){
        return responseBuilder("Server information")
                .data(Map.of("deleted", service.delete(id)))
                .build();
    }

    @PostMapping
    @ResponseStatus(CREATED)
    public Response saveServer(@RequestBody Server server) {
        return responseBuilder("Saving")
                .data(Map.of("server", service.save(server)))
                .build();
    }

    @GetMapping("/ping/{ipAddress}")
    @ResponseStatus(OK)
    public Response pingIpAddress(@PathVariable String ipAddress) throws IOException {
        Server server = service.ping(ipAddress);
        return responseBuilder(server.getStatus().equals(Status.SERVER_UP)?
                "Ping success": "Ping failed")
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
