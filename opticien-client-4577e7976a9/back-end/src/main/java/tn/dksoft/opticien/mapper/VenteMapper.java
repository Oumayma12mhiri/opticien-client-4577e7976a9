package tn.dksoft.opticien.mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import tn.dksoft.opticien.dto.VenteDto;
import tn.dksoft.opticien.entity.Vente;

@Component
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface VenteMapper extends GenericMapper<VenteDto, Vente> {

}
