package tn.dksoft.opticien.controller;

import java.util.Date;
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

import tn.dksoft.opticien.dto.VenteDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.service.VenteService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/vente")
public class VenteController {

	private final VenteService venteService;

	@Autowired
	public VenteController(VenteService venteService) {
		super();
		this.venteService = venteService;
	}

	@PostMapping
	public VenteDto save(@RequestBody VenteDto venteDto) {
		return (venteService.add(venteDto));

	}

	@GetMapping("/{id}")
	public VenteDto findById(@PathVariable Long id) {
		return (venteService.findById(id));

	}
	
	@GetMapping("/find-by-date/{date}")
	public VenteDto findByDate(@PathVariable Date date) {
		return (venteService.findByDate(date));

	}
	
	@GetMapping("/find-by-client/{id}")
	public List<VenteDto> findByClient(@PathVariable Long id) {
		return (venteService.findByClient(id));

	}

	@GetMapping("/search")
	public PagedResponse<VenteDto> findBy(SearchRequest request) {
		return (venteService.find(request));

	}

	@PutMapping
	public VenteDto edit(@RequestBody VenteDto venteDto) {
		return (venteService.update(venteDto));
	}

	@DeleteMapping("/{id}")
	public VenteDto remove(@PathVariable Long id) {
		return (venteService.delete(id));

	}

}
