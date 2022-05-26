package tn.dksoft.opticien.mapper;


import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import tn.dksoft.opticien.dto.ClientDto;
import tn.dksoft.opticien.entity.Client;

@Component
@Mapper(componentModel = "spring",  injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface ClientMapper extends GenericMapper<ClientDto, Client> {
}