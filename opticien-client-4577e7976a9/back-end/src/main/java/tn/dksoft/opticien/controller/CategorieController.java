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

import tn.dksoft.opticien.dto.CategorieDto;
import tn.dksoft.opticien.service.CategorieService;

@CrossOrigin(origins = "*")
@RestController
@RequestMapping("/api/categorie")
public class CategorieController {


	private final CategorieService categorieService;
	
	@Autowired
	public CategorieController(CategorieService categorieService) {
		super();
		this.categorieService = categorieService;
	}

	@PostMapping
	public CategorieDto save(@RequestBody CategorieDto categorieDto) {
		return(categorieService.add(categorieDto));
		
	}

	@GetMapping
	public List<CategorieDto> findAll() {
		return(categorieService.findAll());
		
	}

	@GetMapping("/{id}")
	public CategorieDto findById(@PathVariable Long id) {
		return (categorieService.findById(id));
	}
	
	@GetMapping("/{name}")
	public CategorieDto findByName(@PathVariable String name) {
		return (categorieService.findByName(name));
	}

	@PutMapping
	public CategorieDto edit(@RequestBody CategorieDto categorieDto) {
		return (categorieService.edit(categorieDto));
	}

	@DeleteMapping("/{id}")
	public CategorieDto remove(@PathVariable Long id) {
		return (categorieService.remove(id));
	}

}
