package tn.dksoft.opticien.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import tn.dksoft.opticien.entity.Fournisseur;

@Repository
public interface FournisseurRepository extends JpaRepository<Fournisseur, Long> {
	
    Page<Fournisseur> findByIsDeletedIsFalse(Pageable pageable);
    
    Fournisseur findByIdAndIsDeletedIsFalse(Long id);
    
    Fournisseur findByNameAndIsDeletedIsFalse(String name);
    
    Fournisseur findTopByOrderByIdDesc(); 
    
    List<Fournisseur> findByIsDeletedIsFalse();
    
    List<Fournisseur> findByCategorieIdAndIsDeletedIsFalse(Long id);
    
    List<Fournisseur> findByCategorieNameAndIsDeletedIsFalse(String name);
    
   
}
