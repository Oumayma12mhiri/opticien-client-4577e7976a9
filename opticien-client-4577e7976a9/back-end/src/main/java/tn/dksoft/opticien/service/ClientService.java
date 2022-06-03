package tn.dksoft.opticien.service;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.stereotype.Service;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import tn.dksoft.opticien.dto.ClientDto;
import tn.dksoft.opticien.dto.search.PagedResponse;
import tn.dksoft.opticien.dto.search.SearchRequest;
import tn.dksoft.opticien.dto.search.SearchRequestUtil;
import tn.dksoft.opticien.entity.Client;
import tn.dksoft.opticien.mapper.ClientMapper;
import tn.dksoft.opticien.repository.ClientRepository;

@Service
@Slf4j
@AllArgsConstructor
public class ClientService {

	private final ClientRepository clientRepository;

	private final ClientMapper clientMapper;

	public ClientDto delete(Long id) {
		try {

			Client client = clientRepository.findByIdAndIsDeletedIsFalse(id);
			client.setDeleted(true);
			clientRepository.saveAndFlush(client);
			log.info("client with id= {} removed successfully", client.getId());
			return clientMapper.fromEntityToDto(client);
		} catch (Exception e) {
			log.error("Cannot remove client with id={}", id, e);
			return null;
		}
	}

	public ClientDto add(ClientDto clientdto) {
		try {

			Optional<Client> oldClientOptional = clientRepository.findByEmailAndIsDeletedIsFalse(clientdto.getEmail());
			if (oldClientOptional.isPresent()) {
				log.error("client déjà existant");
				return null;
			}
			Client client = clientMapper.fromDtoToEntity(clientdto);
			clientRepository.saveAndFlush(client);
			log.info("success added client");
			return clientMapper.fromEntityToDto(client);
		} catch (Exception e) {
			log.error("can't add access client", e);
			return null;
		}
	}

	public ClientDto update(ClientDto clientDto) {
		try {
			Client client = clientMapper.fromDtoToEntity(clientDto);
			clientRepository.findByIdAndIsDeletedIsFalse(clientDto.getId());
			clientRepository.saveAndFlush(client);
			log.info("client with id= {} successfully ", client.getId());
			return clientMapper.fromEntityToDto(client);
		} catch (Exception e) {
			log.error("Cannot get client", e);
			return null;
		}

	}

	public List<ClientDto> findAll() {
		try {
			List<Client> clients = clientRepository.findByIsDeletedIsFalse();
			log.info("clients {}",clients);
			List<ClientDto> clientDtos = clientMapper.fromEntitiesToDtoList(clients);
			log.info("clients gotted successfully");
			return clientDtos;
		} catch (Exception e) {
			log.error("Cannot get clients", e);
			return null;
		}
	}

	public PagedResponse<ClientDto> find(final SearchRequest request) {
		try {
			Page<Client> clients = clientRepository.findByIsDeletedIsFalse(SearchRequestUtil.toPageRequest(request));
			List<ClientDto> clientDtos = clientMapper.fromEntitiesToDtoList(clients.getContent());
			log.info("clients gotted successfully");
			return new PagedResponse<ClientDto>(clientDtos, clients.getSize(), clients.getTotalElements());
		} catch (Exception e) {
			log.error("Cannot get client", e);
			return null;
		}
	}

	public ClientDto findById(Long id) {
		try {
			Client client = clientRepository.findByIdAndIsDeletedIsFalse(id);
			ClientDto clientDto = clientMapper.fromEntityToDto(client);
			log.info("client gotted successfully");
			return clientDto;
		} catch (Exception e) {
			log.error("Cannot get client", e);
			return null;
		}
	}

	public ClientDto findByEmail(String email) {
		try {
			Optional<Client> client = clientRepository.findByEmailAndIsDeletedIsFalse(email);
			if (client.isPresent()) {
				ClientDto clientDto = clientMapper.fromEntityToDto(client.get());
				log.info("client gotted successfully");
				return clientDto;
			} else {
				log.error("Email not exist ! {}", email);
				return null;
			}
		} catch (Exception e) {
			log.error("Cannot get client", e);
			return null;
		}
	}

	
	
}
