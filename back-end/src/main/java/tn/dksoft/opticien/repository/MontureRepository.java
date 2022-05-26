package tn.dksoft.opticien.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.Monture;

@Repository
public interface MontureRepository extends JpaRepository<Monture, Long> {
    Monture findTopByOrderByIdDesc();
    Monture findByIdAndIsDeletedIsFalse(Long id);
    List<Monture> findByIsDeletedIsFalse();
    Page<Monture> findByIsDeletedIsFalse(Pageable pageable);
}
