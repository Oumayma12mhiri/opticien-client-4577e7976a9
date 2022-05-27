package tn.dksoft.opticien.dto;

import java.io.Serializable;
import java.math.BigDecimal;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(onlyExplicitlyIncluded = true)
@ToString
public class LentilleDto implements Serializable {
	private static final long serialVersionUID = 1L;

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
	private BigDecimal prixAchat;
	private BigDecimal prixVente;
	private CategorieDto categorieDto;
	private VenteDto venteDto ; 

}
