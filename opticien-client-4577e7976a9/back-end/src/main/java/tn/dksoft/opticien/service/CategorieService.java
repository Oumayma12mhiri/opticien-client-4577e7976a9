package tn.dksoft.opticien.service;

import java.util.List;

import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.CategorieDto;
import tn.dksoft.opticien.entity.Categorie;
import tn.dksoft.opticien.mapper.CategorieMapper;
import tn.dksoft.opticien.repository.CategorieRepository;

@Service
@Slf4j
@AllArgsConstructor
public class CategorieService {

	public final CategorieRepository categorieRepository;

	public final CategorieMapper categorieMapper;
	

	public CategorieDto add(CategorieDto categorieDto) {
		try {
			Long id = 0L;
			if (categorieRepository.findTopByOrderByIdDesc() == null) {
				id = 1L;
			} else {
				id = (long) (categorieRepository.findTopByOrderByIdDesc().getId() + 1);
			}

			Categorie categorie = categorieMapper.fromDtoToEntity(categorieDto);
			categorie.setId(id);
			categorieRepository.saveAndFlush(categorie);

			return categorieMapper.fromEntityToDto(categorie);
		} catch (Exception e) {
			log.error("Cannot add Categorie", e);
			return null;
		}
	}

	public List<CategorieDto> findAll() {
		try {
			List<Categorie> categories = categorieRepository.findByIsDeletedIsFalse();
			List<CategorieDto> categorieDto = categorieMapper.fromEntitiesToDtoList(categories);
			log.info("Categorie gotted successfully");
			return categorieDto;
		} catch (Exception e) {
			log.error("Cannot get categories", e);
			return null;
		}
	}
	
	public CategorieDto edit(CategorieDto categorieDto) {
		try {
			Categorie categorie = categorieRepository.findByIdAndIsDeletedIsFalse(categorieDto.getId());
			if (categorieDto.getName() != null) {
				categorie.setName(categorieDto.getName());
			}

			categorieRepository.saveAndFlush(categorie);
			log.info("Categorie with id= {} edited successfully", categorie.getId());
			return categorieMapper
					.fromEntityToDto(categorieRepository.findByIdAndIsDeletedIsFalse(categorieDto.getId()));

		} catch (Exception e) {
			log.error("Cannot edit Categorie", e);
			return null;
		}
	}

	public CategorieDto findById(Long id) {
		try {
			Categorie categorie = categorieRepository.findByIdAndIsDeletedIsFalse(id);
			CategorieDto categorieDto = categorieMapper.fromEntityToDto(categorie);
			log.info("Categorie gotted successfully");
			return categorieDto;
		} catch (Exception e) {
			log.error("Cannot get Categorie", e);
			return null;
		}
	}

	public CategorieDto remove(Long id) {
		try {
			Categorie categorie = categorieRepository.findByIdAndIsDeletedIsFalse(id);
			categorie.setDeleted(true);
			this.categorieRepository.saveAndFlush(categorie);
			log.info("Categorie with id= {} removed successfully", categorie.getId());
			return categorieMapper.fromEntityToDto(categorie);
		} catch (Exception e) {
			log.error("Cannot remove Categorie", e);
			return null;
		}
	}
}
