package tn.dksoft.opticien.mapper;

import org.mapstruct.InjectionStrategy;
import org.mapstruct.Mapper;
import org.springframework.stereotype.Component;

import tn.dksoft.opticien.dto.FournisseurDto;
import tn.dksoft.opticien.entity.Fournisseur;

@Component
@Mapper(componentModel = "spring", injectionStrategy = InjectionStrategy.CONSTRUCTOR)
public interface FournisseurMapper extends GenericMapper<FournisseurDto, Fournisseur> {

}
