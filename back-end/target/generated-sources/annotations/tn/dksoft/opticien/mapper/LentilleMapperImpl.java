package tn.dksoft.opticien.mapper;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.LentilleDto;
import tn.dksoft.opticien.entity.Lentille;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-26T21:58:10+0100",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.2 (Eclipse Adoptium)"
)
@Component
public class LentilleMapperImpl implements LentilleMapper {

    @Override
    public List<LentilleDto> fromEntitiesToDtoList(List<Lentille> i) {
        if ( i == null ) {
            return null;
        }

        List<LentilleDto> list = new ArrayList<LentilleDto>( i.size() );
        for ( Lentille lentille : i ) {
            list.add( fromEntityToDto( lentille ) );
        }

        return list;
    }

    @Override
    public List<Lentille> fromDtoListToEntities(List<LentilleDto> t) {
        if ( t == null ) {
            return null;
        }

        List<Lentille> list = new ArrayList<Lentille>( t.size() );
        for ( LentilleDto lentilleDto : t ) {
            list.add( fromDtoToEntity( lentilleDto ) );
        }

        return list;
    }

    @Override
    public LentilleDto fromEntityToDto(Lentille i) {
        if ( i == null ) {
            return null;
        }

        LentilleDto lentilleDto = new LentilleDto();

        lentilleDto.setId( i.getId() );
        lentilleDto.setCode( i.getCode() );
        lentilleDto.setColoration( i.getColoration() );
        lentilleDto.setDescription( i.getDescription() );
        lentilleDto.setMarque( i.getMarque() );
        lentilleDto.setMatiere( i.getMatiere() );
        lentilleDto.setPhotochromique( i.getPhotochromique() );
        lentilleDto.setAddInf( i.getAddInf() );
        lentilleDto.setAddSup( i.getAddSup() );
        lentilleDto.setCylInf( i.getCylInf() );
        lentilleDto.setCylSup( i.getCylSup() );
        lentilleDto.setSphInf( i.getSphInf() );
        lentilleDto.setSphSup( i.getSphSup() );
        lentilleDto.setDia( i.getDia() );
        lentilleDto.setIndice( i.getIndice() );
        lentilleDto.setPrixAchat( BigDecimal.valueOf( i.getPrixAchat() ) );
        lentilleDto.setPrixVente( BigDecimal.valueOf( i.getPrixVente() ) );

        return lentilleDto;
    }

    @Override
    public Lentille fromDtoToEntity(LentilleDto t) {
        if ( t == null ) {
            return null;
        }

        Lentille lentille = new Lentille();

        lentille.setId( t.getId() );
        lentille.setCode( t.getCode() );
        lentille.setColoration( t.getColoration() );
        lentille.setDescription( t.getDescription() );
        lentille.setMarque( t.getMarque() );
        lentille.setMatiere( t.getMatiere() );
        lentille.setPhotochromique( t.getPhotochromique() );
        lentille.setAddInf( t.getAddInf() );
        lentille.setAddSup( t.getAddSup() );
        lentille.setCylInf( t.getCylInf() );
        lentille.setCylSup( t.getCylSup() );
        lentille.setSphInf( t.getSphInf() );
        lentille.setSphSup( t.getSphSup() );
        lentille.setDia( t.getDia() );
        lentille.setIndice( t.getIndice() );
        if ( t.getPrixAchat() != null ) {
            lentille.setPrixAchat( t.getPrixAchat().doubleValue() );
        }
        if ( t.getPrixVente() != null ) {
            lentille.setPrixVente( t.getPrixVente().doubleValue() );
        }

        return lentille;
    }
}
