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
public class DiversDto implements Serializable {

	private static final long serialVersionUID = 1L;
	private Long id;
	private String name;
	private String reference;
	private BigDecimal prixAchat;
	private BigDecimal prixVente;
	private int quantite;
	private CategorieDto categorieDto;
	private VenteDto venteDto;
}
