package tn.dksoft.opticien.mapper;

import java.util.ArrayList;
import java.util.List;
import javax.annotation.Generated;
import org.springframework.stereotype.Component;
import tn.dksoft.opticien.dto.ClientDto;
import tn.dksoft.opticien.entity.Client;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2022-05-27T17:13:56+0200",
    comments = "version: 1.4.2.Final, compiler: javac, environment: Java 17.0.1 (Eclipse Adoptium)"
)
@Component
public class ClientMapperImpl implements ClientMapper {

    @Override
    public List<ClientDto> fromEntitiesToDtoList(List<Client> i) {
        if ( i == null ) {
            return null;
        }

        List<ClientDto> list = new ArrayList<ClientDto>( i.size() );
        for ( Client client : i ) {
            list.add( fromEntityToDto( client ) );
        }

        return list;
    }

    @Override
    public List<Client> fromDtoListToEntities(List<ClientDto> t) {
        if ( t == null ) {
            return null;
        }

        List<Client> list = new ArrayList<Client>( t.size() );
        for ( ClientDto clientDto : t ) {
            list.add( fromDtoToEntity( clientDto ) );
        }

        return list;
    }

    @Override
    public ClientDto fromEntityToDto(Client i) {
        if ( i == null ) {
            return null;
        }

        ClientDto clientDto = new ClientDto();

        clientDto.setId( i.getId() );
        clientDto.setReference( i.getReference() );
        clientDto.setCin( i.getCin() );
        clientDto.setNomPrenom( i.getNomPrenom() );
        clientDto.setDateNaissance( i.getDateNaissance() );
        clientDto.setAge( i.getAge() );
        clientDto.setEmail( i.getEmail() );
        clientDto.setAdresse( i.getAdresse() );
        clientDto.setVille( i.getVille() );
        clientDto.setPays( i.getPays() );
        clientDto.setNumAssureSocial( i.getNumAssureSocial() );
        clientDto.setNumTel1( i.getNumTel1() );
        clientDto.setNumTel2( i.getNumTel2() );
        clientDto.setChiffreAffaire( i.getChiffreAffaire() );
        clientDto.setSolde( i.getSolde() );
        clientDto.setObservations( i.getObservations() );
        clientDto.setMatriculeFiscal( i.getMatriculeFiscal() );

        return clientDto;
    }

    @Override
    public Client fromDtoToEntity(ClientDto t) {
        if ( t == null ) {
            return null;
        }

        Client client = new Client();

        client.setId( t.getId() );
        client.setReference( t.getReference() );
        client.setCin( t.getCin() );
        client.setNomPrenom( t.getNomPrenom() );
        client.setDateNaissance( t.getDateNaissance() );
        client.setAge( t.getAge() );
        client.setEmail( t.getEmail() );
        client.setAdresse( t.getAdresse() );
        client.setVille( t.getVille() );
        client.setPays( t.getPays() );
        client.setNumAssureSocial( t.getNumAssureSocial() );
        client.setNumTel1( t.getNumTel1() );
        client.setNumTel2( t.getNumTel2() );
        client.setChiffreAffaire( t.getChiffreAffaire() );
        client.setSolde( t.getSolde() );
        client.setObservations( t.getObservations() );
        client.setMatriculeFiscal( t.getMatriculeFiscal() );

        return client;
    }
}