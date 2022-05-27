package tn.dksoft.opticien.mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import tn.dksoft.opticien.dto.LentilleDto;
import tn.dksoft.opticien.entity.Lentille;

@Component
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface LentilleMapper extends GenericMapper<LentilleDto, Lentille> {
}