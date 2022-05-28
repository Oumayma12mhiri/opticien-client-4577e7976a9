package tn.dksoft.opticien.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.DiversDto;
import tn.dksoft.opticien.entity.Divers;

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
public class DiversMapperImpl implements DiversMapper {

    @Override
    public List<DiversDto> fromEntitiesToDtoList(List<Divers> i) {
        if ( i == null ) {
            return null;
        }

        List<DiversDto> list = new ArrayList<DiversDto>( i.size() );
        for ( Divers divers : i ) {
            list.add( fromEntityToDto( divers ) );
        }

        return list;
    }

    @Override
    public List<Divers> fromDtoListToEntities(List<DiversDto> t) {
        if ( t == null ) {
            return null;
        }

        List<Divers> list = new ArrayList<Divers>( t.size() );
        for ( DiversDto diversDto : t ) {
            list.add( fromDtoToEntity( diversDto ) );
        }

        return list;
    }

    @Override
    public DiversDto fromEntityToDto(Divers i) {
        if ( i == null ) {
            return null;
        }

        DiversDto diversDto = new DiversDto();

        diversDto.setId( i.getId() );
        diversDto.setName( i.getName() );
        diversDto.setReference( i.getReference() );
        diversDto.setPrixAchat( i.getPrixAchat() );
        diversDto.setPrixVente( i.getPrixVente() );
        diversDto.setQuantite( i.getQuantite() );

        return diversDto;
    }

    @Override
    public Divers fromDtoToEntity(DiversDto t) {
        if ( t == null ) {
            return null;
        }

        Divers divers = new Divers();

        divers.setId( t.getId() );
        divers.setName( t.getName() );
        divers.setReference( t.getReference() );
        divers.setPrixAchat( t.getPrixAchat() );
        divers.setPrixVente( t.getPrixVente() );
        divers.setQuantite( t.getQuantite() );

        return divers;
    }
}
