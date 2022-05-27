package tn.dksoft.opticien.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.LunetteSolaire;

@Repository
public interface LunetteSolaireRepository extends JpaRepository<LunetteSolaire, Long> {

	Optional<LunetteSolaire> findByIdAndIsDeletedIsFalse(Long id);
	
	LunetteSolaire findByRefAndIsDeletedFalse(String ref);
	
	Page<LunetteSolaire> findByIsDeletedFalse(Pageable pageable);
	
	List<LunetteSolaire> findByIsDeletedIsFalse();
}
