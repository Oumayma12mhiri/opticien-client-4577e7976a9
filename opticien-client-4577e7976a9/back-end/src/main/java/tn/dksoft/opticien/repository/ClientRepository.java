package tn.dksoft.opticien.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.Client;
@Repository
public interface ClientRepository extends JpaRepository<Client, Long> {

	
	Client findByIdAndIsDeletedIsFalse(Long id);
	List<Client> findByIsDeletedIsFalse();
	Page<Client> findByIsDeletedIsFalse(Pageable pageable);
    Client  findByNomPrenomAndIsDeletedFalse(String nomPenom);
    Client findByNumTel1(String numTel1);
    Optional<Client> findByEmailAndIsDeletedIsFalse(String email);
}

