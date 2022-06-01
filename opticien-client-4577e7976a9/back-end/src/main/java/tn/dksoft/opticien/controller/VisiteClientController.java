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
import tn.dksoft.opticien.dto.VisiteClientDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.service.VisiteClientService;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/visiteclient")
public class VisiteClientController {

	private final VisiteClientService visiteclientService;

	@Autowired
	public VisiteClientController(VisiteClientService visiteclientService) {
		super();
		this.visiteclientService = visiteclientService;
	}
	
	

	@PostMapping
	public VisiteClientDto save(@RequestBody VisiteClientDto visiteClientDto) {
		return (visiteclientService.add(visiteClientDto));

	}

	@GetMapping("/{id}")
	public VisiteClientDto findById(@PathVariable Long id) {
		return (visiteclientService.findById(id));

	}

	@GetMapping("/search")
	public PagedResponse<VisiteClientDto> findBy(SearchRequest request) {
		return (visiteclientService.find(request));

	}
	
	@GetMapping("/find-by-vente/{id}")
	public List<VisiteClientDto> findByVente(@PathVariable Long id) {
		return (visiteclientService.findByVente(id));
	}
	
	@GetMapping("/find-by-client/{id}")
	public List<VisiteClientDto> findByClient(@PathVariable Long id) {
		return (visiteclientService.findByClient(id));
	}

	@PutMapping
	public VisiteClientDto edit(@RequestBody VisiteClientDto visiteClientDto) {
		return (visiteclientService.update(visiteClientDto));
	}

	@DeleteMapping("/{id}")
	public VisiteClientDto remove(@PathVariable Long id) {
		return (visiteclientService.delete(id));

	}

}
