package tn.dksoft.opticien.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.Vente;

@Repository
public interface VenteRepository  extends JpaRepository<Vente, Long> {
	Vente findByIdAndIsDeletedIsFalse(Long id);

	List<Vente> findByIsDeletedIsFalse();

	Page<Vente> findByIsDeletedIsFalse(Pageable pageable);

	Vente findByDateVenteAndIsDeletedIsFalse(Date date);
	
	List<Vente> findByClientIdAndIsDeletedIsFalse(Long id); 
}
