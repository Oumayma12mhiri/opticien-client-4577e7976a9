package tn.dksoft.opticien.mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import tn.dksoft.opticien.dto.VisiteClientDto;
import tn.dksoft.opticien.entity.VisiteClient;


@Component
@Mapper(componentModel = "spring",  injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface  VisiteClientMapper extends GenericMapper<VisiteClientDto, VisiteClient> {
}
