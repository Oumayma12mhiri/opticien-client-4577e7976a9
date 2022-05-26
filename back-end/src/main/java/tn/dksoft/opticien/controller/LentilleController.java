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

import tn.dksoft.opticien.dto.LentilleDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.service.LentilleService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/lentille")
public class LentilleController {

	private final LentilleService lentilleService;

	@Autowired
	public LentilleController(LentilleService lentilleService) {
		super();
		this.lentilleService = lentilleService;
	}

	@PostMapping
	public LentilleDto save(@RequestBody LentilleDto lentilleDto) {
		return (lentilleService.add(lentilleDto));

	}

	@GetMapping
	public List<LentilleDto> findAll() {
		return (lentilleService.findAll());

	}

	@GetMapping("/{id}")
	public LentilleDto findById(@PathVariable Long id) {
		return (lentilleService.findById(id));

	}

	@GetMapping("/search")
	public PagedResponse<LentilleDto> findBy(SearchRequest request) {
		return (lentilleService.find(request));

	}

	@PutMapping
	public LentilleDto edit(@RequestBody LentilleDto lentilleDto) {
		return (lentilleService.update(lentilleDto));
	}

	@DeleteMapping("/{id}")
	public LentilleDto remove(@PathVariable Long id) {
		return (lentilleService.delete(id));

	}

}
