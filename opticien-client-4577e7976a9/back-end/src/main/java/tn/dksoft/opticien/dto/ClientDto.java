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
public class ClientDto implements Serializable {
	private static final long serialVersionUID = 1L;
	private Long id;
	private String reference;
	private String cin;
	private String nomPrenom;
	private LocalDateTime dateNaissance;
	private int age;
	private String email;
	private String adresse;
	private String ville;
	private String pays;
	private String numAssureSocial;
	private String numTel1;
	private String numTel2;
	private BigDecimal chiffreAffaire;
	private BigDecimal solde;
	private String observations;
	private String matriculeFiscal;
	
}
