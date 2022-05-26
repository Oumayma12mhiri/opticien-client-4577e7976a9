package tn.dksoft.opticien.repository;

import java.util.Date;
import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.VisiteClient;

@Repository
public interface VisiteClientRepository extends JpaRepository<VisiteClient, Long> {

	VisiteClient findByIdAndIsDeletedIsFalse(Long id);

	List<VisiteClient> findByIsDeletedIsFalse();

	Page<VisiteClient> findByIsDeletedIsFalse(Pageable pageable);

	VisiteClient findByDateAndIsDeletedIsFalse(Date date);
	
	List<VisiteClient> findByVenteIdAndIsDeletedIsFalse(Long id);
	
	List<VisiteClient> findByClientIdAndIsDeletedIsFalse(Long id);
}