package tn.dksoft.opticien.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.Lentille;

@Repository
public interface LentilleRepository extends JpaRepository<Lentille, Long>{

	Lentille findByIdAndIsDeletedIsFalse(Long id);

	List<Lentille> findByIsDeletedIsFalse();

	Page<Lentille> findByIsDeletedIsFalse(Pageable pageable);

	Lentille findByCodeAndIsDeletedFalse(String code);

	Lentille findByMarque(String marque);

}
