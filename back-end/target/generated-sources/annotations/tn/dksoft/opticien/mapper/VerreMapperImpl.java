package tn.dksoft.opticien.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.VerreDto;
import tn.dksoft.opticien.entity.Verre;

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
public class VerreMapperImpl implements VerreMapper {

    @Override
    public List<VerreDto> fromEntitiesToDtoList(List<Verre> i) {
        if ( i == null ) {
            return null;
        }

        List<VerreDto> list = new ArrayList<VerreDto>( i.size() );
        for ( Verre verre : i ) {
            list.add( fromEntityToDto( verre ) );
        }

        return list;
    }

    @Override
    public List<Verre> fromDtoListToEntities(List<VerreDto> t) {
        if ( t == null ) {
            return null;
        }

        List<Verre> list = new ArrayList<Verre>( t.size() );
        for ( VerreDto verreDto : t ) {
            list.add( fromDtoToEntity( verreDto ) );
        }

        return list;
    }

    @Override
    public VerreDto fromEntityToDto(Verre i) {
        if ( i == null ) {
            return null;
        }

        VerreDto verreDto = new VerreDto();

        verreDto.setId( i.getId() );
        verreDto.setBase( i.getBase() );
        verreDto.setCode( i.getCode() );
        verreDto.setColoration( i.getColoration() );
        verreDto.setDescription( i.getDescription() );
        verreDto.setMarque( i.getMarque() );
        verreDto.setMatiere( i.getMatiere() );
        verreDto.setPhotochromique( i.getPhotochromique() );
        verreDto.setAddInf( i.getAddInf() );
        verreDto.setAddSup( i.getAddSup() );
        verreDto.setAxe( i.getAxe() );
        verreDto.setCylInf( i.getCylInf() );
        verreDto.setCylSup( i.getCylSup() );
        verreDto.setSphInf( i.getSphInf() );
        verreDto.setSphSup( i.getSphSup() );
        verreDto.setDia( i.getDia() );
        verreDto.setIndice( i.getIndice() );
        verreDto.setPrixAchat( i.getPrixAchat() );
        verreDto.setPrixVente( i.getPrixVente() );

        return verreDto;
    }

    @Override
    public Verre fromDtoToEntity(VerreDto t) {
        if ( t == null ) {
            return null;
        }

        Verre verre = new Verre();

        verre.setId( t.getId() );
        verre.setBase( t.getBase() );
        verre.setCode( t.getCode() );
        verre.setColoration( t.getColoration() );
        verre.setDescription( t.getDescription() );
        verre.setMarque( t.getMarque() );
        verre.setMatiere( t.getMatiere() );
        verre.setPhotochromique( t.getPhotochromique() );
        verre.setAddInf( t.getAddInf() );
        verre.setAddSup( t.getAddSup() );
        verre.setAxe( t.getAxe() );
        verre.setCylInf( t.getCylInf() );
        verre.setCylSup( t.getCylSup() );
        verre.setSphInf( t.getSphInf() );
        verre.setSphSup( t.getSphSup() );
        verre.setDia( t.getDia() );
        verre.setIndice( t.getIndice() );
        verre.setPrixAchat( t.getPrixAchat() );
        verre.setPrixVente( t.getPrixVente() );

        return verre;
    }
}
