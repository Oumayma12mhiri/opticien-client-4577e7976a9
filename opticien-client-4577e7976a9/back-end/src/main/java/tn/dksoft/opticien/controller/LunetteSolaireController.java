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

import tn.dksoft.opticien.dto.LunetteSolaireDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.service.LunetteSolaireService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/lunette")
public class LunetteSolaireController {

	
	private final LunetteSolaireService lunetteService;

	@Autowired
	public LunetteSolaireController(LunetteSolaireService lunetteService) {
		super();
		this.lunetteService = lunetteService;
	}


	@PostMapping
	public LunetteSolaireDto save(@RequestBody LunetteSolaireDto dto) {
		return (lunetteService.add(dto));
	}

	@GetMapping
	public List<LunetteSolaireDto> findAll() {
		return (lunetteService.findAll());
	}

	@GetMapping("/all-by-page")
	public PagedResponse<LunetteSolaireDto> findAllByPage(SearchRequest request) {
		return (lunetteService.findAll(request));
	}

	@GetMapping("/{ref}")
	public LunetteSolaireDto findByRef(@PathVariable String ref) {
		return (lunetteService.findByRef(ref));
	}

	@PutMapping
	public LunetteSolaireDto edit(@RequestBody LunetteSolaireDto dto) {
		return (lunetteService.edit(dto));
	}

	@DeleteMapping("/{id}")
	public LunetteSolaireDto remove(@PathVariable Long id) {
		return (lunetteService.remove(id));	
	}
}
