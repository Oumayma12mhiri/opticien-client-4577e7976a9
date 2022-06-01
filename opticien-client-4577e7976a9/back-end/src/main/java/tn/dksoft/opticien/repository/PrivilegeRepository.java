package tn.dksoft.opticien.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import tn.dksoft.opticien.entity.Privilege;

public interface PrivilegeRepository extends JpaRepository<Privilege,Long> {
    @Query("SELECT p FROM Privilege p WHERE p.name = :name")
    public Privilege findByName(@Param("name") String name);
}
