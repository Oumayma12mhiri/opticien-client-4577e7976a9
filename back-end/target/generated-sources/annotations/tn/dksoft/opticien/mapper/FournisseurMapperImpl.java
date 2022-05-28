package tn.dksoft.opticien.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.FournisseurDto;
import tn.dksoft.opticien.entity.Fournisseur;

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
public class FournisseurMapperImpl implements FournisseurMapper {

    @Override
    public List<FournisseurDto> fromEntitiesToDtoList(List<Fournisseur> i) {
        if ( i == null ) {
            return null;
        }

        List<FournisseurDto> list = new ArrayList<FournisseurDto>( i.size() );
        for ( Fournisseur fournisseur : i ) {
            list.add( fromEntityToDto( fournisseur ) );
        }

        return list;
    }

    @Override
    public List<Fournisseur> fromDtoListToEntities(List<FournisseurDto> t) {
        if ( t == null ) {
            return null;
        }

        List<Fournisseur> list = new ArrayList<Fournisseur>( t.size() );
        for ( FournisseurDto fournisseurDto : t ) {
            list.add( fromDtoToEntity( fournisseurDto ) );
        }

        return list;
    }

    @Override
    public FournisseurDto fromEntityToDto(Fournisseur i) {
        if ( i == null ) {
            return null;
        }

        FournisseurDto fournisseurDto = new FournisseurDto();

        fournisseurDto.setId( i.getId() );
        fournisseurDto.setName( i.getName() );
        fournisseurDto.setMatriculeFiscale( i.getMatriculeFiscale() );
        fournisseurDto.setEmail( i.getEmail() );
        fournisseurDto.setAdresse( i.getAdresse() );
        fournisseurDto.setNumTel( i.getNumTel() );

        return fournisseurDto;
    }

    @Override
    public Fournisseur fromDtoToEntity(FournisseurDto t) {
        if ( t == null ) {
            return null;
        }

        Fournisseur fournisseur = new Fournisseur();

        fournisseur.setId( t.getId() );
        fournisseur.setName( t.getName() );
        fournisseur.setMatriculeFiscale( t.getMatriculeFiscale() );
        fournisseur.setAdresse( t.getAdresse() );
        fournisseur.setEmail( t.getEmail() );
        fournisseur.setNumTel( t.getNumTel() );

        return fournisseur;
    }
}
