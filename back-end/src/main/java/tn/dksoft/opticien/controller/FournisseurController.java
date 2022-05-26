package tn.dksoft.opticien.controller;

import java.text.ParseException;
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

import tn.dksoft.opticien.dto.FournisseurDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.service.FournisseurService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/fournisseur")
public class FournisseurController {

	private final FournisseurService fournisseurService;

	@Autowired
	public FournisseurController(FournisseurService fournisseurService) {
		super();
		this.fournisseurService = fournisseurService;
	}

	@PostMapping
	public FournisseurDto save(@RequestBody FournisseurDto fournisseurDto) {
		return (fournisseurService.add(fournisseurDto));
	}

	@GetMapping
	public List<FournisseurDto> findAll() {
		return (fournisseurService.findAll());

	}

	@GetMapping("/all-by-page")
	public PagedResponse<FournisseurDto> findAllByPage(SearchRequest request) {
		return (fournisseurService.findAll(request));
	}

	@GetMapping("/{id}")
	public FournisseurDto findById(@PathVariable Long id) {
		return (fournisseurService.findById(id));
	}

	@PutMapping
	public FournisseurDto edit(@RequestBody FournisseurDto fournisseurDto) {
		return (fournisseurService.edit(fournisseurDto));
	}

	@DeleteMapping("/{id}")
	public FournisseurDto remove(@PathVariable Long id) {
		return (fournisseurService.remove(id));
	}
	
	@GetMapping("/find-by-categorie/{id}")
    public List<FournisseurDto> getByCategorie(@PathVariable Long id) throws ParseException {
        return fournisseurService.findByCategorie(id);
    }

}
