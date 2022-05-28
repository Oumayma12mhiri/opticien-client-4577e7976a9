package tn.dksoft.opticien.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.EqualsAndHashCode.Include;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@Table(name = "t_solaire")
public class LunetteSolaire implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Include
	private Long id;

	private String ref;

	private String marque;

	private int quantite;

	private BigDecimal prixAchat;
	
	private BigDecimal prixVente;
	

	@Column(columnDefinition = "tinyint(1) default 0")
	private boolean isDeleted;

	@ManyToOne
	private Fournisseur fournisseur;
	
	@ManyToOne
	private Vente vente;
}