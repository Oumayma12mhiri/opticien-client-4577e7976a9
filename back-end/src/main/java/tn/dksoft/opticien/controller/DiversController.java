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

import tn.dksoft.opticien.dto.DiversDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.service.DiversService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/divers")
public class DiversController {

	private final DiversService diversService;
	@Autowired
	public DiversController(DiversService diversService) {
		super();
		this.diversService = diversService;
	}

	@PostMapping
	public DiversDto save(@RequestBody DiversDto diversDto) {
		return (diversService.add(diversDto));
	}

	@GetMapping
	public List<DiversDto> findAll() {
		return (diversService.findAll());
	}

	@GetMapping("/all-by-page")
	public PagedResponse<DiversDto> findAllByPage(SearchRequest request) {
		return (diversService.find(request));
	}

	@GetMapping("/{name}")
	public DiversDto findByName(@PathVariable String name) {
		return (diversService.findByName(name));
	}

	@PutMapping
	public DiversDto edit(@RequestBody DiversDto diversDto) {
		return (diversService.edit(diversDto));
	}

	@DeleteMapping("/{id}")
	public DiversDto remove(@PathVariable Long id) {
		return (diversService.remove(id));
	}
}
