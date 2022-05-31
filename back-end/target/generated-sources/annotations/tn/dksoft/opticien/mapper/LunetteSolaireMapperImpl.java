package tn.dksoft.opticien.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.LunetteSolaireDto;
import tn.dksoft.opticien.entity.LunetteSolaire;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
    date = "2022-05-27T17:13:56+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.1 (Eclipse Adoptium)"
=======
    date = "2022-05-26T21:58:10+0100",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.2 (Eclipse Adoptium)"
>>>>>>> 1c525e8f3498ce55efca84691f5a9061201c10a3
)
@Component
public class LunetteSolaireMapperImpl implements LunetteSolaireMapper {

    @Override
    public List<LunetteSolaireDto> fromEntitiesToDtoList(List<LunetteSolaire> i) {
        if ( i == null ) {
            return null;
        }

        List<LunetteSolaireDto> list = new ArrayList<LunetteSolaireDto>( i.size() );
        for ( LunetteSolaire lunetteSolaire : i ) {
            list.add( fromEntityToDto( lunetteSolaire ) );
        }

        return list;
    }

    @Override
    public List<LunetteSolaire> fromDtoListToEntities(List<LunetteSolaireDto> t) {
        if ( t == null ) {
            return null;
        }

        List<LunetteSolaire> list = new ArrayList<LunetteSolaire>( t.size() );
        for ( LunetteSolaireDto lunetteSolaireDto : t ) {
            list.add( fromDtoToEntity( lunetteSolaireDto ) );
        }

        return list;
    }

    @Override
    public LunetteSolaireDto fromEntityToDto(LunetteSolaire i) {
        if ( i == null ) {
            return null;
        }

        LunetteSolaireDto lunetteSolaireDto = new LunetteSolaireDto();

        lunetteSolaireDto.setId( i.getId() );
        lunetteSolaireDto.setRef( i.getRef() );
        lunetteSolaireDto.setMarque( i.getMarque() );
        lunetteSolaireDto.setQuantite( i.getQuantite() );
        lunetteSolaireDto.setPrixAchat( i.getPrixAchat() );
        lunetteSolaireDto.setPrixVente( i.getPrixVente() );

        return lunetteSolaireDto;
    }

    @Override
    public LunetteSolaire fromDtoToEntity(LunetteSolaireDto t) {
        if ( t == null ) {
            return null;
        }

        LunetteSolaire lunetteSolaire = new LunetteSolaire();

        lunetteSolaire.setId( t.getId() );
        lunetteSolaire.setRef( t.getRef() );
        lunetteSolaire.setMarque( t.getMarque() );
        lunetteSolaire.setQuantite( t.getQuantite() );
        lunetteSolaire.setPrixAchat( t.getPrixAchat() );
        lunetteSolaire.setPrixVente( t.getPrixVente() );

        return lunetteSolaire;
    }
}
