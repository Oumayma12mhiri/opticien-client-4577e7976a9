package tn.dksoft.opticien.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.VerreDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.dto.search.SearchRequestUtil;
import tn.dksoft.opticien.entity.Verre;
import tn.dksoft.opticien.mapper.VerreMapper;
import tn.dksoft.opticien.repository.VerreRepository;

@Service
@Slf4j
@AllArgsConstructor
public class VerreService {

	private final VerreRepository verreRepository;

	private final VerreMapper verreMapper;

	public VerreDto add(VerreDto dto) {

		try {
			Verre verre = verreMapper.fromDtoToEntity(dto);
			verreRepository.saveAndFlush(verre);
			log.info("Verre with id= {} saved successfully", verre.getId());
			return verreMapper.fromEntityToDto(verre);
		} catch (Exception e) {
			log.error("Cannot add verre ", e);
			return null;
		}

	}

	public PagedResponse<VerreDto> findAll(final SearchRequest request) {
		try {
			Page<Verre> verres = verreRepository
					.findByIsDeletedFalse(SearchRequestUtil.toPageRequest(request));
			log.info("Verre gotted successfully ");
			return new PagedResponse<VerreDto>(
					verreMapper.fromEntitiesToDtoList(verres.getContent()), verres.getSize(),
					verres.getTotalElements());

		} catch (Exception e) {
			log.error("Cannot get verre", e);
			return null;

		}
	}

	public List<VerreDto> findAll() {
		try {
			List<Verre> verres = verreRepository.findByIsDeletedIsFalse();
			log.info("Verres gotted successfully ");
			return verreMapper.fromEntitiesToDtoList(verres);
		} catch (Exception e) {
			log.error("Cannot get Lunette Solaire", e);
			return null;
		}
	}

	public VerreDto edit(VerreDto verreDto) {
		try {
			Optional<Verre> verreOptional = verreRepository
					.findByIdAndIsDeletedIsFalse(verreDto.getId());
			if (verreOptional.isPresent()) {
				Verre verre = verreOptional.get();
				verre.setAddInf(verreDto.getAddInf());
				verre.setAddSup(verreDto.getAddSup());
				verre.setCylInf(verreDto.getCylInf());
				verre.setCylSup(verreDto.getCylSup());
				verre.setSphInf(verreDto.getCylInf());
				verre.setSphSup(verreDto.getSphSup());
				verre.setAxe(verreDto.getAxe());
				verre.setBase(verreDto.getBase());
				verre.setCode(verreDto.getCode());
				verre.setColoration(verreDto.getColoration());
				verre.setDescription(verreDto.getDescription());
				verre.setDia(verreDto.getDia());
				verre.setIndice(verreDto.getIndice());
				verre.setMarque(verreDto.getMarque());
				verre.setMatiere(verreDto.getMatiere());
				verre.setPhotochromique(verreDto.getPhotochromique());
				verre.setPrixAchat(verreDto.getPrixAchat());
				verre.setPrixVente(verreDto.getPrixVente());

				verreRepository.saveAndFlush(verre);
				log.info("Lunette with id= {} edited successfully", verreDto.getId());
				return verreMapper.fromEntityToDto(verre);
			} else {
				log.error("Cannot get Verre ");
				return null;
			}
		} catch (Exception e) {
			log.error("Cannot edit Verre", e);
			return null;
		}
	}

	public VerreDto findByCode(String code) {
		try {
			Verre verre = verreRepository.findByCodeAndIsDeletedFalse(code);
			VerreDto verreDto = verreMapper.fromEntityToDto(verre);
			log.info("Verre  gotted successfully");
			return verreDto;
		} catch (Exception e) {
			log.error("Cannot get verre", e);
			return null;
		}
	}

	public VerreDto remove(Long id) {
		Optional<Verre> verreOptional = verreRepository.findById(id);
		if (verreOptional.isPresent()) {
			Verre verre = verreOptional.get();
			verre.setDeleted(true);
			verreRepository.saveAndFlush(verre);
			log.info("Lunette Solaire with id= {} removed successfully", verre.getId());
			return verreMapper.fromEntityToDto(verre);
		} else {
			log.error("Cannot delete verre");
			return null;
		}
	}
}
