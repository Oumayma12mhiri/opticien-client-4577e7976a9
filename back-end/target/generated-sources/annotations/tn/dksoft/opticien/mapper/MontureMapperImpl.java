package tn.dksoft.opticien.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.MontureDto;
import tn.dksoft.opticien.entity.Monture;

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
public class MontureMapperImpl implements MontureMapper {

    @Override
    public List<MontureDto> fromEntitiesToDtoList(List<Monture> i) {
        if ( i == null ) {
            return null;
        }

        List<MontureDto> list = new ArrayList<MontureDto>( i.size() );
        for ( Monture monture : i ) {
            list.add( fromEntityToDto( monture ) );
        }

        return list;
    }

    @Override
    public List<Monture> fromDtoListToEntities(List<MontureDto> t) {
        if ( t == null ) {
            return null;
        }

        List<Monture> list = new ArrayList<Monture>( t.size() );
        for ( MontureDto montureDto : t ) {
            list.add( fromDtoToEntity( montureDto ) );
        }

        return list;
    }

    @Override
    public MontureDto fromEntityToDto(Monture i) {
        if ( i == null ) {
            return null;
        }

        MontureDto montureDto = new MontureDto();

        montureDto.setId( i.getId() );
        montureDto.setReference( i.getReference() );
        montureDto.setMarque( i.getMarque() );
        montureDto.setPrixAchat( i.getPrixAchat() );
        montureDto.setQuantite( i.getQuantite() );
        montureDto.setPrixVente( i.getPrixVente() );

        return montureDto;
    }

    @Override
    public Monture fromDtoToEntity(MontureDto t) {
        if ( t == null ) {
            return null;
        }

        Monture monture = new Monture();

        monture.setId( t.getId() );
        monture.setReference( t.getReference() );
        monture.setMarque( t.getMarque() );
        monture.setPrixAchat( t.getPrixAchat() );
        monture.setQuantite( t.getQuantite() );
        monture.setPrixVente( t.getPrixVente() );

        return monture;
    }
}
