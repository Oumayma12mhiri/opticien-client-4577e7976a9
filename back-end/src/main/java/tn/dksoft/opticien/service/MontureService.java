package tn.dksoft.opticien.service;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.MontureDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.dto.search.SearchRequestUtil;
import tn.dksoft.opticien.entity.Monture;
import tn.dksoft.opticien.mapper.MontureMapper;
import tn.dksoft.opticien.repository.MontureRepository;

@Service
@Slf4j
@AllArgsConstructor
public class MontureService {

	public final MontureRepository montureRepository;

	public final MontureMapper montureMapper;

	public MontureDto add(MontureDto montureDto) {
		try {
			Long id = 0L;
			if (montureRepository.findTopByOrderByIdDesc() == null) {
				id = 1L;
			} else {
				id = (long) (montureRepository.findTopByOrderByIdDesc().getId() + 1);
			}

			Monture monture = montureMapper.fromDtoToEntity(montureDto);

			monture.setId(id);

			montureRepository.saveAndFlush(monture);

			return montureMapper.fromEntityToDto(monture);
		} catch (Exception e) {
			log.error("Cannot add Monture", e);
			return null;
		}
	}

	public List<MontureDto> findAll() {
		try {
			List<Monture> montures = montureRepository.findByIsDeletedIsFalse();
			List<MontureDto> montureDtos = montureMapper.fromEntitiesToDtoList(montures);
			log.info("Fournisseurs gotted successfully");
			return montureDtos;
		} catch (Exception e) {
			log.error("Cannot get Monture", e);
			return null;
		}
	}

	public MontureDto remove(Long id) {
		try {
			Monture monture = montureRepository.findByIdAndIsDeletedIsFalse(id);
			monture.setDeleted(true);
			this.montureRepository.saveAndFlush(monture);
			log.info("Monture with id= {} removed successfully", monture.getId());
			return montureMapper.fromEntityToDto(monture);
		} catch (Exception e) {
			log.error("Cannot remove fournisseur", e);
			return null;
		}
	}

	public MontureDto edit(MontureDto montureDto) {
		try {
			Monture monture = montureRepository.findByIdAndIsDeletedIsFalse(montureDto.getId());
			if (montureDto.getMarque() != null) {
				monture.setMarque(montureDto.getMarque());
			}
			
			if (montureDto.getReference() != null) {
				monture.setReference(montureDto.getReference());
			}

			if (montureDto.getQuantite() != 0) {
				monture.setQuantite(montureDto.getQuantite());
			}

			if (montureDto.getPrixAchat() != null) {
				monture.setPrixAchat(montureDto.getPrixAchat());
			}
			if (montureDto.getPrixVente() != null) {
				monture.setPrixVente(montureDto.getPrixVente());
			}
			

			montureRepository.saveAndFlush(monture);
			log.info("Monture with id= {} edited successfully", monture.getId());
			return montureMapper.fromEntityToDto(montureRepository.findByIdAndIsDeletedIsFalse(montureDto.getId()));

		} catch (Exception e) {
			log.error("Cannot edit monture", e);
			return null;
		}
	}

	public PagedResponse<MontureDto> findAll(final SearchRequest request) {
		try {
			Page<Monture> montures = montureRepository.findByIsDeletedIsFalse(SearchRequestUtil.toPageRequest(request));
			log.info("Monture gotted successfully ");
			return new PagedResponse<MontureDto>(montureMapper.fromEntitiesToDtoList(montures.getContent()),
					montures.getSize(), montures.getSize());
		} catch (Exception e) {
			log.error("Cannot get monture", e);
			return null;
		}
	}

}
