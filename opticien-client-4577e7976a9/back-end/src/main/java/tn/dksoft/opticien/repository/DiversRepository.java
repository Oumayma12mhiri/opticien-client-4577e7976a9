package tn.dksoft.opticien.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.Divers;

@Repository
public interface DiversRepository extends JpaRepository<Divers, Long> {

	Optional<Divers> findByIdAndIsDeletedIsFalse(Long id);
	
	Divers findByNameAndIsDeletedFalse(String name);
	
	Page<Divers> findByIsDeletedFalse(Pageable pageable);
	
	List<Divers> findByIsDeletedIsFalse();
}
