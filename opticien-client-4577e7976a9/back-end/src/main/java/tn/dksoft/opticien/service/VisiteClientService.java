package tn.dksoft.opticien.service;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.VisiteClientDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.dto.search.SearchRequestUtil;
import tn.dksoft.opticien.entity.VisiteClient;
import tn.dksoft.opticien.mapper.VisiteClientMapper;
import tn.dksoft.opticien.repository.VisiteClientRepository;

@Service
@Slf4j
@AllArgsConstructor
public class VisiteClientService {
	private final VisiteClientRepository visiteclientRepository;

	private final VisiteClientMapper visiteclientMapper;

	public VisiteClientDto delete(Long id) {
		try {

			VisiteClient visiteclient = visiteclientRepository.findByIdAndIsDeletedIsFalse(id);
			visiteclient.setDeleted(true);
			visiteclientRepository.saveAndFlush(visiteclient);
			log.info("visiteclient with id= {} removed successfully", visiteclient.getId());
			return visiteclientMapper.fromEntityToDto(visiteclient);
		} catch (Exception e) {
			log.error("Cannot remove visiteclient with id={}", id, e);
			return null;
		}
	}

	public VisiteClientDto add(VisiteClientDto visiteClientDto) {
		try {

			VisiteClient visiteclient = visiteclientMapper.fromDtoToEntity(visiteClientDto);
			visiteclientRepository.saveAndFlush(visiteclient);
			log.info("success added visiteclient");
			return visiteclientMapper.fromEntityToDto(visiteclient);
		} catch (Exception e) {
			log.error("can't add access visiteclient", e);
			return null;
		}
	}

	public VisiteClientDto update(VisiteClientDto visiteClientDto) {
		try {
			VisiteClient visiteclient = visiteclientMapper.fromDtoToEntity(visiteClientDto);
			visiteclientRepository.findByIdAndIsDeletedIsFalse(visiteClientDto.getId());
			visiteclientRepository.saveAndFlush(visiteclient);
			log.info("visiteclient with id= {} successfully ", visiteclient.getId());
			return visiteclientMapper.fromEntityToDto(visiteclient);
		} catch (Exception e) {
			log.error("Cannot get visiteclient", e);
			return null;
		}

	}

	public PagedResponse<VisiteClientDto> find(final SearchRequest request) {
		try {
			Page<VisiteClient> visiteclients = visiteclientRepository
					.findByIsDeletedIsFalse(SearchRequestUtil.toPageRequest(request));
			List<VisiteClientDto> VisiteClientDtos = visiteclientMapper
					.fromEntitiesToDtoList(visiteclients.getContent());
			log.info("clients gotted successfully");
			return new PagedResponse<VisiteClientDto>(VisiteClientDtos, visiteclients.getSize(),
					visiteclients.getTotalElements());
		} catch (Exception e) {
			log.error("Cannot get visiteclient", e);
			return null;
		}
	}

	public VisiteClientDto findById(Long id) {
		try {
			System.out.println(id);

			VisiteClient visiteclient = visiteclientRepository.findByIdAndIsDeletedIsFalse(id);
			VisiteClientDto visiteClientDto = visiteclientMapper.fromEntityToDto(visiteclient);
			System.out.println(visiteclientRepository.findByIdAndIsDeletedIsFalse(id));
			return visiteClientDto;
		} catch (Exception e) {
			System.out.print(e);
			log.error("Cannot get visiteclient", e);
			return null;
		}
	}

	public VisiteClientDto findByDate(Date date) {
		try {
			VisiteClient visiteclient = visiteclientRepository.findByDateAndIsDeletedIsFalse(date);
			VisiteClientDto visiteClientDto = visiteclientMapper.fromEntityToDto(visiteclient);
			log.info("visite client gotted successfully");
			return visiteClientDto;
		} catch (Exception e) {
			log.error("Cannot get visiteclient", e);
			return null;
		}
	}

	public List<VisiteClientDto> findByVente(Long venteId) {
		try {
			List<VisiteClient> visiteClients = visiteclientRepository.findByVenteIdAndIsDeletedIsFalse(venteId);
			log.info("Fournisseurs gotted successfully ");
			return visiteclientMapper.fromEntitiesToDtoList(visiteClients);

		} catch (Exception e) {
			log.error("Cannot get TypeOfLeave", e);
			return null;

		}
	}
	
	public List<VisiteClientDto> findByClient(Long clientId) {
		try {
			List<VisiteClient> visiteClients = visiteclientRepository.findByClientIdAndIsDeletedIsFalse(clientId);
			log.info("Fournisseurs gotted successfully ");
			return visiteclientMapper.fromEntitiesToDtoList(visiteClients);

		} catch (Exception e) {
			log.error("Cannot get TypeOfLeave", e);
			return null;

		}
	}
}
