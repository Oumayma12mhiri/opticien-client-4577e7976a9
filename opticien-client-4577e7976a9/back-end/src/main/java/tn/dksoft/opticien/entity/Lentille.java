package tn.dksoft.opticien.entity;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;
import lombok.ToString.Include;

@Entity
@Getter
@Setter
@Table(name = "t_lentille")
@AllArgsConstructor
@NoArgsConstructor
@ToString
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
public class Lentille implements Serializable {
	private static final long serialVersionUID = 1L;
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Include
	private Long id;
	private String code;
	private String coloration;
	private String description;
	private String marque;
	private String matiere;
	private String photochromique;
	private float addInf;
	private float addSup;
	private float cylInf;
	private float cylSup;
	private float sphInf;
	private float sphSup;
	private float dia;
	private float indice;
	private double prixAchat;
	private double prixVente;

	@Column(columnDefinition = "tinyint(1) default 0")
	private boolean isDeleted;
	
	@ManyToOne
	private Fournisseur fournisseur;
	
	@ManyToOne
	private Vente vente;

}
