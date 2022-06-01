package tn.dksoft.opticien.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import tn.dksoft.opticien.entity.User;


public interface UserRepository extends JpaRepository<User,Long> {

     Optional<User> findByEmail(String email);
     Optional<User> findById(Long id);

}

