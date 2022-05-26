package tn.dksoft.opticien.mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import tn.dksoft.opticien.dto.LunetteSolaireDto;
import tn.dksoft.opticien.entity.LunetteSolaire;

@Component
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface LunetteSolaireMapper extends GenericMapper<LunetteSolaireDto, LunetteSolaire> {

}
