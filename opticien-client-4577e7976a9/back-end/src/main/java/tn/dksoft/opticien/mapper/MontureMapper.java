package tn.dksoft.opticien.mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import tn.dksoft.opticien.dto.MontureDto;
import tn.dksoft.opticien.entity.Monture;

@Component
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface MontureMapper extends GenericMapper<MontureDto, Monture> {

}
