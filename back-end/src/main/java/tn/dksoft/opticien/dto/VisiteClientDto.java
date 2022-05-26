package tn.dksoft.opticien.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.time.LocalDateTime;

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
public class VisiteClientDto implements Serializable {
	private static final long serialVersionUID = 1L;

	private Long id;
	
	private LocalDateTime date;
	
	private BigDecimal montantrecu;
	
	private ClientDto clientDto;
	
	private VenteDto venteDto;

}
