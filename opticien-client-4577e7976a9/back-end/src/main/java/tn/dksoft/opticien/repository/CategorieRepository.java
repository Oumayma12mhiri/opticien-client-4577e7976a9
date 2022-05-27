package tn.dksoft.opticien.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.Categorie;

@Repository
public interface CategorieRepository extends JpaRepository<Categorie, Long> {

	Categorie findTopByOrderByIdDesc();

	Categorie findByIdAndIsDeletedIsFalse(Long id);

	List<Categorie> findByIsDeletedIsFalse();
	
}
