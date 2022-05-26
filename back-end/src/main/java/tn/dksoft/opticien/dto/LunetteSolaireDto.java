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
public class LunetteSolaireDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private String ref;

	private String marque;

	private int quantite;

	private BigDecimal prixAchat;
	
	private BigDecimal prixVente;
	
	
	
	private CategorieDto categorieDto;

	private VenteDto venteDto;

}
