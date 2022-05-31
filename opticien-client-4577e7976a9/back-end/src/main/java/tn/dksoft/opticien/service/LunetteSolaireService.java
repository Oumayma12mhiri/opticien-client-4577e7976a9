package tn.dksoft.opticien.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.LunetteSolaireDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.dto.search.SearchRequestUtil;
import tn.dksoft.opticien.entity.Fournisseur;
import tn.dksoft.opticien.entity.LunetteSolaire;
import tn.dksoft.opticien.mapper.LunetteSolaireMapper;
import tn.dksoft.opticien.repository.FournisseurRepository;
import tn.dksoft.opticien.repository.LunetteSolaireRepository;

@Service
@Slf4j
@AllArgsConstructor
public class LunetteSolaireService {

	private final LunetteSolaireRepository lunetteSolaireRepository;

	private final LunetteSolaireMapper lunetteSolaireMapper;
	
	public final FournisseurRepository fournisseurRepository;

	public LunetteSolaireDto add(LunetteSolaireDto dto) {
		try {
			LunetteSolaire lunette = lunetteSolaireMapper.fromDtoToEntity(dto);
			log.info("fournisseur {} ",dto.getFournisseur());
			Fournisseur fournisseur = fournisseurRepository.findByIdAndIsDeletedIsFalse(dto.getFournisseur().getId());
			lunette.setFournisseur(fournisseur);
			
			lunetteSolaireRepository.saveAndFlush(lunette);
			log.info("Lunette Solaire with id= {} saved successfully", lunette.getId());
			return lunetteSolaireMapper.fromEntityToDto(lunette);
		} catch (Exception e) {
			log.error("Cannot add divers ", e);
			return null;
		}

	}

	public PagedResponse<LunetteSolaireDto> findAll(final SearchRequest request) {
		try {
			Page<LunetteSolaire> lunettes = lunetteSolaireRepository
					.findByIsDeletedFalse(SearchRequestUtil.toPageRequest(request));
			log.info("Lunette Solaire gotted successfully ");
			return new PagedResponse<LunetteSolaireDto>(
					lunetteSolaireMapper.fromEntitiesToDtoList(lunettes.getContent()), lunettes.getSize(),
					lunettes.getTotalElements());

		} catch (Exception e) {
			log.error("Cannot get Lunette Solaire", e);
			return null;

		}
	}

	public List<LunetteSolaireDto> findAll() {
		try {
			List<LunetteSolaire> lunettes = lunetteSolaireRepository.findByIsDeletedIsFalse();
			log.info("Lunette Solaire gotted successfully {}",lunettes.size());
			return lunetteSolaireMapper.fromEntitiesToDtoList(lunettes);
		} catch (Exception e) {
			log.error("Cannot get Lunette Solaire", e);
			return null;
		}
	}

	public LunetteSolaireDto edit(LunetteSolaireDto lunetteDto) {
		try {
			log.info("lunetteDto ",lunetteDto);
			Optional<LunetteSolaire> lunetteSolaireOptional = lunetteSolaireRepository
					.findByIdAndIsDeletedIsFalse(lunetteDto.getId());
			if (lunetteSolaireOptional.isPresent()) {
				LunetteSolaire lunette = lunetteSolaireOptional.get();
				lunette.setRef(lunetteDto.getRef());
				
				Fournisseur fournisseur = fournisseurRepository.findByIdAndIsDeletedIsFalse(lunetteDto.getFournisseur().getId());
				lunette.setFournisseur(fournisseur);
				
				lunette.setMarque(lunetteDto.getMarque());
				lunette.setQuantite(lunetteDto.getQuantite());
				lunette.setPrixAchat(lunetteDto.getPrixAchat());
				lunette.setPrixVente(lunetteDto.getPrixVente());

				lunetteSolaireRepository.saveAndFlush(lunette);
				log.info("Lunette with id= {} edited successfully", lunetteDto.getId());
				return lunetteSolaireMapper.fromEntityToDto(lunette);
			} else {
				log.error("Cannot get Lunette ");
				return null;
			}
		} catch (Exception e) {
			log.error("Cannot edit lunette Solaire", e);
			return null;
		}
	}

	public LunetteSolaireDto findByRef(String ref) {
		try {
			LunetteSolaire lunette = lunetteSolaireRepository.findByRefAndIsDeletedFalse(ref);
			LunetteSolaireDto lunetteDto = lunetteSolaireMapper.fromEntityToDto(lunette);
			log.info("Lunette Solaire  gotted successfully");
			return lunetteDto;
		} catch (Exception e) {
			log.error("Cannot get lunette solaire", e);
			return null;
		}
	}

	public LunetteSolaireDto remove(Long id) {
		Optional<LunetteSolaire> lunetteOptional = lunetteSolaireRepository.findById(id);
		if (lunetteOptional.isPresent()) {
			LunetteSolaire lunette = lunetteOptional.get();
			lunette.setDeleted(true);
			lunetteSolaireRepository.saveAndFlush(lunette);
			log.info("Lunette Solaire with id= {} removed successfully", lunette.getId());
			return lunetteSolaireMapper.fromEntityToDto(lunette);
		} else {
			log.error("Cannot get Lunette Solaire");
			return null;
		}
	}
}
