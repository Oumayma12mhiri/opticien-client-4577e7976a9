package tn.dksoft.opticien.repository;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.NoRepositoryBean;
import org.springframework.transaction.annotation.Transactional;


@NoRepositoryBean
public interface GenericRepository<T, I extends Serializable> extends JpaRepository<T, I> {

    @Override
    @Transactional(readOnly = true)
    @Query("select e from #{#entityName} e where e.isDeleted = false")
    Page<T> findAll(Pageable pageable);

    @Override
    @Transactional(readOnly = true)
    @Query("select e from #{#entityName} e where e.isDeleted = false")
    List<T> findAll();

    @Transactional(readOnly = true)
    @Query("select e from #{#entityName} e where e.id in ?1 and e.isDeleted = false")
    Page<T> findAll(Iterable<I> ids, Pageable pageable);

    @Query("select e from #{#entityName} e where e.isDeleted = true")
    @Transactional(readOnly = true)
    List<T> findIsDeleted();

    @Override
    @Transactional(readOnly = true)
    @Query("select count(e) from #{#entityName} e where e.isDeleted = false")
    long count();

    @Query("update #{#entityName} e set e.isDeleted=true  where e.id = ?1 ")
    @Transactional
    @Modifying
    int delete(I id);

    @Query("update #{#entityName} e set e.isDeleted=true where e.id in ?1 and e.isDeleted=false")
    @Transactional
    @Modifying
    int delete(Iterable<? extends I> ids);

    @Query("update #{#entityName} e set e.isDeleted=true")
    @Transactional
    @Modifying
    void deleteAll();
    @Transactional(readOnly = true)
    @Query("select e from #{#entityName} e where e.id = ?1 and e.isDeleted = false")
    T findOne(I id);
    @Override
    @Transactional(readOnly = true)
    @Query("select e from #{#entityName} e where e.id = ?1 and e.isDeleted = false")
    Optional<T> findById(I id);
	 
}