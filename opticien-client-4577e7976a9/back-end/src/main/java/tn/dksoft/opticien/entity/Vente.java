package tn.dksoft.opticien.entity;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.EqualsAndHashCode.Include;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString(onlyExplicitlyIncluded = true)
@Table(name = "t_vente")
public class Vente implements Serializable {
	
	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Include
	private Long id;
	
	private LocalDate dateVente ; 
	
	private int quantite ; 
	
	private float remise ; 
	
	private float tva ; 
	
	private BigDecimal totalVente ; 
	
	@OneToMany(mappedBy = "vente")
	private List<VisiteClient> visiteclient;
	
	@OneToMany(mappedBy = "vente")
	private List<Lentille> lentille;
	
	@OneToMany(mappedBy = "vente")
	private List<Monture> monture;
	
	@OneToMany(mappedBy = "vente")
	private List<Verre> verre ;
	
	@OneToMany(mappedBy = "vente")
	private List<LunetteSolaire> lunetteSolaire ;
	
	@OneToMany(mappedBy = "vente")
	private List<Divers> divers ;
	
	@Column(columnDefinition = "tinyint(1) default 0")
	private boolean isDeleted;
	
	@ManyToOne
	private Client client ; 
	
}
