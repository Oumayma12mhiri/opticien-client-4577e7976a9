package tn.dksoft.opticien.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.VisiteClientDto;
import tn.dksoft.opticien.entity.VisiteClient;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-26T21:58:10+0100",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class VisiteClientMapperImpl implements VisiteClientMapper {

    @Override
    public List<VisiteClientDto> fromEntitiesToDtoList(List<VisiteClient> i) {
        if ( i == null ) {
            return null;
        }

        List<VisiteClientDto> list = new ArrayList<VisiteClientDto>( i.size() );
        for ( VisiteClient visiteClient : i ) {
            list.add( fromEntityToDto( visiteClient ) );
        }

        return list;
    }

    @Override
    public List<VisiteClient> fromDtoListToEntities(List<VisiteClientDto> t) {
        if ( t == null ) {
            return null;
        }

        List<VisiteClient> list = new ArrayList<VisiteClient>( t.size() );
        for ( VisiteClientDto visiteClientDto : t ) {
            list.add( fromDtoToEntity( visiteClientDto ) );
        }

        return list;
    }

    @Override
    public VisiteClientDto fromEntityToDto(VisiteClient i) {
        if ( i == null ) {
            return null;
        }

        VisiteClientDto visiteClientDto = new VisiteClientDto();

        visiteClientDto.setId( i.getId() );
        visiteClientDto.setDate( i.getDate() );
        visiteClientDto.setMontantrecu( i.getMontantrecu() );

        return visiteClientDto;
    }

    @Override
    public VisiteClient fromDtoToEntity(VisiteClientDto t) {
        if ( t == null ) {
            return null;
        }

        VisiteClient visiteClient = new VisiteClient();

        visiteClient.setId( t.getId() );
        visiteClient.setDate( t.getDate() );
        visiteClient.setMontantrecu( t.getMontantrecu() );

        return visiteClient;
    }
}
