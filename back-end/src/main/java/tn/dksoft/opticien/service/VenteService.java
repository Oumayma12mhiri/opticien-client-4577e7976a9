package tn.dksoft.opticien.service;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.VenteDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.dto.search.SearchRequestUtil;
import tn.dksoft.opticien.entity.Vente;
import tn.dksoft.opticien.mapper.VenteMapper;
import tn.dksoft.opticien.repository.VenteRepository;

@Service
@Slf4j
@AllArgsConstructor
public class VenteService {

	private final VenteRepository venteRepository;

	private final VenteMapper venteMapper;

	public VenteDto delete(Long id) {
		try {
			Vente vente = venteRepository.findByIdAndIsDeletedIsFalse(id);
			vente.setDeleted(true);
			venteRepository.saveAndFlush(vente);
			log.info("vente with id= {} removed successfully", vente.getId());
			return venteMapper.fromEntityToDto(vente);
		} catch (Exception e) {
			log.error("Cannot remove vente with id={}", id, e);
			return null;
		}
	}

	public VenteDto add(VenteDto venteDto) {
		try {

			Vente vente = venteMapper.fromDtoToEntity(venteDto);
			venteRepository.saveAndFlush(vente);
			log.info("success added vente");
			return venteMapper.fromEntityToDto(vente);
		} catch (Exception e) {
			log.error("can't add access vente", e);
			return null;
		}
	}

	public VenteDto update(VenteDto venteDto) {
		try {
			Vente vente = venteMapper.fromDtoToEntity(venteDto);
			venteRepository.findByIdAndIsDeletedIsFalse(venteDto.getId());
			venteRepository.saveAndFlush(vente);
			log.info("visiteclient with id= {} successfully ", vente.getId());
			return venteMapper.fromEntityToDto(vente);
		} catch (Exception e) {
			log.error("Cannot get vente", e);
			return null;
		}

	}

	public PagedResponse<VenteDto> find(final SearchRequest request) {
		try {
			Page<Vente> ventes = venteRepository
					.findByIsDeletedIsFalse(SearchRequestUtil.toPageRequest(request));
			List<VenteDto> venteDto = venteMapper
					.fromEntitiesToDtoList(ventes.getContent());
			log.info("ventes gotted successfully");
			return new PagedResponse<VenteDto>(venteDto, ventes.getSize(),
					ventes.getTotalElements());
		} catch (Exception e) {
			log.error("Cannot get visiteclient", e);
			return null;
		}
	}
	
	public VenteDto findById(Long id) {
		try {
			Vente vente = venteRepository.findByIdAndIsDeletedIsFalse(id);
			VenteDto venteDto = venteMapper.fromEntityToDto(vente);
			log.info("visite client gotted successfully");
			return venteDto;
		} catch (Exception e) {
			log.error("Cannot get visiteclient", e);
			return null;
		}
	}

	public VenteDto findByDate(Date date) {
		try {
			Vente vente = venteRepository.findByDateVenteAndIsDeletedIsFalse(date);
			VenteDto venteDto = venteMapper.fromEntityToDto(vente);
			log.info("visite client gotted successfully");
			return venteDto;
		} catch (Exception e) {
			log.error("Cannot get visiteclient", e);
			return null;
		}
	}
	
	public List<VenteDto> findByClient(Long clientId) {
		try {
			List<Vente> ventes = venteRepository.findByClientIdAndIsDeletedIsFalse(clientId);
			log.info("Fournisseurs gotted successfully ");
			return venteMapper.fromEntitiesToDtoList(ventes);

		} catch (Exception e) {
			log.error("Cannot get TypeOfLeave", e);
			return null;

		}
	}
	

}
