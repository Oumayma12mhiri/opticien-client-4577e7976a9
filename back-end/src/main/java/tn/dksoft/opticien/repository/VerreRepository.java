package tn.dksoft.opticien.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.Verre;

@Repository
public interface VerreRepository extends JpaRepository<Verre, Long> {

	Optional<Verre> findByIdAndIsDeletedIsFalse(Long id);

	Verre findByCodeAndIsDeletedFalse(String code);

	Page<Verre> findByIsDeletedFalse(Pageable pageable);

	List<Verre> findByIsDeletedIsFalse();
}
