package tn.dksoft.opticien.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.FournisseurDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.dto.search.SearchRequestUtil;
import tn.dksoft.opticien.entity.Categorie;
import tn.dksoft.opticien.entity.Fournisseur;
import tn.dksoft.opticien.mapper.FournisseurMapper;
import tn.dksoft.opticien.repository.CategorieRepository;
import tn.dksoft.opticien.repository.FournisseurRepository;

@Service
@Slf4j
@AllArgsConstructor
public class FournisseurService {

	public final FournisseurRepository fournisseurRepository;

	public final FournisseurMapper fournisseurMapper;
	
	public final CategorieRepository categorieRepository;
	
	public FournisseurDto add(FournisseurDto fournisseurDto) {
		log.info("categorie with id= {}",fournisseurDto.getCategorie());
		try {
			Long id = 0L;
			if (fournisseurRepository.findTopByOrderByIdDesc() == null) {
				id = 1L;
			} else {
				id = (long) (fournisseurRepository.findTopByOrderByIdDesc().getId() + 1);
			}

			Fournisseur fournisseur = fournisseurMapper.fromDtoToEntity(fournisseurDto);

			fournisseur.setId(id);
			
			Categorie categorie = categorieRepository.findByIdAndIsDeletedIsFalse(fournisseurDto.getCategorie().getId());
			fournisseur.setCategorie(categorie);

			fournisseurRepository.saveAndFlush(fournisseur);

			return fournisseurMapper.fromEntityToDto(fournisseur);
		} catch (Exception e) {
			log.error("Cannot add Fournisseur", e);
			return null;
		}
	}

	public PagedResponse<FournisseurDto> findAll(final SearchRequest request) {
		try {
			Page<Fournisseur> fournisseurs = fournisseurRepository
					.findByIsDeletedIsFalse(SearchRequestUtil.toPageRequest(request));
			log.info("Fournisseur gotted successfully ");
			return new PagedResponse<FournisseurDto>(fournisseurMapper.fromEntitiesToDtoList(fournisseurs.getContent()),
					fournisseurs.getSize(), fournisseurs.getSize());
		} catch (Exception e) {
			log.error("Cannot get Fournisseur", e);
			return null;
		}
	}

	public List<FournisseurDto> findAll() {
		try {
			List<Fournisseur> fournisseurs = fournisseurRepository.findByIsDeletedIsFalse();
			List<FournisseurDto> fournisseurDto = fournisseurMapper.fromEntitiesToDtoList(fournisseurs);
			log.info("Fournisseurs gotted successfully");
			return fournisseurDto;
		} catch (Exception e) {
			log.error("Cannot get fournisseur", e);
			return null;
		}
	}

	public FournisseurDto edit(FournisseurDto fournisseurDto) {
		try {
			Fournisseur fournisseur = fournisseurRepository.findByIdAndIsDeletedIsFalse(fournisseurDto.getId());
			if (fournisseurDto.getName() != null) {
				fournisseur.setName(fournisseurDto.getName());
			}

			if (fournisseurDto.getMatriculeFiscale() != null) {
				fournisseur.setMatriculeFiscale(fournisseurDto.getMatriculeFiscale());
			}

			if (fournisseurDto.getNumTel() != null) {
				fournisseur.setNumTel(fournisseurDto.getNumTel());
			}

			if (fournisseurDto.getEmail() != null) {
				fournisseur.setEmail(fournisseurDto.getEmail());
			}

			if (fournisseurDto.getAdresse() != null) {
				fournisseur.setAdresse(fournisseurDto.getAdresse());
			}

			fournisseurRepository.saveAndFlush(fournisseur);
			log.info("Fournisseur with id= {} edited successfully", fournisseur.getId());
			return fournisseurMapper
					.fromEntityToDto(fournisseurRepository.findByIdAndIsDeletedIsFalse(fournisseurDto.getId()));

		} catch (Exception e) {
			log.error("Cannot edit fournisseur", e);
			return null;
		}
	}

	public FournisseurDto findById(Long id) {
		try {
			Fournisseur fournisseur = fournisseurRepository.findByIdAndIsDeletedIsFalse(id);
			FournisseurDto fournisseurDto = fournisseurMapper.fromEntityToDto(fournisseur);
			log.info("Fournisseur gotted successfully");
			return fournisseurDto;
		} catch (Exception e) {
			log.error("Cannot get fournisseur", e);
			return null;
		}
	}

	public FournisseurDto remove(Long id) {
		try {
			Fournisseur fournisseur = fournisseurRepository.findByIdAndIsDeletedIsFalse(id);
			fournisseur.setDeleted(true);
			this.fournisseurRepository.saveAndFlush(fournisseur);
			log.info("Fournisseur with id= {} removed successfully", fournisseur.getId());
			return fournisseurMapper.fromEntityToDto(fournisseur);
		} catch (Exception e) {
			log.error("Cannot remove fournisseur", e);
			return null;
		}
	}

//	public List<FournisseurDto> findByCategorie(Long categorieId) {
//		try {
//			List<Fournisseur> fournisseurs = fournisseurRepository.findByCategorieIdAndIsDeletedIsFalse(categorieId);
//			log.info("Fournisseurs gotted successfully ");
//			return fournisseurMapper.fromEntitiesToDtoList(fournisseurs);
//
//		} catch (Exception e) {
//			log.error("Cannot get TypeOfLeave", e);
//			return null;
//
//		}
//	}
	
	public List<FournisseurDto> findByCategorieByName(String name) {
		try {
			List<Fournisseur> fournisseurs = fournisseurRepository.findByCategorieNameAndIsDeletedIsFalse(name);
			log.info("Fournisseurs gotted successfully {} ",fournisseurs);
			return fournisseurMapper.fromEntitiesToDtoList(fournisseurs);

		} catch (Exception e) {
			log.error("Cannot get TypeOfLeave", e);
			return null;

		}
	}
}
