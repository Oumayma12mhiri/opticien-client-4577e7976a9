package tn.dksoft.opticien.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import tn.dksoft.opticien.dto.ClientDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.service.ClientService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/client")
public class ClientController {
	
	private final ClientService clientService;
	
	@Autowired
	public ClientController(ClientService clientService) {
		super();
		this.clientService = clientService;
	}

	@PostMapping
	public ClientDto save(@RequestBody ClientDto clientDto) {
		System.out.println(clientDto.getDateNaissance());
		return (clientService.add(clientDto));

	}

	@GetMapping
	public List<ClientDto> findAll() {
		return (clientService.findAll());

	}

	@GetMapping("/{id}")
	public ClientDto findById(@PathVariable Long id) {
		return (clientService.findById(id));

	}

	@GetMapping("/findByEmail/{email}")
	public ClientDto findByMail(@PathVariable String email) {
		return (clientService.findByEmail(email));

	}

	@GetMapping("/search")
	public PagedResponse<ClientDto> findBy(SearchRequest request) {
		return (clientService.find(request));

	}

	@PutMapping
	public ClientDto edit(@RequestBody ClientDto clientDto) {
		return (clientService.update(clientDto));
	}

	@DeleteMapping("/{id}")
	public ClientDto remove(@PathVariable Long id) {
		return (clientService.delete(id));

	}

}
