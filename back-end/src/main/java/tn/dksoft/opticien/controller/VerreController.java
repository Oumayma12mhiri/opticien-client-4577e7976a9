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

import tn.dksoft.opticien.dto.VerreDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.service.VerreService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/verre")
public class VerreController {

	private final VerreService verreService;

	@Autowired
	public VerreController(VerreService verreService) {
		super();
		this.verreService = verreService;
	}

	@PostMapping
	public VerreDto save(@RequestBody VerreDto verreDto) {
		return (verreService.add(verreDto));
	}

	@GetMapping
	public List<VerreDto> findAll() {
		return (verreService.findAll());

	}

	@GetMapping("/all-by-page")
	public PagedResponse<VerreDto> findAllByPage(SearchRequest request) {
		return (verreService.findAll(request));
	}

	@GetMapping("/{code}")
	public VerreDto findByCode(@PathVariable String code) {
		return (verreService.findByCode(code));
	}

	@PutMapping
	public VerreDto edit(@RequestBody VerreDto verreDto) {
		return (verreService.edit(verreDto));
	}

	@DeleteMapping("/{id}")
	public VerreDto remove(@PathVariable Long id) {
		return (verreService.remove(id));
	}

}
