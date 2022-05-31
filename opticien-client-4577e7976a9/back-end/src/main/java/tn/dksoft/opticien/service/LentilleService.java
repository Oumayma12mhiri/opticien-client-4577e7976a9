package tn.dksoft.opticien.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.LentilleDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.dto.search.SearchRequestUtil;
import tn.dksoft.opticien.entity.Fournisseur;
import tn.dksoft.opticien.entity.Lentille;
import tn.dksoft.opticien.mapper.LentilleMapper;
import tn.dksoft.opticien.repository.FournisseurRepository;
import tn.dksoft.opticien.repository.LentilleRepository;

@Service
@Slf4j
@AllArgsConstructor
public class LentilleService {
	private final LentilleRepository lentilleRepository;

	private final LentilleMapper lentilleMapper;
	
	public final FournisseurRepository fournisseurRepository;

	public LentilleDto delete(Long id) {
		try {

			Lentille lentille = lentilleRepository.findByIdAndIsDeletedIsFalse(id);
			lentille.setDeleted(true);
			lentilleRepository.saveAndFlush(lentille);
			log.info("letille with id= {} removed successfully", lentille.getId());
			return lentilleMapper.fromEntityToDto(lentille);
		} catch (Exception e) {
			log.error("Cannot remove lentille with id={}", id, e);
			return null;
		}
	}

	public LentilleDto add(LentilleDto lentilleDto) {
		try {

			Lentille lentille = lentilleMapper.fromDtoToEntity(lentilleDto);
			
			Fournisseur fournisseur = fournisseurRepository.findByIdAndIsDeletedIsFalse(lentilleDto.getFournisseur().getId());
			lentille.setFournisseur(fournisseur); 
			lentilleRepository.saveAndFlush(lentille);
			log.info("success added lentille");
			return lentilleMapper.fromEntityToDto(lentille);
		} catch (Exception e) {
			log.error("can't add access lentille", e);
			return null;
		}
	}

	public LentilleDto update(LentilleDto lentilleDto) {
		try {
			Lentille lentille = lentilleMapper.fromDtoToEntity(lentilleDto);
			lentilleRepository.findByIdAndIsDeletedIsFalse(lentilleDto.getId());
			lentilleRepository.saveAndFlush(lentille);
			log.info("lentille with id= {} successfully ", lentille.getId());
			return lentilleMapper.fromEntityToDto(lentille);
		} catch (Exception e) {
			log.error("Cannot get lentille", e);
			return null;
		}

	}

	public List<LentilleDto> findAll() {
		try {
			List<Lentille> lentilles = lentilleRepository.findByIsDeletedIsFalse();
			List<LentilleDto> lentilleDtos = lentilleMapper.fromEntitiesToDtoList(lentilles);
			log.info("lentille gotted successfully");
			return lentilleDtos;
		} catch (Exception e) {
			log.error("Cannot get lentilles", e);
			return null;
		}
	}

	public PagedResponse<LentilleDto> find(final SearchRequest request) {
		try {
			Page<Lentille> lentilles = lentilleRepository
					.findByIsDeletedIsFalse(SearchRequestUtil.toPageRequest(request));
			List<LentilleDto> lentilleDtos = lentilleMapper.fromEntitiesToDtoList(lentilles.getContent());
			log.info("lentille gotted successfully");
			return new PagedResponse<LentilleDto>(lentilleDtos, lentilles.getSize(), lentilles.getTotalElements());
		} catch (Exception e) {
			log.error("Cannot get lentille", e);
			return null;
		}
	}

	public LentilleDto findById(Long id) {
		try {
			Lentille lentilles = lentilleRepository.findByIdAndIsDeletedIsFalse(id);
			LentilleDto lentilleDtos = lentilleMapper.fromEntityToDto(lentilles);
			log.info("lentille gotted successfully");
			return lentilleDtos;
		} catch (Exception e) {
			log.error("Cannot get lentille", e);
			return null;
		}
	}

	public LentilleDto findByCode(String code) {
		try {
			Lentille lentilles = lentilleRepository.findByCodeAndIsDeletedFalse(code);
			LentilleDto lentilleDtos = lentilleMapper.fromEntityToDto(lentilles);
			log.info("lentille gotted successfully");
			return lentilleDtos;
		} catch (Exception e) {
			log.error("Cannot get lentille", e);
			return null;
		}
	}

	public LentilleDto findByMarque(String marque) {
		try {
			Lentille lentilles = lentilleRepository.findByMarque(marque);
			LentilleDto lentilleDtos = lentilleMapper.fromEntityToDto(lentilles);
			log.info("lentille gotted successfully");
			return lentilleDtos;
		} catch (Exception e) {
			log.error("Cannot get lentille", e);
			return null;
		}
	}

}
