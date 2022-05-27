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
import lombok.ToString;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@Table(name = "t_divers")
public class Divers implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Include
	private Long id;

	private String name;

	private String reference;

	private BigDecimal prixAchat;
	
	private BigDecimal prixVente;
	
	private int quantite;

	@Column(columnDefinition = "tinyint(1) default 0")
	private boolean isDeleted;

	@ManyToOne
	private Categorie categorie;

	@ManyToOne
	private Vente vente;
}
