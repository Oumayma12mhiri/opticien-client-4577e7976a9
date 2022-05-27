package tn.dksoft.opticien.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.CategorieDto;
import tn.dksoft.opticien.entity.Categorie;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-26T21:58:10+0100",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class CategorieMapperImpl implements CategorieMapper {

    @Override
    public List<CategorieDto> fromEntitiesToDtoList(List<Categorie> i) {
        if ( i == null ) {
            return null;
        }

        List<CategorieDto> list = new ArrayList<CategorieDto>( i.size() );
        for ( Categorie categorie : i ) {
            list.add( fromEntityToDto( categorie ) );
        }

        return list;
    }

    @Override
    public List<Categorie> fromDtoListToEntities(List<CategorieDto> t) {
        if ( t == null ) {
            return null;
        }

        List<Categorie> list = new ArrayList<Categorie>( t.size() );
        for ( CategorieDto categorieDto : t ) {
            list.add( fromDtoToEntity( categorieDto ) );
        }

        return list;
    }

    @Override
    public CategorieDto fromEntityToDto(Categorie i) {
        if ( i == null ) {
            return null;
        }

        CategorieDto categorieDto = new CategorieDto();

        categorieDto.setId( i.getId() );
        categorieDto.setName( i.getName() );

        return categorieDto;
    }

    @Override
    public Categorie fromDtoToEntity(CategorieDto t) {
        if ( t == null ) {
            return null;
        }

        Categorie categorie = new Categorie();

        categorie.setId( t.getId() );
        categorie.setName( t.getName() );

        return categorie;
    }
}
