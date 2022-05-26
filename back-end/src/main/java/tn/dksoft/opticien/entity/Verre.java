package tn.dksoft.opticien.entity;

import java.io.Serializable;
import java.math.BigDecimal;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
import tn.dksoft.opticien.enums.Vision;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
@Table(name = "t_verre")
public class Verre implements Serializable {

	private static final long serialVersionUID = 1L;

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Include
	private Long id;

	private String base;

	private String code;

	private String coloration;

	private String description;

	private String marque;

	private String matiere;

	private String photochromique;

	private float addInf;

	private float addSup;

	private float axe;

	private float cylInf;

	private float cylSup;

	private float sphInf;

	private float sphSup;

	private float dia;

	private float indice;

	private BigDecimal prixAchat;

	private BigDecimal prixVente;

	@Enumerated(EnumType.STRING)
	private Vision visionType;

	@Column(columnDefinition = "tinyint(1) default 0")
	private boolean isDeleted;

	@ManyToOne
	private Categorie categorie;

	@ManyToOne
	private Vente vente;

}
