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

import tn.dksoft.opticien.dto.MontureDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.service.MontureService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/monture")
public class MontureController {

	private final MontureService montureService;

	@Autowired
	public MontureController(MontureService montureService) {
		super();
		this.montureService = montureService;
	}

	@PostMapping
	public MontureDto save(@RequestBody MontureDto montureDto) {
		return (montureService.add(montureDto));
	}

	@GetMapping
	public List<MontureDto> findAll() {
		return (montureService.findAll());

	}

	@DeleteMapping("/{id}")
	public MontureDto remove(@PathVariable Long id) {
		return (montureService.remove(id));
	}

	@PutMapping
	public MontureDto edit(@RequestBody MontureDto montureDto) {
		return (montureService.edit(montureDto));
	}

	@GetMapping("/all-by-page")
	public PagedResponse<MontureDto> findAllByPage(SearchRequest request) {
		return (montureService.findAll(request));
	}
}
