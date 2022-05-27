package tn.dksoft.opticien.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDate;

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
public class VenteDto implements Serializable {

	private static final long serialVersionUID = 1L;

	private Long id;

	private LocalDate dateVente;

	private int quantite;

	private float remise;

	private float tva;

	private BigDecimal totalVente;
	
	private ClientDto client ; 
}
