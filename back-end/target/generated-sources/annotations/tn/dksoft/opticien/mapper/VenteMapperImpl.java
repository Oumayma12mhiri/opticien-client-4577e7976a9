package tn.dksoft.opticien.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.ClientDto;
import tn.dksoft.opticien.dto.VenteDto;
import tn.dksoft.opticien.entity.Client;
import tn.dksoft.opticien.entity.Vente;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
<<<<<<< HEAD
    date = "2022-05-27T17:13:56+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.1 (Eclipse Adoptium)"
=======
    date = "2022-05-26T21:58:09+0100",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.2 (Eclipse Adoptium)"
>>>>>>> 1c525e8f3498ce55efca84691f5a9061201c10a3
)
@Component
public class VenteMapperImpl implements VenteMapper {

    @Override
    public List<VenteDto> fromEntitiesToDtoList(List<Vente> i) {
        if ( i == null ) {
            return null;
        }

        List<VenteDto> list = new ArrayList<VenteDto>( i.size() );
        for ( Vente vente : i ) {
            list.add( fromEntityToDto( vente ) );
        }

        return list;
    }

    @Override
    public List<Vente> fromDtoListToEntities(List<VenteDto> t) {
        if ( t == null ) {
            return null;
        }

        List<Vente> list = new ArrayList<Vente>( t.size() );
        for ( VenteDto venteDto : t ) {
            list.add( fromDtoToEntity( venteDto ) );
        }

        return list;
    }

    @Override
    public VenteDto fromEntityToDto(Vente i) {
        if ( i == null ) {
            return null;
        }

        VenteDto venteDto = new VenteDto();

        venteDto.setId( i.getId() );
        venteDto.setDateVente( i.getDateVente() );
        venteDto.setQuantite( i.getQuantite() );
        venteDto.setRemise( i.getRemise() );
        venteDto.setTva( i.getTva() );
        venteDto.setTotalVente( i.getTotalVente() );
        venteDto.setClient( clientToClientDto( i.getClient() ) );

        return venteDto;
    }

    @Override
    public Vente fromDtoToEntity(VenteDto t) {
        if ( t == null ) {
            return null;
        }

        Vente vente = new Vente();

        vente.setId( t.getId() );
        vente.setDateVente( t.getDateVente() );
        vente.setQuantite( t.getQuantite() );
        vente.setRemise( t.getRemise() );
        vente.setTva( t.getTva() );
        vente.setTotalVente( t.getTotalVente() );
        vente.setClient( clientDtoToClient( t.getClient() ) );

        return vente;
    }

    protected ClientDto clientToClientDto(Client client) {
        if ( client == null ) {
            return null;
        }

        ClientDto clientDto = new ClientDto();

        clientDto.setId( client.getId() );
        clientDto.setReference( client.getReference() );
        clientDto.setCin( client.getCin() );
        clientDto.setNomPrenom( client.getNomPrenom() );
        clientDto.setDateNaissance( client.getDateNaissance() );
        clientDto.setAge( client.getAge() );
        clientDto.setEmail( client.getEmail() );
        clientDto.setAdresse( client.getAdresse() );
        clientDto.setVille( client.getVille() );
        clientDto.setPays( client.getPays() );
        clientDto.setNumAssureSocial( client.getNumAssureSocial() );
        clientDto.setNumTel1( client.getNumTel1() );
        clientDto.setNumTel2( client.getNumTel2() );
        clientDto.setChiffreAffaire( client.getChiffreAffaire() );
        clientDto.setSolde( client.getSolde() );
        clientDto.setObservations( client.getObservations() );
        clientDto.setMatriculeFiscal( client.getMatriculeFiscal() );

        return clientDto;
    }

    protected Client clientDtoToClient(ClientDto clientDto) {
        if ( clientDto == null ) {
            return null;
        }

        Client client = new Client();

        client.setId( clientDto.getId() );
        client.setReference( clientDto.getReference() );
        client.setCin( clientDto.getCin() );
        client.setNomPrenom( clientDto.getNomPrenom() );
        client.setDateNaissance( clientDto.getDateNaissance() );
        client.setAge( clientDto.getAge() );
        client.setEmail( clientDto.getEmail() );
        client.setAdresse( clientDto.getAdresse() );
        client.setVille( clientDto.getVille() );
        client.setPays( clientDto.getPays() );
        client.setNumAssureSocial( clientDto.getNumAssureSocial() );
        client.setNumTel1( clientDto.getNumTel1() );
        client.setNumTel2( clientDto.getNumTel2() );
        client.setChiffreAffaire( clientDto.getChiffreAffaire() );
        client.setSolde( clientDto.getSolde() );
        client.setObservations( clientDto.getObservations() );
        client.setMatriculeFiscal( clientDto.getMatriculeFiscal() );

        return client;
    }
}
