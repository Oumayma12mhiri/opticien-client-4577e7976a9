package tn.dksoft.opticien.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.DiversDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.dto.search.SearchRequestUtil;
import tn.dksoft.opticien.entity.Divers;
import tn.dksoft.opticien.entity.Fournisseur;
import tn.dksoft.opticien.mapper.DiversMapper;
import tn.dksoft.opticien.repository.DiversRepository;
import tn.dksoft.opticien.repository.FournisseurRepository;

@Service
@Slf4j
@AllArgsConstructor
public class DiversService {

	private final DiversRepository diversRepository;
	
	private final DiversMapper diversMapper;
	
	public final FournisseurRepository fournisseurRepository;

	public DiversDto add(DiversDto diversDto) {

		try {
			Divers divers = diversMapper.fromDtoToEntity(diversDto); 
			Fournisseur fournisseur = fournisseurRepository.findByIdAndIsDeletedIsFalse(diversDto.getFournisseur().getId());
			divers.setFournisseur(fournisseur);
			diversRepository.saveAndFlush(divers);
			log.info("Article divers with id= {} saved successfully", divers.getId());
			return diversMapper.fromEntityToDto(divers);
		} catch (Exception e) {
			log.error("Cannot add divers ", e);
			return null;
		}

	}

	public PagedResponse<DiversDto> find(final SearchRequest request) {
		try {
			Page<Divers> diverss = diversRepository.findByIsDeletedFalse(SearchRequestUtil.toPageRequest(request));
			log.info("Door gotted successfully ");
			return new PagedResponse<DiversDto>(diversMapper.fromEntitiesToDtoList(diverss.getContent()),diverss.getSize(),diverss.getTotalElements());

		} catch (Exception e) {
			log.error("Cannot get Article Divers", e);
			return null;

		}
	}
	
	public List<DiversDto> findAll() {
		try {
			List<Divers> divers = diversRepository.findByIsDeletedIsFalse();
			log.info("Door gotted successfully ");
			return diversMapper.fromEntitiesToDtoList(divers);
		} catch (Exception e) {
			log.error("Cannot get Article divers", e);
			return null;
		}
	}

	public DiversDto edit(DiversDto diversDto) {
		try {
			Optional<Divers> diverOptional = diversRepository.findByIdAndIsDeletedIsFalse(diversDto.getId());
			if (diverOptional.isPresent()) {
				Divers diver = diverOptional.get();
				diver.setName(diversDto.getName());
				Fournisseur fournisseur = fournisseurRepository.findByIdAndIsDeletedIsFalse(diversDto.getFournisseur().getId());
				diver.setFournisseur(fournisseur);
				diver.setReference(diversDto.getReference());
				diver.setPrixAchat(diversDto.getPrixAchat());;
				diver.setPrixVente(diversDto.getPrixVente());
				diver.setQuantite(diversDto.getQuantite());
				
				diversRepository.saveAndFlush(diver);
				log.info("Article divers with id= {} edited successfully", diversDto.getId());
				return diversMapper.fromEntityToDto(diver);
			} else {
				log.error("Cannot get article divers");
				return null;
			}
		} catch (Exception e) {
			log.error("Cannot edit article divers", e);
			return null;
		}
	}

	public DiversDto findByName(String name) {
		try {
			Divers divers = diversRepository.findByNameAndIsDeletedFalse(name) ; 
			DiversDto diversDto = diversMapper.fromEntityToDto(divers);
			log.info("Article divers  gotted successfully");
			return diversDto;
		} catch (Exception e) {
			log.error("Cannot get article", e);
			return null;
		}
	}

	public DiversDto remove(Long id) {
		Optional<Divers> diversOptional = diversRepository.findById(id);
		if (diversOptional.isPresent()) {
			Divers diver = diversOptional.get();
			diver.setDeleted(true);
			diversRepository.saveAndFlush(diver);
			log.info("Article Divers with id= {} removed successfully", diver.getId());
			return diversMapper.fromEntityToDto(diver);
		} else {
			log.error("Cannot get articles divers");
			return null;
		}
	}
}
